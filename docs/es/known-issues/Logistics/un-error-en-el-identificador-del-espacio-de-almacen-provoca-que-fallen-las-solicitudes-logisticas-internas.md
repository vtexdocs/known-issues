---
title: 'Un error en el identificador del espacio de almacén provoca que fallen las solicitudes logísticas internas'
slug: un-error-en-el-identificador-del-espacio-de-almacen-provoca-que-fallen-las-solicitudes-logisticas-internas
status: PUBLISHED
createdAt: 2022-09-08T14:20:46.000Z
updatedAt: 2023-01-05T19:33:51.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: space-in-warehouse-id-causes-internal-logistics-requests-to-fail
locale: es
kiStatus: Fixed
internalReference: 654370
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de usuario de logística permite al usuario crear un almacén registrando un ID con espacios, lo que afecta directamente a las solicitudes realizadas a dicho almacén y puede provocar errores en la actualización del inventario.

## Simulación

1- Accede a Inventario y envíos - Estrategia de envío - Almacenes

2- Haz clic en «Crear un almacén»

3- Introduce un ID con espacios entre los caracteres y guarda.

4- Realice una consulta con la API «List all Warehouse» y compruebe que el ID se ha guardado con un espacio;

## Workaround

** **
Para evitar o ajustar estas situaciones, al crear un almacén, utilice guiones bajos para separar los caracteres, en caso de que necesite dejar espacios entre caracteres o palabras.