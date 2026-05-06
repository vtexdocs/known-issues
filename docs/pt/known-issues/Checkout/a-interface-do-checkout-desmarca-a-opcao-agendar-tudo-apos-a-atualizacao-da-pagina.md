---
title: 'A interface do checkout desmarca a opção "Agendar tudo" após a atualização da página'
slug: a-interface-do-checkout-desmarca-a-opcao-agendar-tudo-apos-a-atualizacao-da-pagina
status: PUBLISHED
createdAt: 2023-04-04T21:08:40.000Z
updatedAt: 2023-04-06T17:51:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-unselects-the-schedule-all-toggle-after-refreshing-the-page
locale: pt
kiStatus: Backlog
internalReference: 784693
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface de checkout desmarca a opção “Agendar tudo” na etapa de envio após a atualização da página, mesmo que a API ainda esteja selecionada. Esse comportamento não causa nenhum impacto; o pedido terá a entrega agendada selecionada.

## Simulação

- Adicione um item com entrega agendada e entrega regular;
- Selecione a entrega agendada, preencha todas as informações e vá para Pagamentos;
- Volte para Envio e atualize a página;
- A opção “Agendar tudo” estará desmarcada.

## Workaround

N/A