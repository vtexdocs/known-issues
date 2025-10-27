---
title: 'O "Método de envio" (da Logística) na Automação de pedidos (pnp) está incorretamente vinculado a uma Categoria de produto quando ambos compartilham o mesmo ID'
slug: o-metodo-de-envio-da-logistica-na-automacao-de-pedidos-pnp-esta-incorretamente-vinculado-a-uma-categoria-de-produto-quando-ambos-compartilham-o-mesmo-id
status: PUBLISHED
createdAt: 2025-10-27T17:51:32.350Z
updatedAt: 2025-10-27T17:51:32.350Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: shipping-method-from-logistics-in-order-automation-pnp-is-incorrectly-linked-to-a-product-category-when-both-share-the-same-id
locale: pt
kiStatus: Backlog
internalReference: 1313989
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao configurar uma **automação de pedido** usando a condição **Método de envio**, o nome da política de envio selecionada é imediatamente substituído pelo nome de uma **Categoria de produto**. O valor de seleção que deveria exibir o nome do método de envio, em vez disso, mostra o nome da categoria que compartilha o mesmo ID.
O problema ocorre quando o **ID** de uma política de envio corresponde ao ID de uma categoria existente.
Usuários afetados: aqueles que criam automações em contas **Pick and Pack** nas quais os IDs de política de envio **Logistics** são valores numéricos que se sobrepõem aos IDs de categoria.
## Simulação



- **Pré-requisitos:**
  - Conta com **Pick and Pack** ativado.
  - Políticas de remessa **Logística** com IDs numéricos sobrepostos aos IDs de categoria existentes (por exemplo, ID 5 da política de remessa e ID 5 da categoria).
- Etapas:**
  - Abra as configurações de coleta e embalagem e crie ou edite uma **automação de pedido** usando "**Método de envio**" como condição.
  - Na lista, selecione uma política de envio (por exemplo, "Delivery Express Compras hasta 500" com ID 5).
  - Observe que, após a seleção, o rótulo exibido muda para o nome da categoria com o mesmo ID (por exemplo, "Carnes, pescados y mariscos")
## Workaround


Altere os **IDs** das políticas de envio para valores que não coincidam com os IDs de categoria existentes (por exemplo, use IDs alfanuméricos).
Isso elimina a colisão e permite que a automação vincule e opere corretamente por **Shipping Method**.



