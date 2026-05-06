---
title: 'Erro na criação de pagamentos personalizados'
slug: erro-na-criacao-de-pagamentos-personalizados
status: PUBLISHED
createdAt: 2024-03-06T14:19:36.000Z
updatedAt: 2024-03-06T14:22:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-in-custom-payments-creation
locale: pt
kiStatus: Backlog
internalReference: 995110
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os comerciantes podem encontrar um bug ao criar um Pagamento Personalizado: após preencher todos os campos e clicar em “Salvar”, a mensagem “O pagamento personalizado foi configurado com sucesso!” é exibida, mas a criação, na verdade, falhou (ela não aparece na interface do usuário).

## Simulação

Vá para a guia Pagamentos personalizados e configure qualquer regra de pagamento; você poderá encontrar o problema descrito acima.

## Workaround

A única solução alternativa seria tentar novamente a criação até que ela apareça na interface do usuário.