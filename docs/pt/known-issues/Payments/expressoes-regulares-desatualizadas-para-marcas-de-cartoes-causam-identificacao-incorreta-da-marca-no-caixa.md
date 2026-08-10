---
title: 'Expressões regulares desatualizadas para marcas de cartões causam identificação incorreta da marca no caixa.'
slug: expressoes-regulares-desatualizadas-para-marcas-de-cartoes-causam-identificacao-incorreta-da-marca-no-caixa
status: PUBLISHED
createdAt: 2022-08-20T02:55:49.000Z
updatedAt: 2026-08-10T19:19:06.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: outdated-card-brand-regex-causes-brand-misidentification-at-checkout
locale: pt
kiStatus: Backlog
internalReference: 642136
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A seleção automática da bandeira do cartão no checkout (interface do usuário do cartão) é feita por meio de validação de expressões regulares, que descrevem intervalos de BINs aceitos. Por padrão, a primeira bandeira de cartão disponível permanece selecionada. Expressões regulares desatualizadas podem resultar na não identificação da bandeira de cartão esperada ou na sua identificação incorreta.

## Simulação

Pré-requisitos:

- Ter pelo menos uma regra de pagamento com cartão de crédito ou débito configurada

Passos:

1. Crie um carrinho em qualquer loja usando a interface de checkout nativa e prossiga para a etapa de pagamento.

2. Selecione a opção de cartão de crédito ou débito
3. Digite pelo menos 6 dígitos de um número de cartão da bandeira desejada que não esteja coberto pela expressão regular atual
4. Observe se a bandeira do cartão está:

- Não identificada: uma mensagem de aviso aparece, aconselhando a verificar o número do cartão. Além disso, a marca selecionada anteriormente permanece selecionada.
- Identificação incorreta: outra marca foi selecionada.

## Workaround

O usuário pode alterar a marca do cartão selecionada na finalização da compra, escolhendo a marca desejada antes de concluir o pedido.