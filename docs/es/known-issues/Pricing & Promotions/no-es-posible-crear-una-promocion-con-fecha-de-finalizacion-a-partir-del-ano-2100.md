---
title: 'No es posible crear una promoción con fecha de finalización a partir del año 2100.'
slug: no-es-posible-crear-una-promocion-con-fecha-de-finalizacion-a-partir-del-ano-2100
status: PUBLISHED
createdAt: 2023-05-30T00:42:52.000Z
updatedAt: 2026-09-23T15:19:34.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: it-is-not-possible-to-create-a-promotion-with-end-date-from-the-year-2100-onwards
locale: es
kiStatus: Fixed
internalReference: 833957
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al crear una promoción, si selecciona una fecha de finalización posterior al año 2100, la interfaz de usuario (UI) interpretará que la fecha de finalización es anterior a la fecha de inicio y no será posible guardar la promoción, incluso si los demás campos están correctamente completados.

_*Este problema no se presenta cuando el idioma de administración seleccionado es portugués._

## Simulación

1- Acceda al módulo de Promociones;

2- Haga clic en "Crear promoción" y seleccione uno de los tipos de promoción;

3- Seleccione cualquier fecha de finalización del año 2100 (la UI mostrará el mensaje "Atención: La fecha de finalización no puede ser anterior a la fecha de inicio");

4- Complete los demás campos obligatorios;
5. Intenta guardar la promoción (la interfaz de usuario mostrará el error "Error: La fecha de inicio debe ser anterior a la fecha de finalización").

## Workaround

Si es posible, selecciona como fecha de finalización cualquier año anterior a 2100, como por ejemplo 2099.