---
title: 'APP FBE Evento de compra CAPI não deduplicado no checkout sem interface (dependência de FBP/external_id no VTEX Checkout)'
slug: app-fbe-evento-de-compra-capi-nao-deduplicado-no-checkout-sem-interface-dependencia-de-fbpexternalid-no-vtex-checkout
status: PUBLISHED
createdAt: 2026-03-24T16:39:30.808Z
updatedAt: 2026-03-24T16:39:30.808Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: app-fbe-capi-purchase-event-not-deduplicated-in-headless-checkout-fbpexternalid-dependency-on-vtex-checkout
locale: pt
kiStatus: Fixed
internalReference: 1349091
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As lojas headless que utilizam a Facebook Business Extension (FBE) e a Conversions API (CAPI) da VTEX enfrentam falhas na deduplicação de eventos de compra, pois o Pixel e a CAPI enviam identificadores incompatíveis. O fluxo atual do FBE/CAPI depende do VTEX Checkout para fornecer o FBP (e o external_id), que não está disponível em checkouts headless, levando a Meta a tratar o Pixel e a CAPI como usuários/eventos diferentes. Os comerciantes relatam compras inflacionadas quando a página de confirmação é recarregada e os IDs de evento divergem. Isso afeta implementações headless como o shopaz e qualquer cenário em que a CAPI não possa receber o mesmo FBP/external_id usado pelo Pixel.

## Simulação

1) Conclua uma compra de teste e capture o que o Pixel envia em comparação com o que o CAPI envia (event_name, event_id, timestamp, identificadores de usuário: fbp/external_id). Observe que o Pixel não envia external_id e o CAPI usa um fbp diferente do cookie do navegador, ou o CAPI não consegue acessar o cookie do navegador de forma alguma. O Meta não consegue associar os dois eventos ao mesmo usuário/sessão, prejudicando a deduplicação.

2) Recarregue a página de confirmação do pedido (F5). O Pixel é acionado novamente; se o GTM gerar um novo ID de evento aleatório e não houver um transaction_id usado de forma consistente, o Meta contabiliza uma nova compra, inflacionando os resultados e o ROAS.

3) Compare com a referência do VTEX Checkout: no VTEX Checkout, o event_id para Compra mapeia para o orderId antes do “-01”, e o CAPI recebe o mesmo eventId que o Pixel para outros eventos, além do FBP quando disponível, permitindo a deduplicação. No headless, esse mapeamento/propagação do FBP está ausente, reproduzindo o problema.

## Workaround

N/A