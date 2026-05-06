---
title: 'A substituição do preço define a lógica de preço do KIT'
slug: a-substituicao-do-preco-define-a-logica-de-preco-do-kit
status: PUBLISHED
createdAt: 2021-07-30T14:09:27.000Z
updatedAt: 2025-01-02T13:48:52.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: put-price-overwrites-kit-price-logic
locale: pt
kiStatus: Backlog
internalReference: 404486
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A composição do preço do KIT deve basear-se no cálculo de seus componentes e respectivas quantidades.

Ou seja, o preço de um KIT deve ser:
`SKU_KIT_Price= (componente_1*qty_1) + (componente_2*qty_2) + (...) + (componente_n*qty_n)`

No entanto, atualmente existe uma maneira de contornar essa lógica se o usuário inserir um Preço PUT diretamente no SKU do kit no Módulo de Preços.

## Simulação

1. Crie um KIT com pelo menos 2 componentes e defina seus preços e quantidades;
2. Verifique se o preço do KIT está definido de acordo com a lógica mencionada acima.
3. Atualize o preço do KIT no módulo de preços inserindo um Preço PUT no SKU do kit;
4. Verifique se, mesmo ao atualizar os preços dos componentes e suas quantidades, o preço do KIT permanecerá como o preço PUT definido anteriormente.

*Observação importante: isso também ocorre para alterações feitas diretamente no administrador do módulo de preços após a criação do kit. Essencialmente, o preço do kit é corrigido de acordo com a fórmula acima apenas no momento da sua criação, mas não em atualizações posteriores.

## Workaround

Faça quaisquer alterações nos componentes; um novo Preço PUT com o novo cálculo e a lógica correta irá sobrescrevê-lo novamente, normalizando assim o comportamento “incorreto”.