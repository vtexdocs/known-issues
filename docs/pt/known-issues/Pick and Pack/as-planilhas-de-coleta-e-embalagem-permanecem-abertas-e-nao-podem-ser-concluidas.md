---
title: As planilhas de coleta e embalagem permanecem abertas e não podem ser concluídas
slug: as-planilhas-de-coleta-e-embalagem-permanecem-abertas-e-nao-podem-ser-concluidas
status: PUBLISHED
createdAt: 2025-10-16T20:28:59.683Z
updatedAt: 2025-10-16T20:28:59.683Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: pick-and-pack-worksheets-remain-open-and-cannot-be-completed
locale: pt
kiStatus: Backlog
internalReference: 1160144
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os status da planilha incluem **pending**, **to pack**, **completed** e **canceled**.

Ao fechar uma planilha, ela deve atingir o estado **completed** ou **canceled**. Um possível problema é que esses dois estados finais podem não ser alcançados, o que impediria a conclusão do processo.

Isso pode acontecer se os itens associados à planilha não tiverem sido revisados pelo selecionador ou estiverem bloqueados por processos pendentes, como transferências ou aprovações.

Como resultado, a planilha é bloqueada em um estado que não permite que o fluxo continue.
## Simulação



- O selecionador acessa a planilha.
- O selecionador continua a selecionar cada item.
- Quando a seleção estiver concluída, isso significa que todos os itens da planilha estão marcados como "**Picked**".
- A planilha passa automaticamente para o estado "**Completed**", mas esse comportamento não ocorre.


## Workaround


Não há solução alternativa



