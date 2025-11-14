---
title: 'Mercado Libre Los atributos altura_paquete_vendedor, anchura_paquete_vendedor, longitud_paquete_vendedor y peso_paquete_vendedor son obligatorios.'
slug: mercado-libre-los-atributos-alturapaquetevendedor-anchurapaquetevendedor-longitudpaquetevendedor-y-pesopaquetevendedor-son-obligatorios
status: PUBLISHED
createdAt: 2025-11-14T14:19:28.054Z
updatedAt: 2025-11-14T14:19:28.054Z
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


Los productos fallan al publicar en Mercado Libre porque la categoría ahora requiere dimensiones y peso del paquete, pero la integración nativa MELI de VTEX no está enviando estos atributos todavía. El síntoma visible en Bridge es un mensaje de error que indica que se requieren seller_package_height, seller_package_width, seller_package_length, y seller_package_weight. Esto afecta a los vendedores que exportan artículos a categorías MELI en las que estos atributos se hicieron obligatorios, incluso cuando las correspondencias de categoría y atributo parecen correctas.

## Simulación



-

Prerrequisitos: Una cuenta integrada con Mercado Libre utilizando el conector nativo de VTEX y un producto mapeado a una categoría MELI que ahora requiere dimensiones/peso del paquete.



-

Pasos a seguir:
1) En Admin, asegúrese de que el producto está asignado a la categoría MELI deseada a través de Category Mapper y tiene asignaciones de atributos establecidas como de costumbre.

2) Intente exportar/publicar el producto en MELI (Classic o Premium) a través de Bridge.

3) En Bridge, abra la ficha de error del producto en Marketplace > Conexiones > Productos y compruebe el mensaje devuelto por MELI. Debería ver un error indicando los atributos requeridos: altura_paquete_vendedor, anchura_paquete_vendedor, longitud_paquete_vendedor, peso_paquete_vendedor.


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png)

## Workaround


Ajuste la asignación de categorías MELI a una categoría que no requiera estos atributos sellerpackage*, si es aceptable desde el punto de vista comercial.



