---
title: 'Mercado Livre Erro ao reautenticar a integração'
slug: mercado-livre-erro-ao-reautenticar-a-integracao
status: PUBLISHED
createdAt: 2026-11-06T01:58:24.000Z
updatedAt: 2026-11-06T19:56:18.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-error-when-reauthenticating-the-integration
locale: pt
kiStatus: Backlog
internalReference: 1481892
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma loja reconfigura sua integração com o Mercado Livre e tenta autenticar a conta novamente, a autenticação não é concluída e o seguinte erro é exibido:
`500 - Erro interno do servidor. ID da operação: [xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]`
A integração permanece desconectada da conta do Mercado Livre.

## Simulação

1. Abra as configurações de integração com o Mercado Livre para uma loja que já foi autenticada anteriormente.

2. Reconfigure a integração e inicie uma nova autenticação.

3. A autenticação não é concluída e o erro acima é exibido.

## Workaround

Abra um chamado com o Suporte da VTEX informando o nome da conta e o tipo de anúncio (Clássico e/ou Premium) da integração. Após o Suporte realizar o ajuste, autentique-se novamente com o cache do navegador limpo.