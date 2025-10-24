---
title: 'Os caracteres de tubulação não são reconhecidos corretamente na nova interface do usuário do catálogo.'
slug: os-caracteres-de-tubulacao-nao-sao-reconhecidos-corretamente-na-nova-interface-do-usuario-do-catalogo
status: PUBLISHED
createdAt: 2025-10-16T20:35:42.153Z
updatedAt: 2025-10-16T20:35:42.153Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pipe-characters-are-not-properly-recognized-in-the-new-catalog-ui
locale: pt
kiStatus: Backlog
internalReference: 1177654
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao usar a nova interface do usuário do catálogo, que pode ser acessada em https://mystore.myvtex.com/admin/catalog-products, se o usuário tiver um produto e um SKU com o mesmo nome e/ou parte do mesmo nome, esses dados não serão exibidos se o usuário adicionar um pipe ( | ) ao nome do SKU: qualquer coisa após esse caractere fica oculta.
## Simulação



1. Crie um produto com o nome "Teste para o problema conhecido"
2. Crie uma SKU com o nome "| this is a Test for the known issue" (Este é um teste para o problema conhecido)
3. O nome da SKU, quando exibido na nova interface do usuário do catálogo, será mostrado como "| this is a
## Workaround


-



