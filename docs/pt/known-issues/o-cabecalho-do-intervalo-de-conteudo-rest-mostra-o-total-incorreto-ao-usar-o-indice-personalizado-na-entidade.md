---
title: O cabeçalho do intervalo de conteúdo REST mostra o total incorreto ao usar o índice personalizado na entidade
slug: o-cabecalho-do-intervalo-de-conteudo-rest-mostra-o-total-incorreto-ao-usar-o-indice-personalizado-na-entidade
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: rest-contentrange-header-shows-incorrect-total-when-using-custom-index-on-entity
locale: pt
kiStatus: Backlog
internalReference: 1249679
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao consultar documentos usando um índice personalizado como filtro e o cabeçalho REST-Range (por exemplo, resources=0-100), o cabeçalho REST-Content-Range da resposta retorna um total incorreto de recursos (por exemplo, 300). Entretanto, a consulta com um intervalo maior (por exemplo, resources=300-400) revela que o total real é maior. Isso acontece porque a consulta usa um índice personalizado em vez do indexador.
## Simulação



1.

Realize uma pesquisa com o índice personalizado como um filtro em uma entidade que tenha mais de 300 documentos com o cabeçalho:

    REST-Range: resources=0-100

2. Observe que a resposta `REST-Content-Range` indica um total de `300`.
3.

Faça outra solicitação usando:

    REST-Range: resources=300-400

4. Observe que os documentos continuam retornando, indicando que o total real é maior que 300
## Workaround


Remova o índice personalizado. Isso forçará o aplicativo a consultar diretamente o indexador, que retorna corretamente a contagem total.


