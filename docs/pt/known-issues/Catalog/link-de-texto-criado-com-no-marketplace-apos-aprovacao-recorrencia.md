---
title: 'Link de texto criado com " " no Marketplace após aprovação - Recorrência'
slug: link-de-texto-criado-com-no-marketplace-apos-aprovacao-recorrencia
status: PUBLISHED
createdAt: 2023-04-24T19:35:34.000Z
updatedAt: 2023-07-13T15:25:27.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: textlink-created-with-on-marketplace-upon-approvals-reoccurence
locale: pt
kiStatus: Fixed
internalReference: 795900
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, ao aprovar um produto em um Marketplace, no aplicativo "SKUs recebidos", a solicitação não consegue inserir os dados no catálogo e, ao tentar novamente, os campos de link de texto substituem os caracteres "-" por " ", alterando o comportamento esperado.

O SKU é reenviado para aprovação no módulo SKUs Recebidos, mas não é possível aprová-lo novamente, pois já haverá um produto com um link de texto igual.

## Simulação

1) Geralmente ocorre um erro genérico de SKUs recebidos ao tentar aprovar (isso não acontece em todos os casos).

2) Um produto será criado no catálogo do marketplace com os links de texto incorretos.

3) O produto em questão continuará aparecendo nos SKUs recebidos, aguardando aprovação.

4) Tentar aprová-lo novamente exibirá um erro.

## Workaround

Atualizar manualmente ou via API os links de texto do produto nesse cenário.