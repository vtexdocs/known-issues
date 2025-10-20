---
title: O pedido não pode ser criado devido a um cartão de crédito inválido
slug: o-pedido-nao-pode-ser-criado-devido-a-um-cartao-de-credito-invalido
status: PUBLISHED
createdAt: 2025-10-20T13:44:24.932Z
updatedAt: 2025-10-20T13:44:24.932Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-cant-be-created-due-to-invalid-credit-card
locale: pt
kiStatus: Backlog
internalReference: 607742
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A criação de um pedido pode falhar com a exceção genérica "_A communication error with gateway has occurred and the payment data for transaction {id} not successfully received_" (Ocorreu um erro de comunicação com o gateway e os dados de pagamento da transação {id} não foram recebidos com sucesso), que tem diferentes causas principais. Uma delas estará relacionada à exceção interna "_As informações da conta solicitada não existem_", que pode ser vista no histórico de transações/pagamentos relacionado ao pedido incompleto.

As "informações da conta" mencionadas estão relacionadas a um cartão de crédito que não existe mais na plataforma. Embora esteja sendo oferecida no formulário de pedido (carrinho) como uma opção, ela não pode ser usada. Uma referência inválida permaneceu no perfil do cliente e/ou em seu formulário de pedido.

Um dos casos em que esse problema se manifesta é quando o usuário tem um cartão (`accountId`) associado ao seu perfil no Sistema de perfil, mas o mesmo cartão não existe no Gateway de pagamentos.
## Simulação


A causa raiz desse tipo de cenário é desconhecida, portanto, não há etapas claras para reproduzir o problema.
## Workaround


Quando relacionado a essa causa raiz específica, o cliente deve fechar a compra com outro cartão de crédito. O cartão de crédito inválido também pode ser removido manualmente do perfil do cliente usando a página "my-account" ou até mesmo do formulário de pedido específico (carrinho) enquanto estiver conectado, sempre pelo próprio cliente.


