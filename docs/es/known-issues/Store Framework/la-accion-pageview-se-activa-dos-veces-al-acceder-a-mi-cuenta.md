---
title: 'La acción «pageView» se activa dos veces al acceder a «Mi cuenta»'
slug: la-accion-pageview-se-activa-dos-veces-al-acceder-a-mi-cuenta
status: PUBLISHED
createdAt: 2023-07-03T16:32:48.000Z
updatedAt: 2023-07-03T16:32:48.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pageview-is-triggered-twice-when-accessing-my-account
locale: es
kiStatus: Backlog
internalReference: 854480
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al acceder a «Mi cuenta», el evento «pageView» se activa dos veces, lo que duplica los datos en Analytics.

## Simulación

- Configura la aplicación en Google Tag Manager,
- Accede a «Mi cuenta»;
- Abre las Herramientas de desarrollador del navegador y escribe «dataLayer» en la Consola; aparecerán dos eventos «pageView».

## Workaround

provisional**
N/A