---
title: 'Afiliación creada en subcuenta no listada en Admin'
slug: afiliacion-creada-en-subcuenta-no-listada-en-admin
status: PUBLISHED
createdAt: 2025-10-01T19:45:28.875Z
updatedAt: 2025-10-01T19:45:28.875Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: affiliation-created-in-subaccount-not-listed-in-admin-affiliation-name-is-already-used-on-retry
locale: es
kiStatus: Unknown
internalReference: 1300974
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al crear una nueva afiliación de Proveedor de Pagos en una **subcuenta**, el Admin puede confirmar el guardado pero la afiliación no aparece en la lista de Afiliaciones. Al reintentarlo con el mismo nombre, la interfaz de usuario devuelve "El nombre de la afiliación ya se ha utilizado".
La afiliación existe y se puede acceder a ella directamente a través de su ID en la URL, lo que confirma la persistencia en el backend, pero una incoherencia de listado/visualización en el contexto de la subcuenta.
Este comportamiento impide reutilizar el nombre de afiliación previsto y oculta el registro de la cuadrícula, lo que provoca confusión y bloquea los plazos de prueba.


#### Simulación


1- Accede a Admin > Afiliaciones en una subcuenta.
2- Crea una nueva afiliación de Proveedor de Pago y guarda.
3- Admin confirma la creación, pero la nueva afiliación no aparece en la lista de /admin/affiliations.
4- Intenta crearla de nuevo con el mismo nombre; la interfaz de usuario devuelve "Nombre de afiliación ya utilizado".
5- Navega directamente utilizando el ID exacto de la afiliación en la URL; la afiliación se carga, confirmando que existe en el backend, pero no aparece en la lista de subcuentas.

## Workaround



- Utilice un nombre de afiliación diferente en la cuenta principal o en una cuenta diferente en la que el listado funcione normalmente.
- Si se conoce el ID de afiliación exacto, acceda a la configuración directamente a través de la URL para verlo/editarlo a pesar de que no aparezca en el listado. Nota: Esto confirma la existencia pero no arregla el comportamiento del listado.



