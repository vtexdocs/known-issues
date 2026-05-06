---
title: 'A simulação de assinaturas retornou um erro quando o PickupPointID contém caracteres especiais'
slug: a-simulacao-de-assinaturas-retornou-um-erro-quando-o-pickuppointid-contem-caracteres-especiais
status: PUBLISHED
createdAt: 2023-09-19T17:31:32.000Z
updatedAt: 2023-09-19T17:31:32.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-simulation-returned-error-when-pickuppointid-contains-special-characters
locale: pt
kiStatus: Backlog
internalReference: 903332
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para criar um pedido de assinatura ou atualizar uma assinatura, o sistema de assinaturas realiza uma

## Simulação

e, nessa simulação, utiliza os dados de entrega fornecidos pelo sistema de logística; se, entre esses dados, houver um ponto de retirada cujo ID esteja sublinhado, o sistema de assinaturas não conseguirá selecionar o SLA corretamente, gerando assim o erro “Invalid AddressProvider:....” na simulação e, consequentemente, não criará o pedido.


## **Simulação**
1- Crie um ponto de retirada cujo ID tenha um sublinhado
2- Faça uma solicitação de assinatura escolhendo o ponto de retirada criado na etapa 1.
3- Aguarde a execução do primeiro ciclo e observe que ele não é executado e que o painel de assinatura registra um erro informando que o endereço é inválido.

## Workaround

Exclua o ponto de retirada cujo ID está sublinhado, crie um novo e atualize a assinatura para que ela utilize esse novo ponto de retirada.