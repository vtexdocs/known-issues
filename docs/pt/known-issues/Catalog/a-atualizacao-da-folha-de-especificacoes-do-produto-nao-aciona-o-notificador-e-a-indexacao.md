---
title: 'A atualização da folha de especificações do produto não aciona o notificador e a indexação'
slug: a-atualizacao-da-folha-de-especificacoes-do-produto-nao-aciona-o-notificador-e-a-indexacao
status: PUBLISHED
createdAt: 2025-11-21T18:12:15.951Z
updatedAt: 2025-11-21T18:12:15.951Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-sheet-update-does-not-trigger-notificator-and-indexing
locale: pt
kiStatus: Backlog
internalReference: 403107
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao importar os valores de especificação de um produto por meio de planilhas, eles não acionam ações de indexação para os novos valores nos campos de produto existentes. Eles serão atualizados corretamente no banco de dados da conta, mas não nas rotas da API de pesquisa ou nos componentes de front-end que consomem informações indexadas.
## Simulação



- Acesse o VTEX Admin no seguinte caminho: Catálogo -> Importar e exportar -> Especificações do produto.
- Importe uma planilha para atualizar os valores das especificações.
- Depois de algum tempo, verifique as informações na interface do usuário do administrador; elas estarão atualizadas, mas na API de pesquisa, não estarão atualizadas
## Workaround


Edite qualquer outra informação do produto, em vez das especificações, via UI/API/planilha. Isso acionará a indexação para uma atualização do produto, que inclui as especificações.

Uma reindexação completa (via FullCleanUp.aspx) não cobre essa atualização, pois envolve camadas de informações adicionais.

