---
title: 'O aplicativo Cielo 3DS2 está retornando o status "aprovado" mesmo em cenários nos quais a autenticação falhou.'
slug: o-aplicativo-cielo-3ds2-esta-retornando-o-status-aprovado-mesmo-em-cenarios-nos-quais-a-autenticacao-falhou
status: PUBLISHED
createdAt: 2023-05-05T17:48:42.000Z
updatedAt: 2026-07-09T14:37:45.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-cielo-3ds2-app-is-returning-an-approved-status-even-in-scenarios-when-the-authentication-has-failed
locale: pt
kiStatus: No Fix
internalReference: 820060
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a etapa de autenticação 3DS2 falha (por exemplo, o cliente não pode ser autenticado), o aplicativo de autenticação Cielo continua o fluxo incorretamente e envia um status "aprovado" para a etapa de autorização. Como resultado, a transação prossegue para o adquirente, mesmo que a verificação 3DS2 não tenha sido concluída.

Isso cria uma brecha de segurança: transações fraudulentas podem contornar a proteção 3DS2 e serem autorizadas pela Cielo. A Cielo pode posteriormente sinalizar essas transações como indicadores de fraude, colocando o comerciante em risco de contestações e estornos.

## Simulação

1. Habilite o 3DS2 em uma loja usando o conector CieloV3.

2. Tente uma compra com um cartão que falhará na etapa de inscrição 3DS2.

3. Observe nos logs de interação da transação que a autenticação retornou um status de falha ("Cliente não pode ser autenticado" ou similar).

4. Observe que, apesar da falha, a VTEX enviou "Autenticar: verdadeiro" para a Cielo e a transação foi autorizada.

## Workaround

Migre para o conector **Cielo Ecommerce** (CieloV4). O problema é específico do `cielo-authentication-app v1.2.1` usado pelo CieloV3. A Cielo recomendou oficialmente essa migração, e o fluxo 3DS2 funciona corretamente no conector mais recente.