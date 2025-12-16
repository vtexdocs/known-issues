---
title: 'Los cambios no persisten al editar la fecha de caducidad en las reglas de pago'
slug: los-cambios-no-persisten-al-editar-la-fecha-de-caducidad-en-las-reglas-de-pago
status: PUBLISHED
createdAt: 2025-12-16T20:09:52.744Z
updatedAt: 2025-12-16T20:09:52.744Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: changes-not-persisted-when-editing-expiration-date-in-payment-rules
locale: es
kiStatus: Backlog
internalReference: 1338791
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al editar el campo Fecha de caducidad (propiedad API: endDate) de una regla de pago en el Admin, la interfaz muestra "Guardado correctamente", pero el Ul sigue mostrando la fecha anterior; el ajuste no persiste ni visual ni funcionalmente.


#### Simulación



Reproducción intermitente.

- Vaya a Admin > Pasarela PCI > Reglas de pago y abra la regla específica
- Añada una condición especial: Fecha de caducidad (prueba interna con 31/12/2025: GMT -3)
- Haga clic en Guardar y confirme que el Ul muestra "Guardado correctamente".
- Cambia la fecha por otra y vuelve a guardar. (prueba interna con 31/12/2026: GMT -3)
- Observe los detalles de la regla; la fecha de Expiración no muestra el valor actualizado. (prueba interna con 31/12/2025: GMT -3)

## Workaround



Reintentar guardar la fecha de caducidad: Un intento posterior de guardar la fecha de caducidad tiende a reflejarse correctamente (funcionó en pruebas internas tras un fallo).


