---
title: 'MELI El atributo se envía a MELI sin que el vendedor lo haya asignado'
slug: meli-el-atributo-se-envia-a-meli-sin-que-el-vendedor-lo-haya-asignado
status: PUBLISHED
createdAt: 2023-04-17T12:57:31.000Z
updatedAt: 2023-11-30T11:04:48.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-attribute-is-being-sent-to-meli-without-being-mapped-from-seller
locale: es
kiStatus: Fixed
internalReference: 791380
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente nos encontramos con un problema que aún requiere más investigación y detalles. Sin embargo, hay algunas categorías asignadas dentro de la función Mapper, y algunos atributos que no se asignaron pero que, a pesar de ello, se están enviando a MELI.

Esto hará que se exporten algunos SKU y otros no, ya que el primer SKU incluye un atributo no deseado, y el segundo SKU no se exportará porque MELI tiene reglas que exigen que todas las variantes de un mismo producto tengan las mismas combinaciones de atributos.

## Simulación

En el menú de productos de Bridge, verás un error para algunos SKU, como se muestra a continuación:
**No se permiten variaciones con combinaciones de atributos diferentes.**

Esto se debe a que el primer SKU se exportó con un atributo no deseado, y el resto de SKU no se están enviando con ese atributo.

## Workaround

¿Existe alguna solución alternativa para este error? En caso afirmativo, descríbela aquí. En caso negativo, escribe «N/A» o «No hay ninguna solución alternativa disponible». Por favor, no elimines esta sección si no hay ninguna solución alternativa.