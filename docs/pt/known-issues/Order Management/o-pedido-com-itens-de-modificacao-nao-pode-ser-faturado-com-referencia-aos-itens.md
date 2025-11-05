---
title: 'O pedido com itens de modificação não pode ser faturado com referência aos itens'
slug: o-pedido-com-itens-de-modificacao-nao-pode-ser-faturado-com-referencia-aos-itens
status: PUBLISHED
createdAt: 2025-11-05T12:12:59.008Z
updatedAt: 2025-11-05T12:12:59.008Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-change-itens-cannot-be-invoiced-referencing-the-items
locale: pt
kiStatus: Backlog
internalReference: 784171
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Hoje, ao remover um item de um pedido por meio do fluxo de alteração de itens, a expectativa é que o item não seja exibido durante o fluxo de itens da fatura;
No entanto, devido à forma como o fluxo de alteração atua no json do pedido, mesmo que o item tenha sido removido do pedido, ele ainda é exibido quando o usuário executa o processo Enviar fatura com referência a itens;

E, por esse motivo, a interface do usuário retorna uma mensagem que impede o usuário de continuar com esse fluxo de fatura;
## Simulação


1 - Tenha um pedido no status "Handling shipment" e selecione "Change item";
2 - Remova uma ou mais unidades de uma SKU existente do pedido;
3 - Faturar o pedido (via UI), selecionando a opção invoice - Submit invoice referencing items;
4 - E então, podemos observar que o item removido do pedido ainda está disponível para seleção nessa área;
5 - Ao tentar realizar o fluxo de itens da fatura referenciando itens escolhendo ou não o item que foi removido a UI retorna um erro, impedindo assim que o usuário continue com o fluxo de item referenciando a fatura;
## Workaround


** **
Não há solução alternativa.


