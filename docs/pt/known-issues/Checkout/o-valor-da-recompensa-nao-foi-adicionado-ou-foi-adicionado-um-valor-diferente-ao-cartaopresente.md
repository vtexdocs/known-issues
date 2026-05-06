---
title: 'O valor da recompensa não foi adicionado ou foi adicionado um valor diferente ao cartão-presente'
slug: o-valor-da-recompensa-nao-foi-adicionado-ou-foi-adicionado-um-valor-diferente-ao-cartaopresente
status: PUBLISHED
createdAt: 2023-06-14T16:06:20.000Z
updatedAt: 2023-06-27T12:44:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: reward-value-not-added-or-have-a-different-value-added-to-gift-card
locale: pt
kiStatus: Backlog
internalReference: 844079
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O valor da recompensa pode não ser adicionado ou ter um valor diferente adicionado ao cartão-presente do cliente quando a promoção estiver configurada para aplicar o valor da recompensa assim que o status do pedido mudar para “pagamento aprovado”.

## Simulação

- Crie uma promoção de valor de recompensa para ser aplicada quando o status do pedido mudar para “pagamento aprovado”;
- Conclua uma compra;
- Verifique as interações em “Detalhes do pedido” no painel de administração; não aparecerá a mensagem "_XX adicionado ao programa de fidelidade do usuário_"

## Workaround

- Selecione no painel de administração a opção "Cartões-presente" no menu, selecione o cartão-presente do comprador e clique em "Extrato" na coluna Ações para adicionar o valor correto;
- Configure a promoção de valor de recompensa para ser aplicada quando o status do pedido mudar para "faturado".