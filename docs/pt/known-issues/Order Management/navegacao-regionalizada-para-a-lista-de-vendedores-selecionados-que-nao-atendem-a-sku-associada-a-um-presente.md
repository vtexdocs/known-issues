---
title: Navegação regionalizada para a lista de vendedores selecionados que não atendem à SKU associada a um presente.
slug: navegacao-regionalizada-para-a-lista-de-vendedores-selecionados-que-nao-atendem-a-sku-associada-a-um-presente
status: PUBLISHED
createdAt: 2025-10-16T20:30:43.535Z
updatedAt: 2025-10-16T20:30:43.535Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: regionalized-navigation-to-the-list-of-selected-sellers-that-do-not-fulfill-the-sku-associated-with-a-gift
locale: pt
kiStatus: Backlog
internalReference: 1167349
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Para a navegação regionalizada, nos casos em que há SKUs de presentes associados ao item básico que não têm disponibilidade nos mesmos vendedores que o presente, é possível que a heurística crie uma lista de vendedores que resulte na indisponibilidade do item básico no carrinho.
## Simulação



Em uma conta cuja navegação é baseada na região;

Crie uma promoção do tipo compre um e leve outro, esse brinde deve ser uma SKU e não deve ser estocado pelos mesmos vendedores que a SKU básica.

Agora, possivelmente, quando você validar a lista de vendedores eleitos, verá que eles não têm disponibilidade para o item básico
## Workaround


Para evitar esse cenário, tudo o que você precisa fazer é garantir que a SKU de presente esteja disponível nos mesmos vendedores que a SKU de base.



