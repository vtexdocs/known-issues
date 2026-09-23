---
title: 'A captura de solicitações não está registrando novos eventos ao usar armazenamentos legados.'
slug: a-captura-de-solicitacoes-nao-esta-registrando-novos-eventos-ao-usar-armazenamentos-legados
status: PUBLISHED
createdAt: 2022-06-24T00:37:40.000Z
updatedAt: 2026-09-23T18:00:42.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: request-capture-not-registering-new-events-when-using-legacy-stores
locale: pt
kiStatus: Backlog
internalReference: 604254
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, ao usar lojas VTEX no portal (lojas que não sejam VTEX IO), o aplicativo de captura de requisições não está registrando eventos especificamente para visitas à página do produto.

## Simulação

1. Usando uma loja VTEX no portal, acesse uma página de produto após fazer login.
2. Verifique se o aplicativo de captura de requisições está funcionando corretamente em sua loja (detalhes aqui: https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740#my-trigger-settings-are-correct-but-the-test-email-address-is-not-receiving-emails-what-must-be-checked)

3. Verifique a propriedade 'productVisitedTag' do documento relacionado em seu aplicativo de Master Datas; ela estará nula. Deveria estar preenchida com dados.

## Workaround

Essa usabilidade funciona para lojas VTEX IO.