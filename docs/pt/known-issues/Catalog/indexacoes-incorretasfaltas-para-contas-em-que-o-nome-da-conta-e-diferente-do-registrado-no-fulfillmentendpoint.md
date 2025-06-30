---
title: Indexações incorretas/faltas para contas em que o nome da conta é diferente do registrado no fulfillmentEndpoint
slug: indexacoes-incorretasfaltas-para-contas-em-que-o-nome-da-conta-e-diferente-do-registrado-no-fulfillmentendpoint
status: PUBLISHED
createdAt: 2025-06-30T20:03:35.857Z
updatedAt: 2025-06-30T20:03:35.857Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrectlacking-indexings-for-accounts-where-the-accountname-is-different-from-the-one-registered-on-the-fulfillmentendpoint
locale: pt
kiStatus: No Fix
internalReference: 1050023
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, uma conta de franquia pode ter seu endpoint fulFillment diferente de seu nome de conta "oficial", o que é uma prática comum para arquiteturas específicas de vendedor<>marketplace que precisam de vários preços e/ou estoque para políticas comerciais distintas usando o recurso de franquia com vários vendedores para a mesma franquia.

Embora esse recurso funcione em termos de exibição do conteúdo necessário para os compradores, quando os dados relevantes para as vendas, como preço/estoque, são atualizados para o vendedor principal de uma determinada franquia, as outras contas associadas não são indexadas corretamente, gerando disponibilidade inconsistente e exibições de preços entre os canais de venda de uma loja.
## Simulação



- Para uma loja que tenha vários vendedores e mais de uma conta de franquia, configure mais de dois vendedores apontando, no ponto de entrada de atendimento, para a mesma conta de franquia em suas configurações de vendedor.
- Tente atualizar os dados de preço/estoque de qualquer item da conta de franquia.
- Verifique os dados atualizados nos outros vendedores associados que usam a conta de franquia em seus pontos de extremidade do FFM; eles estarão desatualizados
## Workaround


Em vez disso, use o recurso de mapeamento do canal de vendas para implementar essa arquitetura.


