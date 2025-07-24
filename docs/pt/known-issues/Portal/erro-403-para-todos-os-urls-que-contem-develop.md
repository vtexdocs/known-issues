---
title: 'Erro 403 para todos os URLs que contêm develop-'
id: X6JDmLhD0StgHPGXJd9cZ
status: PUBLISHED
createdAt: 2024-02-01T13:46:53.024Z
updatedAt: 2024-11-11T15:19:34.574Z
publishedAt: 2024-11-11T15:19:34.574Z
firstPublishedAt: 2024-02-01T13:46:54.008Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: 403-error-for-all-urls-containing-develop
locale: pt
kiStatus: Backlog
internalReference: 975182
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Espera-se que um URL possa conter qualquer palavra sem gerar um erro, mas a palavra "**develop "** seguida pelo caractere "**-**" gera um erro 403 automático.
Por exemplo, um produto com um link de texto `how-to-develop-a-culture-of-customer-centricity` exibirá um erro 403, pois contém a string "develop-".

## Simulação



1. Coloque a string "develop-" em um link de texto
2. Carregue o produto
3. Veja o erro 403



## Workaround


Não use a string "develop-"





