---
title: 'Especificações multiplicadas no catálogo'
slug: especificacoes-multiplicadas-no-catalogo
status: PUBLISHED
createdAt: 2023-10-16T12:47:49.000Z
updatedAt: 2023-10-16T12:48:47.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: specifications-multiplied-on-catalog
locale: pt
kiStatus: Backlog
internalReference: 919761
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O marketplace pode aprovar produtos enviados pelos vendedores no módulo “SKUs recebidos”.

Quando um produto possui uma especificação de SKU que corresponde à especificação existente na categoria do marketplace, mas trata-se de um novo valor, esse novo valor é criado na especificação do marketplace.

Os valores duplicados podem ocorrer quando mais de um SKU com o mesmo “novo valor” está sendo aprovado ao mesmo tempo no módulo SKUs Recebidos, na mesma categoria (ou árvore) em que a especificação foi criada.

Se a especificação for criada na categoria raiz (não recomendado), esse cenário pode ocorrer com mais facilidade.

## Simulação

1. Crie uma especificação de SKU na categoria raiz;
2. Escolha 2 (ou mais) SKUs para aprovar no módulo “SKUs Recebidos” que tenham o mesmo valor de especificação de SKU (o valor não pode existir anteriormente no lado do marketplace)
3. Aprove as SKUs (ao mesmo tempo ou com um pequeno intervalo) e verifique se os valores da especificação foram multiplicados pelo número de SKUs aprovadas.

## Workaround

Aprove as SKUs mais lentamente e evite criar especificações na categoria raiz.