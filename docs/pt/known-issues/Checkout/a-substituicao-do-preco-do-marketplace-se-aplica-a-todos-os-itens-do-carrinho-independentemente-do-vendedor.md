---
title: 'A substituição do preço do Marketplace se aplica a todos os itens do carrinho, independentemente do vendedor'
slug: a-substituicao-do-preco-do-marketplace-se-aplica-a-todos-os-itens-do-carrinho-independentemente-do-vendedor
status: PUBLISHED
createdAt: 2026-05-29T23:56:28.000Z
updatedAt: 2026-05-29T23:56:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-price-override-applies-to-all-cart-items-regardless-of-the-seller
locale: pt
kiStatus: Backlog
internalReference: 1414414
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um marketplace configura a substituição do preço do vendedor, qualquer carrinho que inclua pelo menos um item de um vendedor cujo preço foi substituído acaba aplicando o preço do marketplace a todos os itens do carrinho, incluindo itens de vendedores cujos preços não deveriam ser substituídos.

O sintoma visível são carrinhos com vendedores misturados exibindo o preço do marketplace para vendedores não substituídos. Isso afeta carrinhos de checkout em qualquer canal de vendas onde `sellersToOverride` esteja habilitado e o carrinho contenha itens tanto de vendedores substituídos quanto de vendedores não substituídos.

## Simulação

**Pré-requisitos: **
O marketplace deve ter sellersToOverride configurado em Preços para pelo menos um vendedor.

**Etapas:**


- Crie um carrinho contendo um item do vendedor X, cujo preço deve ser substituído.
- Adicione um item do vendedor Y ao mesmo carrinho.

Como resultado, o item do vendedor Y recebe incorretamente o preço do marketplace em vez de seu próprio preço.

## Workaround

O marketplace pode registrar os preços dos produtos dos vendedores em sua própria conta.