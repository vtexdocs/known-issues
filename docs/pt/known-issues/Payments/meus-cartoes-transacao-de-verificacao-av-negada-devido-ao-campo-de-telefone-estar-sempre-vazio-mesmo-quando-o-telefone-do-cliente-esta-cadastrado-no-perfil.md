---
title: 'Meus Cartões - Transação de verificação (AV) negada devido ao campo de telefone estar sempre vazio, mesmo quando o telefone do cliente está cadastrado no perfil.'
slug: meus-cartoes-transacao-de-verificacao-av-negada-devido-ao-campo-de-telefone-estar-sempre-vazio-mesmo-quando-o-telefone-do-cliente-esta-cadastrado-no-perfil
status: PUBLISHED
createdAt: 2026-09-01T22:33:47.000Z
updatedAt: 2026-09-01T22:33:47.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-cards-verification-transaction-av-denied-due-to-phone-field-always-null-even-when-customers-phone-is-registered-in-profile
locale: pt
kiStatus: Backlog
internalReference: 1455107
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um cliente salva um novo cartão de crédito na aba "Meus Cartões" em Minha Conta, a pequena cobrança de verificação gerada pode ser recusada pelo provedor de pagamento devido à falta de um número de telefone, mesmo que o cliente já tenha um número de telefone salvo em sua conta.

Ao contrário de outros casos em que a transação falha simplesmente porque o cadastro do cliente está incompleto, aqui o número de telefone está salvo na conta do cliente, mas não está sendo incluído corretamente quando a cobrança de verificação do cartão é gerada.

## Simulação

1. Acesse `https://.myvtex.com/account#/profile` e preencha o número de telefone do cliente.

2. Acesse `https://.myvtex.com/account#/cards/new` e adicione um novo cartão.

3. Verifique a transação de verificação gerada no painel de administração de pagamentos. O campo "telefone" ainda aparecerá como "nulo", mesmo que tenha sido preenchido na etapa 1. Dependendo do conector/adquirente, a ausência desse campo pode fazer com que a transação seja negada.

## Workaround

Não há solução alternativa.