---
title: 'O primeiro ciclo de assinatura é ignorado'
slug: o-primeiro-ciclo-de-assinatura-e-ignorado
status: PUBLISHED
createdAt: 2022-02-21T14:31:13.000Z
updatedAt: 2024-02-05T14:10:17.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: first-subscription-cycle-is-skipped
locale: pt
kiStatus: Backlog
internalReference: 528556
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O sistema de assinaturas utiliza informações como a frequência de compra e a data do ciclo de assinatura para gerar um pedido de assinatura. No entanto, dependendo do fuso horário do consumidor e da hora em que o pedido é feito, o primeiro ciclo é ignorado, sendo gerado apenas no segundo mês.
Suponha que, em 9 de maio, às 23h, um cliente tenha criado uma assinatura mensal e definido a data do ciclo de assinatura para o dia 9 de cada mês, esperando que o primeiro pedido fosse feito em 9 de junho.
O sistema de gerenciamento de pedidos opera no fuso horário previamente definido na loja. Neste caso, consideraremos o GMT-5, horário de Chicago. No entanto, o sistema de assinaturas opera no fuso horário GMT 0. Isso significa que, embora a assinatura tenha sido criada às 23h, o sistema de assinaturas considera que ela foi criada 5 horas depois, portanto, em 10 de maio.
Nesse caso, o sistema leva em consideração a data de criação da assinatura, 10 de maio, para calcular o próximo ciclo de assinatura. Como a data do ciclo de assinatura em 9 de junho não atenderia à condição do período de 30 dias, totalizando 29 dias, o sistema define a próxima data de compra para julho. Portanto, o cliente acaba recebendo o produto após a data prevista.

## Simulação

Tenha um SKU configurado para assinatura, com frequência mensal e dia de compra;
Faça um pedido após as 23h, por exemplo
Verifique se o primeiro ciclo, que deveria ser gerado no mês seguinte, será pulado, sendo gerado apenas no segundo mês.

## Workaround

n/a