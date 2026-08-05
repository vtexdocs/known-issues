const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

console.log("Generating navigation...");

const navigation = {
  navbar: [
    {
      documentation: "tracks",
      name: {
        en: "Start here",
        es: "Comece aqui",
        pt: "Comece aqui",
      },
      slugPrefix: "docs/tracks",
      categories: [],
    },
    {
      documentation: "tutorials",
      name: {
        en: "Tutorials",
        es: "Tutoriales",
        pt: "Tutoriais",
      },
      slugPrefix: "docs/tutorials",
      categories: [],
    },
    {
      documentation: "announcements",
      name: {
        en: "News",
        es: "Anuncios",
        pt: "Comunicados",
      },
      slugPrefix: "announcements",
      categories: [],
    },
    {
      documentation: "faq",
      name: {
        en: "Frequently asked questions",
        es: "Preguntas frecuentes",
        pt: "Perguntas frequentes",
      },
      slugPrefix: "faq",
      categories: [],
    },
    {
      documentation: "known-issues",
      name: {
        en: "Known issues",
        es: "Problemas Conocidos",
        pt: "Problemas conhecidos",
      },
      slugPrefix: "known-issues",
      categories: [],
    },
    {
      documentation: "troubleshooting",
      name: {
        en: "Troubleshooting",
        es: "Troubleshooting",
        pt: "Troubleshooting",
      },
      slugPrefix: "troubleshooting",
      categories: [],
    },
  ],
};

// FUNÇÕES AUXILIARES
function normalizeSlug(slug) {
  return slug
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function listAllMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listAllMarkdownFiles(full));
    } else if (entry.isFile() && path.extname(entry.name) === ".md") {
      files.push(full);
    }
  }
  return files;
}

function safeExtractFrontmatter(content) {
  try {
    const { data } = matter(content);
    return {
      title: data.title || "",
      slugEN: data.slugEN || "",
      internalReference: data.internalReference || "",
    };
  } catch (err) {
    console.warn(`⚠️ Invalid YAML frontmatter: ${err.message}`);
    const fallback = {};
    const titleMatch = content.match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
    if (titleMatch) fallback.title = titleMatch[1].trim();
    const slugMatch = content.match(/^slugEN:\s*['"]?(.+?)['"]?\s*$/m);
    if (slugMatch) fallback.slugEN = slugMatch[1].trim();
    const intRefMatch = content.match(
      /^internalReference:\s*['"]?(\d+)['"]?\s*$/m
    );
    if (intRefMatch) fallback.internalReference = intRefMatch[1].trim();

    return {
      title: fallback.title || "",
      slugEN: fallback.slugEN || "",
      internalReference: fallback.internalReference || "",
    };
  }
}

//MONTA NAVIGATION DE KNOWN ISSUES COM BASE NA ESTRUTURA DE PASTAS

function getKnownIssues() {
  console.log("Getting known issues...");

  const enRoot = "docs/en/known-issues";
  const ptRoot = "docs/pt/known-issues";
  const esRoot = "docs/es/known-issues";

  // mapas por slugEN -> { title, slug, path }
  const buildLocaleMap = (rootDir) => {
    const map = {};
    if (!fs.existsSync(rootDir)) return map;
    const files = listAllMarkdownFiles(rootDir);
    for (const fullPath of files) {
      const content = fs.readFileSync(fullPath, "utf8");
      const { title, slugEN } = safeExtractFrontmatter(content);
      if (!slugEN) {
        console.warn(`⚠️ Known issue missing slugEN: ${fullPath}`);
        continue;
      }
      map[slugEN.trim().toLowerCase()] = {
        title: title || "",
        slug: path.basename(fullPath, ".md"),
        path: fullPath,
      };
    }
    return map;
  };

  const ptBySlugEN = buildLocaleMap(ptRoot);
  const esBySlugEN = buildLocaleMap(esRoot);

  // categorias = subpastas imediatas de enRoot
  if (!fs.existsSync(enRoot)) return [];

  const categoriesDirents = fs
    .readdirSync(enRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  const categories = [];

  for (const dirent of categoriesDirents) {
    const catName = dirent.name; // p.ex. "Admin"
    const catPath = path.join(enRoot, catName);

    // somente arquivos .md diretamente dentro da subpasta
    const files = fs
      .readdirSync(catPath, { withFileTypes: true })
      .filter((d) => d.isFile() && path.extname(d.name) === ".md")
      .map((d) => path.join(catPath, d.name));

    const children = [];

    for (const filePath of files) {
      const content = fs.readFileSync(filePath, "utf8");
      const { title, slugEN } = safeExtractFrontmatter(content);
      const enSlug = path.basename(filePath, ".md");

      if (!slugEN) {
        console.warn(
          `⚠️ Known issue missing slugEN (EN). ${filePath}`
        );
      }

      const slugKey = slugEN?.trim().toLowerCase();
      const ptMatch = slugKey ? ptBySlugEN[slugKey] : undefined;
      const esMatch = slugKey ? esBySlugEN[slugKey] : undefined;

      children.push({
        name: {
          en: title || enSlug,
          pt: ptMatch?.title || "",
          es: esMatch?.title || "",
        },
        slug: {
          en: enSlug,
          pt: ptMatch?.slug || "",
          es: esMatch?.slug || "",
        },
        origin: "",
        type: "markdown",
        children: [],
      });
    }

    // ordena por título EN (alfabético)
    children.sort((a, b) => (a.name.en || "").localeCompare(b.name.en || ""));

    categories.push({
      name: { en: catName, pt: catName, es: catName },
      slug: `known-issues/${normalizeSlug(catName)}`,
      origin: "",
      type: "category",
      children,
    });
  }

  // ordena categorias por nome
  categories.sort((a, b) => a.name.en.localeCompare(b.name.en));
  return categories;
}


navigation.navbar[4].categories = getKnownIssues();

fs.writeFile("navigation.json", JSON.stringify(navigation, null, 2), (err) => {
  if (err) {
    console.error("❌ Failed to write navigation.json:", err);
  } else {
    console.log("✅ navigation.json successfully written");
  }
});
