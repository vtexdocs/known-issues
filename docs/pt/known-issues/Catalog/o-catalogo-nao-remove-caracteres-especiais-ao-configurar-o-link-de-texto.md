---
title: 'O Catálogo não remove caracteres especiais ao configurar o link de texto'
slug: o-catalogo-nao-remove-caracteres-especiais-ao-configurar-o-link-de-texto
status: PUBLISHED
createdAt: 2023-11-22T16:19:37.000Z
updatedAt: 2026-01-28T15:08:04.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-does-not-remove-special-characters-when-setting-up-the-text-link
locale: pt
kiStatus: Backlog
internalReference: 940127
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Uma das etapas para criar um produto é inserir um slug para representar a URL da página do produto. Se a URL contiver algum caractere especial, ela se tornará inválida, o que pode causar problemas ao tentar acessar a página do produto.
Em outras palavras, o catálogo não remove caracteres especiais ao configurar o link de texto, como © ℗ ® ™

## Simulação

Crie um link de produto com um caractere especial, por exemplo, © ℗ ® ™. O catálogo não removerá os caracteres especiais inseridos, causando problemas na renderização da página do produto.

## Workaround

Evite usar caracteres especiais no slug (URL) do produto, mas se for encontrada uma URL com um caractere especial, edite-a manualmente para remover o caractere.