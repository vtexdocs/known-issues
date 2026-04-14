---
title: 'Os resultados da pesquisa podem não exibir produtos dos sinônimos'
slug: os-resultados-da-pesquisa-podem-nao-exibir-produtos-dos-sinonimos
status: PUBLISHED
createdAt: 2026-04-14T19:22:41.321Z
updatedAt: 2026-04-14T19:22:41.321Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-results-may-not-display-products-from-the-synonyms
locale: pt
kiStatus: Backlog
internalReference: 1094028
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao pesquisar produtos a partir de um termo que possui sinônimos, a Pesquisa Inteligente pode não recuperar os produtos associados aos sinônimos.

Esse comportamento ocorre porque os produtos associados ao sinônimo não foram reindexados para serem vinculados a um produto após a adição ou atualização de um sinônimo. Isso é causado pela perda da notificação de reindexação durante o processo.

## Simulação

Para confirmar se esse problema está ocorrendo, observe as seguintes evidências:

1 - O número de resultados difere entre si.

- Em **Admin > Loja > Pesquisa Inteligente > Sinônimos**, crie ou atualize um sinônimo unidirecional.
- Em seguida, em **Admin > Loja > Pesquisa Inteligente >  Pesquisa Explicada**, compare os resultados ao pesquisar o termo original e o sinônimo.
- Ao comparar os resultados, os resultados da pesquisa pelo sinônimo não incluem todos os produtos encontrados na pesquisa pelo termo específico original.

2 - A data da última reindexação de um produto é anterior à data de criação do sinônimo.

- Escolha um produto do termo original que não apareça ao pesquisar usando o sinônimo.
- Compare as datas entre a última data de reindexação do produto (**Admin > Loja > Pesquisa Inteligente >  Histórico de indexação**) e a data de criação/atualização do sinônimo (**Admin > Loja > Pesquisa Inteligente > Sinônimos**).
- Se a data da última reindexação de um produto for anterior à data de criação do sinônimo, então este caso se enquadra neste KI.

## Workaround

Abra um ticket para a equipe de CX com as informações comprovativas para que possamos reindexar os produtos afetados.