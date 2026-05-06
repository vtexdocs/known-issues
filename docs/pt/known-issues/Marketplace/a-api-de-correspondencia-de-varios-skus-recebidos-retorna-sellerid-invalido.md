---
title: 'A API de correspondência de vários SKUs recebidos retorna "sellerId inválido"'
slug: a-api-de-correspondencia-de-varios-skus-recebidos-retorna-sellerid-invalido
status: PUBLISHED
createdAt: 2022-01-19T14:16:20.000Z
updatedAt: 2023-10-17T16:26:29.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: match-multiple-received-skus-api-returning-invalid-sellerid
locale: pt
kiStatus: Fixed
internalReference: 506660
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API "Match Multiple Received SKUs" (documentação: https://developers.vtex.com/vtex-rest-api/reference/match-received-skus#matchmultiple) está retornando a mensagem de erro "Invalid sellerId" sempre que se tenta aprovar novos produtos, mesmo que o vendedor esteja corretamente ativo no marketplace.

## Simulação

1. Copie o comando curl da documentação anterior;
2. Cole-o em sua ferramenta de API (Postman, Insomnia...);
3. Substitua os valores do objeto pelos dados do SKU que você está tentando aprovar;
4. Verifique se o sellerId está ativo e válido na gestão de vendedores do marketplace;
5. A resposta da API não deve ser:

 "errorResponse": { "Code": 33, "Message": "Invalid sellerId" }

## Workaround

A API "Match Received SKUs individually" está funcionando corretamente e pode substituir a API anterior para aprovar novos produtos um por um.