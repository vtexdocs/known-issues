---
title: 'APP FBE El evento de compra CAPI no se deduplica en el proceso de pago sin interfaz (dependencia de FBP/external_id en VTEX Checkout).'
slug: app-fbe-el-evento-de-compra-capi-no-se-deduplica-en-el-proceso-de-pago-sin-interfaz-dependencia-de-fbpexternalid-en-vtex-checkout
status: PUBLISHED
createdAt: 2026-01-12T12:04:21.101Z
updatedAt: 2026-01-12T12:04:21.101Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: app-fbe-capi-purchase-event-not-deduplicated-in-headless-checkout-fbpexternalid-dependency-on-vtex-checkout
locale: es
kiStatus: Backlog
internalReference: 1349091
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Las tiendas sin interfaz que utilizan la extensión empresarial de Facebook (FBE) y la API de conversiones (CAPI) de VTEX se enfrentan a fallos en la deduplicación de eventos de compra porque Pixel y CAPI envían identificadores que no coinciden. El flujo actual de FBE/CAPI depende de VTEX Checkout para proporcionar FBP (y external_id), que no está disponible en los checkouts sin interfaz, lo que lleva a Meta a tratar Pixel y CAPI como usuarios/eventos diferentes. Los comerciantes informan de compras infladas cuando se recarga la página de confirmación y los ID de los eventos divergen. Esto afecta a las implementaciones sin interfaz como shopaz y a cualquier escenario en el que CAPI no pueda recibir el mismo FBP/external_id utilizado por Pixel.


#### Simulación

## Workaround

