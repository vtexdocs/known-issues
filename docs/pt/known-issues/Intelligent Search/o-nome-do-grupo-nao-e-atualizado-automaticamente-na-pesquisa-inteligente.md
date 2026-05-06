---
title: 'O nome do grupo não é atualizado automaticamente na Pesquisa Inteligente'
slug: o-nome-do-grupo-nao-e-atualizado-automaticamente-na-pesquisa-inteligente
status: PUBLISHED
createdAt: 2023-05-08T22:00:29.000Z
updatedAt: 2025-09-24T21:19:43.000Z
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

Atualmente, existem dois módulos de coleções distintos:

1) O novo módulo de coleções
2) O módulo CMS antigo

Essa diferença é detalhada aqui: https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0

O módulo legado possui dois conjuntos de dados distintos: a coleção (A) e o nome do grupo (B)

 ![](https://vtexhelp.zendesk.com/attachments/token/Wb85umTatjLPwTTdZ53985WHt/?name=image.png)

No entanto, o novo módulo de coleções exibe apenas o nome da coleção, e não o nome do grupo:

 ![](https://vtexhelp.zendesk.com/attachments/token/dXcYFigMd8BCKPCaF5wlvcUhZ/?name=image.png)

Os resultados da Pesquisa Inteligente são baseados no Nome do Grupo; por isso, nos casos em que as atualizações são feitas apenas na nova interface do usuário, os resultados não são refletidos no front-end e nas consultas de pesquisa.

## Simulação

1 - crie uma coleção usando qualquer uma das interfaces de usuário
2 - atualize a coleção apenas no novo aplicativo, sem fazer alterações no antigo.
3 - verifique os resultados da pesquisa e observe que eles não serão atualizados.

## Workaround

Atualize manualmente o GroupName na interface de usuário antiga e clique em “Salvar Grupo” para reindexar a coleção.