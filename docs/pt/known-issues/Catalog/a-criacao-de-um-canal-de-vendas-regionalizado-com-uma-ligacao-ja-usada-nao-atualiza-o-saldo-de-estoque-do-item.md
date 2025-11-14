---
title: 'A criação de um canal de vendas regionalizado com uma ligação já usada não atualiza o saldo de estoque do item'
slug: a-criacao-de-um-canal-de-vendas-regionalizado-com-uma-ligacao-ja-usada-nao-atualiza-o-saldo-de-estoque-do-item
status: PUBLISHED
createdAt: 2025-11-14T18:10:12.842Z
updatedAt: 2025-11-14T18:10:12.842Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-a-regionalized-sales-channel-with-an-already-used-binding-does-not-update-the-items-stockbalance
locale: pt
kiStatus: Backlog
internalReference: 1005112
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Para contas regionalizadas, o sistema de índice filtra, pelos canais de vendas regionalizados, o saldo de estoque que deve aparecer, para não mostrar vínculos de vendas que não são regionalizados.

Se um novo canal precisar ser regionalizado em uma vinculação que já esteja em produção, a indexação não será acionada. Causando alguma inconsistência na disponibilidade dos produtos.
## Simulação



1. Crie um canal de vendas regionalizado em uma ligação de produção;
2. Verifique se os estoques e a disponibilidade são consistentes com todos os produtos
## Workaround


Force uma reindexação com stockSimulation. Atualize o estoque, por exemplo.



