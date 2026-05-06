---
title: 'A interface de configurações não atualiza o "prazo de validade" das cotações'
slug: a-interface-de-configuracoes-nao-atualiza-o-prazo-de-validade-das-cotacoes
status: PUBLISHED
createdAt: 2023-08-07T19:42:08.000Z
updatedAt: 2024-09-27T13:22:28.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: settings-ui-doesnt-update-expiration-period-of-quotes
locale: pt
kiStatus: Fixed
internalReference: 876576
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface de usuário das configurações de Cotações B2B não atualiza o valor do prazo de validade; ele permanece sempre em 30.

## Simulação

- Acesse a página de configurações de Cotações B2B e altere o "prazo de validade".
- Atualize a página; nenhuma alteração é aplicada.

## Workaround

- Acesse o GraphQL IDE e selecione vtex.b2b-quotes-graphql;
- Use a consulta abaixo para obter a data de validade:

 { getAppSettings{ adminSetup { cartLifeSpan } }}

- Envie uma mutação para atualizar a data de validade para um valor diferente:

 mutation SaveAppSettings($input: AppSettingsInput!) { saveAppSettings(input: $input) { adminSetup { cartLifeSpan } }}{ "input": { "cartLifeSpan": }}