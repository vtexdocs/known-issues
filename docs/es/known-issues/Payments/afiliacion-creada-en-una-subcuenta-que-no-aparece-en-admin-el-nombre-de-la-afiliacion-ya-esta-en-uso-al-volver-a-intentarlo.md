---
title: 'Afiliación creada en una subcuenta que no aparece en Admin; «El nombre de la afiliación ya está en uso» al volver a intentarlo.'
slug: afiliacion-creada-en-una-subcuenta-que-no-aparece-en-admin-el-nombre-de-la-afiliacion-ya-esta-en-uso-al-volver-a-intentarlo
status: PUBLISHED
createdAt: 2026-02-12T18:02:02.427Z
updatedAt: 2026-02-12T18:02:02.427Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: affiliation-created-in-subaccount-not-listed-in-admin-affiliation-name-is-already-used-on-retry
locale: es
kiStatus: Backlog
internalReference: 1300974
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Al crear una nueva afiliación de proveedor de pagos en una **subcuenta**, el administrador puede confirmar el guardado, pero la afiliación no aparece en la lista de afiliaciones. Al volver a intentarlo con el mismo nombre, la interfaz de usuario muestra el mensaje «El nombre de la afiliación ya se utiliza». La afiliación existe y se puede acceder a ella directamente a través de su ID en la URL, lo que confirma su persistencia en el backend, pero hay una inconsistencia en la lista/visualización en el contexto de la subcuenta.
Este comportamiento impide reutilizar el nombre de afiliación previsto y oculta el registro de la cuadrícula, lo que provoca confusión y bloquea los plazos de prueba. #### Simulación

## Workaround

