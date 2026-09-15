---
title: 'Na Argentina, a etapa de finalização da compra relacionada ao envio não avança para a etapa de pagamento.'
slug: na-argentina-a-etapa-de-finalizacao-da-compra-relacionada-ao-envio-nao-avanca-para-a-etapa-de-pagamento
status: PUBLISHED
createdAt: 2021-01-15T18:35:41.000Z
updatedAt: 2026-09-15T17:30:56.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-shipping-step-does-not-advance-to-payments-step-in-argentina
locale: pt
kiStatus: Backlog
internalReference: 324775
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas argentinas, alguns CEPs fazem com que o comprador fique preso na etapa de envio: o endereço é preenchido automaticamente com o CEP, mas a `cidade` resultante não é um valor aceito nas regras do formulário `vtex.address-form` da Argentina, portanto, o endereço nunca é validado. Como o campo `cidade` é preenchido automaticamente, ele não é exibido no formulário; o comprador não tem nenhum campo inválido para corrigir e nenhuma mensagem de erro é mostrada.

Portanto, o endereço nunca é salvo e a etapa silenciosamente se recusa a avançar. Apenas os CEPs cuja cidade resulta em um único valor são afetados — os CEPs que resultam em várias cidades exibem uma seleção de `Cidade` e funcionam normalmente.

## Simulação

- Em uma loja argentina, adicione qualquer SKU disponível ao carrinho e conclua a etapa de perfil.

- Na etapa de envio, insira um CEP afetado (por exemplo, `1687`).

- Preencha a rua e o número. Nenhum campo de cidade é exibido.

- Clique em "Ir para o pagamento" — nada acontece; Nenhum erro é exibido.
- Controle: repita com um código postal não afetado (por exemplo, `1688`) — a etapa avança normalmente.

- Para confirmar um caso relatado: verifique se `shippingData.address.street` ainda é `null` no formulário de pedido após o comprador preenchê-lo.

## Workaround

Não há solução alternativa disponível.