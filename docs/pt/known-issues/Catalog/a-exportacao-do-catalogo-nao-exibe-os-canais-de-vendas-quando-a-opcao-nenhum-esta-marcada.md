---
title: 'A exportação do catálogo não exibe os canais de vendas quando a opção "nenhum" está marcada'
slug: a-exportacao-do-catalogo-nao-exibe-os-canais-de-vendas-quando-a-opcao-nenhum-esta-marcada
status: PUBLISHED
createdAt: 2022-12-23T13:37:45.000Z
updatedAt: 2022-12-23T13:38:19.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-export-does-not-show-sales-channels-when-none-are-tagged
locale: pt
kiStatus: Backlog
internalReference: 722001
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, os canais de venda a serem marcados na interface do usuário do produto seguem a lógica de que “se nenhum estiver marcado, todos estão disponíveis”.

Embora essa lógica seja razoável na interface do catálogo, a planilha de exportação de Produtos e SKUs pode induzir a erro — ela mostra a coluna com os respectivos canais de venda como “vazia”

Uma solução melhor seria listar todos os canais de vendas nessa coluna ou, melhor ainda, incluir o texto “todos” caso nenhum esteja marcado.

## Simulação

Marque um produto sem canais de vendas e tente exportar o catálogo, verificando a coluna relativa a esses dados.

## Workaround

Saiba de antemão que colunas vazias podem significar que todos os canais de vendas foram selecionados.