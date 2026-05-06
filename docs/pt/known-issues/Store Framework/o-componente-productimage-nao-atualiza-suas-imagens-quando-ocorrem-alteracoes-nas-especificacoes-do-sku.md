---
title: 'O componente ProductImage não atualiza suas imagens quando ocorrem alterações nas especificações do SKU'
slug: o-componente-productimage-nao-atualiza-suas-imagens-quando-ocorrem-alteracoes-nas-especificacoes-do-sku
status: PUBLISHED
createdAt: 2022-09-30T21:46:04.000Z
updatedAt: 2023-05-23T18:34:40.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: the-productimage-component-doesnt-update-its-images-based-on-sku-specifications-change
locale: pt
kiStatus: Backlog
internalReference: 669619
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um produto possui mais de uma especificação e o usuário altera a seleção da especificação, o componente ProductImage não atualiza suas imagens de acordo com a alteração na seleção relacionada.

O componente SKUSelector compara o itemId (string retornada da matriz product.items) com o selectedImageVariationSKU (string retornada do skuSelector, que é um objeto retornado do contexto) para apresentar a imagem correta após a seleção do usuário; portanto, se o skuSelector.selectedImageVariationSKU não for atualizado, o valor permanecerá no estado anterior e não atualizará a imagem exibida na tela dentro do componente ProductImage.

Isso também afeta a imagem no SKU Selector, pois eles usam as mesmas variáveis. Observou-se que, após selecionar um SKU e carregar a página na URL do site, o selectedImageVariationSKU permaneceria no estado anterior e não atualizaria a imagem exibida na tela.

## Simulação

Evidência: https://youtu.be/qr4-uTRFwcY

## Workaround

N/A