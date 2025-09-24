---
title: O nome do grupo não é atualizado automaticamente na Pesquisa Inteligente
slug: o-nome-do-grupo-nao-e-atualizado-automaticamente-na-pesquisa-inteligente
status: PUBLISHED
createdAt: 2025-09-24T18:20:19.840Z
updatedAt: 2025-09-24T18:20:19.840Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: group-name-is-not-automatically-updated-on-intelligent-search
locale: pt
kiStatus: Fixed
internalReference: 821481
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, há dois módulos de coleta distintos:

1) O novo módulo de coleções
2) O módulo CMS antigo

Essa diferença está detalhada aqui: https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0

O módulo legado tem dois grupos de dados distintos, a coleção (A) e o nome do grupo (B)

 ![](https://vtexhelp.zendesk.com/attachments/token/Wb85umTatjLPwTTdZ53985WHt/?name=image.png)

No entanto, o novo módulo de coleções exibe apenas o nome da coleção, não o GroupName:

 ![](https://vtexhelp.zendesk.com/attachments/token/dXcYFigMd8BCKPCaF5wlvcUhZ/?name=image.png)

Os resultados da Intelligent Search são baseados no Group Name, e é por isso que, nos casos em que as atualizações são feitas somente na nova interface do usuário, os resultados não são refletidos no front-end e nas consultas de pesquisa.

## Simulação


1 - criar uma coleção usando qualquer uma das interfaces de usuário
2 - Atualizar a coleção somente no novo aplicativo, sem fazer alterações no legado.
3 - verifique os resultados da pesquisa e veja que ela não será atualizada.



## Workaround


Atualize manualmente o GroupName na interface do usuário herdada e clique em "Save Group" para reindexar a coleção.



