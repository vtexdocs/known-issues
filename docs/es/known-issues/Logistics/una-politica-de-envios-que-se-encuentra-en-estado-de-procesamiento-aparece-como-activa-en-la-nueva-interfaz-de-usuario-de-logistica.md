---
title: 'Una política de envíos que se encuentra en estado de procesamiento aparece como activa en la nueva interfaz de usuario de logística'
slug: una-politica-de-envios-que-se-encuentra-en-estado-de-procesamiento-aparece-como-activa-en-la-nueva-interfaz-de-usuario-de-logistica
status: PUBLISHED
createdAt: 2023-10-25T23:48:31.000Z
updatedAt: 2023-11-27T21:17:48.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-policy-stuck-in-processing-status-is-displayed-as-active-in-the-new-logistics-ui
locale: es
kiStatus: Fixed
internalReference: 925914
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En ocasiones, la política de envío puede quedarse bloqueada en el estado «En proceso», pero en la nueva interfaz de logística no se aprecia, ya que se indica que el estado es «Activo».
Este comportamiento puede suponer un obstáculo a la hora de cargar una nueva hoja de cálculo de transporte, ya que el usuario asumirá que el proceso se ha completado al mostrarse el estado «Activo», pero los nuevos datos no se reflejarán.

## Simulación

Tener una política de envío en estado activo en la nueva interfaz de usuario, en la que, al intentar cargar una nueva hoja de cálculo, los datos no se reflejan.

## Workaround

provisional**
Para que la política de envío salga del estado de procesamiento en el que se ha quedado atascada, se requiere una acción del equipo; tras ello, se podrá cargar la hoja de cálculo y el proceso continuará con normalidad.