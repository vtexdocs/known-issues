---
title: 'Tiempo de espera de 504 al crear tarjetas regalo de forma masiva a través de Admin (lote de gran tamaño).'
slug: tiempo-de-espera-de-504-al-crear-tarjetas-regalo-de-forma-masiva-a-traves-de-admin-lote-de-gran-tamano
status: PUBLISHED
createdAt: 2026-01-08T12:39:45.170Z
updatedAt: 2026-01-08T12:39:45.170Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: 504-timeout-when-creating-gift-cards-in-bulk-via-admin-large-batch-size
locale: es
kiStatus: Backlog
internalReference: 1348204
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Al crear tarjetas regalo por lotes desde el Administrador, la solicitud puede agotarse y devolver un error HTTP 504 durante lotes grandes. El síntoma visible es un error 504 después de enviar el formulario de creación masiva; algunas o ninguna de las tarjetas regalo pueden seguir creándose en segundo plano. Esto afecta a los comerciantes que utilizan el flujo de creación masiva del Administrador para tarjetas regalo, especialmente con grandes volúmenes.


#### Simulación

## Workaround

