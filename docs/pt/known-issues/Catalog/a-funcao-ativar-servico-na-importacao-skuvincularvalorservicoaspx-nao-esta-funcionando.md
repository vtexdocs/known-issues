---
title: 'A função "Ativar serviço na importação" (SkuVincularValorServico.aspx) não está funcionando'
slug: a-funcao-ativar-servico-na-importacao-skuvincularvalorservicoaspx-nao-esta-funcionando
status: PUBLISHED
createdAt: 2021-03-02T18:52:43.000Z
updatedAt: 2024-05-10T14:23:57.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activate-service-on-import-skuvincularvalorservicoaspx-not-working
locale: pt
kiStatus: Backlog
internalReference: 339894
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, na funcionalidade de importação da página SkuVincularValorServico.aspx, ao tentar alterar serviços já existentes de inativos para ativos, os valores não são alterados. A interface do usuário indica que os valores foram alterados, mas, na verdade, nada acontece.

(O contrário não é verdadeiro: mudar de ativo para inativo funciona).

## Simulação

1) Acesse a interface do usuário https://account.myvtex.com/admin/Site/SkuVincularValorServico.aspx e troque as linhas na planilha anexada de 0 para 1 e vice-versa:

 ![](https://vtexhelp.zendesk.com/attachments/token/ladK39V5My6gjGixeHuNTaV2b/?name=inline-1801216200.png)

2) Verifique os efeitos finais no SKU cujos valores você alterou:
 ![](https://vtexhelp.zendesk.com/attachments/token/znYEzQhMevPcRVYKlBQYa73fF/?name=inline1216426643.png)

Você poderá defini-los como inativos, mas não como ativos. A interface de importação indica que foram feitas alterações:
 ![](https://vtexhelp.zendesk.com/attachments/token/6iKARGtVqTbKaL0vY9s7XPvt6/?name=inline2110004305.png)

Na verdade, nenhum valor é alterado no banco de dados da conta em questão.

## Workaround

Usar a interface do usuário para fazer alterações de inativo -->> ativo e/ou nossas APIs de serviço:
https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-sku-service