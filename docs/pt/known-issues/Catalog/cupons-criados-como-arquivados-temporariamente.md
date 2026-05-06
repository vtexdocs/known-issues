---
title: 'Cupons criados como arquivados temporariamente'
slug: cupons-criados-como-arquivados-temporariamente
status: PUBLISHED
createdAt: 2023-09-01T13:34:06.000Z
updatedAt: 2023-09-01T13:34:06.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: coupons-created-as-archived-temporarrily
locale: pt
kiStatus: Backlog
internalReference: 892041
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, quando um cupom é criado, a interface do usuário (UI)/API mostra que ele está arquivado por alguns minutos (~2), embora, na verdade (no banco de dados de preços), o cupom esteja ativo.

Após alguns minutos, o cupom exibe os dados corretos.

É importante observar que isso não afeta as informações “reais” do cupom; mesmo quando ele é exibido incorretamente como “arquivado” na interface do usuário devido a esse problema, ele poderá ser usado no checkout.

## Simulação

Basta criar um cupom e verificar seus dados para que ele já apareça como arquivado.

## Workaround

Não há outra solução alternativa além de esperar por um breve período.