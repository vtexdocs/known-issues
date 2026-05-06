---
title: 'La búsqueda no arroja ningún resultado si el nombre del vendedor 1 que figura en la gestión de vendedores difiere del nombre comercial que aparece en la gestión de cuentas al utilizar B2B Suite'
slug: la-busqueda-no-arroja-ningun-resultado-si-el-nombre-del-vendedor-1-que-figura-en-la-gestion-de-vendedores-difiere-del-nombre-comercial-que-aparece-en-la-gestion-de-cuentas-al-utilizar-b2b-suite
status: PUBLISHED
createdAt: 2023-12-01T20:05:56.000Z
updatedAt: 2024-09-25T13:36:57.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: search-has-no-products-if-seller-1-name-in-the-seller-management-differs-from-trading-name-in-account-management-when-using-b2b-suite
locale: es
kiStatus: Fixed
internalReference: 946391
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las organizaciones B2B utilizan los nombres de los vendedores que figuran en la Gestión de vendedores. Si a una organización se le ha asignado el vendedor 1, el nombre guardado será el de la Gestión de vendedores, pero es posible que no aparezcan productos en la búsqueda si difiere del nombre comercial que figura en la Gestión de cuentas.

## Simulación

- Disponer de una cuenta con el vendedor 1 nombrado en la Gestión de vendedores diferente del nombre comercial en la Gestión de cuentas;
- Crear una organización B2B y asignarle el vendedor 1;
- Iniciar sesión en la cuenta; no se muestran productos.

## Workaround

**Este problema se ha solucionado en la versión** `vtex.b2b-organizations@1.35.0`**, lanzada el 10 de septiembre. Todos los vendedores asociados después del lanzamiento serán correctos, pero las asociaciones anteriores a esa fecha deben seguir aplicando la solución alternativa.**

- Acceda a GraphQL IDE y seleccione vtex.b2b-organizations-graphql;
- Utilice la consulta siguiente para obtener todos los detalles de la organización:

 { getOrganizationById(id:"introduzca aquí el ID de la organización"){ id name tradeName status collections{ id name } paymentTerms{ id name } priceTables customFields{ name type value dropdownValues{ value label } useOnRegistration } salesChannel sellers { id name } }}

- Envía una mutación para actualizar el nombre del vendedor 1 utilizando la información recuperada anteriormente:

 mutation { updateOrganization( id: "" name: "" tradeName: "" status: "active" collections: [{ id: "" name: "" }] paymentTerms: [{ id: "" name: "" }] priceTables: [""] customFields: [] salesChannel: "" sellers: [{ id: "1", name: "nombre comercial de la gestión de cuentas" }] ){ id status message }}