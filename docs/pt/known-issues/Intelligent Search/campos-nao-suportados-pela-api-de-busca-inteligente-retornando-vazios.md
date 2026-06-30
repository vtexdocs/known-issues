---
title: 'Campos não suportados pela API de Busca Inteligente retornando vazios'
slug: campos-nao-suportados-pela-api-de-busca-inteligente-retornando-vazios
status: PUBLISHED
createdAt: 2024-05-14T00:02:59.000Z
updatedAt: 2026-06-29T18:14:06.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unsupported-fields-by-the-intelligent-search-api-returning-empty
locale: pt
kiStatus: Backlog
internalReference: 1032531
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API de Busca Inteligente é baseada principalmente na API de Busca do Catálogo legada por motivos de compatibilidade, mas nem todas as propriedades retornam as mesmas informações. Em alguns casos, o resultado é diferente ou vazio.

Algumas propriedades afetadas:

- ".items.attachments" (retorna vazio)
- ".items.isKit" (sempre retorna falso)
- ".items.kitItems" (retorna vazio)
- ".items.estimatedDateArrival" (retorna vazio)
- ".items.modalType" (retorna vazio)
- ".items.images.imageText" (retorna o mesmo que "imageLabel")

## Simulação

- Registre o valor para um campo afetado no módulo Catálogo
- Compare a resposta para o campo específico entre as APIs de Busca do Catálogo e Busca Inteligente

## Workaround

N/A