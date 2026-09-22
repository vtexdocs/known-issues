---
title: 'Convite do vendedor Rota não encontrada após a criação da conta'
slug: convite-do-vendedor-rota-nao-encontrada-apos-a-criacao-da-conta
status: PUBLISHED
createdAt: 2025-01-22T19:09:53.000Z
updatedAt: 2026-09-22T19:24:46.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: seller-invite-route-not-found-after-account-creation
locale: pt
kiStatus: Fixed
internalReference: 1167493
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Neste processo, geramos uma conta VTEX para esses vendedores, que é o Seller Portal. A criação da conta é um processo de autoatendimento, ou seja, o próprio vendedor fornece os dados por meio de um formulário e, ao enviá-lo, criamos a conta. Assim que a conta é criada, o vendedor é redirecionado imediatamente para sua área administrativa.

## Simulação

- Acesse o fluxo de convite de vendedor em: https://VTEX.myvtex.com/admin/seller-invite/
- Registre uma nova conta no Seller Portal.

- Concluir o registro de uma conta no Seller Portal

**ERRO**

{"code":"NotFound","message":"Route test21nov2569.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=/admin&email=andrei.basoc+test21nov2@vtex.com not found","source":"Vtex.Kube.Router","requestId":"f19875630eac47a588b2e32250292f4a"}

![](https://vtexhelp.zendesk.com/attachments/token/aoT6ZHSmrHyO7Te9aKKN1pRCQ/?name=image.png)

## Workaround

Há um atraso no provisionamento da conta, pois, após algum tempo, esse erro se normaliza, ou seja, a conta é provisionada. torna-se acessível ao vendedor.