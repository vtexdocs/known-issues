---
title: Os produtos não são atualizados depois que as políticas comerciais são criadas/atualizadas
slug: os-produtos-nao-sao-atualizados-depois-que-as-politicas-comerciais-sao-criadasatualizadas
status: PUBLISHED
createdAt: 2025-09-03T20:12:12.305Z
updatedAt: 2025-09-03T20:12:12.305Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-are-not-updated-after-trade-policies-are-createdupdated
locale: pt
kiStatus: Backlog
internalReference: 1286569
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Depois de criar ou atualizar uma política comercial, os produtos não serão atualizados internamente no Catálogo nem reindexados na Pesquisa. Eles serão alterados somente depois de serem atualizados diretamente ou por outros meios.

Isso inclui a ativação ou desativação de uma política comercial ou a alteração da coleção atribuída.
## Simulação



- Para ter um produto definido para todas as políticas comerciais.
- Ativar ou desativar alguma política comercial.
- Verificar as informações de SKU por meio da API (Get SKU).
- A política comercial alterada não estará correta na propriedade "SalesChannels" da API.


## Workaround


Atualmente, não há solução alternativa para esse problema. Para cenários amplos, será necessário um tíquete de suporte.



