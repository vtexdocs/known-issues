---
title: Erro no fluxo Change v2 com itens duplicados
slug: erro-no-fluxo-change-v2-com-itens-duplicados
status: PUBLISHED
createdAt: 2025-10-16T20:50:57.473Z
updatedAt: 2025-10-16T20:50:57.473Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: erro-in-change-v2-flow-with-duplicated-itens
locale: pt
kiStatus: Backlog
internalReference: 1219914
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A funcionalidade Change v2, usada para modificar pedidos diretamente na plataforma, apresenta um problema quando o pedido contém dois itens com o mesmo ID de SKU. Nessa situação, ao tentar excluir, editar ou manipular um dos itens, o sistema não consegue identificar corretamente qual item deve ser alterado dentro da matriz de itens, gerando um erro que impede a continuidade do fluxo de alteração.
Quando esse erro ocorre, a alteração não pode ser desfeita e a alteração não é executada corretamente.
## Simulação



- Crie um pedido com dois itens que tenham o mesmo ID de SKU.

- Acesse a tela Change v2 para esse pedido.

- Tente fazer uma alteração (como remover ou editar um dos itens duplicados).

- Observe que o sistema não localiza o item corretamente e exibe um erro, impedindo que a alteração prossiga
## Workaround



Se o erro ainda não tiver sido cometido (ou seja, nenhuma ação foi tomada na Change v2), o comerciante poderá usar o fluxo antigo, Change v1, para editar a ordem.
Se a tentativa de alteração via Change v2 já tiver ocorrido, recomendamos:


- Continue com o pedido normalmente até o faturamento;
- Em seguida, execute o processo de devolução, se necessário;
- Como alternativa, realize a alteração manualmente, fora da plataforma, se esse for um cenário único.



