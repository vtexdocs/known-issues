---
title: 'Mercado Livre Dimensões das embalagens agora são obrigatórias para itens ME1 no Mercado Livre'
slug: mercado-livre-dimensoes-das-embalagens-agora-sao-obrigatorias-para-itens-me1-no-mercado-livre
status: PUBLISHED
createdAt: 2026-10-15T16:41:43.000Z
updatedAt: 2026-10-15T16:43:31.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-package-dimensions-are-now-mandatory-for-me1-items-on-mercado-livre
locale: pt
kiStatus: Backlog
internalReference: 1474056
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O Mercado Livre agora exige que as dimensões e o peso da embalagem sejam preenchidos também para itens ME1, e não apenas para ME2. Como a integração ainda não envia esses dados para itens ME1, a exportação e atualização desses SKUs é rejeitada.

## Simulação

A exportação ou atualização de SKUs ME1 para o Mercado Livre falha.

O erro retornado é: Os atributos [seller_package_height, seller_package_width, seller_package_length, seller_package_weight] são todos obrigatórios.

O SKU está corretamente classificado como ME1, por exemplo, itens com mais de 70 cm em qualquer lado.

Observado em categorias que exigem dimensões da embalagem, como pneus agrícolas.

A integração envia apenas as dimensões e o peso da embalagem para itens ME2. O Mercado Livre afirmou que, para vendedores que trabalham com ME1 e ME2, esses campos são obrigatórios ao criar qualquer item, incluindo ME1. Vendedores que trabalham apenas com ME1 não precisam enviá-los.

Meli está rejeitando o item com a mensagem "Os atributos [seller_package_height, seller_package_width, seller_package_length, seller_package_weight] são todos obrigatórios", mas o SKU é **me1** (correto para o tamanho do item, um pneu de 75x75x18cm, acima do limite de 70cm por lado que define ME1).

## Workaround

Não há solução alternativa disponível. Alterar o item para ME2 não resolve o problema, pois o item pode não ser elegível e acionaria um erro de coexistência ME1/ME2.