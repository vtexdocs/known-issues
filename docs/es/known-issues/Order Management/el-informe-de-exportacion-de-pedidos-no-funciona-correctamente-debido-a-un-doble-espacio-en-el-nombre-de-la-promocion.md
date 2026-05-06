---
title: 'El informe de exportación de pedidos no funciona correctamente debido a un doble espacio en el nombre de la promoción'
slug: el-informe-de-exportacion-de-pedidos-no-funciona-correctamente-debido-a-un-doble-espacio-en-el-nombre-de-la-promocion
status: PUBLISHED
createdAt: 2023-04-06T20:22:31.000Z
updatedAt: 2024-06-28T17:43:59.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-export-report-is-not-working-properly-due-double-space-on-promotion-name
locale: es
kiStatus: Fixed
internalReference: 786216
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, el sistema de informes de pedidos no puede generar un archivo a partir de filtros de promoción cuyos nombres contengan espacios dobles; al intentar generar el informe, el sistema genera un error y la exportación no se lleva a cabo, lo que da lugar al mensaje «_Exportación completada. Se han enviado 0 pedidos a tu correo electrónico_».

## Simulación

Crea un pedido utilizando una promoción cuyo nombre contenga espacios dobles;

A continuación, acceda a la gestión de pedidos y aplique un filtro con dicha promoción como condición.

En este punto, la interfaz de usuario de OMS mostrará normalmente una lista de pedidos con la condición seleccionada, pero al seleccionar «Exportar pedidos», la interfaz mostrará el siguiente mensaje: «_Exportación completada. Se han enviado 0 pedidos a su correo electrónico_».

## Workaround

Filtra los pedidos en la interfaz de usuario por otro parámetro, por ejemplo, fecha, método de pago, etc., y, a continuación, exporta los pedidos y filtéralos por promoción directamente en el archivo Excel generado por el sistema.