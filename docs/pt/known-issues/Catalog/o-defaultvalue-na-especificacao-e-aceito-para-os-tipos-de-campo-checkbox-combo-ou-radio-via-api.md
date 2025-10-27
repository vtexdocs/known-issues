---
title: 'O DefaultValue na especificação é aceito para os tipos de campo CheckBox, Combo ou Radio via API'
slug: o-defaultvalue-na-especificacao-e-aceito-para-os-tipos-de-campo-checkbox-combo-ou-radio-via-api
status: PUBLISHED
createdAt: 2025-10-24T12:33:21.784Z
updatedAt: 2025-10-24T12:33:21.784Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: defaultvalue-on-specification-is-accepted-for-checkbox-combo-or-radio-field-types-via-api
locale: pt
kiStatus: Backlog
internalReference: 1313013
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O valor padrão (`DefaultValue`) na especificação é aceito para todos os tipos de especificação, exceto `Checkbox`, `Combo` ou `Radio` ao criar/editar uma especificação por meio do Admin, mas é aceito ao criar uma especificação por meio da API.
## Simulação



1. Execute a especificação API route Create com o campo `DefaultValue` preenchido e o campo `FieldTypeId` preenchido com os valores `5` (Combo), `6` (Radio), `7` (Checkbox).
2. O corpo da resposta mostrará o payload da nova especificação, com o campo `DefaultValue` preenchido
## Workaround


Como não é possível editar o campo DefaultValue por meio da API porque a propriedade [KI] DefaultValue não é atualizada na API de especificação, execute as etapas a seguir para alterar o valor do campo DefaultValue:

1. Em **Admin**, edite a especificação alterando o tipo de campo para `1` (Texto), deixando o campo `DefaultValue` vazio e salve as alterações.
2. Em seguida, edite a especificação novamente, alterando o tipo de campo anterior, e salve-a.

