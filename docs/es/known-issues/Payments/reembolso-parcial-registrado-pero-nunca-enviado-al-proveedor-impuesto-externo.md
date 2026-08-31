---
title: 'Reembolso parcial registrado pero nunca enviado al proveedor (impuesto externo)'
slug: reembolso-parcial-registrado-pero-nunca-enviado-al-proveedor-impuesto-externo
status: PUBLISHED
createdAt: 2026-08-31T19:20:00.000Z
updatedAt: 2026-08-31T19:20:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: split-refund-recorded-but-never-sent-to-the-provider-external-tax
locale: es
kiStatus: Backlog
internalReference: 1454215
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas que utilizan un proveedor de impuestos externo, el reembolso de un subpedido del vendedor ya facturado falla dentro de la pasarela de pago y nunca llega al conector. El comprador no recibe el reembolso; la transacción puede permanecer en estado de «Liquidación», y se registra un reembolso por el valor total como una «notificación por correo electrónico», mientras que el total de reembolsos permanece en «0», por lo que parece que el reembolso se realizó.

En lugar de reutilizar la distribución de destinatarios acordada en la autorización, la pasarela de pago la reconstruye para el reembolso a partir de la suma de las líneas del carrito, que excluye el impuesto proporcionado externamente. Dado que esta suma es menor que el importe reembolsado, las participaciones se incrementan; en la práctica, solo la del vendedor, ya que la participación del mercado es simplemente el resto y se reduce en la misma cantidad. El vendedor vuelve entonces a su importe acordado, el mercado nunca se recalcula y la diferencia queda sin destinatario.

**Resultado esperado:** El array de destinatarios totaliza el importe reembolsado y el reembolso se envía al conector. **Real:** El total es menor y la pasarela rechaza su propia solicitud con `ValidationException: El valor en destinatarios (xx.xx) es diferente del valor de la operación (xx.xx)`.

El mismo subpedido reembolsado mediante una cancelación, antes de la facturación, genera una matriz correcta y se procesa con normalidad; la factura no es la causa, sino que simplemente redirige la operación a la ruta de reembolso, la única que escala las participaciones.

## Simulación

**Requisitos previos**

- Cuenta de Marketplace con `nativeSplitEnabled: True` en la transacción y un conector que utilice el Protocolo de Proveedor de Pagos con división.

- Campo de transacción `postPurchaseOperationMode` = `Total` o `Retained` (ambos se corresponden con la estrategia afectada). `Partial` utiliza una estrategia diferente.

- Tienda configurada con un **proveedor de impuestos externo**, de modo que los artículos del carrito tengan `"tax": 0` y el impuesto aparezca solo en las entradas de `priceTags` (por ejemplo, `TAXHUB@STATE | ... | Impuesto General sobre Ventas y Uso`). El artículo no debe tener la **clave** `totalTax` en el campo `cart` de la transacción.

- Al menos un artículo del vendedor con una `commission` distinta de cero.

**Pasos**

1. En una tienda cuyos impuestos provienen de un proveedor externo, realice un pedido que combine un artículo vendido por la propia plataforma con otro vendido por un tercero con un acuerdo de comisión. El impuesto debe aparecer en la etiqueta de precio del artículo, no en el precio del artículo, por lo que el total del subpedido del vendedor será superior al precio del artículo más los gastos de envío.

2. Permita que se procese el pago del pedido para que el subpedido del vendedor sea facturable. La división acordada en este punto se guarda en la transacción y sirve como referencia para la posterior verificación del reembolso.

3. En la gestión de pedidos de la cuenta del vendedor, inicie el procesamiento del subpedido.

4. Facture el subpedido del vendedor por su valor total (factura de venta, tipo: Salida).

5. Espere hasta que el subpedido del vendedor aparezca como facturado. Los pasos 3 y 5 son importantes: facturar mientras el subpedido aún está en estado "listo para procesar" adjunta el paquete sin avanzar el pedido, y la devolución en el siguiente paso se rechaza con el mensaje "pedido sin valor facturado".

6. Registrar la devolución del subpedido del vendedor por el mismo valor: una factura de devolución, tipo: Entrada. Esta es la acción que activa el reembolso y donde se produce el error.

**Resultado esperado:** Se envía un reembolso del valor total del subpedido del vendedor al conector y `totalRefunds` aumenta.

**Resultado real:** El valor en destinatarios (<A>) es diferente del valor de la operación (<B>) con `<A> < <B>`, `totalRefunds` permanece en `0`, y el reembolso se registra con `tipo: "notificación por correo electrónico"` y `connectorResponse: null`. La diferencia `<B> − <A>` es la parte que se le descontó al vendedor y que nunca se devolvió al mercado.

## Workaround

No hay ninguna solución alternativa disponible.