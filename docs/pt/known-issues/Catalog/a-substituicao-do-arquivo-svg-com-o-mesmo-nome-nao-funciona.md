---
title: 'A substituição do arquivo SVG com o mesmo nome não funciona'
slug: a-substituicao-do-arquivo-svg-com-o-mesmo-nome-nao-funciona
status: PUBLISHED
createdAt: 2025-10-16T20:00:40.848Z
updatedAt: 2025-10-16T20:00:40.848Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: svg-file-replacement-with-the-same-name-doesnt-work
locale: pt
kiStatus: Backlog
internalReference: 1151600
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao usar o gerenciador de arquivos do CMS no administrador da conta, há uma opção para fazer upload de arquivos:

 ![](https://vtexhelp.zendesk.com/attachments/token/tIFD30VhzhOuxTIV0f7UurtEH/?name=image.png) ![](https://vtexhelp.zendesk.com/attachments/token/k1Du6DExk2Rg7OCwXAKVRJfzv/?name=image.png)

Ao fazer upload de arquivos .SVG, se você optar por substituir um arquivo mais antigo, usando o mesmo nome, será exibida a seguinte mensagem:

 ![](https://vtexhelp.zendesk.com/attachments/token/3jOyJQyyWWZJ2s6tlzjiJyDko/?name=image.png)

No entanto, o conteúdo desse arquivo nunca será atualizado ao usar esse método.
## Simulação


1 - Obtenha 2 arquivos .SVG com o mesmo nome.
2 - carregue o arquivo nº 1 e verifique seu conteúdo
3 - Carregue o arquivo nº 2 e verifique seu conteúdo, mesmo depois de dias, ele não terá sido substituído.


## Workaround


Exclua o arquivo anterior antes de fazer o upload novamente.



