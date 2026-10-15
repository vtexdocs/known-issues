---
title: 'Não foi possível criar o pedido devido a um cartão de crédito inválido.'
slug: nao-foi-possivel-criar-o-pedido-devido-a-um-cartao-de-credito-invalido
status: PUBLISHED
createdAt: 2022-06-29T21:38:33.000Z
updatedAt: 2026-10-15T20:51:25.000Z
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

A criação de um pedido pode falhar com a exceção genérica "_Ocorreu um erro de comunicação com o gateway e os dados de pagamento para a transação {id} não foram recebidos com sucesso_", que possui diferentes causas. Uma delas está relacionada à exceção interna "_As informações da conta solicitadas não existem_", que pode ser visualizada no histórico de transações/pagamentos do pedido incompleto.

As "informações da conta" mencionadas referem-se a um cartão de crédito que não existe mais na plataforma. Embora seja oferecido como opção no formulário de pedido (carrinho), ele não pode ser utilizado. Uma referência inválida permaneceu no perfil do cliente e/ou em seu formulário de pedido.

Um dos casos em que esse problema se manifesta é quando o usuário possui um cartão (`accountId`) associado ao seu perfil no Sistema de Perfis, mas o mesmo cartão não existe no Gateway de Pagamentos.

## Simulação

A causa raiz desse tipo de cenário é desconhecida, portanto, não há etapas claras para reproduzir o problema.

## Workaround

Quando relacionado a essa causa raiz específica, o cliente deve finalizar a compra com outro cartão de crédito. O cartão de crédito inválido também pode ser removido manualmente do perfil do cliente usando a página "Minha conta" ou até mesmo no formulário de pedido específico (carrinho) enquanto estiver logado, sempre pelo próprio cliente.