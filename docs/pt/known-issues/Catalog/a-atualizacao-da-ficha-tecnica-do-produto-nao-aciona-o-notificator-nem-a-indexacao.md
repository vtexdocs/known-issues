---
title: 'A atualização da ficha técnica do produto não aciona o Notificator nem a indexação'
slug: a-atualizacao-da-ficha-tecnica-do-produto-nao-aciona-o-notificator-nem-a-indexacao
status: PUBLISHED
createdAt: 2021-07-28T19:14:33.000Z
updatedAt: 2025-11-21T21:40:51.000Z
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

Ao importar valores de especificações de um produto por meio de planilhas, esses valores não acionarão ações de indexação para os novos valores nos campos de produto existentes. Eles serão atualizados corretamente no banco de dados da conta, mas não nas rotas da API de Pesquisa nem nos componentes front-end que utilizam informações indexadas.

## Simulação

- Acesse o VTEX Admin no seguinte caminho: Catálogo -> Importação e Exportação -> Especificações do Produto.
- Importe uma planilha para atualizar os valores das especificações.
- Após algum tempo, verifique as informações na interface de usuário do admin; elas estarão atualizadas, mas na API de Pesquisa não serão atualizadas.

## Workaround

Edite qualquer outra informação do produto, em vez das especificações, por meio da interface do usuário/API/planilha. Isso acionará a indexação para uma atualização do produto, o que inclui as especificações.

Uma reindexação completa (via FullCleanUp.aspx) não abrange essa atualização, pois envolve camadas de informação adicionais.