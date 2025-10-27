---
title: 'Convite do vendedor Rota não encontrada após a criação da conta'
slug: convite-do-vendedor-rota-nao-encontrada-apos-a-criacao-da-conta
status: PUBLISHED
createdAt: 2025-10-16T20:31:16.115Z
updatedAt: 2025-10-16T20:31:16.115Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-invite-route-not-found-after-account-creation
locale: pt
kiStatus: Backlog
internalReference: 1167493
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Nesse processo, geramos uma conta VTEX para esses vendedores, que é o Portal do Vendedor. A criação da conta é um processo de autoatendimento, ou seja, o próprio vendedor fornece os dados por meio de um formulário e, ao enviá-los, criamos a conta. Uma vez criada a conta, o vendedor é imediatamente redirecionado para seu administrador.
## Simulação




- vá para o fluxo de convite ao vendedor em: https://VTEX.myvtex.com/admin/seller-invite/
- registrar uma nova conta no Portal do Vendedor.
- concluir o registro de uma conta do Portal do Vendedor

**ERRO

    {"code": "NotFound", "message": "Route test21nov2569.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=/admin&email=andrei.basoc+test21nov2@vtex.com not found", "source": "Vtex.Kube.Router", "requestId": "f19875630eac47a588b2e32250292f4a"}


 ![](https://vtexhelp.zendesk.com/attachments/token/aoT6ZHSmrHyO7Te9aKKN1pRCQ/?name=image.png
## Workaround


Há um atraso no provisionamento da conta, pois, após algum tempo, esse erro se normaliza, ou seja, a conta se torna acessível ao vendedor.



