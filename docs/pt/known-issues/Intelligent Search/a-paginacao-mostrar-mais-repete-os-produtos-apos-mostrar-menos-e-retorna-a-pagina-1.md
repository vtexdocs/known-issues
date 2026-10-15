---
title: 'A paginação "Mostrar mais" repete os produtos após "Mostrar menos" e retorna à página 1.'
slug: a-paginacao-mostrar-mais-repete-os-produtos-apos-mostrar-menos-e-retorna-a-pagina-1
status: PUBLISHED
createdAt: 2026-10-16T00:06:11.000Z
updatedAt: 2026-10-16T00:06:35.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: show-more-pagination-repeats-products-after-show-less-back-to-page-1
locale: pt
kiStatus: Backlog
internalReference: 1474360
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em uma página de lista de produtos (PLP) com paginação "mostrar mais", o botão "Mostrar mais" pode repetir produtos já exibidos na tela. Isso ocorre quando o cliente abre uma página diferente da página 1 e clica em "Mostrar menos" até chegar à página 1. O próximo clique em "Mostrar mais" carrega a página 2 novamente, em vez da página seguinte à última página carregada.

## Simulação

1. Abra uma página de lista de produtos (PLP) com paginação "mostrar mais", em uma página diferente da 1 (por exemplo, `?page=4`).

2. Clique em "Mostrar menos" até chegar à página 1.
3. Em seguida, clique em "Mostrar mais" uma vez.

**Comportamento esperado:** A página seguinte à última página carregada é solicitada (página 5 neste exemplo). Nenhum produto é repetido.

**Comportamento real:** Os produtos da página 2 são carregados novamente e adicionados à lista.

## Workaround

N/A