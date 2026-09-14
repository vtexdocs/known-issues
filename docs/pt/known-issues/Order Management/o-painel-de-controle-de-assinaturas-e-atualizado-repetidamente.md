---
title: 'O painel de controle de assinaturas é atualizado repetidamente.'
slug: o-painel-de-controle-de-assinaturas-e-atualizado-repetidamente
status: PUBLISHED
createdAt: 2022-05-02T21:14:51.000Z
updatedAt: 2026-09-14T22:56:59.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscription-dashboard-gets-refreshed-repeatedly
locale: pt
kiStatus: Fixed
internalReference: 570688
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em algumas circunstâncias, ao verificar as informações de assinaturas com problemas, devido ao número de caracteres da mensagem, ocorre um problema na indexação das informações na interface do usuário, causando uma "atualização repetida". Isso impacta não apenas a experiência do usuário, mas também dificulta a visualização do erro tanto na grade do painel quanto na opção pop-up "(ver mais)".

## Simulação

Esse comportamento ocorre na funcionalidade "**Assinaturas > Painéis > Pedidos de Assinatura > Ciclos com problemas**", dependendo do número de caracteres na mensagem.

## Workaround

No momento, não temos uma solução alternativa para esse problema de navegabilidade da interface do usuário.