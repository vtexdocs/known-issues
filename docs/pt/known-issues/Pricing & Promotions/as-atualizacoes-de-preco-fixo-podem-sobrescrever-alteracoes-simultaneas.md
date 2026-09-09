---
title: 'As atualizações de preço fixo podem sobrescrever alterações simultâneas.'
slug: as-atualizacoes-de-preco-fixo-podem-sobrescrever-alteracoes-simultaneas
status: PUBLISHED
createdAt: 2026-09-09T15:50:21.000Z
updatedAt: 2026-09-09T15:50:21.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: fixed-price-updates-may-overwrite-concurrent-changes
locale: pt
kiStatus: Backlog
internalReference: 1458558
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando várias atualizações de preço fixo para o mesmo SKU são enviadas simultaneamente ou em uma sequência curta, pode ocorrer uma condição de corrida no fluxo de atualização de preço fixo.

As solicitações podem ler o mesmo snapshot ou um snapshot desatualizado da matriz `fixedPrices` do SKU e, consequentemente, sobrescrever toda a matriz com dados obsoletos. Como resultado, uma atualização de preço fixo de uma solicitação pode, inadvertidamente, sobrescrever ou remover alterações feitas por outras solicitações simultâneas.

Isso pode causar a perda de atualizações de preço, incluindo preços configurados para diferentes políticas comerciais, mesmo que as solicitações da API retornem com sucesso e não haja nenhuma operação de exclusão explícita registrada para o preço afetado.

## Simulação

1. Selecione um SKU com preços fixos configurados para várias políticas comerciais.
2. Envie várias solicitações de atualização de preço fixo para o mesmo SKU simultaneamente ou em um curto período, usando o endpoint de Preço Fixo:
`POST /api/pricing/prices/{itemId}/fixed/{priceTableId}`
3. Configure cada solicitação para atualizar uma política comercial ou preço diferente para o mesmo SKU.
4. Verifique o array `fixedPrices` resultante após o processamento de todas as solicitações.
5. Em uma condição de corrida, uma ou mais atualizações podem estar ausentes ou podem ser revertidas porque uma solicitação persistiu um snapshot desatualizado do array `fixedPrices`.
6. O log de auditoria pode mostrar operações bem-sucedidas de `Preço Fixo Modificado` sem a exclusão explícita do preço ausente.

O problema é mais provável de ocorrer quando várias solicitações para o mesmo SKU são processadas simultaneamente. Não há um intervalo de tempo específico entre as solicitações que possa garantir a prevenção do problema, pois o comportamento depende do número e do momento das atualizações simultâneas.

## Workaround

Em vez de enviar uma solicitação `POST` para cada preço configurado para o mesmo SKU, use o endpoint Put Price para enviar todos os preços do SKU em uma única operação.

Isso reduz o número de atualizações simultâneas para o mesmo SKU e evita o cenário em que várias solicitações sobrescrevem as alterações umas das outras com base em dados desatualizados.