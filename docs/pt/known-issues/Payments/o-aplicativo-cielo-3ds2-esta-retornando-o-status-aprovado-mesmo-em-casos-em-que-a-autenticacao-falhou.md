---
title: 'O aplicativo Cielo 3DS2 está retornando o status “aprovado” mesmo em casos em que a autenticação falhou.'
slug: o-aplicativo-cielo-3ds2-esta-retornando-o-status-aprovado-mesmo-em-casos-em-que-a-autenticacao-falhou
status: PUBLISHED
createdAt: 2023-05-05T14:48:42.000Z
updatedAt: 2023-05-05T14:48:42.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-cielo-3ds2-app-is-returning-an-approved-status-even-in-scenarios-when-the-authentication-has-failed
locale: pt
kiStatus: Backlog
internalReference: 820060
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, nosso aplicativo de autenticação cielo-authentication-app v1.2.1 retorna o status "aprovado" na etapa final do fluxo ao chamar a etapa de autorização que avalia se a autenticação falhou ou não. No entanto, o aplicativo só aciona a etapa de falha quando há um erro gerado nessa etapa. Como resultado, mesmo que o status seja “falha” na etapa anterior, mas não haja nenhum erro gerado na etapa /authorize atual, o status ainda é considerado “aprovado”, permitindo que enviemos uma solicitação ao adquirente. Esse não é o comportamento esperado, pois deveríamos negar a autorização de pagamento e alterar a transação para “autorização negada” nesse cenário.

## Simulação

Faça um pedido com o aplicativo ativado e use um cartão válido que falhará na etapa de cadastro. Você poderá então verificar as ferramentas de desenvolvedor e observar que, mesmo que a chamada para /authorization falhe, o status ainda está sendo enviado como “aprovado”.

## Workaround

N/A