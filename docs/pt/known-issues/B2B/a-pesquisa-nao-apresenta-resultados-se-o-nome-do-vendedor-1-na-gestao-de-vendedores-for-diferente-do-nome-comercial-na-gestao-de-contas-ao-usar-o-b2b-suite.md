---
title: 'A pesquisa não apresenta resultados se o nome do vendedor 1 na Gestão de Vendedores for diferente do nome comercial na Gestão de Contas ao usar o B2B Suite'
slug: a-pesquisa-nao-apresenta-resultados-se-o-nome-do-vendedor-1-na-gestao-de-vendedores-for-diferente-do-nome-comercial-na-gestao-de-contas-ao-usar-o-b2b-suite
status: PUBLISHED
createdAt: 2023-12-01T20:05:56.000Z
updatedAt: 2024-09-25T13:36:57.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: search-has-no-products-if-seller-1-name-in-the-seller-management-differs-from-trading-name-in-account-management-when-using-b2b-suite
locale: pt
kiStatus: Fixed
internalReference: 946391
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As organizações B2B utilizam os nomes dos vendedores da Gestão de Vendedores. Se uma organização tiver o vendedor 1 atribuído, o nome salvo será o da Gestão de Vendedores, mas nenhum produto poderá ser exibido na pesquisa caso ele difira do nome comercial na Gestão de Contas.

## Simulação

- Tenha uma conta com o vendedor 1 nomeado na Gestão de Vendedores diferente do nome comercial na Gestão de Contas;
- Crie uma Organização B2B e atribua o vendedor 1;
- Faça login na conta; nenhum produto é exibido.

## Workaround

**Este problema foi corrigido na versão** `vtex.b2b-organizations@1.35.0`**, lançada em 10 de setembro. Todos os vendedores associados após o lançamento estarão corretos, mas as associações anteriores a essa data ainda devem aplicar a solução alternativa.**

- Acesse o GraphQL IDE e selecione vtex.b2b-organizations-graphql;
- Use a consulta abaixo para obter todos os detalhes da organização:

 { getOrganizationById(id:"insira aqui o id da organização"){ id name tradeName status collections{ id name } paymentTerms{ id name } priceTables customFields{ name type value dropdownValues{ value label } useOnRegistration } salesChannel sellers { id name } }}

- Envie uma mutação para atualizar o nome do vendedor 1 usando as informações recuperadas acima:

 mutation { updateOrganization( id: "" name: "" tradeName: "" status: "active" collections: [{ id: "" name: "" }] paymentTerms: [{ id: "" name: "" }] priceTables: [""] customFields: [] salesChannel: "" sellers: [{ id: "1", name: "nome comercial do Gerenciamento de Contas" }] ){ id status message }}