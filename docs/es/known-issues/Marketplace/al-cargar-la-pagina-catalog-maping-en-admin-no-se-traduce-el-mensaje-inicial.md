---
title: 'Al cargar la página "Catalog Maping" en admin no se traduce el mensaje inicial'
slug: al-cargar-la-pagina-catalog-maping-en-admin-no-se-traduce-el-mensaje-inicial
status: PUBLISHED
createdAt: 2025-11-14T19:25:17.743Z
updatedAt: 2025-11-14T19:25:17.743Z
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



Este error ocurre en este escenario muy específico:

Al abrir la página "Catalog Mapping" en un admin que está en cualquier idioma menos "pt-BR" y cuando aún no hay ningún mapa hecho por el cliente, aparece primero el mensaje inicial en portugués pero luego la página se recarga muy rápido y desaparece.

En esta situación pueden ocurrir dos cosas
1- El mensaje aparece primero en portugués y luego la página está en blanco
2- El mensaje aparece primero en portugués y después se traduce correctamente al idioma del administrador. Sin embargo, este último escenario ocurre raramente.


#### Simulación




1. Abra la página de Mapeo de Catálogos en una cuenta que no tenga mapeos realizados y en un idioma diferente en admin.
2. Verifique que inicialmente aparece un mensaje en portugués;
3. 3. Verifique que cuando la página termine de cargar esté en blanco o con el mensaje correcto traducido.

## Workaround



Cuando se añada el primer vendedor, este problema dejará de ocurrir.