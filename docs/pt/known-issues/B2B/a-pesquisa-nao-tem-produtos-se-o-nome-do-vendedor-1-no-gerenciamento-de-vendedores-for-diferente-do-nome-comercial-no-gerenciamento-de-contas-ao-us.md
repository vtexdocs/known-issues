---
title: 'A pesquisa não tem produtos se o nome do vendedor 1 no Gerenciamento de Vendedores for diferente do nome comercial no Gerenciamento de Contas ao usar o B2B Suite'
id: 7a3bwqRmeSClHMoFmyIY2a
status: PUBLISHED
createdAt: 2023-12-01T20:06:13.492Z
updatedAt: 2024-09-25T13:37:16.037Z
publishedAt: 2024-09-25T13:37:16.037Z
firstPublishedAt: 2023-12-01T20:06:14.083Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: search-has-no-products-if-seller-1-name-in-the-seller-management-differs-from-trading-name-in-account-management-when-using-b2b-suite
locale: pt
kiStatus: Fixed
internalReference: 946391
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As organizações B2B usam os nomes dos vendedores do Gerenciamento de vendedores. Se uma organização tiver o vendedor 1 atribuído, o nome salvo será do Gerenciamento de vendedores, mas nenhum produto poderá ser mostrado na pesquisa se for diferente do nome comercial no Gerenciamento de contas.

## Simulação



- Tenha uma conta com o vendedor 1 nomeado no Seller Management diferente do nome comercial no Account Management;
- Crie uma organização B2B e atribua o vendedor 1;
- Faça login na conta; nenhum produto é exibido

## Workaround


**Esse problema foi corrigido na versão** `vtex.b2b-organizations@1.35.0`**, lançada em 10 de setembro. Todos os vendedores associados após o lançamento estarão corretos, mas as associações anteriores ainda devem aplicar a solução alternativa.

- Acesse o GraphQL IDE e selecione vtex.b2b-organizations-graphql;
- Use a consulta abaixo para obter todos os detalhes da organização:

    { getOrganizationById(id: "insira aqui o id da organização"){ id name tradeName status collections{ id name } paymentTerms{ id name } priceTables customFields{ name type value dropdownValues{ value label } useOnRegistration } salesChannel sellers { id name } }}

- Envie uma mutação para atualizar o nome do vendedor 1 usando as informações recuperadas acima:

    mutation { updateOrganization( id: "" name: "" tradeName: "" status: "active" collections: [{ id: "" name: "" }] paymentTerms: [{ id: "" name: "" }] priceTables: [""] customFields: [] salesChannel: "" sellers: [{ id: "1", name: "trade name from Account Management" }] ){ id status message }}






