---
title: 'A função de preenchimento automático de itens não é exibida na marca branca do vendedor (alterar pedido)'
slug: a-funcao-de-preenchimento-automatico-de-itens-nao-e-exibida-na-marca-branca-do-vendedor-alterar-pedido
status: PUBLISHED
createdAt: 2021-03-25T18:55:18.000Z
updatedAt: 2025-06-30T22:53:38.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: item-autocomplete-not-shown-in-seller-whitelabel-change-order
locale: pt
kiStatus: Backlog
internalReference: 348841
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao alterar um item (alteração de pedido) a partir de uma conta de vendedor WhiteLabel ou do Portal do Vendedor, o preenchimento automático não exibe o item conforme o esperado.

## Simulação

- Acesse um pedido a partir de uma conta de vendedor WhiteLabel e solicite a opção de alteração do item:
- Ao preencher o nome do SKU na pesquisa, ele não é exibido pelo preenchimento automático:
- O mesmo se aplica a vendedores WhiteLabel com a nova versão do admin-orders:

## Workaround

Você pode fazer a alteração do item por meio da API Register Change on Order.