---
title: 'A quantidade de itens foi duplicada ao tentar editar orçamentos com itens divididos por promoções.'
slug: a-quantidade-de-itens-foi-duplicada-ao-tentar-editar-orcamentos-com-itens-divididos-por-promocoes
status: PUBLISHED
createdAt: 2026-07-06T22:36:55.000Z
updatedAt: 2026-07-07T16:07:47.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: item-quantity-duplicated-when-trying-to-edit-quotes-with-items-split-by-promotions
locale: pt
kiStatus: Backlog
internalReference: 1430768
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao editar a quantidade de itens em um orçamento que contém itens divididos por promoção, a quantidade adicionada para um dos itens será duplicada para o outro, não refletindo o cálculo feito pelo Checkout. Além disso, não é possível editar o primeiro dígito da quantidade do item (ele permanece como 1).

## Simulação

- Crie um novo orçamento usando um carrinho com itens divididos por promoção (ex.: compre 3, leve 1 grátis)
- Tente editar a quantidade de itens do orçamento; Na interface do usuário, duas coisas acontecerão:

- O primeiro dígito não será atualizado, permanecerá como 1.
- A quantidade adicionada para um dos itens divididos por promoção será duplicada para o outro item (ex.: adicionar 12 para o item com preço normal e a interface do usuário replicará 12 para o item gratuito).

- Ao salvar o orçamento e usá-lo, a quantidade total será adicionada ao formulário de pedido e a promoção será calculada conforme o esperado (ex.: se 12 unidades foram adicionadas para cada item, 24 unidades do item serão adicionadas ao formulário de pedido; então, 18 unidades serão cobradas integralmente e 6 serão adicionadas gratuitamente, conforme a regra da promoção "compre 3 e leve 1").

## Workaround

Não atualize as quantidades de itens em orçamentos com itens divididos por promoção; crie novos orçamentos a partir do carrinho.

-