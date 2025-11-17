---
title: 'Propiedad blockClass de infoCard no funciona'
slug: propiedad-blockclass-de-infocard-no-funciona
status: PUBLISHED
createdAt: 2025-11-17T17:43:06.412Z
updatedAt: 2025-11-17T17:43:06.412Z
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



Infocard tiene una propiedad llamada blockClass para añadir clases personalizadas en el componente, pero esta propiedad no funciona


#### Simulación



Abra su componente infoCard, añada la propiedad blockClass
Comprueba tus elementos en el DOM y no encontrarás ningún elemento infocard con la clase añadida


#### Workaround


Construye tu propia infocard con nuestros componentes vtex.flex-layout, vtex.image y vtex.rich-text, esto te dará más flexibilidad para construir tu infocard



