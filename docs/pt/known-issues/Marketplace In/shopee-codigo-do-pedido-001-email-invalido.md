---
title: 'Shopee Código do pedido: 001 / E-mail inválido'
slug: shopee-codigo-do-pedido-001-email-invalido
status: PUBLISHED
createdAt: 2026-06-24T16:41:04.000Z
updatedAt: 2026-06-24T16:41:04.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: shopee-order-code-001-invalid-email
locale: pt
kiStatus: Backlog
internalReference: 1425788
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os pedidos da Shopee não são criados no VTEX/OMS com o erro `código: 001 / E-mail inválido` quando o `buyerUsername` do comprador contém caracteres que geram um endereço de e-mail inválido de acordo com a RFC. Como a Shopee não fornece o e-mail real do comprador, o conector Shopee do VTEX constrói um sinteticamente usando o padrão `{buyerUsername}@email.com`.

## Simulação

- O conector Shopee recebe o pedido.
- O OMS rejeita a criação do pedido com o erro `código: 001 / E-mail inválido`.

- O pedido aparece no Bridge com um erro e não pode ser importado para o VTEX.

- Reprocessar o pedido no VTEX não resolve o problema; o mesmo e-mail inválido é enviado novamente.

## Workaround

Não há solução alternativa disponível para o lojista. O pedido não pode ser importado para o VTEX enquanto o `buyerUsername` gerar um e-mail inválido de acordo com a RFC. Entrar em contato com a Shopee para alterar o nome de usuário do comprador não é uma opção viável. A Shopee não possui um mecanismo para atualizar esse campo em um pedido já existente. É necessária uma investigação técnica.