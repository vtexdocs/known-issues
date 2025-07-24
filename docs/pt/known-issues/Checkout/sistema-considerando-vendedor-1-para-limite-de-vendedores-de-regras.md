---
title: 'Sistema considerando vendedor 1 para limite de vendedores de regras'
id: 1bUax0hSCVrnFPZ4g1VWOa
status: PUBLISHED
createdAt: 2022-04-20T20:43:57.392Z
updatedAt: 2024-02-16T20:28:37.189Z
publishedAt: 2024-02-16T20:28:37.189Z
firstPublishedAt: 2022-04-20T20:43:57.844Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: system-considering-seller-1-for-rule-sellers-limit
locale: pt
kiStatus: No Fix
internalReference: 564614
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Hoje, em um cenário onde temos uma conta que usa uma arquitetura no modelo MOI (marketplace/multilevel seller), o sistema considera o vendedor 1 como parte do cálculo para limitar o número de vendedores no carrinho que pode ser configurado usando a chave maxNumberOfWhiteLabelSellers



## Simulação


Para replicar o cenário é necessário ter configurado a conta com o fluxo MOI;

No nível de vendedor, a limitação do número de vendedores no carrinho deve ser configurada;

Eles devem ter no carrinho itens cujas entregas são feitas pelo primeiro vendedor e pelo vendedor com o selo branco vinculado a este mesmo vendedor;

Ao preencher os dados e tentar fechar o pedido, será exibido um erro ligado à limitação do número de vendedores no carrinho



## Workaround


N/A

