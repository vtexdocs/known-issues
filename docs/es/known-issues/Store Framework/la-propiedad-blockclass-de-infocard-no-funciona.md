---
title: 'La propiedad `blockClass` de `infoCard` no funciona'
slug: la-propiedad-blockclass-de-infocard-no-funciona
status: PUBLISHED
createdAt: 2023-01-31T19:01:48.000Z
updatedAt: 2023-01-31T19:01:48.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: property-blockclass-from-infocard-not-working
locale: es
kiStatus: Backlog
internalReference: 743730
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Infocard dispone de una propiedad llamada `blockClass` para añadir clases personalizadas al componente, pero esta propiedad no funciona

## Simulación

Abre tu componente `infoCard` y añade la propiedad `blockClass`
Comprueba los elementos en el DOM y verás que no hay ningún elemento `infocard` con la clase añadida

## Workaround

Crea tu propia infocard con nuestros componentes vtex.flex-layout, vtex.image y vtex.rich-text; esto te dará más flexibilidad para crear tu infocard