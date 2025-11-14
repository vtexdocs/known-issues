---
title: 'Los campos de la regla de pago no se reflejan en Admin cuando la regla se crea a través de API'
slug: los-campos-de-la-regla-de-pago-no-se-reflejan-en-admin-cuando-la-regla-se-crea-a-traves-de-api
status: PUBLISHED
createdAt: 2025-11-14T19:30:25.491Z
updatedAt: 2025-11-14T19:30:25.491Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-fields-not-reflected-in-admin-when-rule-is-created-via-api
locale: es
kiStatus: Backlog
internalReference: 1313230
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se crea una regla de pago a través de la API de pagos, la página de detalles de administración para esa regla no muestra algunas selecciones (por ejemplo, Emisor y Segmento) como seleccionadas, aunque la regla se aplica correctamente en el pago.

## Simulación



-

Prerrequisito: Permiso para crear reglas vía API usando **POST Insertar una nueva regla de pago** en /api/pvt/rules



-

Pasos:



1) Crear una nueva regla a través de la API, incluyendo la configuración del Emisor y el Segmento en la carga útil.



2) Abra Admin > Pagos > Reglas. Observe que la regla "tarjeta" muestra el Emisor/Segmento configurado como se esperaba.



3) Haga clic en la página de detalles de la regla. Observe que los desplegables Emisor y Segmento no están preseleccionados.



4) Valide el comportamiento funcional en el proceso de pago: un BIN que coincida con el Emisor/Segmento configurado permite la longitud de plazo configurada; un BIN que no coincida no muestra esa opción de plazo.


## Workaround


Abra la regla en Admin, vuelva a seleccionar manualmente Emisor y Segmento en la interfaz de usuario y Guardar, para que la interfaz de usuario vuelva a escribir la forma esperada y los campos se hagan visibles en la pantalla detallada



