---
title: 'O link “Alterar pedido” na página de finalização da compra/pedido concluído está direcionando para a página “minha conta” em vez de para a página do pedido'
slug: o-link-alterar-pedido-na-pagina-de-finalizacao-da-comprapedido-concluido-esta-direcionando-para-a-pagina-minha-conta-em-vez-de-para-a-pagina-do-pedido
status: PUBLISHED
createdAt: 2023-06-15T16:12:50.000Z
updatedAt: 2023-06-15T16:12:50.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: change-order-link-on-checkoutorderplaced-is-leading-to-myaccount-instead-of-the-order-page
locale: pt
kiStatus: Backlog
internalReference: 844893
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a conta tiver configurado a possibilidade de o cliente alterar o pedido por conta própria, o link para alterar o pedido aparecerá no modelo de checkout/orderPlaced.

No entanto, esse link não redireciona o cliente para a página de edição, mas sim para a página "minha conta", que aparece vazia.

## Simulação

Configure a opção Permitir que os clientes façam alterações nos pedidos em Admin -> configurações -> configurações de pedidos
 ![](https://vtexhelp.zendesk.com/attachments/token/GqrSJ7cBhZc844LR3kXH7WMlX/?name=image.png)

O comprador finaliza um pedido e vai para o checkout/orderPlaced

Verifique se o link não o redireciona para a área de edição do pedido.

## Workaround

1. O comprador deve clicar em Meus pedidos na seção myAccount;
2. Escolha novamente o pedido que deseja alterar;
3. Clique em alterar pedido.