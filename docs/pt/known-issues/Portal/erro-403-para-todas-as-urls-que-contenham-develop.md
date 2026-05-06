---
title: 'Erro 403 para todas as URLs que contenham "develop-"'
slug: erro-403-para-todas-as-urls-que-contenham-develop
status: PUBLISHED
createdAt: 2024-02-01T13:46:36.000Z
updatedAt: 2024-11-11T15:19:14.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: 403-error-for-all-urls-containing-develop
locale: pt
kiStatus: Backlog
internalReference: 975182
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Espera-se que uma URL possa conter qualquer palavra sem gerar um erro, mas a palavra "**develop"** seguida do caractere "**-**" gera automaticamente um erro 403.
Por exemplo, um produto com um link de texto  `how-to-develop-a-culture-of-customer-centricity` exibirá um erro 403, pois contém a sequência "develop-".

## Simulação

1. Coloque a sequência "develop-" em um link de texto
2. Carregue o produto
3. Observe o erro 403

## Workaround

Não use a sequência "develop-"