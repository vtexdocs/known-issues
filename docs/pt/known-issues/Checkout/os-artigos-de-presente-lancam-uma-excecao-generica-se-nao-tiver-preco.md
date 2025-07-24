---
title: 'Os artigos de presente lançam uma exceção genérica se não tiver preço'
id: 7Jw1Nihqp3Sg2ecg7R9IEt
status: PUBLISHED
createdAt: 2022-05-12T14:52:18.546Z
updatedAt: 2024-02-16T20:27:57.698Z
publishedAt: 2024-02-16T20:27:57.698Z
firstPublishedAt: 2022-05-12T14:52:18.968Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: gift-items-throws-a-generic-exception-if-it-has-no-price
locale: pt
kiStatus: No Fix
internalReference: 510490
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A seleção de um item de presente no carrinho lançará uma exceção genérica se ele não tiver preço, especialmente se a loja utilizar um serviço de impostos externos. O cliente não pode ir em frente ao selecioná-lo.

Como o preço é uma exigência, o comportamento esperado é que o item/presente não deve ser oferecido.



## Simulação


- para registrar um novo item ou para atualizá-lo para ficar sem preço
- para criar uma promoção de presentes oferecendo este item
- para criar um carrinho onde o item será oferecido
- tente selecionar o presente; um erro será apresentado



## Workaround


Para registrar um preço, que é uma exigência para cada item que será ativo e vendido, mesmo como um presente.

