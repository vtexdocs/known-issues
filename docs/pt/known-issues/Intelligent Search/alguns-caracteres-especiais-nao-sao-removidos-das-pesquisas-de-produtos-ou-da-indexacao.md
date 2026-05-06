---
title: 'Alguns caracteres especiais não são removidos das pesquisas de produtos ou da indexação'
slug: alguns-caracteres-especiais-nao-sao-removidos-das-pesquisas-de-produtos-ou-da-indexacao
status: PUBLISHED
createdAt: 2021-06-16T12:59:54.000Z
updatedAt: 2023-10-27T00:24:02.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: some-special-characters-are-not-stripped-from-product-searches-or-indexing
locale: pt
kiStatus: Backlog
internalReference: 382382
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns caracteres especiais não são totalmente removidos das palavras-chave pesquisadas ou da indexação de produtos, o que pode afetar as pesquisas em alguns cenários específicos.

Os caracteres conhecidos que levam a essa situação são vírgulas (`,`), pontos (`.`) e dois pontos (`:`). Outros são geralmente ignorados e não geram problemas.

Ao registrar um produto, vírgulas e pontos no final das palavras são removidos durante a indexação do produto, mas, se estiverem no meio de uma palavra, são mantidos. As palavras-chave são separadas por espaços.

Durante a pesquisa, os dois pontos são um valor reservado e invalidarão toda a consulta de texto.

## Simulação

Para vírgulas e pontos, um campo de produto que tenha um valor como palavras-chave separadas por vírgulas, como `"car,specialbrand,blue"`, será lido como uma única palavra. A pesquisa por `specialbrand` não encontrará este produto.

Para dois pontos, um produto com o nome `"red wine: special version"` pode ser encontrado pesquisando por `wine`, mas a pesquisa por `wine: special version` não funcionará. A pesquisa inteira será inválida e nenhum filtro de texto será aplicado.

## Workaround

Para vírgulas e pontos, é necessário um espaço após o caractere para separar as palavras-chave.

Para uma pesquisa usando dois pontos, não há solução alternativa.