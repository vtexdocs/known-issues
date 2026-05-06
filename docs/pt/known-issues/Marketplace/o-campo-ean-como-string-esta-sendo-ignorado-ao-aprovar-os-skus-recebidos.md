---
title: 'O campo EAN como string está sendo ignorado ao aprovar os SKUs recebidos'
slug: o-campo-ean-como-string-esta-sendo-ignorado-ao-aprovar-os-skus-recebidos
status: PUBLISHED
createdAt: 2023-09-11T16:36:51.000Z
updatedAt: 2023-09-11T16:36:51.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: ean-field-as-string-being-ignored-when-approved-on-received-skus
locale: pt
kiStatus: Backlog
internalReference: 897301
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O vendedor envia o SKU com todos os campos declarados neste artigo (https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-) para que o marketplace o aprove no módulo “SKUs Recebidos”.

O campo ean está declarado como tipo string no artigo acima. No entanto, apesar de aparecer na interface do usuário do Received Skus, ele está sendo ignorado pelo sistema backend do matcher e também pelo módulo de catálogo, o que significa que o SKU está sendo criado com esse campo vazio.

## Simulação

1. Envie um SKU para o marketplace com o campo ean definido como string: `"ean": "123456"`
2. Aprove o SKU como um novo produto no módulo Received Skus do marketplace;
3. Verifique se, no catálogo, este campo está definido como vazio.

## Workaround

**Enquanto esse problema não for corrigido e o sistema não estiver funcionando de acordo com nossa documentação**, o formato que está funcionando atualmente é enviar o campo ean como uma matriz:
"ean": ["123456"]
Outra maneira é definir esse campo manualmente no catálogo assim que o SKU for aprovado.