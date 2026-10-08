---
title: 'O link canônico mantém a barra invertida final da URL solicitada nas rotas declaradas no arquivo routes.json do tema.'
slug: o-link-canonico-mantem-a-barra-invertida-final-da-url-solicitada-nas-rotas-declaradas-no-arquivo-routesjson-do-tema
status: PUBLISHED
createdAt: 2026-10-08T22:08:50.000Z
updatedAt: 2026-10-08T22:08:50.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: canonical-link-keeps-the-trailing-slash-of-the-requested-url-on-routes-declared-in-the-themes-routesjson
locale: pt
kiStatus: Backlog
internalReference: 1472057
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em páginas do Store Framework cuja rota é declarada apenas no arquivo `store/routes.json` do tema (sem `canonical` definido), o atributo `<link rel="canonical">` é construído a partir da URL solicitada, incluindo a barra final. Tanto `/my-page` quanto `/my-page/` retornam 200 e cada um se declara como canônico:

- `/my-page` retorna `<link rel="canonical" href="https://store.example.com/my-page"/>`
- `/my-page/` retorna `<link rel="canonical" href="https://store.example.com/my-page/"/>`

Portanto, o atributo canônico não consolida as duas URLs, e os mecanismos de busca podem indexá-las como duplicadas. Páginas de produtos e categorias não são afetadas (seu atributo canônico é normalizado sem a barra).

## Simulação

1. Em um tema do Store Framework, declare uma rota em store/routes.json sem um `canonical`, por exemplo:

2. Publique e abra a página.

3. Solicite a página sem e com uma barra no final e leia a tag canonical: `curl -s https://<store>/my-page | grep -o '<link[^>]*rel="canonical"[^>]*>'` e `curl -s https://<store>/my-page/ | grep -o '<link[^>]*rel="canonical"[^>]*>'`.

4. Esperado: o mesmo canonical para ambos (sem a barra no final). Obtido: cada resposta ecoa o caminho solicitado.

## Workaround

Declare a rota no arquivo `store/routes.json` do tema com uma barra invertida opcional no final de `path` e um `canonical` explícito sem ela:

"store.custom#my-page": { "path": "/my-page(/)", "canonical": "/my-page" }

Com isso, tanto `/my-page` quanto `/my-page/` retornam 200 e declaram `https://store.example.com/my-page` como canônico. Definir `canonical` como igual a `path` é rejeitado pela compilação, por isso a barra invertida opcional (`(/)`) é necessária.