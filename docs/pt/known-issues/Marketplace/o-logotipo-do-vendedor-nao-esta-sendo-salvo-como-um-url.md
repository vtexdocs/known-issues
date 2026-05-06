---
title: 'O logotipo do vendedor não está sendo salvo como um URL'
slug: o-logotipo-do-vendedor-nao-esta-sendo-salvo-como-um-url
status: PUBLISHED
createdAt: 2023-01-19T14:35:13.000Z
updatedAt: 2023-04-18T12:16:18.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-logo-not-being-saved-as-an-url
locale: pt
kiStatus: Fixed
internalReference: 736716
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As informações do logotipo do vendedor no banco de dados não estão sendo salvas como uma URL, mas sim como uma imagem.

Atualmente, a documentação do nosso formulário de pedidos indica que esse campo deve ser uma URL:
https://developers.vtex.com/docs/guides/orderform-fields#sellers
 ![](https://vtexhelp.zendesk.com/attachments/token/SNx3LvZCcZAZHXrEnMaa5EUkh/?name=image.png)

Mas, em nosso banco de dados, ele está sendo salvo em um formato diferente.

## Simulação

1. Defina um logotipo para um vendedor via interface do usuário (UI) ou API;
2. Verifique por meio da API GET do Vendedor (https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers/-sellerId-) o formato do campo "UrlLogo".
3. Verifique no formulário de pedido se também não será uma URL.

## Workaround

Não há solução alternativa.