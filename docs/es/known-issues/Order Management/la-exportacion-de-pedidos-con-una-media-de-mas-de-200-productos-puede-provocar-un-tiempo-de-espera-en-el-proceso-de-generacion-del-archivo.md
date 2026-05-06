---
title: 'La exportación de pedidos con una media de más de 200 productos puede provocar un tiempo de espera en el proceso de generación del archivo'
slug: la-exportacion-de-pedidos-con-una-media-de-mas-de-200-productos-puede-provocar-un-tiempo-de-espera-en-el-proceso-de-generacion-del-archivo
status: PUBLISHED
createdAt: 2022-11-22T21:40:26.000Z
updatedAt: 2025-02-27T19:09:24.000Z
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

La exportación de productos se lleva a cabo, por lo general, para una serie de pedidos basados en filtros determinados por el encargado de la tienda, generando así un documento con todos los pedidos y dividiendo cada SKU en una línea independiente.

En este caso, **el problema se debió a una tienda que tiene múltiples pedidos con más de 200 SKU por pedido**. En el flujo de generación del archivo, estos pedidos juntos provocan un tiempo de espera en el procesamiento de la información, ya que el objeto de cada solicitud es demasiado grande y, como consecuencia, surgen problemas en la generación del archivo.

## Simulación

1. Intenta crear un filtro en la lista de pedidos **que incluya varios pedidos con más de 200 SKU**.
2. Solicita la exportación del documento
3. Es posible que aparezca el error:
  1. Debe abrir el inspector del navegador y buscar los eventos de procesamiento de exportación «**inprogress**»
  2. Busque en los registros el **ID de procesamiento** de esos eventos
  3. El error indica que la tarea se ha cancelado: «`Error, "report_process", exception_message="Se ha cancelado una tarea." `»

## Workaround

En estos casos, se recomienda segmentar la exportación de pedidos; es decir, para aquellos pedidos con más de 200 SKU, es mejor exportarlos individualmente.

Por otro lado, es importante validar la arquitectura del catálogo, ya que no es habitual tener pedidos con más de 200 SKU.