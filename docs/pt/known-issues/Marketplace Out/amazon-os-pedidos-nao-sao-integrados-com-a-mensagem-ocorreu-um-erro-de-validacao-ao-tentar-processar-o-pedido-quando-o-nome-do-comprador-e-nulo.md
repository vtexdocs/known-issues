---
title: 'Amazon Os pedidos não são integrados com a mensagem "Ocorreu um erro de validação ao tentar processar o pedido" quando o nome do comprador é nulo.'
slug: amazon-os-pedidos-nao-sao-integrados-com-a-mensagem-ocorreu-um-erro-de-validacao-ao-tentar-processar-o-pedido-quando-o-nome-do-comprador-e-nulo
status: PUBLISHED
createdAt: 2026-10-02T20:01:28.000Z
updatedAt: 2026-10-02T20:01:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-orders-fail-to-integrate-with-a-validation-error-occurred-while-trying-to-process-the-order-when-the-buyer-name-is-null
locale: pt
kiStatus: Backlog
internalReference: 1469662
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns pedidos da Amazon não são integrados ao VTEX OMS e continuam retornando o erro "Ocorreu um erro de validação ao tentar processar o pedido", mesmo após o reprocessamento. Isso acontece quando a Amazon retorna o pedido sem o nome do comprador (`buyerInfo.buyerName` vazio ou nulo).

## Simulação

1. Crie um pedido na Amazon onde `buyerName=null` na API de Pedidos, enquanto `shippingAddress.name` está preenchido (por exemplo, "JOHN").

2. Aguarde a integração importar o pedido ou reprocesse-o manualmente.

3. O pedido não é criado no OMS e os logs de integração/Bridge mostram "Ocorreu um erro de validação ao tentar processar o pedido".

![](https://vtexhelp.zendesk.com/attachments/token/P3lwvoTdnUiv2dvjyPdLnR50H/?name=image.png)

## Workaround

Não existe solução alternativa no lado da VTEX para integrar o pedido afetado.