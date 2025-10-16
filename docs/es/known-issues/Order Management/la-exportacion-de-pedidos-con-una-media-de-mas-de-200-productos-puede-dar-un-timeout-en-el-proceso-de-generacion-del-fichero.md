---
title: La exportación de pedidos con una media de más de 200 productos puede dar un timeout en el proceso de generación del fichero
slug: la-exportacion-de-pedidos-con-una-media-de-mas-de-200-productos-puede-dar-un-timeout-en-el-proceso-de-generacion-del-fichero
status: PUBLISHED
createdAt: 2025-10-16T20:39:59.869Z
updatedAt: 2025-10-16T20:39:59.869Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: exporting-orders-with-an-average-of-more-than-200-products-can-give-a-timeout-in-the-file-generation-process
locale: es
kiStatus: No Fix
internalReference: 702933
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La exportación de productos se realiza generalmente para una serie de pedidos en base a filtros determinados por el almacenista, generando así un documento con todos los pedidos, y dividiendo cada SKU en una línea independiente.

En este caso, **el problema fue causado por una tienda que tiene varios pedidos con más de 200 SKU por pedido**. En el flujo de generación del fichero, estos pedidos juntos generan un timeout en el procesamiento de la información, ya que el objeto de cada petición es demasiado grande, y como consecuencia, problemas en la generación del fichero.


#### Simulación



1. Intenta crear un filtro en la lista de pedidos **que incluya varios pedidos con más de 200 SKU**.
2. Solicitar la exportación del documento.
3. Es posible que aparezca el error:
  1. Debe abrir el inspector del navegador y buscar los eventos de procesamiento de exportación "**en curso**"
  2. Busca en los logs el **identificador de procesamiento** de esos eventos
  3. El error muestra que la tarea fue cancelada: "`Error, "informe_proceso", exception_message="Se ha cancelado una tarea". `"


## Workaround


En estos casos se recomienda segmentar la exportación de pedidos, es decir, para aquellos pedidos con más de 200 SKUs, es mejor exportar individualmente.

Por otro lado, es importante validar la arquitectura del catálogo, ya que no es común tener pedidos con más de 200 SKUs.



