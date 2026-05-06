---
title: 'O produto aparece como indisponível mesmo havendo estoque em um vendedor de marca branca'
slug: o-produto-aparece-como-indisponivel-mesmo-havendo-estoque-em-um-vendedor-de-marca-branca
status: PUBLISHED
createdAt: 2021-07-30T17:20:12.000Z
updatedAt: 2025-11-26T23:42:16.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-returning-as-unavailable-even-with-stock-in-a-whitelabel-seller
locale: pt
kiStatus: No Fix
internalReference: 404499
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para lojas que utilizam o CMS Legado (Portal) ou a API de Pesquisa de Catálogo, se um produto estiver em falta no marketplace e disponível apenas em um vendedor de marca branca, e se o produto não estiver configurado como “mostrar em falta”, ele será considerado indisponível. A página de detalhes do produto (PDP) exibirá uma página de erro 404; além disso, ela não será retornada pela API.

Esse cenário também afeta a PDP para lojas que utilizam o VTEX IO Store Framework, que se baseiam na API de Pesquisa de Catálogo.

Isso não ocorre com a Pesquisa Inteligente, que oferece suporte completo para esse cenário ao utilizar a regionalização da pesquisa.

## Simulação

- Registre o estoque apenas em uma conta de franquia.
- Desative a opção “Mostrar fora de estoque”.
- A PDP deve se comportar como se o produto estivesse indisponível.

## Workaround

Ative a opção “Mostrar fora de estoque” na conta do marketplace.