---
title: 'ID e nome do departamento incorretos ao exportar a planilha de produtos.'
slug: id-e-nome-do-departamento-incorretos-ao-exportar-a-planilha-de-produtos
status: PUBLISHED
createdAt: 2023-04-03T20:37:08.000Z
updatedAt: 2026-09-22T22:47:02.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-id-and-department-name-when-exporting-products-spreadsheet
locale: pt
kiStatus: Fixed
internalReference: 783363
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao exportar uma planilha de produtos, o nome e o ID do departamento são exportados incorretamente, mesmo que pertençam a um departamento diferente no catálogo de produtos ou em consultas por meio das APIs.

## Simulação

1. Acesse o Catálogo pelo Painel de Administração;

2. Navegue até Importar e Exportar;

3. Exporte a planilha de produtos e SKUs.

## Workaround

Não há solução alternativa. No entanto, essas informações podem ser descartadas. Ao importar uma planilha para atualizações de produtos e categorias, essa coluna não é considerada. Apenas a coluna ID da Categoria é.