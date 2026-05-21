---
title: 'As pesquisas no histórico de autocompletar com o caractere "/" estão prejudicando a página de resultados da pesquisa'
slug: as-pesquisas-no-historico-de-autocompletar-com-o-caractere-estao-prejudicando-a-pagina-de-resultados-da-pesquisa
status: PUBLISHED
createdAt: 2026-05-12T21:29:15.000Z
updatedAt: 2026-05-21T17:37:19.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: autocomplete-history-searches-with-the-character-are-breaking-the-search-result-page
locale: pt
kiStatus: Fixed
internalReference: 1405490
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao realizar pesquisas em lojas do Store Framework, o componente de preenchimento automático pode armazenar o histórico de pesquisa da sessão do usuário. Se o usuário já tiver pesquisado termos que contivessem o caractere "/" anteriormente e pesquisar novamente usando a lista do histórico de preenchimento automático, a pesquisa não codificará o termo de pesquisa em URL e retornará um resultado diferente do que foi pesquisado ou exibirá uma página de pesquisa vazia.

## Simulação

1. Pesquise produtos em uma loja do Store Framework com termos que contenham o caractere "/". Por exemplo: `sapatos azuis 1/2`.
2. Verifique se o resultado é o esperado de acordo com o que foi pesquisado e se a URL codifica o caractere "/".
3. Volte para a página inicial (ou simplesmente apague o texto pesquisado da barra de pesquisa). O histórico de autocompletar aparecerá contendo o termo de pesquisa com o caractere "/".
4. Clique nele para pesquisar o termo novamente. A página de resultados pode exibir resultados fora do contexto ou levar a uma página de pesquisa vazia.

## Workaround

N/A