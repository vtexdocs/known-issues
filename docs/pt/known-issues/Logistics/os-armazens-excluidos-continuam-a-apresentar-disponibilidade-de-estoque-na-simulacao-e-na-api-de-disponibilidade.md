---
title: 'Os armazéns excluídos continuam a apresentar disponibilidade de estoque na simulação e na API de disponibilidade.'
slug: os-armazens-excluidos-continuam-a-apresentar-disponibilidade-de-estoque-na-simulacao-e-na-api-de-disponibilidade
status: PUBLISHED
createdAt: 2025-06-18T23:20:11.000Z
updatedAt: 2026-08-12T20:05:17.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: excluded-warehouses-continue-to-return-stock-availability-in-the-simulation-and-availability-api
locale: pt
kiStatus: No Fix
internalReference: 1246900
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um armazém é excluído no módulo de Logística, ele pode permanecer registrado na base de disponibilidade de estoque. Isso faz com que a disponibilidade de estoque dos SKUs ainda considere quantidades desses armazéns que não existem mais, tornando os SKUs indisponíveis ou exibindo quantidades irreais.

A situação ocorre principalmente quando o processo de exclusão do armazém envolve um grande volume de SKUs vinculados a ele, o que pode gerar um tempo limite e deixar resíduos na base de disponibilidade mesmo após a remoção na Logística. O impacto é sentido nas APIs de

## Simulação

e na seleção de vendedores, gerando inconsistências para o lojista e o comprador, afetando a experiência de compra na loja física.

## **Simulação**

- Crie um armazém na conta e associe SKUs a este armazém, atribuindo quantidades positivas ao estoque.

- Exclua o armazém por meio do módulo de Logística.

- Execute uma chamada para a API de simulação.

- Observe que, na resposta, o SKU retorna a disponibilidade do armazém excluído ou que a soma dos estoques inclui valores que não correspondem ao que existe nos armazéns válidos. Usando a rota para listar os armazéns ativos na conta, observe que o armazém em questão não está mais listado, mas ainda aparece no retorno de disponibilidade/simulação.
- O SKU pode ficar indisponível para compra devido a esse estoque residual ou mostrar uma quantidade irrealista nos endpoints de estoque.

## Workaround

Migrar a indexação da conta para o Delivery Promise resolve esse comportamento, pois elimina a dependência da base de disponibilidade legada, onde o estoque residual dos armazéns excluídos persiste.

Para contas **que não** utilizam o Delivery Promise: não há solução alternativa pública disponível. O tratamento é feito exclusivamente no backend e deve ser tratado caso a caso por meio de um ticket com a equipe de engenharia, que realizará a limpeza com base na disponibilidade.