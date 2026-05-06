---
title: 'Na página “Pedido efetuado”, o DataLayer captura apenas as informações do primeiro pagamento da transação (transactionPaymentType)'
slug: na-pagina-pedido-efetuado-o-datalayer-captura-apenas-as-informacoes-do-primeiro-pagamento-da-transacao-transactionpaymenttype
status: PUBLISHED
createdAt: 2023-01-04T20:11:01.000Z
updatedAt: 2023-01-10T17:46:58.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: on-the-order-placed-page-the-datalayer-only-captures-the-information-of-the-first-payment-within-the-transaction-transactionpaymenttype
locale: pt
kiStatus: Fixed
internalReference: 727339
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a compra é concluída, o cliente é direcionado para a página denominada **Pedido Realizado**. Nessa página, temos um **evento de captura de solicitação** *(`RequestType:"orderPlaced"`) da nossa plataforma que captura alguns detalhes do pedido e serve para alimentar o **DataLayer** com essas informações.

O problema que temos neste momento é que, no objeto "**transactionPaymentType**", **no caso de pedidos com mais de um pagamento**, estamos exibindo apenas o primeiro, o que deixa as informações incompletas para quem utiliza esse tipo de dado.


*_Podemos ver esse evento (_`RequestType:"orderPlaced"`_) abrindo o inspetor do navegador, procurando a aba "**Rede**" e filtrando por "**eventos**"; é possível ver esse detalhe na seção **Payload**._

    *Headers*URL da solicitação: https://rc.vtex.com.br/api/eventsRequest Método: POST*Payload* Objeto com todos os detalhes

## Simulação

1. Conclua pedidos com mais de um pagamento
2. Ao chegar à página de confirmação do pedido (**Pedido Realizado**), abra o inspetor na guia **Rede** e valide o evento `RequestType:"orderPlaced"`
3. Nesses detalhes, localize o objeto transactionPaymentType. Lá você verá que apenas um elemento será exibido. O correto seria mostrar todos os detalhes relativos aos outros pagamentos

## Workaround

No momento, não temos uma solução alternativa para esse problema; no entanto, caso precise de mais detalhes da transação, com o ID é possível consultar mais informações por meio de nossas APIs.