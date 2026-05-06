---
title: 'La página «Colecciones» en los detalles de la organización solo muestra 20 colecciones'
slug: la-pagina-colecciones-en-los-detalles-de-la-organizacion-solo-muestra-20-colecciones
status: PUBLISHED
createdAt: 2023-08-31T20:02:23.000Z
updatedAt: 2024-04-23T21:35:17.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: collections-page-in-organization-details-shows-only-20-collections
locale: es
kiStatus: Fixed
internalReference: 891511
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La página «Colecciones» de los detalles de la organización solo muestra 20 colecciones, incluso después de modificar el número de filas en la parte inferior de la página.

## Simulación

- Asegúrate de que tienes más de 20 colecciones activas;
- En el panel de administración, ve a la página «Organizaciones B2B» y selecciona una organización;
- Ve a la pestaña «Colecciones»; solo verás 20 colecciones disponibles.

## Workaround

Si la colección deseada no aparece en la pestaña Colecciones, asígnela utilizando GraphQL IDE:

- Acceda a GraphQL IDE;
- Seleccione la aplicación `vtex.b2b-organizations-graphql`;
- Utilice la mutación siguiente y añada los valores para `id`, `name`, `collections.id` y `collections.name`

 mutation { updateOrganization ( id: "" name: "" status: "active" collections: [{ id: "" name: "" }] ){ status message }}