---
title: 'El espacio en la identificación del almacén hace que fallen las solicitudes de logística interna'
slug: el-espacio-en-la-identificacion-del-almacen-hace-que-fallen-las-solicitudes-de-logistica-interna
status: PUBLISHED
createdAt: 2025-11-14T19:24:01.338Z
updatedAt: 2025-11-14T19:24:01.338Z
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


La UI de logística permite a un usuario crear un Almacén registrando un ID con espacio y esto afecta directamente a las peticiones realizadas a este almacén pudiendo provocar fallos en la actualización del inventario.


#### Simulación



1- Introducir Inventario y Expedición - Estrategia de Expedición - Almacenes

2- Haga clic en crear un Almacén

3- Introduce un Id con espacio entre los caracteres y guarda.

4- Haz un get con el API Listar todos los Almacenes, comprueba que el ID se ha guardado con espacio;


## Workaround


** **
Para evitar o ajustar estos escenarios, cuando cree un almacén, utilice guiones bajos para separar caracteres, en caso de que necesite tener espacios entre caracteres o palabras.



