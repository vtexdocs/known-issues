---
title: 'A interface do usuário de detalhes das organizações B2B mostra apenas os primeiros 100 vendedores'
slug: a-interface-do-usuario-de-detalhes-das-organizacoes-b2b-mostra-apenas-os-primeiros-100-vendedores
status: PUBLISHED
createdAt: 2024-01-15T21:29:01.000Z
updatedAt: 2024-08-26T13:47:50.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-detail-ui-only-shows-100-first-sellers
locale: pt
kiStatus: Fixed
internalReference: 966450
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface de usuário (UI) de Detalhes das Organizações B2B mostra apenas os primeiros 100 vendedores; a interface não possui paginação, o que impossibilita a seleção de um vendedor que não esteja na primeira página

## Simulação

- Certifique-se de que a conta tenha mais de 100 vendedores registrados;
- Acesse a guia “Vendedores” na interface de usuário (UI) de Detalhes das Organizações B2B;
- Apenas os primeiros 100 vendedores serão exibidos.

## Workaround

- Execute um getOrganizationById via GraphQL usando o aplicativo:

 { getOrganizationById(id:""){ id name tradeName status collections { id } paymentTerms { id } priceTables customFields { name type value useOnRegistration } salesChannel sellers { id name }}}

- Execute uma mutação usando os dados do GraphQL anterior:

    mutation { updateOrganization ( id: "", name: "" tradeName: "" status: "active" collections: [] paymentTerms: [] priceTables: [] customFields: [] salesChannel: null sellers: [{ id: "", name: "" }] ) { id }}