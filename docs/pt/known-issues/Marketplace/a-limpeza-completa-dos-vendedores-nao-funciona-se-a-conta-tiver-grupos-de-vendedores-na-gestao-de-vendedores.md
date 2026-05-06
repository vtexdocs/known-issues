---
title: 'A limpeza completa dos vendedores não funciona se a conta tiver grupos de vendedores na Gestão de Vendedores'
slug: a-limpeza-completa-dos-vendedores-nao-funciona-se-a-conta-tiver-grupos-de-vendedores-na-gestao-de-vendedores
status: PUBLISHED
createdAt: 2023-10-19T19:54:20.000Z
updatedAt: 2023-10-19T19:54:20.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: fullcleanup-on-sellers-does-not-work-if-the-account-has-seller-groups-on-seller-management
locale: pt
kiStatus: Backlog
internalReference: 922541
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na área de Gerenciamento de Vendedores, o marketplace pode agrupar seus vendedores conforme desejar e gerenciá-los na guia de gerenciamento de grupos.

No entanto, se desejar excluir todos os dados dos vendedores na área de limpeza total, o processo falhará se houver grupos criados.

## Simulação

1. Crie um grupo de vendedores na Gestão de Vendedores;
2. Execute uma limpeza total dos vendedores;
3. Verifique se aparece um erro.

## Workaround

Primeiro, exclua os grupos de vendedores manualmente na gestão de vendedores e, em seguida, tente executar a limpeza total dos vendedores novamente.