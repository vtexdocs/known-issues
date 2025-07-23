---
title: 'Carregamento eterno no Checkout UI v5'
id: 6lOzyvQqoRCNWkIjRtyibv
status: PUBLISHED
createdAt: 2022-10-18T15:28:04.738Z
updatedAt: 2022-12-02T17:58:25.957Z
publishedAt: 2022-12-02T17:58:25.957Z
firstPublishedAt: 2022-10-18T15:28:05.492Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: eternal-loading-in-checkout-ui-v5
locale: pt
kiStatus: Backlog
internalReference: 332740
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No Checkout v5, em um cenário específico, a página está presa em uma carga infinita, e no console, podemos ver o erro: "Uncaught SyntaxError": Token u inesperado em JSON na posição 0 em JSON.parse (<anónimo>)".

Isto pode ser diretamente associado com o "addressType: null", que pode acontecer depois de apenas inserir o código postal e refrescar a página.



## Simulação



1. Preencher as informações do perfil que nunca foram utilizadas antes (perfil e endereço incompletos)
2. Concluir a compra
3. Adicione apenas o código postal
4. Refresque a página ou volte para casa e volte para o carrinho



## Workaround


NA

