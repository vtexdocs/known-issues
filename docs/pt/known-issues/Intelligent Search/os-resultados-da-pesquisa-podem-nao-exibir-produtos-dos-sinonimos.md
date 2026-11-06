---
title: 'Os resultados da pesquisa podem não exibir produtos dos sinônimos.'
slug: os-resultados-da-pesquisa-podem-nao-exibir-produtos-dos-sinonimos
status: PUBLISHED
createdAt: 2026-11-06T22:59:57.000Z
updatedAt: 2026-11-06T22:59:57.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-results-may-not-display-products-from-the-synonyms
locale: pt
kiStatus: Backlog
internalReference: 1482294
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao pesquisar produtos a partir de um termo que possui sinônimos, a Busca Inteligente pode não recuperar os produtos dos sinônimos.

Esse comportamento ocorre porque os produtos associados ao sinônimo não foram reindexados para serem vinculados a um produto após a adição ou atualização de um sinônimo. Isso é causado pela perda da notificação de reindexação durante o processo.

## Simulação

Para garantir que esse problema esteja ocorrendo, observe as seguintes evidências:

1 - O número de resultados difere entre os termos.

- Em **Administração > Loja > Busca Inteligente > Sinônimos**, crie ou atualize um sinônimo unidirecional.

- Em seguida, em **Administração > Loja > Busca Inteligente > Busca Explicada**, compare os resultados da pesquisa pelo termo original e pelo sinônimo.

- Ao comparar os resultados, os resultados da pesquisa pelo sinônimo não incluem todos os produtos da pesquisa pelo termo original específico.

2 - A última data de reindexação de um produto é anterior à data de criação do sinônimo.

- Selecione um produto do termo original que não apareça na busca usando o sinônimo.
- Compare as datas entre a última data de reindexação do produto (**Administração > Loja > Busca Inteligente > Histórico de Indexação**) e a data de criação/atualização do sinônimo (**Administração > Loja > Busca Inteligente > Sinônimos**).

- Se a última data de reindexação de um produto for anterior à data de criação do sinônimo, então este caso pode ser classificado nesta KI.

## Workaround

Abra um chamado para a equipe de CX com as informações de evidência para que possamos reindexar os produtos afetados.