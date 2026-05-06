---
title: 'Cotação de frete da MELI para vários officialStoreIDs'
slug: cotacao-de-frete-da-meli-para-varios-officialstoreids
status: PUBLISHED
createdAt: 2024-02-07T11:18:56.000Z
updatedAt: 2024-06-19T11:43:38.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-freight-quotation-for-multiple-officialstoreids
locale: pt
kiStatus: Fixed
internalReference: 978358
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, estamos enfrentando um problema com a integração com a MELI relacionado à API de cotação de frete da MELI. Isso se aplica apenas a vendedores que utilizam vários officialStoreIDs na MELI, mas utilizam apenas uma conta na VTEX com o mesmo sellerID da MELI

## Simulação

Se esse cenário ocorrer, a cotação de frete da MELI retornará um erro, e a MELI redirecionará o vendedor para a planilha de frete em vez de utilizar a API de frete.

## Workaround

Mantenha a planilha de frete atualizada para evitar inconsistências entre a VTEX e a MELI