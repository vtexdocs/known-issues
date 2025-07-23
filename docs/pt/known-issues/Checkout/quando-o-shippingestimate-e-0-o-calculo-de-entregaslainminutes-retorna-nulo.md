---
title: 'Quando o shippingEstimate é = 0, o cálculo de entregaSlaInMinutes retorna nulo'
id: UGk2WYb3w3ZWH4pL07TNg
status: PUBLISHED
createdAt: 2022-02-01T13:04:45.737Z
updatedAt: 2024-02-16T20:24:38.902Z
publishedAt: 2024-02-16T20:24:38.902Z
firstPublishedAt: 2022-02-01T13:04:46.164Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: when-shippingestimate-is-0-the-deliveryslainminutes-calculation-returns-null
locale: pt
kiStatus: No Fix
internalReference: 514835
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No fluxo de checkout `deliverySlaInMinutes` delivery checkout juntamente com os detalhes da transação para o gateway, estes dados são calculados com base na `shippingEstimate` entregue pela logística, porém quando este valor entregue pela logística é = 0 a resposta de checkout para `deliverySlaInMinutes` é 0 zero, quando o correto seria 0; porém isto acaba afetando diretamente o fluxo desenvolvido pelo gateway para a anti-fraude;



## Simulação


1- Criar um pedido com Pick up
2- O "shippingEstimate" deve ser 0
3- Verifique os dados da transação e veja que o `deliverySlaInMinutes` é = nulo;




## Workaround


Não há uma solução direta, porém, se for possível evitar que a "estimativa de embarque" entregue por cálculo logístico, sendo igual a 0, é possível mitigar o cenário;

