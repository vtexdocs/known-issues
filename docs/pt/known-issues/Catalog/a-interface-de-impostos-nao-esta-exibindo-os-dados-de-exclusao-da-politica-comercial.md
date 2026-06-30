---
title: 'A interface de impostos não está exibindo os dados de exclusão da política comercial.'
slug: a-interface-de-impostos-nao-esta-exibindo-os-dados-de-exclusao-da-politica-comercial
status: PUBLISHED
createdAt: 2026-06-30T23:38:38.000Z
updatedAt: 2026-06-30T23:38:57.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: tax-ui-not-showing-trade-policy-exclusion-data
locale: pt
kiStatus: Backlog
internalReference: 1428072
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, na interface de Impostos (https://account.myvtex.com/admin/rnb#/tax/taxID), ao tentar usar a configuração "Diferente de" na barra lateral que lista as políticas comerciais, ao selecionar uma opção e salvar, os dados não são exibidos após acessar a tela novamente (embora sejam salvos corretamente em segundo plano).

## Simulação

1 - Acesse a interface de impostos

2 - Defina as configurações de impostos e, na barra lateral, tente configurar uma exclusão de política comercial selecionando, manualmente, pelo menos uma

![](https://vtexhelp.zendesk.com/attachments/token/yNG7lWZQ0QBkYuhjKN89WuflA/?name=image.png)

3 - Salve e acesse a interface novamente - nada será exibido

4 - Apesar disso, se você verificar os mesmos dados via API GET, as informações serão salvas corretamente em segundo plano https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-

## Workaround

Manipule os dados somente via API