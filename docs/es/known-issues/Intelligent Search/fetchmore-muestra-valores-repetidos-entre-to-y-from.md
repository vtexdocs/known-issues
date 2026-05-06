---
title: 'FetchMore muestra valores repetidos entre «to» y «from»'
slug: fetchmore-muestra-valores-repetidos-entre-to-y-from
status: PUBLISHED
createdAt: 2023-05-31T16:38:04.000Z
updatedAt: 2023-05-31T16:38:33.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: fetchmore-bringing-repeated-values-between-the-to-and-from
locale: es
kiStatus: Scheduled
internalReference: 835396
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función `fetchMore` devuelve algunos valores duplicados entre la primera y la segunda página, lo que hace que la página muestre repetidamente algunos de los productos.

## Simulación

En algunas cuentas, el botón que carga más productos muestra valores repetidos; esto ocurre porque el componente pasa 12 elementos (del 0 al 11) y la consulta realizada en GraphQL considera 18 productos, por lo que 6 productos pueden mostrarse repetidamente.

La función «Mostrar más» utiliza información diferente para mostrar el número de productos en la pantalla.

## Workaround

provisional**
¿Existe alguna solución provisional para este error? Si es así, descríbela aquí. Si no, escribe «N/A» o «No hay ninguna solución provisional disponible». No elimines esta sección si no hay ninguna solución provisional, por favor.