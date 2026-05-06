---
title: 'O Gift Card HUB aceita um ID inválido/vazio ao criar uma transação'
slug: o-gift-card-hub-aceita-um-id-invalidovazio-ao-criar-uma-transacao
status: PUBLISHED
createdAt: 2023-07-05T12:50:22.000Z
updatedAt: 2023-07-05T12:50:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-hub-accepts-invalidempty-id-in-response-to-create-transaction
locale: pt
kiStatus: Backlog
internalReference: 855864
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A documentação do protocolo do nosso provedor de cartões-presente especifica que a API de criação de transação deve incluir um ID válido na resposta. No entanto, a implementação atual do protocolo permite que os provedores respondam a essa solicitação com um ID vazio ou inválido. Como resultado, ao tentar liquidar o pagamento, a transação fica bloqueada devido à falta do ID necessário. Isso faz com que seja gerado um erro e a transação permaneça bloqueada no processo.

## Simulação

Responda à chamada de criação de transação com um ID inválido e tente concluir a transação.

## Workaround

N/A