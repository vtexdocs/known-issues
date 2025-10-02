---
title: Tiempo de espera al editar especificaciones
slug: tiempo-de-espera-al-editar-especificaciones
status: PUBLISHED
createdAt: 2025-10-02T19:54:46.307Z
updatedAt: 2025-10-02T19:54:46.307Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: timeout-when-editing-specifications
locale: es
kiStatus: Fixed
internalReference: 1192667
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Se espera que el usuario pueda editar especificaciones por API y admin sin errores. Sin embargo, al editar una especificación de producto en la estructura de categorías, una cuenta con un gran volumen de productos en el catálogo puede experimentar eventos de tiempo de espera durante el proceso de edición, lo que hace imposible cambiar esta información.

## Simulación



1. Accede a las especificaciones de una categoría concreta;
2. Intentar guardar un cambio (ya sea a través de la interfaz de usuario o de la API);
3. Ver un error de tiempo de espera en la respuesta (interfaz de usuario o API).

## Workaround


Póngase en contacto con el soporte de VTEX para editar la información.



