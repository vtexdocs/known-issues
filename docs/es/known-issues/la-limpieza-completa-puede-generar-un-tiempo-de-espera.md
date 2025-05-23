---
title: La limpieza completa puede generar un tiempo de espera
slug: la-limpieza-completa-puede-generar-un-tiempo-de-espera
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: fullcleanup-may-generate-a-timeout
locale: es
kiStatus: Backlog
internalReference: 1228132
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


en la interfaz `/admin/Site/fullcleanup.aspx `, al utilizar este procedimiento para cuentas con varios productos, marcas o categorías se genera un tiempo de espera, que suele arrojar un error 500 y ningún resultado al realizar la operación.

Este es el mismo problema (origen) de otros tiempos de espera en el catálogo.


#### Simulación


1) Crear más de ~5k productos en una tienda. (esto es sólo una estimación aproximada, puede ocurrir para más o menos productos que eso)

2) Intente ejecutar el procedimiento de eliminación de productos y SKUs en la interfaz FullCleanUp: `.myvtex.com/admin/site/fullcleanup.aspx`

Se devolverá una respuesta 500 junto con un error de tiempo de espera

## Workaround


- Solicite al equipo de soporte que realice esta acción.



