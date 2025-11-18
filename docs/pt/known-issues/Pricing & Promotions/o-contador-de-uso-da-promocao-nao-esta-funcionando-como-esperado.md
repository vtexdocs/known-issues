---
title: 'O contador de uso da promoção não está funcionando como esperado'
slug: o-contador-de-uso-da-promocao-nao-esta-funcionando-como-esperado
status: PUBLISHED
createdAt: 2025-11-18T22:18:52.787Z
updatedAt: 2025-11-18T22:18:52.787Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-usage-counter-not-working-as-expected
locale: pt
kiStatus: Fixed
internalReference: 1090367
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O contador de uso da promoção não está funcionando como esperado devido a um problema de validação nas notificações de uso. O Checkout é responsável por notificar o uso de uma promoção, enquanto o OMS é responsável por notificar os cancelamentos (que devem diminuir a contagem de uso). Podem ocorrer notificações duplicadas em ambos os cenários e, como essas notificações não são validadas adequadamente, surgem discrepâncias e os contadores podem se tornar inconsistentes.
Esse problema afeta três contadores diferentes que devem ser corrigidos: (1) contagem total de uso de promoções, (2) contagem de uso de promoções por perfil e (3) contagem total de uso de cupons. A equipe já lançou uma correção para o primeiro caso (contagem total de uso da promoção), mas os outros dois ainda precisam de uma correção.
## Simulação



1. Crie uma promoção com um limite de uso específico.
2. Aplique a promoção a vários pedidos por meio do sistema Checkout.
3. Cancelar alguns desses pedidos por meio do OMS.
4.

Observe que o contador de uso da promoção pode permitir a criação de mais pedidos do que o pretendido.



Atualmente, nem sempre é possível reproduzir esse problema de forma consistente, pois a causa raiz exata das notificações duplicadas ainda não foi determinada
## Workaround


N/A


