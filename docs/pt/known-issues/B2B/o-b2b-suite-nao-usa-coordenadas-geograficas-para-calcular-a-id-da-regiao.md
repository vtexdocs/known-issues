---
title: 'O B2B Suite não usa coordenadas geográficas para calcular a Id da região'
id: 7ITcf4hiOD1k6XBIhaCclj
status: PUBLISHED
createdAt: 2024-06-24T21:48:19.921Z
updatedAt: 2024-10-16T17:52:27.085Z
publishedAt: 2024-10-16T17:52:27.085Z
firstPublishedAt: 2024-06-24T21:48:20.731Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-suite-dont-use-geocoordinates-to-calculate-region-id
locale: pt
kiStatus: Fixed
internalReference: 1055033
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


É possível usar taxas de remessa usando códigos postais ou coordenadas geográficas, mas as organizações B2B usam somente códigos postais para calcular IDs de região. Se uma conta tiver geolocalização (polígonos) registrada em suas taxas de envio, os produtos serão mostrados como indisponíveis na vitrine.

## Simulação



- Registre as taxas de envio com polígonos;
- Criar uma organização;
- Faça login na loja;
- Nenhum produto é mostrado

## Workaround


N/A




