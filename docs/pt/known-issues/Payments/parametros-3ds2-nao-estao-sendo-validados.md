---
title: 'Parâmetros 3DS2 não estão sendo validados'
slug: parametros-3ds2-nao-estao-sendo-validados
status: PUBLISHED
createdAt: 2021-03-26T00:14:41.000Z
updatedAt: 2026-07-02T16:58:34.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: 3ds2-parameters-not-being-validated
locale: pt
kiStatus: No Fix
internalReference: 349166
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Transações de débito processadas pelo CieloV3 com autenticação 3DS2 são canceladas intermitentemente sem que o cliente complete qualquer fluxo de erro. A falha ocorre quando o Cielo retorna valores nulos para os parâmetros de autenticação 3DS2, fazendo com que a autorização seja rejeitada. O problema afeta transações de débito em geral, independentemente da bandeira do cartão ou do banco emissor.

## Simulação

Não foi possível reproduzir. A falha ocorre aleatoriamente — algumas transações de débito são concluídas com sucesso, enquanto outras falham sob condições idênticas.

## Workaround

Não disponível.