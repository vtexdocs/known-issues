---
title: 'Pedidos com itens de alteração não podem ser faturados com referência a esses itens'
slug: pedidos-com-itens-de-alteracao-nao-podem-ser-faturados-com-referencia-a-esses-itens
status: PUBLISHED
createdAt: 2023-04-04T18:06:30.000Z
updatedAt: 2025-11-05T15:12:31.000Z
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

Atualmente, ao remover um item de um pedido por meio do fluxo de alteração de itens, espera-se que o item não seja exibido durante o fluxo de itens da fatura;
no entanto, devido à forma como o fluxo de alteração atua no JSON do pedido, mesmo que o item tenha sido removido do pedido, ele ainda é exibido quando o usuário executa o processo de “Enviar fatura com referência aos itens”;

E, por esse motivo, a interface do usuário exibe uma mensagem impedindo o usuário de continuar com esse fluxo de faturamento;

## Simulação

1 - Tenha um pedido no status “Processando envio” e selecione “Alterar item”;
2 - Remova uma ou mais unidades de um SKU existente do pedido;
3 - Fature o pedido (pela interface do usuário), selecionando a opção de faturamento - Enviar fatura com referência aos itens;
4 - E então, podemos observar que o item removido do pedido ainda está disponível para seleção nesta área;
5 - Ao tentar executar o fluxo de faturamento de itens referenciando itens, escolhendo ou não o item que foi removido, a interface do usuário retorna um erro, impedindo assim que o usuário continue com o fluxo de faturamento referenciando itens;

## Workaround

** **
Não há solução alternativa.