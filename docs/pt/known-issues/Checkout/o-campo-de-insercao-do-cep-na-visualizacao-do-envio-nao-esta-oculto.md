---
title: 'O campo de inserção do CEP na visualização do envio não está oculto'
slug: o-campo-de-insercao-do-cep-na-visualizacao-do-envio-nao-esta-oculto
status: PUBLISHED
createdAt: 2023-05-09T13:27:37.000Z
updatedAt: 2024-02-20T22:22:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-previews-postal-code-input-field-is-not-hidden
locale: pt
kiStatus: Fixed
internalReference: 821984
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns países, o campo de entrada do CEP na visualização do frete não é ocultado após a inserção de um CEP válido pela segunda vez.

## Simulação

- Adicione um item ao carrinho;
- Digite um código postal;
- Altere o código postal; o campo de entrada do código postal continuará visível.

## Workaround

Clique no botão “Cálculo”.