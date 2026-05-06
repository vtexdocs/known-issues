---
title: 'Não é possível criar o pedido devido a um cartão de crédito inválido'
slug: nao-e-possivel-criar-o-pedido-devido-a-um-cartao-de-credito-invalido
status: PUBLISHED
createdAt: 2022-06-29T21:38:33.000Z
updatedAt: 2025-10-20T16:43:41.000Z
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

A criação de um pedido pode falhar com a exceção genérica "_Ocorreu um erro de comunicação com o gateway e os dados de pagamento da transação {id} não foram recebidos com sucesso_", que pode ter diferentes causas. Uma delas está relacionada à exceção interna "_As informações da conta solicitadas não existem_", que pode ser verificada no histórico de transações/pagamentos associado ao pedido incompleto.

As mencionadas “informações da conta” estão relacionadas a um cartão de crédito que não existe mais na plataforma. Embora esteja sendo oferecido no formulário de pedido (carrinho) como uma opção, ele não pode ser utilizado. Uma referência inválida permaneceu no perfil do cliente e/ou em seu formulário de pedido.

Uma das situações em que esse problema se manifesta é quando o usuário tem um cartão (`accountId`) associado ao seu perfil no Sistema de Perfis, mas o mesmo cartão não existe no Gateway de Pagamentos.

## Simulação

A causa raiz para esse tipo de cenário é desconhecida, portanto, não há etapas claras para reproduzir o problema.

## Workaround

Quando relacionado a essa causa específica, o cliente deve concluir a compra com outro cartão de crédito. O cartão de crédito inválido também pode ser removido manualmente do perfil do cliente usando a página “minha conta”, ou mesmo do formulário de pedido específico (carrinho) enquanto estiver conectado, sempre pelo próprio cliente.