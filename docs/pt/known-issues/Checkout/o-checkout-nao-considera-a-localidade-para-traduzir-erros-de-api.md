---
title: O checkout não considera a localidade para traduzir erros de API
slug: o-checkout-nao-considera-a-localidade-para-traduzir-erros-de-api
status: PUBLISHED
createdAt: 2025-10-16T20:31:56.220Z
updatedAt: 2025-10-16T20:31:56.220Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-doesnt-consider-locale-to-translate-api-errors
locale: pt
kiStatus: Backlog
internalReference: 1168499
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O sistema procura o idioma definido em `clientPreferencesData.locale` para traduzir as páginas de checkout. Os erros retornados na API não serão traduzidos se o canal de vendas relacionado ao idioma não for enviado como um parâmetro na solicitação da API.
## Simulação


Em uma loja com uma configuração multilíngue, acesse o checkout usando uma localidade diferente do canal de vendas principal.
Force um erro como, por exemplo, adicionar mais quantidade de um item do que a existente no estoque.
Será exibido um erro pop-up não traduzido para a localidade escolhida.


## Workaround


Envie o canal de vendas relacionado à localidade escolhida como um parâmetro para todas as solicitações de API na interface do usuário de checkout.



