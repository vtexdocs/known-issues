---
title: 'A interface de usuário das promoções está exibindo informações incorretas sobre a moeda'
slug: a-interface-de-usuario-das-promocoes-esta-exibindo-informacoes-incorretas-sobre-a-moeda
status: PUBLISHED
createdAt: 2022-12-19T14:40:55.000Z
updatedAt: 2024-02-15T12:10:49.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-ui-loading-wrong-currency-information
locale: pt
kiStatus: Fixed
internalReference: 718908
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao abrir o módulo Promoções muito rapidamente e várias vezes seguidas, ocorre um comportamento incorreto na interface do usuário.

O campo “Restringir esta promoção aos produtos do vendedor” não carrega o placeholder correto, mas sim o placeholder “GLOBAL SELECT-A-SELLER...”

A informação da moeda é carregada como R$ (real)

Ao salvar a promoção, o valor final não é o esperado pelo cliente.

## Simulação

Não há uma maneira fácil de reproduzir esse cenário. Às vezes, ao abrir o módulo de promoções em diferentes abas muito rapidamente, o comportamento ocorre.
Verifique se o campo "Restringir esta promoção aos produtos do vendedor" está diferente para saber se você chegou ao cenário.

## Workaround

Feche a interface de usuário atual de promoções e abra uma nova onde o comportamento não esteja ocorrendo.