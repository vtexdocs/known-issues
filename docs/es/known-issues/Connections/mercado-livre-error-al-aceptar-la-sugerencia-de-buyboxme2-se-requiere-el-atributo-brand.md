---
title: 'Mercado Livre Error al aceptar la sugerencia de Buybox/ME2: se requiere el atributo BRAND'
slug: mercado-livre-error-al-aceptar-la-sugerencia-de-buyboxme2-se-requiere-el-atributo-brand
status: PUBLISHED
createdAt: 2026-04-30T19:15:21.000Z
updatedAt: 2026-06-09T19:17:51.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-error-when-accepting-buyboxme2-suggestion-brand-attribute-required
locale: es
kiStatus: Backlog
internalReference: 1399947
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar aceptar una sugerencia de Buybox/ME2, la operación puede fallar con un error que indica que se debe crear el atributo `BRAND`. Como resultado, el producto no se puede configurar para ME2, lo que impide el proceso de adhesión para las SKU afectadas, incluso cuando ya se han completado la asignación de categorías y otras configuraciones necesarias.

## Simulación

1. Acceda a un producto apto para Buybox/ME2.
2. Intente aceptar la sugerencia de Buybox/ME2.
3. Observe la validación devuelta por la integración. La operación se bloquea y se muestra el siguiente mensaje: «Se deben crear los siguientes atributos para configurar ME2: BRAND».

## Workaround

Abra una solicitud de asistencia para que el equipo de asistencia pueda publicar el SKU manualmente.