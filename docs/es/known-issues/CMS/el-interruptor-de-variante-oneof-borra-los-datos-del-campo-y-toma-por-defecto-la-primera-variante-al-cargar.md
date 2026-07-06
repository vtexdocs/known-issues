---
title: 'El interruptor de variante oneOf borra los datos del campo y toma por defecto la primera variante al cargar.'
slug: el-interruptor-de-variante-oneof-borra-los-datos-del-campo-y-toma-por-defecto-la-primera-variante-al-cargar
status: PUBLISHED
createdAt: 2026-07-06T20:26:16.000Z
updatedAt: 2026-07-06T20:26:16.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: oneof-variant-switch-erases-field-data-and-defaults-to-first-variant-on-load
locale: es
kiStatus: Backlog
internalReference: 1430638
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El formulario de entrada de contenido del CMS sin interfaz gráfica gestiona parcialmente los campos `oneOf`: valida correctamente el esquema, pero la interfaz siempre muestra por defecto solo la primera variante definida en `oneOf`. Al cambiar a otra variante, se borran todos los datos introducidos previamente.

## Simulación

1. Cree o abra un tipo de contenido cuyo esquema incluya una matriz cuyos elementos utilicen `oneOf` para definir dos o más formas de objeto posibles.

2. Abra el formulario de entrada de contenido para ese tipo de contenido.

3. Observe que la interfaz muestra por defecto solo la **primera** variante de `oneOf`, independientemente de los datos ya guardados en la entrada.

4. Introduzca los datos para la variante que se muestra actualmente.

5. Cambie a otra variante mediante el selector de variantes.

6. Observe que se **borran** todos los datos introducidos previamente y se reemplazan por un formulario vacío para la variante recién seleccionada. 7. Volver a la primera variante confirma que los datos se han perdido; no se conservan entre cambios de variante.

## Workaround

Defina la variante deseada **antes** de rellenar cualquier contenido y no la modifique posteriormente. Si el cambio de variante es inevitable, anote manualmente los valores de los campos existentes antes de cambiar.

Como alternativa a nivel de esquema, elimine `oneOf` y combine ambas variantes en un único objeto con todos los campos opcionales, utilizando un campo discriminador (por ejemplo, `"groupType": { "enum": ["default", "faq"] }`) para indicar qué forma está activa. Esto reduce la rigidez del esquema, pero evita por completo el problema de la interfaz de usuario.