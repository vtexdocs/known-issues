---
title: 'O item em promoção não será exibido como dividido após a adição dos dados de preferências do cliente'
slug: o-item-em-promocao-nao-sera-exibido-como-dividido-apos-a-adicao-dos-dados-de-preferencias-do-cliente
status: PUBLISHED
createdAt: 2023-06-12T20:08:54.000Z
updatedAt: 2024-01-31T15:20:21.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: promotion-item-will-not-show-splitted-after-adding-client-preferences-data
locale: pt
kiStatus: Backlog
internalReference: 842575
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao aplicar uma promoção do tipo “Mais por menos”, o comportamento esperado é separar o item promocional dos itens normais; no entanto, os itens serão agrupados após a adição dos dados de preferências do cliente.

Dependendo do momento em que os dados de preferências do cliente são adicionados, isso gera uma experiência inconsistente para o cliente no carrinho, ou o pedido é criado com os itens agrupados.

## Simulação

- Adicione itens ao carrinho para obter um item gratuito ou com desconto (os itens promocionais e regulares serão separados);
- Adicione os dados de preferências do cliente ao formulário de pedido (os itens serão agrupados).

## Workaround

N/A