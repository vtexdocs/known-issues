---
title: 'Erro no Braspag ao registrar ou cancelar devido a um erro com o código BP901'
slug: erro-no-braspag-ao-registrar-ou-cancelar-devido-a-um-erro-com-o-codigo-bp901
status: PUBLISHED
createdAt: 2021-12-17T23:09:52.000Z
updatedAt: 2026-06-05T20:33:59.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: braspag-error-when-capturing-or-canceling-due-to-an-error-with-code-bp901
locale: pt
kiStatus: No Fix
internalReference: 490428
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar o conector **BrasPag**, algumas **solicitações de captura ou cancelamento** falham com o código de erro **BP901**. Esse erro indica um **timeout** na comunicação entre o BrasPag e o adquirente — o que significa que a operação foi tentada, mas nenhuma resposta foi recebida dentro do prazo esperado, deixando a transação em um estado inconsistente.

## Simulação

Não foi possível reproduzir o erro em um ambiente controlado. O erro ocorre de forma intermitente em produção, dependendo da estabilidade da comunicação entre o BrasPag e a operadora no momento da solicitação.

## Workaround

Não há solução alternativa disponível.