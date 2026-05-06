---
title: 'Os produtos com variações de SKU aprovadas em "SKUs recebidos" estão sendo criados com SKUs duplicados no Catálogo.'
slug: os-produtos-com-variacoes-de-sku-aprovadas-em-skus-recebidos-estao-sendo-criados-com-skus-duplicados-no-catalogo
status: PUBLISHED
createdAt: 2023-08-29T15:50:27.000Z
updatedAt: 2023-08-29T15:50:27.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-with-sku-variations-approved-on-received-skus-are-being-created-with-duplicated-skus-on-the-catalog
locale: pt
kiStatus: Backlog
internalReference: 889676
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O vendedor pode enviar um produto com várias variações de SKU.
No módulo “SKUs recebidos” do marketplace, esses SKUs aparecerão separadamente para aprovação.
O comerciante pode aprovar manualmente esses SKUs.

O que está ocorrendo é que alguns SKUs estão sendo criados em duplicata no catálogo do marketplace devido a uma falha na comunicação com o catálogo.

## Simulação

Aprove os SKUs na área de pendentes do módulo “SKUs Recebidos” do mesmo produto em um intervalo curto de tempo.
Verifique no catálogo se algum SKU foi criado em duplicata

## Workaround

Aprove os SKUs do mesmo produto aos poucos para evitar erros no catálogo.