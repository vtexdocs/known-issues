---
title: 'Inconsistência na quantidade de itens com opções de montagem no carrinho'
slug: inconsistencia-na-quantidade-de-itens-com-opcoes-de-montagem-no-carrinho
status: PUBLISHED
createdAt: 2021-08-20T22:59:31.000Z
updatedAt: 2024-08-02T11:02:59.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: inconsistency-in-the-quantity-of-items-with-assembly-options-in-the-cart
locale: pt
kiStatus: Fixed
internalReference: 417098
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em produtos com personalização por meio de opções de montagem, um item pai possui componentes, chamados de itens filhos. Esse é o caso, por exemplo, de um refrigerador (item pai) com garantia estendida (item filho). Há uma inconsistência na plataforma ao adicionar ao carrinho a quantidade total disponível em estoque do item pai e a mesma quantidade de um de seus itens filhos. Suponha que um cliente esteja comprando um produto com personalização de opções de montagem. Quando ele adiciona ao carrinho a quantidade total disponível em estoque do item pai e a mesma quantidade de um item filho associado a ele, a quantidade final do item filho será diferente da quantidade final do item pai. O carrinho terá mais uma unidade do item filho em relação ao item pai.

## Simulação

- Acesse a loja;
- Adicione um produto que tenha um item filho ao carrinho (selecione a quantidade total disponível em estoque);
- Selecione o item filho do produto, na mesma quantidade;
- Verifique os itens no carrinho.

Observe que o carrinho contém mais uma unidade do item filho em relação ao item pai.

## Workaround

N/A