---
title: 'A condição de número máximo de parcelas nos públicos da campanha não é avaliada corretamente'
slug: a-condicao-de-numero-maximo-de-parcelas-nos-publicos-da-campanha-nao-e-avaliada-corretamente
status: PUBLISHED
createdAt: 2025-10-16T19:55:47.087Z
updatedAt: 2025-10-16T19:55:47.087Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: maximum-number-of-installments-condition-in-campaign-audiences-is-not-evaluated-correctly
locale: pt
kiStatus: Backlog
internalReference: 1141291
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A condição **Número máximo de parcelas** nas configurações de **Campanha de público** não está sendo avaliada corretamente. Esse requisito não é considerado ao determinar se a campanha é correspondida, permitindo que campanhas promocionais sejam aplicadas incorretamente. Esse problema impossibilita a aplicação de restrições baseadas em parcelas nas campanhas, o que pode levar a aplicações de descontos não intencionais.
## Simulação



1. Crie uma **Campanha de público** e adicione uma condição para um **Número máximo de parcelas** igual a "2".
2. Crie uma **Campanha de promoção** e associe-a à Campanha de público-alvo configurada.
3. Adicione itens ao carrinho que atendam às condições definidas na Audience Campaign.
4. Vá para o checkout e observe que, já na etapa do carrinho, antes que um método de pagamento seja definido, a campanha é correspondida.


## Workaround


Os comerciantes podem configurar uma **Promoção Regular** com restrições de parcelamento na seção **Métodos de Pagamento**. Essa abordagem é menos dinâmica do que Audience Campaigns, mas garante que as restrições baseadas em parcelas sejam aplicadas.


