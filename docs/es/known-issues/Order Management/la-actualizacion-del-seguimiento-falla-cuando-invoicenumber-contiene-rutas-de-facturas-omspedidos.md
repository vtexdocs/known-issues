---
title: La actualización del seguimiento falla cuando invoiceNumber contiene "/" (rutas de facturas OMS/Pedidos)
slug: la-actualizacion-del-seguimiento-falla-cuando-invoicenumber-contiene-rutas-de-facturas-omspedidos
status: PUBLISHED
createdAt: 2025-10-03T14:04:58.931Z
updatedAt: 2025-10-03T14:04:58.931Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: tracking-update-fails-when-invoicenumber-contains-omsorders-invoice-routes
locale: es
kiStatus: Backlog
internalReference: 1302085
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se crea una factura con un carácter de barra oblicua en invoiceNumber (por ejemplo, 6584634/09), las llamadas posteriores a la API para añadir o actualizar el seguimiento fallan.
El síntoma visible son los errores HTTP 404/400 en los puntos finales de seguimiento de facturas porque "/" en la ruta se interpreta como un separador de URL.
Las cuentas que utilizan integraciones para actualizar el seguimiento a través de OMS se ven afectadas; las rutas de pedidos admiten parcialmente la codificación, pero el comportamiento es incoherente. Esto es similar a un KI-953285 anterior, sobre la propagación de invoiceNumber, pero ahora la replicación funciona y la interrupción se produce específicamente en las actualizaciones de seguimiento con caracteres especiales.

## Simulación


(Cómo reproducir) - Requisitos previos: - Pedido con una factura cuyo invoiceNumber contenga "/" (por ejemplo, creada a través de Admin UI: 123456/71).

- Pasos:
  - Intente actualizar el seguimiento a través de OMS:
    - PATCH /api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}/tracking utilizando el valor sin procesar con barra oblicua, p. ej. .../invoice/123456/789 → devuelve NOT FOUND debido al análisis sintáctico de la ruta en "/".
  - Intente codificar la barra en la URL y actualícela a través de OMS:
    - PATCH .../invoice/123456%2F71/tracking → sigue fallando; OMS parece autodescifrar y rompe la ruta, devolviendo 404/400.

## Workaround

**
Prefiera Admin UI para ediciones de seguimiento en facturas con "/": - Inserte o actualice la información de seguimiento directamente en la interfaz de administración de pedidos, que codifica el valor internamente.

-

Si utiliza la API, evite caracteres especiales en invoiceNumber:

  - Hasta que se disponga de un comportamiento coherente de la API, indique a los integradores que no incluyan "/" u otros caracteres especiales en invoiceNumber cuando las facturas se actualicen a través de rutas API (OMS/pedidos).






