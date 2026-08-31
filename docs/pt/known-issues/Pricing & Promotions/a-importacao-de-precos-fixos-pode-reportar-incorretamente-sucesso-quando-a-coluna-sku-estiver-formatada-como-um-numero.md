---
title: 'A importação de preços fixos pode reportar incorretamente sucesso quando a coluna SKU estiver formatada como um número.'
slug: a-importacao-de-precos-fixos-pode-reportar-incorretamente-sucesso-quando-a-coluna-sku-estiver-formatada-como-um-numero
status: PUBLISHED
createdAt: 2026-09-01T00:05:14.000Z
updatedAt: 2026-09-01T00:05:14.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: fixed-prices-import-may-incorrectly-report-success-when-sku-column-is-formatted-as-a-number
locale: pt
kiStatus: Backlog
internalReference: 1454505
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao importar Preços Fixos usando uma planilha onde a **coluna SKU está formatada como número**, a importação pode apresentar comportamentos inesperados.

Dois comportamentos foram identificados:

- O SKU pode ser salvo incorretamente com um sufixo decimal, como `77,0`, em vez do valor de SKU esperado.

- Se houver também um erro de validação na planilha, a validação pode falhar silenciosamente para o item afetado. O relatório de importação pode retornar incorretamente um status **"OK"**, mesmo que o preço fixo não tenha sido salvo.

Isso pode causar confusão, pois o lojista recebe um relatório de importação bem-sucedido, enquanto o preço fixo correspondente não é atualizado no painel de administração.

## Simulação

1. Prepare uma planilha para importação de Preços Fixos.

2. Formate a **coluna SKU** como número em vez de texto/cadeia de caracteres.

3. Inclua um preço fixo válido para importação.

4. Importe a planilha pelo fluxo de importação de Preços Fixos.

5. Verifique o resultado da importação e o preço fixo correspondente no painel de administração. Em cenários onde o SKU é interpretado como um valor numérico, ele pode ser salvo com um sufixo decimal.

O problema pode se agravar quando a planilha também contém um erro de validação de entrada. Nesse caso, o item afetado pode falhar na validação sem que o erro seja refletido corretamente no resultado da importação, embora o relatório ainda mostre **"OK"**.

##

## Workaround

Antes de importar a planilha, certifique-se de que a **coluna SKU esteja formatada como texto/cadeia de caracteres**, em vez de como um número.

Após a importação, os lojistas também devem validar os preços fixos atualizados no painel de administração, em vez de confiar exclusivamente no relatório de importação.

Essa solução alternativa ajuda a evitar o cenário identificado na investigação enquanto o comportamento de validação subjacente é corrigido.