# VTEX Known Issues

This repository stores the Known Issues documentation published on [VTEX Help Center](https://help.vtex.com/known-issues). It is organized to support multilingual documentation and seamless integration with VTEX Help Center.

>⚠️ **Don't create any known issues directly in this repository.** Known Issues are created by the VTEX Product Support team and automatically synced here. For details on the publication flow and content guidelines, check the internal documentation: [Known Issues Integration (Google Docs)](https://docs.google.com/document/d/11Qy3cpSNZwyqv0fLhQb1LEw196rpMyuYMF0Zon_SIrU/edit).

## Repository structure

```
docs/
  en/known-issues/   # English Known Issue markdown files (original)
  es/known-issues/   # Spanish translations
  pt/known-issues/   # Portuguese translations
public/images/       # Images used in the README.md file
README.md            # This file
LICENSE              # License information
```

Each language folder under `docs/` contains Markdown files for known issues in that language, divided in subfolders by product team. English is the primary language, and Spanish and Portuguese are generated via automated translation using [DeepL API](https://www.deepl.com/en/products/api).
