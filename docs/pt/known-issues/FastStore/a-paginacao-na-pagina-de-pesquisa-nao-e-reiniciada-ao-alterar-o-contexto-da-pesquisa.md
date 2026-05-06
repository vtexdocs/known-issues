---
title: 'A paginação na página de pesquisa não é reiniciada ao alterar o contexto da pesquisa'
slug: a-paginacao-na-pagina-de-pesquisa-nao-e-reiniciada-ao-alterar-o-contexto-da-pesquisa
status: PUBLISHED
createdAt: 2023-07-06T19:54:15.000Z
updatedAt: 2023-07-06T19:58:46.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: pagination-on-searchpage-doesnt-reset-when-changing-search-context
locale: pt
kiStatus: Scheduled
internalReference: 857392
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao navegar em uma determinada página de uma PLP, carregar mais resultados e mudar o contexto para navegar em um departamento diferente, o parâmetro de paginação será mantido e os resultados da pesquisa serão exibidos a partir da nova categoria, na mesma página em que estávamos anteriormente

## Simulação

Siga estas etapas:


- Acesse: https://starter.vtex.app/computer---software
- Clique em Carregar mais produtos (o parâmetro de página na sua URL será alterado)
- Clique em um departamento diferente (por exemplo, Tecnologia)
- Verifique se a página de tecnologia começará com a paginação em que você estava anteriormente

## Workaround

Não há solução alternativa disponível.