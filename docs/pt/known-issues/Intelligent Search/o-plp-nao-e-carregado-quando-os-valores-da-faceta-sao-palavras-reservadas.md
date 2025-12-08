---
title: 'O PLP não é carregado quando os valores da faceta são palavras reservadas'
slug: o-plp-nao-e-carregado-quando-os-valores-da-faceta-sao-palavras-reservadas
status: PUBLISHED
createdAt: 2025-12-08T14:49:53.063Z
updatedAt: 2025-12-08T14:49:53.063Z
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


As palavras reservadas são palavras predefinidas em linguagens de programação que têm significados e funções específicos.

Alguns valores de faceta podem gerar um erro quando seus valores (como um nome de categoria ou valor de especificação) são palavras reservadas, impedindo que a página seja carregada corretamente.

Por exemplo, no caso de uma especificação com o valor `constructor`, a especificação deve gerar um item de faceta no PLP, mas gera um erro.
## Simulação



- Abra um PLP em que a especificação apareça como uma faceta e seu valor seja uma palavra reservada.
- O PLP será carregado com erros.


## Workaround


Siga as instruções na página Adicionar especificações ou campos de SKU para alterar o valor da especificação para outro.


