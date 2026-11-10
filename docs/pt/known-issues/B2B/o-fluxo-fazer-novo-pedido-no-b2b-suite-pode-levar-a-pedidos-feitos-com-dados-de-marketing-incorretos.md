---
title: 'O fluxo "Fazer novo pedido" no B2B Suite pode levar a pedidos feitos com dados de marketing incorretos.'
slug: o-fluxo-fazer-novo-pedido-no-b2b-suite-pode-levar-a-pedidos-feitos-com-dados-de-marketing-incorretos
status: PUBLISHED
createdAt: 2026-11-10T22:14:12.000Z
updatedAt: 2026-11-10T22:17:31.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: order-again-flow-in-b2b-suite-can-lead-to-orders-placed-with-wrong-marketing-data
locale: pt
kiStatus: Backlog
internalReference: 1483449
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao refazer um pedido de uma organização (A) através do fluxo "Histórico de Pedidos - Refazer Pedido" e, em seguida, mudar para outra organização (B) e refazer outro pedido desta organização através do mesmo fluxo, o segundo pedido pode ser criado com o `orgId` e o `costId` da organização A em seus `marketingData`.

## Simulação

- Um usuário registrado em duas organizações, A e B, em uma loja usando o B2B Suite.
- Fazer o Pedido A usando a Organização A.
- Fazer o Pedido B usando a Organização B.
- Fazer login como Organização A.
- Refazer o Pedido A através do botão "Histórico de Pedidos - Refazer Pedido", sendo redirecionado para o checkout.
- Verificar se as tags UTM do cookie IPS serão definidas como o `orgId` e o `costId` da Organização A pela solicitação `/marketingData` feita por `b2b-checkout-settings`.
- Alterar a organização para a Organização B.
- Refazer o Pedido B através do mesmo fluxo, sendo redirecionado para o checkout.
- Verificar se:

- As tags UTM do cookie IPS ainda terão os mesmos valores: `orgId` e `costId` da Organização A.

- Nenhuma nova solicitação `/marketingData` será feita por `b2b-checkout-settings`.

- O formulário de pedido terá seus dados de marketing definidos com `orgId` e `costId` da Organização A.

- Se você prosseguir com o pedido, ele será feito com os dados da Organização B, mas com as tags da Organização A.

## Workaround

** **

1. Exclua o cookie IPS antes de refazer o pedido em uma organização diferente daquela que você usou originalmente.
2. Adicione parâmetros de consulta à solicitação de refazer o pedido `/createBy` com o `orgId` e o `costId` da organização atual.