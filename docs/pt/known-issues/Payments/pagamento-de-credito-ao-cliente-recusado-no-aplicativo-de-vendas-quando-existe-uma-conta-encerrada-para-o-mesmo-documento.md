---
title: 'Pagamento de crédito ao cliente recusado no aplicativo de vendas quando existe uma conta encerrada para o mesmo documento.'
slug: pagamento-de-credito-ao-cliente-recusado-no-aplicativo-de-vendas-quando-existe-uma-conta-encerrada-para-o-mesmo-documento
status: PUBLISHED
createdAt: 2026-09-23T23:29:06.000Z
updatedAt: 2026-09-23T23:29:06.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: customer-credit-payment-denied-in-sales-app-when-a-closed-account-exists-for-the-same-document
locale: pt
kiStatus: Backlog
internalReference: 1465432
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos realizados pelo **Aplicativo de Vendas** e pagos com **Crédito do Cliente** são recusados, mesmo que a conta de crédito do cliente esteja _Aberta_ e com crédito disponível. Isso ocorre quando o cliente possui uma conta _Aberta_ criada com um `documentType` personalizado (por exemplo, `{document}_CUSTOM`) e também uma conta _Fechada_ usando um `documentType` nativo (`{document}_CPF` ou `{document}_CNPJ`). O erro retornado na transação é: "Pagamento NEGADO pelo Crédito do Cliente VTEX. Motivo: A conta de crédito está fechada." A mesma compra é aprovada na interface de finalização de compra online.

## Simulação

1. Crie uma conta de Crédito do Cliente para um documento usando um `documentType` personalizado, deixando-a _Aberta_ e com crédito disponível;

2. Verifique se existe uma conta com o padrão de ID nativo (`{document}_CPF`) para o mesmo documento com o status _Fechado_;
3. Faça um pedido para este cliente através do **Aplicativo de Vendas, pagando com Crédito do Cliente**;
4. O pagamento é recusado com a mensagem "A conta de crédito está fechada.", embora a mesma compra fosse aprovada na interface de finalização de compra online.

## Workaround

Conclua o pedido através da interface de finalização de compra online. Para novos clientes, criar a conta de Crédito do Cliente com um `documentType` nativo evita esse cenário, mas isso não se aplica quando o ID nativo já está sendo usado por uma conta _Fechada_.