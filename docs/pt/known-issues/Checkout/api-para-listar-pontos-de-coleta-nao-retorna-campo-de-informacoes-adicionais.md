---
title: 'API para listar pontos de coleta não retorna campo de informações adicionais'
id: 5YY5srSA2ZRiOSZiMY9UF9
status: PUBLISHED
createdAt: 2022-09-02T12:09:09.980Z
updatedAt: 2024-02-16T20:24:50.684Z
publishedAt: 2024-02-16T20:24:50.684Z
firstPublishedAt: 2022-09-02T12:09:10.777Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: api-to-list-pickup-points-does-not-return-additionalinfo-field
locale: pt
kiStatus: No Fix
internalReference: 650714
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Nossa API para listar os pontos de coleta por local está sempre retornando 'nulo' no campo 'informação adicional'. Entretanto, como estes dados normalmente vêm do API de logística, então estes dados estão presentes no pedidoFormulário de pedido ao colocar um pedido na caixa.



## Simulação


Primeiramente, criar um ponto de retirada na administração da loja e preencher o campo de informações adicionais (instruções e etiquetas de retirada). Depois disso, faça uma chamada para nossa API que lista os pontos de pickup por localização e lá você poderá ver este campo com `nulo`.



## Workaround


Não há solução de trabalho disponível.

