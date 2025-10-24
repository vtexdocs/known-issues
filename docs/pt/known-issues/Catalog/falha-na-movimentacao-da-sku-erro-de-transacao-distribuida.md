---
title: 'Falha na movimentação da SKU: Erro de transação distribuída'
slug: falha-na-movimentacao-da-sku-erro-de-transacao-distribuida
status: PUBLISHED
createdAt: 2025-09-29T13:14:48.897Z
updatedAt: 2025-09-29T13:14:48.897Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-move-failure-distributed-transaction-error
locale: pt
kiStatus: Backlog
internalReference: 1297799
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um usuário tenta mover uma SKU dentro de um produto, a ação pode falhar. O usuário receberá uma mensagem de erro na tela e um registro no DevTools mostrará a mensagem "Esta plataforma não oferece suporte a transações distribuídas". Esse problema ocorre de forma intermitente.
## Simulação


Por meio da UI do catálogo no Admin, insira uma SKU e tente movê-la para outro produto. A mensagem de erro "You can't move the SKU to another product. Try it again" será exibida na interface do usuário do Admin. A mensagem detalhada pode ser vista na guia DevTools Network do navegador
## Workaround


N/A. Alguns produtos causarão o erro e não será possível movê-los.



