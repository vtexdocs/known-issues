---
title: 'Mi cuenta > Direcciones: No se muestra la alerta de campo obligatorio para ciudad/estado.'
slug: mi-cuenta-direcciones-no-se-muestra-la-alerta-de-campo-obligatorio-para-ciudadestado
status: PUBLISHED
createdAt: 2021-05-26T01:37:18.000Z
updatedAt: 2026-10-29T22:07:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: my-account-addresses-required-field-alert-not-showing-for-citystate
locale: es
kiStatus: Fixed
internalReference: 373277
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al revisar algunos flujos de creación de direcciones en **Mi Cuenta**, observamos que la alerta de campo obligatorio no se muestra para campos como **ciudad** y/o **estado** (dependiendo del país). Por ejemplo, para Brasil, estos campos se rellenan automáticamente y no se pueden editar.

Por otro lado, en algunos flujos, este campo debe seleccionarse para otros países.

El problema es que al intentar crear una dirección sin seleccionar ninguna opción de ciudad o estado, no sucede nada y la interfaz de usuario no advierte que este campo debe completarse para finalizar el registro.

![](https://vtexhelp.zendesk.com/attachments/token/1EKrEPHMR41ufIFg7c1wDFT6k/?name=inline867128956.png)

## Simulación

Pasos para reproducir el problema:

1. Puede realizar una prueba en la cuenta:

2. Acceda como un cliente. Puedes usar la prueba de correo electrónico.

3. Intenta crear una nueva dirección para **ARG**.

4. Rellena el formulario con el código postal "**1000**". El formulario se rellenará automáticamente en esos campos.

5. Selecciona **Cambiar**.

6. Intenta seleccionar otra "**Provincia**" y no indiques ciudad.

7. Intenta **añadir** la dirección.

## Workaround

Selecciona una ciudad o estado antes de añadir la dirección.