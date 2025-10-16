---
title: A alteração de sinônimos de unidirecional para bidirecional não funciona
slug: a-alteracao-de-sinonimos-de-unidirecional-para-bidirecional-nao-funciona
status: PUBLISHED
createdAt: 2025-10-16T19:58:40.380Z
updatedAt: 2025-10-16T19:58:40.380Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: changing-synonyms-from-unidirectional-to-bidirectional-does-not-work
locale: pt
kiStatus: Backlog
internalReference: 1149205
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A alteração do tipo de sinônimo de unidirecional para bidirecional não está funcionando. Depois de salvar a alteração, ele retornará ao tipo anterior.
## Simulação



- Crie um sinônimo unidirecional com termos em ambos os campos e salve.
- Edite o tipo de sinônimo para bidirecional e salve.
- Volte para editar o sinônimo e observe que ele ainda é unidirecional, mas com os termos do segundo campo copiados para o primeiro campo.


## Workaround


Apague manualmente o segundo campo ("_O que a pesquisa retorna além disso_") antes de alterar o tipo para unidirecional.



