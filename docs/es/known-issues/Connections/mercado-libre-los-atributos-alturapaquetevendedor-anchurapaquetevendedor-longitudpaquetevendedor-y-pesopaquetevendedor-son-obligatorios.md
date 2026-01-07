---
title: 'Mercado Libre Los atributos altura_paquete_vendedor, anchura_paquete_vendedor, longitud_paquete_vendedor y peso_paquete_vendedor son obligatorios.'
slug: mercado-libre-los-atributos-alturapaquetevendedor-anchurapaquetevendedor-longitudpaquetevendedor-y-pesopaquetevendedor-son-obligatorios
status: PUBLISHED
createdAt: 2026-01-07T14:15:26.718Z
updatedAt: 2026-01-07T14:15:26.718Z
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


Mercado Libre ha hecho obligatorios los atributos de dimensión para los artículos ME2 en algunas categorías. Sin embargo, este requisito puede extenderse a nuevas categorías sin previo aviso. Por lo tanto, es importante considerar las dimensiones como obligatorias para cualquier categoría de producto que tenga entrega ME2.

Para que la función funcione correctamente, el comerciante debe configurar la especificación ME2 a nivel de producto y proporcionar las dimensiones a nivel de SKU.
Las dimensiones deben reflejar valores reales (por ejemplo, L 20, H 30, A 10, P 5) y sólo se aceptan valores en centímetros y gramos. Si no son aceptados por Mercado Libre, el artículo será moderado y el producto no será publicado.

La integración lee los atributos de dimensión directamente del catálogo VTEX a nivel SKU.
Cualquier mapeo de estos campos en el mapeador será ignorado. Esta regla se aplica a todos los SKU configurados como ME2.


#### Simulación


 ![](https://vtexhelp.zendesk.com/attachments/token/OdzY5BXVY5FvGgfTL4HgAbVqd/?name=image.png)


#### Workaround


n/a


