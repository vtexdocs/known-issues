---
title: 'Cálculo da faturação de pedidos com base no valor da nota fiscal de entrada na validação da nota fiscal de saída'
slug: calculo-da-faturacao-de-pedidos-com-base-no-valor-da-nota-fiscal-de-entrada-na-validacao-da-nota-fiscal-de-saida
status: PUBLISHED
createdAt: 2023-11-06T11:39:07.000Z
updatedAt: 2023-11-09T20:47:40.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-invoicing-calculation-using-input-invoice-value-in-output-invoice-validation
locale: pt
kiStatus: Fixed
internalReference: 930491
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Durante o processo de envio de faturas, o usuário pode emitir faturas de saída e de entrada; no entanto, se forem criadas duas faturas parciais em um pedido — uma de saída e outra de entrada —, o sistema soma esses valores para validar se o pedido pode receber uma nova fatura, tornando impossível que pedidos cujo item tenha sido faturado e posteriormente devolvido não tenham seu valor total faturado.

Isso ocorre porque a API de Pedidos atualmente realiza uma validação de valor para determinar se deve permitir que uma nova fatura de saída seja emitida para o pedido, mas o cálculo considera a soma de todas as faturas, independentemente do tipo (entrada ou saída), fazendo com que o sistema entenda que não há mais valor a ser faturado.

## Simulação

1- Crie um pedido com duas unidades do mesmo SKU
2- Fature apenas uma dessas unidades
3- Agora, crie uma nova fatura de entrada para a unidade faturada na etapa anterior.
4- Agora, tente faturar a unidade restante do pedido.
5- Nesse momento, você receberá uma mensagem genérica na interface do usuário indicando que não é possível faturar o item.

## Workaround

Não há solução alternativa disponível.