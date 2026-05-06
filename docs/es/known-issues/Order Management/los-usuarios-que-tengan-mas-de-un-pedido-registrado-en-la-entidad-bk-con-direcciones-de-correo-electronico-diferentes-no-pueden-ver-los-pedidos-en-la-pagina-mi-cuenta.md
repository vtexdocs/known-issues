---
title: 'Los usuarios que tengan más de un pedido registrado en la entidad BK con direcciones de correo electrónico diferentes no pueden ver los pedidos en la página «Mi cuenta».'
slug: los-usuarios-que-tengan-mas-de-un-pedido-registrado-en-la-entidad-bk-con-direcciones-de-correo-electronico-diferentes-no-pueden-ver-los-pedidos-en-la-pagina-mi-cuenta
status: PUBLISHED
createdAt: 2024-02-21T22:30:24.000Z
updatedAt: 2024-02-21T22:30:24.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: users-with-more-than-one-order-registered-on-bk-entity-with-different-emails-can-not-see-the-orders-on-my-account-page
locale: es
kiStatus: Backlog
internalReference: 986324
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Debido a la unificación de perfiles, algunos usuarios pueden tener pedidos con direcciones de correo electrónico diferentes, lo que supone un problema a la hora de mostrar los pedidos en la página «Mi cuenta» (Mis pedidos).

La página «Mis pedidos» solicita esta información a la entidad BK de los datos maestros para eliminar el impacto del retraso en la indexación, pero la entidad BK contiene el historial y los pedidos con direcciones de correo electrónico diferentes. Sin embargo, el OMS tiene una línea de código para comprobar si la dirección de correo electrónico devuelta es correcta, comparando el correo electrónico del consultor con el registrado en los pedidos.

## Simulación

Se crean dos pedidos con direcciones de correo electrónico diferentes, por ejemplo, joao@gmail.com y joao2@gmail.com; cuando este usuario tiene el perfil de unificación, solo una dirección de correo electrónico será válida.
Después de eso, si joao2@gmail.com inicia sesión en la página «Mi cuenta», no será posible ver los pedidos porque hay un pedido antiguo sin el carácter «2» en el correo electrónico, por lo que la clave principal (correo electrónico) es diferente.

## Workaround

Por ahora no hay ninguna solución alternativa.