---
title: 'Se acepta DefaultValue en la especificación para los tipos de campo CheckBox, Combo o Radio a través de API'
slug: se-acepta-defaultvalue-en-la-especificacion-para-los-tipos-de-campo-checkbox-combo-o-radio-a-traves-de-api
status: PUBLISHED
createdAt: 2025-10-24T12:33:28.752Z
updatedAt: 2025-10-24T12:33:28.752Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: defaultvalue-on-specification-is-accepted-for-checkbox-combo-or-radio-field-types-via-api
locale: es
kiStatus: Backlog
internalReference: 1313013
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El valor por defecto (`DefaultValue`) en la especificación se acepta para todos los tipos de especificación, excepto `Checkbox`, `Combo`, o `Radio` al crear/editar una especificación a través de Admin, pero se acepta al crear una especificación a través de API.

## Simulación



1. Ejecuta la especificación API route Create con el campo `DefaultValue` relleno y el campo `FieldTypeId` relleno con los valores `5` (Combo), `6` (Radio), `7` (Checkbox).
2. El cuerpo de la respuesta mostrará la nueva especificación, con el campo `DefaultValue` rellenado.

## Workaround


Como no es posible editar el campo DefaultValue a través de la API porque la propiedad [KI] DefaultValue no se actualiza en la API de especificación, ejecute los pasos que se indican a continuación para cambiar el valor del campo DefaultValue:

1. En **Admin**, edite la especificación cambiando el tipo de campo a `1` (Texto), dejando el campo `DefaultValue` vacío, y guarde los cambios.
2. A continuación, edite de nuevo la especificación cambiando de nuevo el tipo de campo anterior y guárdela.

