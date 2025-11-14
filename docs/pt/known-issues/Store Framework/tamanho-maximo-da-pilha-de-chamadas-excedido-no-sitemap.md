---
title: 'Tamanho máximo da pilha de chamadas excedido no Sitemap'
slug: tamanho-maximo-da-pilha-de-chamadas-excedido-no-sitemap
status: PUBLISHED
createdAt: 2025-11-14T19:40:38.660Z
updatedAt: 2025-11-14T19:40:38.660Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: maximum-call-stack-size-exceeded-on-sitemap
locale: pt
kiStatus: Fixed
internalReference: 1132723
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O processo atual de geração do mapa do site da loja não consegue lidar eficientemente com lojas com catálogos muito grandes nas lojas do Store Framework. Ao lidar com um grande volume de produtos, a geração é interrompida devido ao tamanho do arquivo principal no mapa do site.
## Simulação



- Abra o site com um grande catálogo (por exemplo, milhões de produtos e categorias).
- Acione o processo de geração do mapa do site e tente acessar no domínio myvtex.
- Observe que o mapa do site retorna "Tamanho máximo da pilha de chamadas excedido
## Workaround


N/A



