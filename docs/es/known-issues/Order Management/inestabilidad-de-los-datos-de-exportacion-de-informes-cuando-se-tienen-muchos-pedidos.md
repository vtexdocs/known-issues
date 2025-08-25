---
title: Inestabilidad de los datos de exportación de informes cuando se tienen muchos pedidos.
slug: inestabilidad-de-los-datos-de-exportacion-de-informes-cuando-se-tienen-muchos-pedidos
status: PUBLISHED
createdAt: 2025-08-25T14:05:32.080Z
updatedAt: 2025-08-25T14:05:32.080Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: report-export-data-instability-when-you-have-many-orders
locale: es
kiStatus: Backlog
internalReference: 1280864
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Este KI describe un escenario en el que la exportación de informes a través de la interfaz de usuario del administrador puede dar lugar a datos de informe inestables cuando la cuenta tiene muchos pedidos.
Este problema es intermitente; a veces el informe tiene éxito, a veces devuelve filas vacías o puede contener filas con errores.
El informe suele tener éxito después del tercer intento.
Sin embargo, este número de intentos puede generar un código de estado de 429 en SOLRs (base de datos), ¡lo que puede dar lugar a más incoherencias!


#### Simulación


Dado que el escenario es intermitente, ¡no podemos simularlo!
Sin embargo, sugerimos reducir los filtros para mejorar y reducir el número en la lista.

## Workaround


Para este escenario, la solución consiste en esperar antes de volver a intentarlo. Esto evita que el sistema experimente el código de estado 429.



