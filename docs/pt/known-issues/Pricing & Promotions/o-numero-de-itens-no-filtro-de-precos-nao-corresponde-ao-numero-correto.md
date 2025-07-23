---
title: 'O número de itens no filtro de preços não corresponde ao número correto'
id: 1FyjpY1K6JfAQ0gRIuXyuO
status: PUBLISHED
createdAt: 2022-03-16T19:37:02.943Z
updatedAt: 2024-02-16T20:24:00.118Z
publishedAt: 2024-02-16T20:24:00.118Z
firstPublishedAt: 2022-03-16T19:37:03.370Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: number-of-itens-on-pricing-filter-does-not-correspond-to-correct-number
locale: pt
kiStatus: No Fix
internalReference: 371405
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Na IU de Preços, somos capazes de filtrar por marca ou categoria. Depois de fazer um filtro, a IU retorna apenas os produtos no filtro, mas o total de itens retornados no menu é na verdade o total sem nenhum filtro, e os dados mostrados são filtrados como esperado.




## Simulação


- Ir para `.myvtex.com/admin/pricing/#/prices'.
- Fazer um filtro por marca ou categoria;
- Verificar o valor dos itens;


## Workaround


Apesar das informações de IU erradas, se exportarmos o filtro, ele retornará somente os produtos filtrados. É apenas uma informação mal entendida sobre o número de itens na IU.

