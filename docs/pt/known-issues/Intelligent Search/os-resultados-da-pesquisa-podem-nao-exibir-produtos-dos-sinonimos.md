---
title: Os resultados da pesquisa podem não exibir produtos dos sinônimos
slug: os-resultados-da-pesquisa-podem-nao-exibir-produtos-dos-sinonimos
status: PUBLISHED
createdAt: 2025-10-09T12:51:32.196Z
updatedAt: 2025-10-09T12:51:32.196Z
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


Ao pesquisar produtos de um termo que tem sinônimos, o Intelligent Search pode não recuperar os produtos dos sinônimos.

Esse comportamento ocorre porque os produtos associados ao sinônimo não foram reindexados para serem vinculados a um produto após a adição ou atualização de um sinônimo. Isso é causado pela perda da notificação de reindexação durante o processo.
## Simulação


Para garantir que esse problema esteja ocorrendo, esteja ciente das seguintes evidências:

1 - O número de resultados é diferente um do outro.

- Em **Admin > Storefront > Intelligent Search > Synonyms**, crie ou atualize um sinônimo unidirecional.
- Em seguida, em **Admin > Storefront > Intelligent Search > Explained Search**, compare os resultados ao pesquisar o termo original e o sinônimo.
- Ao comparar os resultados, os resultados ao pesquisar o sinônimo não incluem todos os produtos ao pesquisar o termo específico original.

2 - A data da última reindexação de um produto é mais antiga do que a data de criação do sinônimo.

- Escolha um produto do termo original que não apareça ao pesquisar usando o sinônimo.
- Compare as datas entre a data da última reindexação do produto (**Admin > Storefront > Intelligent Search > Histórico de indexação**) e a data de criação/atualização do sinônimo (**Admin > Storefront > Intelligent Search > Sinônimos**).
- Se a data da última reindexação de um produto for mais antiga do que a data de criação do sinônimo, então esse caso pode se encaixar nesse KI
## Workaround


Abra um tíquete para a equipe de CX com as informações de evidência para que possamos reindexar os produtos afetados.


