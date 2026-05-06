---
title: 'La interfaz de usuario no muestra el formulario para editar la dirección cuando se elige añadir primero una nueva dirección'
slug: la-interfaz-de-usuario-no-muestra-el-formulario-para-editar-la-direccion-cuando-se-elige-anadir-primero-una-nueva-direccion
status: PUBLISHED
createdAt: 2023-02-06T13:15:43.000Z
updatedAt: 2023-06-23T17:46:52.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-doesnt-show-the-form-to-edit-address-when-selecting-to-add-a-new-address-first
locale: es
kiStatus: Fixed
internalReference: 747772
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de usuario no muestra el formulario correcto para editar la dirección seleccionada en el paso «Envío» cuando se elige añadir primero una nueva dirección.

## Simulación

- Disponer de un usuario con un perfil completo;
- Hacer clic para añadir una nueva dirección, no escribir ni seleccionar nada, y volver a la lista de direcciones;
- Hacer clic para editar la dirección seleccionada;
- Se verá el mismo formulario que al añadir una nueva dirección.

## Workaround

provisional**
Actualizar la página para poder editar de nuevo la dirección seleccionada.