---
title: 'Mapa do site das subcontas, incluindo produtos de outras subcontas e da conta principal.'
slug: mapa-do-site-das-subcontas-incluindo-produtos-de-outras-subcontas-e-da-conta-principal
status: PUBLISHED
createdAt: 2022-07-14T21:51:49.000Z
updatedAt: 2026-08-14T23:23:09.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: sitemap-from-subaccounts-including-products-from-other-subaccounts-and-mainaccount
locale: pt
kiStatus: Fixed
internalReference: 617974
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O sitemap gerado mostra todos os produtos de subcontas e contas, sem levar em consideração o canal de vendas dos produtos e se a subconta possui um site próprio.

## Simulação

1. Insira uma conta ou subconta e gere o sitemap acessando o link http://{accountName}.myvtex.com/sitemap/product-1.xml
2. Verifique se a lista de produtos também contém produtos de subcontas que possuem canais de vendas diferentes.

## Workaround

Não há solução alternativa.