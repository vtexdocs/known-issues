---
title: 'O produto está sendo devolvido como indisponível, mesmo havendo estoque em um vendedor de marca branca.'
slug: o-produto-esta-sendo-devolvido-como-indisponivel-mesmo-havendo-estoque-em-um-vendedor-de-marca-branca
status: PUBLISHED
createdAt: 2021-07-30T17:20:12.000Z
updatedAt: 2026-09-25T16:20:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-returning-as-unavailable-even-with-stock-in-a-whitelabel-seller
locale: pt
kiStatus: Fixed
internalReference: 404499
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para lojas que utilizam o CMS Legado (Portal) ou a API de Busca de Catálogo, se um produto estiver fora de estoque no marketplace e disponível apenas em um vendedor white label, e se o produto não estiver configurado como "mostrar fora de estoque", ele será considerado indisponível. A página de detalhes do produto (PDP) se comportará como uma página 404; além disso, ela não será retornada pela API.

Este cenário também afeta a PDP de lojas que utilizam o VTEX IO Store Framework, que são baseadas na API de Busca de Catálogo.

Isso não ocorre com a Busca Inteligente, que oferece suporte completo a este cenário ao usar a regionalização de busca.

## Simulação

- Registre o estoque apenas em uma conta de franquia.

- Desative a opção "Mostrar fora de estoque".

- A PDP deve se comportar como se o produto estivesse indisponível.

## Workaround

Ative a opção "Mostrar fora de estoque" na conta do marketplace ou utilize a Busca Inteligente.