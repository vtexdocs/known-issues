---
title: 'A tabela de preços exportada filtrada por marca não inclui todos os SKUs'
slug: a-tabela-de-precos-exportada-filtrada-por-marca-nao-inclui-todos-os-skus
status: PUBLISHED
createdAt: 2022-06-07T19:29:26.000Z
updatedAt: 2022-12-12T14:48:47.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: exported-price-table-filtered-by-brand-does-not-bring-all-the-skus
locale: pt
kiStatus: Fixed
internalReference: 594075
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao exportar a tabela de preços filtrada por marca para obter um resultado mais específico, a planilha chega incompleta ao cliente.

Apenas os SKUs com preço exibidos na primeira página (quando a configuração da página está definida para um máximo de 20 resultados) são exportados.
 ![](https://vtexhelp.zendesk.com/attachments/token/Yfc9U3wsVoOTEIsYsxInZAVcn/?name=image.png)

## Simulação

1. Acesse a Lista de Preços da conta;
2. Filtre os resultados por uma marca específica (e atualize a página)
3. Exporte a `Tabela de preços base` ou a `Tabela de preços fixos`
4. Verifique se há SKUs faltando

## Workaround

Outra maneira de obter informações sobre o preço de um SKU é usando a API: https://developers.vtex.com/vtex-rest-api/reference/getprice