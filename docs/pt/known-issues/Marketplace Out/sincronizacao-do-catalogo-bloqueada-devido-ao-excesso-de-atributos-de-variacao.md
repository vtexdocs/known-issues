---
title: 'Sincronização do catálogo bloqueada devido ao excesso de atributos de variação.'
slug: sincronizacao-do-catalogo-bloqueada-devido-ao-excesso-de-atributos-de-variacao
status: PUBLISHED
createdAt: 2025-05-16T18:03:05.000Z
updatedAt: 2026-06-23T15:53:19.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-catalog-sync-blocked-due-to-excess-variation-attributes
locale: pt
kiStatus: Backlog
internalReference: 1227978
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns SKUs não estão sendo sincronizados com o Shopee devido a itens do catálogo conterem mais de dois atributos de variação, o que não é suportado pelo marketplace. Isso impede que os produtos afetados sejam listados.

## Simulação

1. Acesse o painel Bridge da conta afetada.
2. Identifique os produtos que retornam o erro:

O erro é acionado durante o processo de sincronização do catálogo com o Shopee, especificamente quando a carga útil contém mais de dois atributos no objeto TierVariation.

1. Esse cenário é recorrente para lojas migradas cuja estrutura de catálogo pode ter mais de dois atributos de variação.

## Workaround

N/A