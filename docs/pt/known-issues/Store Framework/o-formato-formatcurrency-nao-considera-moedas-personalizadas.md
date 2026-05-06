---
title: 'O formato "formatCurrency" não considera moedas personalizadas'
slug: o-formato-formatcurrency-nao-considera-moedas-personalizadas
status: PUBLISHED
createdAt: 2023-01-19T14:20:51.000Z
updatedAt: 2023-01-19T15:45:41.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: intl-not-considering-custom-currency-in-formatcurrency
locale: pt
kiStatus: Backlog
internalReference: 736695
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em algumas configurações regionais da loja, o formatador Intl exibe o símbolo de moeda incorreto, sem levar em conta aquele passado pela cultura


https://github.com/vtex-apps/format-currency/blob/master/react/formatCurrency.ts

## Simulação

Defina uma localidade de política comercial e uma moeda personalizada e chame a função formatCurrency do format-currency; ela não será exibida corretamente porque o intl usa a localidade para definir (isso ocorre com mais frequência em dispositivos móveis)

## Workaround

É possível implementar componentes de preço personalizados com um símbolo de moeda diferente.