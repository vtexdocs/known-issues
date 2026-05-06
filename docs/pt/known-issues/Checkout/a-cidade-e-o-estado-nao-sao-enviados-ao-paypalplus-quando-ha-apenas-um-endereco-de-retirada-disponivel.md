---
title: 'A cidade e o estado não são enviados ao PayPalPlus quando há apenas um endereço de retirada disponível'
slug: a-cidade-e-o-estado-nao-sao-enviados-ao-paypalplus-quando-ha-apenas-um-endereco-de-retirada-disponivel
status: PUBLISHED
createdAt: 2023-06-01T13:46:54.000Z
updatedAt: 2023-09-12T13:10:35.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: city-and-state-are-not-sent-to-paypalplus-when-there-is-only-pickup-address-available
locale: pt
kiStatus: Fixed
internalReference: 836025
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os campos “cidade” e “estado” não são enviados ao PayPalPlus quando o comprador adiciona apenas um endereço de retirada ao carrinho, fazendo com que a forma de pagamento não seja carregada.

## Simulação

- Adicione produtos ao carrinho;
- Vá para a etapa de envio;
- Selecione “Retirar na loja”, insira o CEP e selecione uma loja;
- Clique em “Ir para o pagamento” e selecione o cartão de crédito no PayPalPlus.

## Workaround

Selecione “Entrega”, insira o CEP e altere para “Retirar na loja”.