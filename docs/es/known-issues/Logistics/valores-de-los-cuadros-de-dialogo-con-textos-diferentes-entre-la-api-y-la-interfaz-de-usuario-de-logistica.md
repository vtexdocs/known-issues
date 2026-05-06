---
title: 'Valores de los cuadros de diálogo con textos diferentes entre la API y la interfaz de usuario de logística'
slug: valores-de-los-cuadros-de-dialogo-con-textos-diferentes-entre-la-api-y-la-interfaz-de-usuario-de-logistica
status: PUBLISHED
createdAt: 2023-03-22T14:06:34.000Z
updatedAt: 2023-03-22T14:11:57.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: modal-values-with-different-texts-between-api-and-logistics-ui
locale: es
kiStatus: Backlog
internalReference: 775800
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la pantalla de Configuración general del módulo de logística, al configurar los modos disponibles para su uso en el catálogo, el usuario verá una lista de valores disponibles; estos valores, cuando se seleccionan, habilitan una opción de selección en la pantalla de Configuración avanzada del SKU, pero no se traducen a la API y, por lo tanto, es posible que los valores de la interfaz de usuario del catálogo no tengan cadenas iguales al valor de la interfaz de usuario de logística, ya que el valor que se muestra en la interfaz de usuario del catálogo es exactamente el valor de la API.

## Simulación

Acceda al área de la pantalla «Configuración general» de Logística.

Utilice un idioma distinto del inglés (EN).

Habilite una opción modal.

Vaya al módulo Catálogo - Configuración avanzada de SKU.

Observe que el valor disponible en la lista modal no tiene el mismo texto que el seleccionado en la pantalla «Configuración general» de Logística.

## Workaround

Al habilitar cada valor modal en logística, es necesario validar su equivalencia con la interfaz de usuario del catálogo.