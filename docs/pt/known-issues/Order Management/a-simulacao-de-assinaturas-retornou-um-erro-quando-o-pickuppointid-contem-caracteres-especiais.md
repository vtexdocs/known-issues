---
title: 'A simulação de assinaturas retornou um erro quando o PickupPointID contém caracteres especiais'
slug: a-simulacao-de-assinaturas-retornou-um-erro-quando-o-pickuppointid-contem-caracteres-especiais
status: PUBLISHED
createdAt: 2025-11-14T19:26:13.108Z
updatedAt: 2025-11-14T19:26:13.108Z
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


Para realizar um pedido de assinatura ou atualizar uma assinatura, o sistema de assinatura realiza uma simulação e, nessa simulação, utiliza os dados de entrega retornados pelo sistema de logística e, se nesses dados houver um ponto de coleta cujo ID esteja sublinhado, o sistema de assinatura não conseguirá escolher o SLA corretamente, gerando o erro "Invalid AddressProvider:...." na simulação e, consequentemente, não gerará o pedido.
## Simulação


1- Crie um ponto de coleta cujo ID tenha um sublinhado
2- Faça uma solicitação de assinatura escolhendo o ponto de coleta criado na etapa 1.
3- Aguarde a execução do primeiro ciclo e veja que ele não é executado e que o painel de assinatura registra um erro dizendo que o endereço é inválido
## Workaround


Exclua o ponto de coleta cujo ID está sublinhado, crie um novo e atualize a assinatura para que ela use esse novo ponto de coleta.



