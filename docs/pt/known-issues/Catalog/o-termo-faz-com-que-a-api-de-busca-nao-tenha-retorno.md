---
title: 'O termo faz com que a API de busca não tenha retorno'
id: 2ZmZlhMUaIEmbjLhXiDngm
status: PUBLISHED
createdAt: 2022-05-02T16:20:29.941Z
updatedAt: 2022-11-25T21:46:01.758Z
publishedAt: 2022-11-25T21:46:01.758Z
firstPublishedAt: 2022-05-02T16:20:30.689Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: term-makes-search-api-have-no-return
locale: pt
kiStatus: Backlog
internalReference: 570542
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Algumas palavras são ignoradas pela busca, no caso de "é", o termo deve ser convertido para "e" e depois ignorado pela busca. Mas uma busca com esse termo retornará uma busca vazia.



## Simulação



- Registrar um produto com "é" no nome ou na palavra substituta
- Pesquisar o nome do produto ou palavra substituta.
- Veja que você será redirecionado para uma busca vazia



## Workaround


N/A

