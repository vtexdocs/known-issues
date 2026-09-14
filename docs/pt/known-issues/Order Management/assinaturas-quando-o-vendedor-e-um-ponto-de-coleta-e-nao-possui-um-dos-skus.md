---
title: 'Assinaturas quando o vendedor é um Ponto de Coleta e não possui um dos SKUs.'
slug: assinaturas-quando-o-vendedor-e-um-ponto-de-coleta-e-nao-possui-um-dos-skus
status: PUBLISHED
createdAt: 2022-09-27T22:17:38.000Z
updatedAt: 2026-09-14T22:36:24.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-when-the-seller-is-a-pickup-point-and-does-not-have-one-of-the-skus
locale: pt
kiStatus: Fixed
internalReference: 666701
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Foi identificado que, na solicitação de recorrência de uma assinatura com o seguinte cenário:
A assinatura possui mais de um produto/SKU distinto, um desses produtos/SKUs não possui estoque e o vendedor é um ponto de coleta, o seguinte erro será exibido: Nenhum item atendeu às condições de

## Simulação

para realizar o pedido.

Isso ocorre porque, em todas as solicitações de assinatura, uma simulação é realizada no Checkout e, nessa simulação, recebemos o erro de checkout informando que um dos produtos não pode ser entregue.

## **Simulação**
Para simular esse cenário, precisamos ter uma assinatura com mais de um SKU distinto, o vendedor deve ser um ponto de coleta e um dos SKUs não deve ter estoque disponível.

1- Quando a assinatura realiza a simulação para a recorrência, ela terá na resposta o status = AUSENTE para os SKUs;

2- Ao verificar a simulação no checkout, receberemos um erro informando que um dos SKUs não pode ser entregue e o pedido parcial não será realizado.

3- Também veremos que não é possível fazer o pedido de forma parcial.

## Workaround

Estamos encerrando este KI após uma reavaliação técnica — Orders AI Toolkit (ki-validation-agent, skill ki-validation v1.1.0), Fase 2!