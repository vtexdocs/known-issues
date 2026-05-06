---
title: 'A página de redirecionamento não abre para pagamentos com cartão de crédito ao usar o Modo de Defesa/Alerta: suspeito'
slug: a-pagina-de-redirecionamento-nao-abre-para-pagamentos-com-cartao-de-credito-ao-usar-o-modo-de-defesaalerta-suspeito
status: PUBLISHED
createdAt: 2023-08-25T17:21:58.000Z
updatedAt: 2026-03-03T21:25:24.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: redirect-page-does-not-open-for-credit-card-payments-when-using-defense-modetrigger-suspicious
locale: pt
kiStatus: Backlog
internalReference: 887866
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A página de redirecionamento não abre. Quando o comprador conclui a compra, ele não é redirecionado para a página do parceiro de pagamento para finalizar as etapas de pagamento. O comprador é levado para a tela de finalização do pedido sem, na verdade, efetuar qualquer pagamento.

Esse comportamento ocorre no Modo de Defesa e quando “Acionador: suspeito” está ativado.

## Simulação

1. Selecione/configure um método de pagamento que utilize redirecionamento e seja um cartão de crédito;
2. Ative o modo de defesa ou certifique-se de que “Acionador: suspeito” esteja ativado;
3. Vá para o checkout e conclua uma compra utilizando o método de pagamento que possui processo de redirecionamento, por exemplo, 3DS;
4. Observe que a forma de pagamento não é exibida na tela e o usuário é direcionado diretamente para a página de finalização do pedido

## Workaround

- Desative o modo de defesa;
- Para "Acionador: suspeito", abra um ticket com o suporte ao produto.