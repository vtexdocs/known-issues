---
title: 'A interface do usuário exibe incorretamente o valor do frete quando as encomendas são divididas para entrega programada'
slug: a-interface-do-usuario-exibe-incorretamente-o-valor-do-frete-quando-as-encomendas-sao-divididas-para-entrega-programada
status: PUBLISHED
createdAt: 2023-03-20T14:59:34.000Z
updatedAt: 2023-03-20T14:59:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-wrongly-displaying-the-shipping-price-when-packages-are-split-for-scheduled-delivery
locale: pt
kiStatus: Backlog
internalReference: 774155
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando há uma divisão de pacotes para entrega programada, o preço de um dos pacotes pode estar incorreto na interface do usuário, mas os preços estarão corretos na API.

## Simulação

- Adicione 2 itens com entrega agendada e de transportadoras diferentes;
- Selecione os horários de entrega para ambas as encomendas;
- Você verá que a soma exibida na interface do usuário não corresponde ao totalizador de frete.

## Workaround

N/A