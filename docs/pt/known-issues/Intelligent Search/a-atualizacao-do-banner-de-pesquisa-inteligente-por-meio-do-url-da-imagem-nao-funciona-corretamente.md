---
title: 'A atualização do banner de pesquisa inteligente por meio do URL da imagem não funciona corretamente'
slug: a-atualizacao-do-banner-de-pesquisa-inteligente-por-meio-do-url-da-imagem-nao-funciona-corretamente
status: PUBLISHED
createdAt: 2023-01-17T14:33:14.000Z
updatedAt: 2023-09-06T22:34:45.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-banner-update-via-image-url-does-not-work-correctly
locale: pt
kiStatus: Backlog
internalReference: 734833
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No Admin V4, no módulo Banners, o usuário tem a possibilidade de criar ou atualizar banners já criados. Ao selecionar um banner para atualização, ele pode escolher entre usar um campo HTML ou inserir um link direto para a imagem com uma URL externa. Ao optar por inserir o banner por meio de um link direto para a imagem, é acionada a consulta GraphQL, que atualmente não está funcionando corretamente, retornando `syntaxError` e, consequentemente, o erro 500.

## Simulação

Em uma loja com o Admin V4, acesse o módulo Banners, dentro de Pesquisa;
Selecione um banner criado anteriormente;
Em Tipo, selecione Imagem;
Preencha os campos de link;
Ao clicar em Salvar, a tela exibirá um erro GraphQL;

## Workaround

N/A