---
title: 'Facebook O erro “Revise as permissões da sua conta no Facebook” requer suporte para remover a autenticação de integração.'
slug: facebook-o-erro-revise-as-permissoes-da-sua-conta-no-facebook-requer-suporte-para-remover-a-autenticacao-de-integracao
status: PUBLISHED
createdAt: 2026-11-06T15:09:21.000Z
updatedAt: 2026-11-06T15:09:21.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: facebook-review-your-account-permission-on-facebook-error-requires-support-to-remove-the-integration-authentication
locale: pt
kiStatus: Backlog
internalReference: 1481964
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O erro “Revise as permissões da sua conta no Facebook” ocorre quando há um problema de autenticação com o Facebook. Em alguns casos, os SKUs também exibem este erro:

{"error":{"message":"(#200) Erro de permissões","type":"OAuthException","code":200,

Para corrigir, a autenticação da integração precisa ser removida, o aplicativo precisa ser desativado na Extensão de Negócios do Facebook (FBE) e o vendedor precisa refazer todo o processo de autenticação. O lojista não pode remover a autenticação por conta própria, portanto, um ticket de suporte é sempre necessário. Cada vez que o processo de autenticação é refeito, um novo catálogo é criado.

## Simulação

1. A integração retorna o erro “Revise as permissões da sua conta no Facebook”.

2. Em alguns casos, os SKUs exibem o erro `(#200) Erro de permissões` (`OAuthException`, código 200).

3. O lojista não pode remover a autenticação da integração por conta própria para refazer o processo.

![](https://vtexhelp.zendesk.com/guide-media/01HAZA5D67F68Z4C39ZF16BKEM)

![](https://vtexhelp.zendesk.com/guide-media/01HA5FQR9ZBH3ZE8SD7AC4MQYV)

## Workaround

1. Abra um chamado com o Suporte da VTEX para remover a autenticação da integração.

2. Desative o aplicativo na Extensão de Negócios do Facebook (FBE).

3. Refaça o processo de autenticação.