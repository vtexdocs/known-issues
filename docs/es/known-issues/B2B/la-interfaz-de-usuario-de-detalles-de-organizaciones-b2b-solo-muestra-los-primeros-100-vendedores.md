---
title: 'La interfaz de usuario de «Detalles de organizaciones B2B» solo muestra los primeros 100 vendedores'
slug: la-interfaz-de-usuario-de-detalles-de-organizaciones-b2b-solo-muestra-los-primeros-100-vendedores
status: PUBLISHED
createdAt: 2024-01-15T21:29:01.000Z
updatedAt: 2024-08-26T13:47:50.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-detail-ui-only-shows-100-first-sellers
locale: es
kiStatus: Fixed
internalReference: 966450
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de usuario de «Detalles de organizaciones B2B» solo muestra los primeros 100 vendedores; la interfaz no dispone de paginación, lo que impide seleccionar a un vendedor que no se encuentre en la primera página

## Simulación

- Asegúrate de que la cuenta tenga más de 100 vendedores registrados;
- Accede a la pestaña «Vendedores» en la interfaz de usuario de «Detalles de organizaciones B2B»;
- Solo se mostrarán los primeros 100 vendedores.

## Workaround

- Realice una consulta getOrganizationById a través de GraphQL utilizando la aplicación:

 { getOrganizationById(id:""){ id name tradeName status collections { id } paymentTerms { id } priceTables customFields { name type value useOnRegistration } salesChannel sellers { id name }}}

- Realice una mutación utilizando los datos del GraphQL anterior:

    mutation { updateOrganization ( id: "", name: "" tradeName: "" status: "active" collections: [] paymentTerms: [] priceTables: [] customFields: [] salesChannel: null sellers: [{ id: "", name: "" }] ) { id }}