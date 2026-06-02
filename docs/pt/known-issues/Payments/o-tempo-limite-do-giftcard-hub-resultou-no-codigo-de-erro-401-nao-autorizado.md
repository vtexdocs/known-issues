---
title: 'O tempo limite do Giftcard Hub resultou no código de erro 401 Não autorizado'
slug: o-tempo-limite-do-giftcard-hub-resultou-no-codigo-de-erro-401-nao-autorizado
status: PUBLISHED
createdAt: 2026-06-03T00:09:25.000Z
updatedAt: 2026-06-03T00:09:25.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-hub-timeout-returned-as-401-unauthorized
locale: pt
kiStatus: Backlog
internalReference: 1416045
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma solicitação ao provedor do Giftcard Hub atinge o tempo limite, o Giftcard Hub retorna um erro `401 Não autorizado` ao solicitante, em vez de um código de status apropriado relacionado ao tempo limite. Essa resposta enganosa dificulta o diagnóstico correto da causa raiz das falhas de pagamento envolvendo cartões-presente.

Os erros observados no log de transações de interação estão nas seguintes rotas:

- `https://janus-payments-link.vtex.com.br//giftcardproviders/{provider}/giftcards/{giftcard}`
- `https://janus-payments-link.vtex.com.br//giftcardproviders`

## Simulação

Qualquer fluxo de checkout que utilize um cartão-presente via Giftcard Hub em que a resposta do provedor exceda 15 segundos.

**Passos para reproduzir:**

1. Adicione um produto ao carrinho e prossiga para o checkout.
2. Na etapa de pagamento, selecione um cartão-presente como forma de pagamento.
3. Conclua o checkout para que o Giftcard Hub envie uma solicitação ao provedor do cartão-presente.
4. Se o provedor não responder em **15 segundos**, o Giftcard Hub cancela a solicitação e retorna `401 Não autorizado` em vez de um erro relacionado a tempo limite.
5. Verifique os logs do Giftcard Hub em busca da seguinte mensagem para confirmar a causa raiz:

 A solicitação foi cancelada devido ao término do tempo de espera (HttpClient.Timeout) configurado de 15 segundos.

## Workaround

Não há solução alternativa disponível.