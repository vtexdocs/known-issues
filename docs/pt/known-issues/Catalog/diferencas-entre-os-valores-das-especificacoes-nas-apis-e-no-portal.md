---
title: 'Diferenças entre os valores das especificações nas APIs e no portal'
slug: diferencas-entre-os-valores-das-especificacoes-nas-apis-e-no-portal
status: PUBLISHED
createdAt: 2023-06-29T20:11:34.000Z
updatedAt: 2023-07-06T13:41:03.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: differences-between-specification-value-on-apis-and-portal
locale: pt
kiStatus: Backlog
internalReference: 853184
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, essas duas APIs (“api/catalog” e “api/catalog_system” – valor da especificação GET) consultam tabelas diferentes no banco de dados do catálogo. Os valores deveriam ser os mesmos nas duas tabelas; no entanto, em casos que envolvam caracteres especiais, podem ocorrer divergências.

Isso também se reflete no Portal e nas PDPs, uma vez que as informações estão sendo geradas com base na tabela errada. Os caracteres especiais aparecem como “????” no front-end.

## Simulação

1. Tenha um valor de especificação com caracteres especiais;
2. Verifique os resultados nas APIs "api/catalog" e "api/catalog_system";
3. Verifique as informações do PDP;
4. Verifique se elas são iguais.

## Workaround

N/A