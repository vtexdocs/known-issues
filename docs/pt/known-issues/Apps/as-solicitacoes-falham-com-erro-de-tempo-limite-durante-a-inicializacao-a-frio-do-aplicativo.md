---
title: 'As solicitações falham com erro de tempo limite durante a inicialização a frio do aplicativo.'
slug: as-solicitacoes-falham-com-erro-de-tempo-limite-durante-a-inicializacao-a-frio-do-aplicativo
status: PUBLISHED
createdAt: 2023-04-13T15:42:30.000Z
updatedAt: 2026-07-24T22:42:22.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: requests-failing-with-timeout-during-app-cold-start
locale: pt
kiStatus: Backlog
internalReference: 789499
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um aplicativo não recebe solicitações por algum tempo, ele entra em um estado de inicialização a frio. As solicitações enviadas ao aplicativo enquanto ele está "acordando" podem falhar devido a um tempo limite. Como resultado, alguns eventos podem nunca ser entregues com sucesso. Portanto, alguns eventos/solicitações para o aplicativo afetado podem ser perdidos silenciosamente quando o aplicativo está em inicialização a frio e demora muito para responder.

## Simulação

Este é um comportamento intermitente, portanto, não é possível simulá-lo.

## Workaround

Em algumas situações, você pode reprocessar o cenário, já que o aplicativo já está "acordado" nesse ponto.