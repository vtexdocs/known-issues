---
title: 'Criar uma especificação de SKU obrigatória e ativa não desativa as SKUs da categoria.'
slug: criar-uma-especificacao-de-sku-obrigatoria-e-ativa-nao-desativa-as-skus-da-categoria
status: PUBLISHED
createdAt: 2026-07-30T21:47:00.000Z
updatedAt: 2026-07-30T21:47:00.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-a-mandatory-active-sku-specification-is-not-inactivating-category-skus
locale: pt
kiStatus: Backlog
internalReference: 1441624
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, quando uma especificação obrigatória é criada **após** já existirem SKUs ativos em uma determinada categoria, eles não são desativados.

O cenário esperado, conforme o aviso da interface do usuário abaixo, é que, ao criar uma especificação obrigatória em uma categoria, todos os SKUs ativos nessa categoria sejam desativados até que os valores da especificação sejam preenchidos.

![](https://vtexhelp.zendesk.com/attachments/token/YYcHzuU2WkcD7DP1ZvcAOYm0J/?name=image.png)

Resultado

![](https://vtexhelp.zendesk.com/attachments/token/Gn0CO1DGe9fxU0w066bZblOcX/?name=image.png)

## Simulação

1 - Para uma categoria com 1 ou mais SKUs ativos, acesse o menu de categorias (https://myaccount.myvtex.com/admin/Site/Campo.aspx)

2 - Crie um novo campo de SKU preenchendo os campos "isMandatory" e "isActive" como verdadeiro

3 - A mensagem mencionada anteriormente, "todos os SKUs serão inativados", será exibida

4 - Acesse novamente o SKU dentro desta categoria; observe que nada foi alterado. Se isso realmente aconteceu, o sistema atingiu um estado incorreto de SKUs ativos com campos obrigatórios vazios.

## Workaround

-