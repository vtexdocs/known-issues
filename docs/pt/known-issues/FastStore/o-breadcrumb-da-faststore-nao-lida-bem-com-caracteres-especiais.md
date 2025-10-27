---
title: 'O breadcrumb da Faststore não lida bem com caracteres especiais'
slug: o-breadcrumb-da-faststore-nao-lida-bem-com-caracteres-especiais
status: PUBLISHED
createdAt: 2025-10-16T20:37:35.178Z
updatedAt: 2025-10-16T20:37:35.178Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststores-breadcrumb-doesnt-handle-special-characters-well
locale: pt
kiStatus: Backlog
internalReference: 1182343
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Se sua loja tiver categorias com caracteres especiais, como `/`, o breadcrumb da Fastestore não conseguirá lidar com isso corretamente.
## Simulação


Adicione uma categoria com um caractere especial, como `computadores/softwares`
 ![](https://vtexhelp.zendesk.com/attachments/token/GotI44D5ebNA8EhouzkuBAh8l/?name=image.png)

Vá para o PDP do produto e veja como o breadcrumb está se comportando:
 ![](https://vtexhelp.zendesk.com/attachments/token/uhuoUTlqJfGZrU3hHI19OqaqG/?name=image.png)
Além disso, o link para a categoria não funcionará


## Workaround


N/A A sugestão é evitar o uso desses caracteres especiais nos nomes das categorias



