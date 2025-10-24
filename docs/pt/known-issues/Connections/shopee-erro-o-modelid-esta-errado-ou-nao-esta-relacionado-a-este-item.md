---
title: 'Shopee Erro "O model_id está errado ou não está relacionado a este item"'
slug: shopee-erro-o-modelid-esta-errado-ou-nao-esta-relacionado-a-este-item
status: PUBLISHED
createdAt: 2025-09-15T17:42:12.139Z
updatedAt: 2025-09-15T17:42:12.139Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-error-the-modelid-is-wrong-or-not-related-to-this-item
locale: pt
kiStatus: Backlog
internalReference: 1292317
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Depois de migrar algumas contas da versão anterior do conector Shopee, os usuários encontram o seguinte erro ao tentar atualizar SKUs:
`O model_id está incorreto ou não corresponde a este item`
## Simulação


Isso depende da vinculação produto-modelo do Shopee e pode não ser reproduzível de forma consistente. Quando ocorre, o padrão observado é:

- Em Bridge > Products for Shopee, as atualizações de uma ou mais SKUs falham com a mensagem "The model_id is wrong or not related to this item".
- As SKUs afetadas são variações em um produto (item) da Shopee em que a plataforma espera uma vinculação específica de model_id; as SKUs da VTEX mapeadas para esse item da Shopee acionam o erro durante as tentativas de atualização
## Workaround


N/A



