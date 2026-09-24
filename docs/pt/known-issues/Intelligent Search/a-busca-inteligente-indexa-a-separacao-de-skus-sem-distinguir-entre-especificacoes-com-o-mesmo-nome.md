---
title: 'A Busca Inteligente indexa a separação de SKUs sem distinguir entre especificações com o mesmo nome.'
slug: a-busca-inteligente-indexa-a-separacao-de-skus-sem-distinguir-entre-especificacoes-com-o-mesmo-nome
status: PUBLISHED
createdAt: 2026-09-24T16:44:22.000Z
updatedAt: 2026-09-24T16:44:22.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-indexes-sku-detach-without-distinguishing-between-samename-specifications
locale: pt
kiStatus: Backlog
internalReference: 1465798
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O recurso Desanexar SKU separa um único produto em vários produtos agrupados pelo valor da especificação na camada de Busca Inteligente.

Quando uma especificação de SKU tem o mesmo nome que uma especificação de produto, a indexação pode usar o valor da especificação do produto em vez do valor da especificação da SKU. Isso faz com que uma SKU seja indexada no produto agrupado errado.

## Simulação

1. Configure o **Desanexar SKU** em **Administração > Busca Inteligente > Configurações de Busca**, usando um nome de especificação (exemplo: "Cor").

2. Crie um produto com uma especificação em **nível de produto** com o mesmo nome (exemplo: "Cor" = "Roxo").

3. Adicione uma SKU a este produto com uma especificação em **nível de SKU** com o mesmo nome, mas um valor diferente (exemplo: "Cor" = "Azul").

4. Na API de Busca Inteligente, aplique o filtro usando o valor da especificação do produto (exemplo: "Cor = Roxo").

**Comportamento atual:** O filtro de pesquisa retorna o produto, mas exibe o SKU incorreto.

## Workaround

Embora o módulo Catálogo não bloqueie nomes de especificações repetidos, esse uso deve ser considerado incorreto.