---
title: 'Al cargar la página «Catalog Maping» en el panel de administración, el mensaje inicial no aparece traducido'
slug: al-cargar-la-pagina-catalog-maping-en-el-panel-de-administracion-el-mensaje-inicial-no-aparece-traducido
status: PUBLISHED
createdAt: 2022-12-15T12:31:50.000Z
updatedAt: 2022-12-15T12:31:59.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: when-loading-the-catalog-maping-page-on-admin-the-initial-message-is-not-translated
locale: es
kiStatus: Backlog
internalReference: 717066
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Este error se produce en un caso muy concreto:

Al abrir la página «Asignación de catálogo» en un panel de administración que no esté en «pt-BR» y cuando el cliente aún no haya creado ninguna asignación, el mensaje inicial aparece primero en portugués, pero a continuación la página se recarga muy rápido y el mensaje desaparece.

En esta situación pueden darse dos casos:
1- El mensaje aparece primero en portugués y, a continuación, la página queda en blanco.
2- El mensaje aparece primero en portugués y, a continuación, se traduce correctamente al idioma del panel de administración. Sin embargo, este último caso es poco frecuente.

## Simulación

1. Abre la página «Asignación de catálogo» en una cuenta que no tenga asignaciones creadas y en un idioma diferente al del panel de administración.
2. Comprueba que inicialmente aparece un mensaje en portugués;
3. Comprueba que, cuando la página termine de cargarse, quede en blanco o con el mensaje correcto traducido.

## Workaround

provisional**

Cuando se añada el primer vendedor, este problema dejará de producirse.