---
title: 'As operações não podem ser executadas corretamente devido ao campo `documentType` estar vazio.'
slug: as-operacoes-nao-podem-ser-executadas-corretamente-devido-ao-campo-documenttype-estar-vazio
status: PUBLISHED
createdAt: 2022-11-11T20:22:14.000Z
updatedAt: 2023-12-06T15:20:55.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: operations-cannot-be-performed-correctly-due-to-null-documenttype-field
locale: pt
kiStatus: Backlog
internalReference: 697107
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns provedores exigem que o campo `documentType` não seja `null`, ou seja, que esteja preenchido corretamente para a realização de determinadas operações de pagamento.

Até o momento, temos dois cenários conhecidos:

1. A ausência desse campo não permite que o pagamento seja analisado corretamente pelo sistema antifraude, o que coloca a transação em risco.
2. A ausência do campo impede que o pagamento seja autorizado e, consequentemente, leva ao cancelamento da transação.

## Simulação

Esse problema ocorre quando um cliente usa informações de uma empresa para concluir um pedido.
Se o nome da empresa for usado para concluir a transação, o campo `documentType` fica em branco, causando problemas na aprovação do pagamento.

## Workaround

Para o primeiro cenário, é possível usar uma API interna para pular a etapa de análise antifraude.
Apesar de ser fortemente desaconselhado, é uma operação possível.