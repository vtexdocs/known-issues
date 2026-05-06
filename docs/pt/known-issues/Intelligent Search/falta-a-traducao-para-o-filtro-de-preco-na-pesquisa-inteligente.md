---
title: 'Falta a tradução para o filtro de preço na Pesquisa Inteligente'
slug: falta-a-traducao-para-o-filtro-de-preco-na-pesquisa-inteligente
status: PUBLISHED
createdAt: 2024-01-31T21:32:48.000Z
updatedAt: 2024-01-31T21:32:48.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: missing-translation-for-the-price-facetfilter-at-intelligent-search
locale: pt
kiStatus: Backlog
internalReference: 974840
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A Pesquisa Inteligente não aplica a tradução ao nome do filtro/faceta “preço” para idiomas adicionais quando consultada via API REST.

O idioma principal ainda retorna a string esperada de acordo com sua configuração interna, mas qualquer outro idioma retornará “Preço” como valor fixo.

## Simulação

Em uma loja com vários idiomas, defina as traduções para o contexto da Pesquisa Inteligente por meio do serviço de mensagens para os idiomas secundários e faça a consulta usando a API de facetas. Os valores para “Preço” não serão considerados, enquanto isso funciona para qualquer outro rótulo, como as categorias e a marca.

## Workaround

N/A