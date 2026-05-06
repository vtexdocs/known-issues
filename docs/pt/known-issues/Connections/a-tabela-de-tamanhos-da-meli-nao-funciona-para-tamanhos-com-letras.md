---
title: 'A tabela de tamanhos da MELI não funciona para tamanhos com letras'
slug: a-tabela-de-tamanhos-da-meli-nao-funciona-para-tamanhos-com-letras
status: PUBLISHED
createdAt: 2023-07-24T12:04:04.000Z
updatedAt: 2023-09-12T15:04:30.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-size-chart-not-working-for-sizes-with-letters
locale: pt
kiStatus: Fixed
internalReference: 867262
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, nosso recurso de Tabela de Tamanhos MELI não está funcionando para tamanhos com letras, por exemplo:

Tamanho = "P", "M", "G".

## Simulação

Na tela do mapeador, vemos que o recurso Tabela de Tamanhos está disponível para a integração MELI. Portanto, se os vendedores mapearem um tamanho com valores representados por letras, isso não funcionará e uma mensagem de erro será exibida no produto de ponte, conforme mostrado abaixo:

"O valor do atributo SIZE é inválido: P. Este valor deve ser igual ao da tabela de medidas."

## Workaround

Atualmente, os tamanhos funcionam com números; portanto, os vendedores podem usar os números em vez de letras.