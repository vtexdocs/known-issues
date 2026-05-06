---
title: 'A etapa de envio pode exibir uma mensagem de indisponibilidade enquanto as opções de envio estão sendo calculadas'
slug: a-etapa-de-envio-pode-exibir-uma-mensagem-de-indisponibilidade-enquanto-as-opcoes-de-envio-estao-sendo-calculadas
status: PUBLISHED
createdAt: 2022-09-01T15:42:16.000Z
updatedAt: 2023-03-24T14:34:47.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-step-may-display-an-unavailability-message-while-the-shipping-options-are-being-calculated
locale: pt
kiStatus: Backlog
internalReference: 650038
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Um usuário que tenha salvo um endereço em seu perfil, ao chegar à etapa de endereço em que a seleção de envio é exibida, ao selecionar outra opção, um aviso de "A entrega não está disponível para este endereço" é exibido erroneamente; isso pode ocorrer rapidamente devido ao carregamento das informações, e pode acontecer de acordo com o atraso nessa pesquisa, dependendo da complexidade da loja.

## Simulação

Um usuário conectado, ao tentar alterar o endereço selecionado por outro na etapa de entrega, o alerta será exibido e, em seguida, o endereço será selecionado normalmente.

## Workaround

N/A