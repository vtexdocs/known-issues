---
title: 'APP FBE Evento de compra CAPI não deduplicado no checkout sem interface (dependência de FBP/external_id no VTEX Checkout)'
slug: app-fbe-evento-de-compra-capi-nao-deduplicado-no-checkout-sem-interface-dependencia-de-fbpexternalid-no-vtex-checkout
status: PUBLISHED
createdAt: 2026-01-12T12:04:17.854Z
updatedAt: 2026-01-12T12:04:17.854Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: app-fbe-capi-purchase-event-not-deduplicated-in-headless-checkout-fbpexternalid-dependency-on-vtex-checkout
locale: pt
kiStatus: Backlog
internalReference: 1349091
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 Lojas headless que utilizam a Extensão de Negócios do Facebook (FBE) e a API de Conversões (CAPI) da VTEX enfrentam falhas na deduplicação de eventos de compra porque o Pixel e a CAPI enviam identificadores incompatíveis. O fluxo atual da FBE/CAPI depende do VTEX Checkout para fornecer o FBP (e external_id), que não está disponível em checkouts headless, levando o Meta a tratar o Pixel e a CAPI como usuários/eventos diferentes. Os comerciantes relatam compras inflacionadas quando a página de confirmação é recarregada e os IDs dos eventos divergem. Isso afeta implementações headless como shopaz e qualquer cenário em que a CAPI não possa receber o mesmo FBP/external_id usado pelo Pixel.
## Simulação


## Workaround

