---
title: 'La búsqueda no tiene productos si el nombre del vendedor 1 en la Gestión de vendedores difiere del nombre comercial en la Gestión de cuentas al utilizar B2B Suite.'
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
locale: es
kiStatus: Fixed
internalReference: 946391
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las organizaciones B2B utilizan los nombres de los vendedores desde la Gestión de Vendedores. Si una organización tiene asignado el vendedor 1, el nombre guardado será de la Gestión de vendedores, pero es posible que no se muestren productos en la búsqueda si difiere del nombre comercial en la Gestión de cuentas.


##

## Simulación



- Tenga una cuenta con el vendedor 1 cuyo nombre en Gestión de Vendedores sea diferente del nombre comercial en Gestión de Cuentas;
- Cree una Organización B2B y asigne al vendedor 1;
- Acceda a la cuenta; no se muestra ningún producto.



## Workaround


**Este problema se ha solucionado en la versión** `vtex.b2b-organizations@1.35.0`**, publicada el 10 de septiembre. Todos los vendedores asociados después de la liberación será correcta, pero las asociaciones antes de que todavía debe aplicar la solución.

- Acceda a GraphQL IDE y seleccione vtex.b2b-organizations-graphql;
- Utilice la siguiente consulta para obtener todos los detalles de la organización:

    { getOrganizationById(id: "inserte aquí el id de la organización"){ id name tradeName status collections{ id name } paymentTerms{ id name } priceTables customFields{ name type value dropdownValues{ value label } useOnRegistration } salesChannel sellers { id name } }}

- Envíe una mutación para actualizar el nombre del vendedor para el vendedor 1 utilizando la información recuperada anteriormente:

    mutación { updateOrganization( id: "" name: "" tradeName: "" status: "active" collections: [{ id: "" name: "" }] paymentTerms: [{ id: "" name: "" }] priceTables: [""] customFields: [] salesChannel: "" vendedores: [{ id: "1", name: "nombre comercial de Gestión de Cuentas" }] ){ id status message }}






