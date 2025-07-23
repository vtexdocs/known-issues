---
title: 'O nome do grupo não é atualizado automaticamente na Pesquisa Inteligente'
id: 1GKDLtbKdYA0hq9YUhF2Bt
status: PUBLISHED
createdAt: 2023-05-08T19:00:44.637Z
updatedAt: 2023-05-08T19:00:45.207Z
publishedAt: 2023-05-08T19:00:45.207Z
firstPublishedAt: 2023-05-08T19:00:45.207Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: group-name-is-not-automatically-updated-on-intelligent-search
locale: pt
kiStatus: Backlog
internalReference: 821481
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, há dois módulos de coleta distintos:

1) O novo módulo de coleções
2) O módulo CMS antigo

Essa diferença está detalhada aqui: https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0

O módulo legado tem dois clusters de dados distintos, a coleção (A) e o nome do grupo (B)

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Intelligent%20Search/o-nome-do-grupo-nao-e-atualizado-automaticamente-na-pesquisa-inteligente_1.png)

No entanto, o novo módulo de coleções exibe apenas o nome da coleção, não seu GroupName:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Intelligent%20Search/o-nome-do-grupo-nao-e-atualizado-automaticamente-na-pesquisa-inteligente_2.png)

O resultado da Intelligent Search é baseado no Group Name, e é por isso que, nos casos em que as atualizações são feitas apenas na nova interface do usuário, os resultados não são refletidos no front-end e nas consultas de pesquisa.



## Simulação


1 - criar uma coleção usando qualquer uma das interfaces de usuário
2 - Atualizar a coleção somente no novo aplicativo, sem fazer alterações no legado.
3 - verifique os resultados da pesquisa e veja que ela não será atualizada.





## Workaround


Atualize manualmente o GroupName na interface do usuário herdada e clique em "Save Group" (Salvar grupo) para reindexar a coleção.





