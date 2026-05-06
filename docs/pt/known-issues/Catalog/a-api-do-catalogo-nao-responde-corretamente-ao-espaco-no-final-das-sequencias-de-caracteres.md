---
title: 'A API do Catálogo não responde corretamente ao espaço no final das sequências de caracteres'
slug: a-api-do-catalogo-nao-responde-corretamente-ao-espaco-no-final-das-sequencias-de-caracteres
status: PUBLISHED
createdAt: 2024-02-05T16:49:18.000Z
updatedAt: 2024-02-05T16:49:18.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-doesnt-respond-properly-to-space-at-the-end-of-strings
locale: pt
kiStatus: Backlog
internalReference: 977033
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar a coleção de APIs do catálogo, se um campo JSON do tipo string for enviado terminando com espaços (por exemplo, productName: "myProductName    "), as APIs do catálogo responderão com um código de erro 400 incorreto e um corpo de resposta vazio, deixando o usuário sem saber o que foi enviado de forma incorreta.

A resposta correta ainda deve ser um 400 (solicitação inválida), mas com um tratamento de erros informando qual campo está incorreto e por quê.

## Simulação

Para qualquer API de catálogo (https://developers.vtex.com/docs/api-reference/catalog-api), insira 1 ou mais espaços em branco no final de um campo de string, conforme exemplificado acima.

## Workaround

n/a

Esse tipo de string não deve ser aceito, mas o tratamento de erros deve ser ajustado.