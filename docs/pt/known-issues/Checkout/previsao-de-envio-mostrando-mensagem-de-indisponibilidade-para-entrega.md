---
title: 'Previsão de envio mostrando mensagem de indisponibilidade para entrega'
slug: previsao-de-envio-mostrando-mensagem-de-indisponibilidade-para-entrega
status: PUBLISHED
createdAt: 2025-10-16T20:33:38.727Z
updatedAt: 2025-10-16T20:33:38.727Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-showing-unavailability-message-for-delivery
locale: pt
kiStatus: Backlog
internalReference: 1170877
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A visualização do frete no carrinho não considera o SLA selecionado, mesmo que a API de checkout esteja correta. Ela mostra a mensagem "Frete não disponível para sua localização".

 ![](https://vtexhelp.zendesk.com/attachments/token/oKGiw0BqXd83twkctR84fT0Wc/?name=image.png)

Esse comportamento foi observado em países específicos, como Argentina e Colômbia, mas não se limita a esses 2 países.
## Simulação



- Adicione um item ao carrinho;
- Digite um código postal com o SLA disponível
## Workaround


N/A - Atualizar a página mostrará o SLA.


