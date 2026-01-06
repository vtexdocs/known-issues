---
title: 'Mercado Libre Los atributos altura_paquete_vendedor, anchura_paquete_vendedor, longitud_paquete_vendedor y peso_paquete_vendedor son obligatorios.'
slug: mercado-libre-los-atributos-alturapaquetevendedor-anchurapaquetevendedor-longitudpaquetevendedor-y-pesopaquetevendedor-son-obligatorios
status: PUBLISHED
createdAt: 2026-01-06T18:33:17.480Z
updatedAt: 2026-01-06T18:33:17.480Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-os-atributos-sellerpackageheight-sellerpackagewidth-sellerpackagelength-e-sellerpackageweight-sao-obrigatorios
locale: es
kiStatus: Backlog
internalReference: 1325344
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



1. Mercado Libre ha hecho obligatorios los atributos de dimensión ME2 para las categorías relacionadas con el artículo.
2. Para habilitar la función, el comerciante debe configurar la especificación ME2 a nivel de producto, además de proporcionar las especificaciones de dimensión a nivel de SKU.
3. Los valores de las dimensiones deben ser reales y válidos; los artículos con dimensiones incorrectas o inconsistentes pueden ser moderados por Mercado Libre.
4. La integración sólo reconocerá valores proporcionados en **cm** y **g**.
5. Sólo se aceptan números enteros.
6. La integración leerá los atributos de dimensión directamente del catálogo VTEX; se ignorará la asignación de estos campos en el mapeador.
Estas reglas se aplican a todos los SKU configurados con ME2.


#### Simulación


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png)

## Workaround


Ajuste la asignación de categorías MELI a una categoría que no requiera estos atributos sellerpackage*, si es aceptable desde el punto de vista comercial.


