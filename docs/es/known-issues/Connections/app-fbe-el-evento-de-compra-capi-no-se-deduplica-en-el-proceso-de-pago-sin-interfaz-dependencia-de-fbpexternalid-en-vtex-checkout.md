---
title: 'APP FBE El evento de compra CAPI no se deduplica en el proceso de pago sin interfaz (dependencia de FBP/external_id en VTEX Checkout)'
slug: app-fbe-el-evento-de-compra-capi-no-se-deduplica-en-el-proceso-de-pago-sin-interfaz-dependencia-de-fbpexternalid-en-vtex-checkout
status: PUBLISHED
createdAt: 2026-03-24T16:39:33.826Z
updatedAt: 2026-03-24T16:39:33.826Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: app-fbe-capi-purchase-event-not-deduplicated-in-headless-checkout-fbpexternalid-dependency-on-vtex-checkout
locale: es
kiStatus: Fixed
internalReference: 1349091
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las tiendas «headless» que utilizan la Facebook Business Extension (FBE) y la Conversions API (CAPI) de VTEX se enfrentan a errores en la deduplicación de eventos de compra, ya que Pixel y CAPI envían identificadores que no coinciden. El flujo actual de FBE/CAPI depende de VTEX Checkout para proporcionar el FBP (y el external_id), que no está disponible en los procesos de pago sin interfaz, lo que lleva a Meta a tratar Pixel y CAPI como usuarios/eventos diferentes. Los comerciantes informan de compras infladas cuando se recarga la página de confirmación y los ID de evento divergen. Esto afecta a implementaciones sin interfaz como shopaz y a cualquier escenario en el que CAPI no pueda recibir el mismo FBP/external_id utilizado por Pixel.

## Simulación

1) Realice una compra de prueba y capture lo que envía Pixel frente a lo que envía CAPI (event_name, event_id, timestamp, identificadores de usuario: fbp/external_id). Observe que Pixel no envía external_id y que CAPI utiliza un fbp diferente al de la cookie del navegador, o que CAPI no puede acceder a la cookie del navegador en absoluto. Meta no puede asociar los dos eventos al mismo usuario/sesión, lo que rompe la deduplicación.

2) Vuelve a cargar la página de confirmación del pedido (F5). El píxel se activa de nuevo; si GTM genera un nuevo ID de evento aleatorio y no hay un transaction_id utilizado de forma consistente, Meta cuenta una nueva compra, inflando los resultados y el ROAS.

3) Comparación con la referencia de VTEX Checkout: en VTEX Checkout, el event_id de la compra se asigna al orderId antes del «-01», y CAPI recibe el mismo eventId que el píxel para otros eventos, además del FBP cuando está disponible, lo que permite la deduplicación. En el modo headless, falta esta asignación/propagación del FBP, lo que reproduce el problema.

## Workaround

N/A