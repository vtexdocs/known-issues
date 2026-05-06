---
title: 'Os usuários cadastrados (que não estão conectados) não conseguem concluir a compra ao alterar a opção de entrega para retirada na página de finalização da compra'
slug: os-usuarios-cadastrados-que-nao-estao-conectados-nao-conseguem-concluir-a-compra-ao-alterar-a-opcao-de-entrega-para-retirada-na-pagina-de-finalizacao-da-compra
status: PUBLISHED
createdAt: 2023-07-28T19:49:03.000Z
updatedAt: 2024-04-17T15:46:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: registered-users-not-logged-in-cannot-finish-checkout-when-changing-from-delivery-to-pickup-on-the-checkout-page
locale: pt
kiStatus: Fixed
internalReference: 870845
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário registrado (que não está conectado) inicia o processo de checkout com a opção de entrega “Entrega” e, posteriormente, altera para “Retirada”, ao tentar concluir o checkout, a mensagem de erro “O campo Número no anexo de envio é inválido” é exibida e não permite que o pedido seja concluído.

## Simulação

1. Acesse o checkout e adicione um novo item
2. Insira um CEP para calcular o frete e mantenha **Entrega** selecionado
3. Prossiga para o checkout e, quando solicitado a inserir um e-mail, use um de um usuário registrado
4. O checkout exibirá uma mensagem pop-up informando que seus dados pessoais foram recuperados de compras anteriores
5. Altere de Entrega para Retirada e tente concluir o pedido (a mensagem de erro será exibida)

## Workaround

N/A