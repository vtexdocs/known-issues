---
title: 'O PLP não carrega quando os valores das facetas são palavras reservadas.'
slug: o-plp-nao-carrega-quando-os-valores-das-facetas-sao-palavras-reservadas
status: PUBLISHED
createdAt: 2025-03-13T16:00:07.000Z
updatedAt: 2026-10-06T17:22:03.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: plp-does-not-load-when-facet-values-are-reserved-words
locale: pt
kiStatus: Backlog
internalReference: 1193294
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Palavras reservadas são palavras predefinidas em linguagens de programação que possuem significados e funções específicas.

Alguns valores de faceta podem gerar um erro quando seus valores (como um nome de categoria ou valor de especificação) são palavras reservadas, impedindo o carregamento correto da página.

Por exemplo, no caso de uma especificação com o valor `constructor`, a especificação deveria gerar um item de faceta na PLP, mas gera um erro.

## Simulação

- Abra uma PLP onde a especificação aparece como uma faceta e seu valor é uma palavra reservada.

- A PLP será carregada com erros.

## Workaround

Siga as instruções na página Adicionando especificações ou campos de SKU para alterar o valor da especificação para outro.