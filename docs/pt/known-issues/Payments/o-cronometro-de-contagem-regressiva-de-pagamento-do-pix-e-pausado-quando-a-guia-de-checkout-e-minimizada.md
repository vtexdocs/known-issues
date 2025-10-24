---
title: 'O cronômetro de contagem regressiva de pagamento do PIX é pausado quando a guia de checkout é minimizada'
slug: o-cronometro-de-contagem-regressiva-de-pagamento-do-pix-e-pausado-quando-a-guia-de-checkout-e-minimizada
status: PUBLISHED
createdAt: 2025-10-15T17:18:20.696Z
updatedAt: 2025-10-15T17:18:20.696Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pix-payment-countdown-timer-pauses-when-checkout-tab-is-minimized
locale: pt
kiStatus: Backlog
internalReference: 1308205
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O cronômetro de contagem regressiva de pagamento do PIX no Checkout para de diminuir quando a guia do navegador é minimizada ou o usuário sai da página.

Os usuários veem o cronômetro congelar e só retomar quando retornam à guia.
## Simulação



- Pré-requisitos: Qualquer loja com o PIX ativado no Checkout
- Etapas:
  - Vá para o Checkout e selecione PIX como método de pagamento; gere o código QR.
  - Minimize a guia do navegador ou afaste-se dela por pelo menos 5 a 10 minutos.
  - Retorne à guia e observe que o cronômetro não fez a contagem regressiva enquanto a guia estava em segundo plano, retomando somente após a reativação.


## Workaround


Não há nenhuma solução alternativa disponível.



