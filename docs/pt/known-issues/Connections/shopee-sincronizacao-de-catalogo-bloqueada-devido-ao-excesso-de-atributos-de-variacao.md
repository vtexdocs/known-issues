---
title: Shopee Sincronização de catálogo bloqueada devido ao excesso de atributos de variação
slug: shopee-sincronizacao-de-catalogo-bloqueada-devido-ao-excesso-de-atributos-de-variacao
status: PUBLISHED
createdAt: 2025-08-12T18:21:04.343Z
updatedAt: 2025-08-12T18:21:04.343Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-catalog-sync-blocked-due-to-excess-variation-attributes
locale: pt
kiStatus: Backlog
internalReference: 1227978
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Algumas SKUs não estão sendo sincronizadas com o Shopee devido a itens de catálogo que contêm mais de dois atributos de variação, o que não é suportado pelo marketplace. Isso está impedindo que os produtos afetados sejam listados.
## Simulação



1. Acesse o painel do Bridge para a conta afetada
2. Identifique os produtos que retornam o erro:
O erro é acionado durante o processo de sincronização do catálogo com o Shopee, especificamente quando a carga útil contém mais de dois atributos no objeto TierVariation.

1. Esse cenário é recorrente para lojas migradas cuja estrutura de catálogo pode ter mais de dois atributos de variaçã
## Workaround


N/A


