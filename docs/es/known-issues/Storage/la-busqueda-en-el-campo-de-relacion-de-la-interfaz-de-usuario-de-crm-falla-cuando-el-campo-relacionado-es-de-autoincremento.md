---
title: 'La búsqueda en el campo de relación de la interfaz de usuario de CRM falla cuando el campo relacionado es de autoincremento'
slug: la-busqueda-en-el-campo-de-relacion-de-la-interfaz-de-usuario-de-crm-falla-cuando-el-campo-relacionado-es-de-autoincremento
status: PUBLISHED
createdAt: 2026-03-31T16:50:20.471Z
updatedAt: 2026-03-31T16:50:20.471Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: crm-ui-relationship-field-search-fails-when-related-field-is-auto-increment
locale: es
kiStatus: Backlog
internalReference: 1386097
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la interfaz de usuario de Master Data v1 CRM, los campos de relación que muestran el campo de autoincremento de una entidad relacionada no cargan las opciones de autocompletado. La interfaz de usuario envía una solicitud DynamicForm/LoadAutocompleteValues que utiliza comodines, pero los campos de autoincremento están indexados como long (numéricos), que no admiten operaciones con comodines, lo que da lugar a un «filtro no válido» y bloquea las ediciones en el campo de relación.

## Simulación

- Requisitos previos:
  - Master Data v1 con un campo de relación en la entidad A que apunta a la entidad B.
  - El campo «Campo relacionado a mostrar» de la relación en la entidad B es un campo de autoincremento.
- Pasos:
  - Abra el formulario de la interfaz de usuario de CRM que contiene el campo de relación.
  - Escriba caracteres parciales para buscar un registro relacionado (esto activa el autocompletado).
  - Observe la solicitud del backend:
    - GET DynamicForm/LoadAutocompleteValues con containsExpression (comodines).
  - Resultado:
    - La solicitud devuelve «filtro no válido» y la interfaz de usuario no puede mostrar ni seleccionar registros relacionados para el campo.

## Workaround

- Edite el valor de la relación a través de la API en lugar de la interfaz de usuario de CRM mientras exista esta limitación.
- Si es posible en el modelo de datos del cliente, cambie el «Campo relacionado a mostrar» de la relación a un campo de cadena (por ejemplo, correo electrónico, nombre, código externo) que admita la búsqueda de texto y comodines en el autocompletado.