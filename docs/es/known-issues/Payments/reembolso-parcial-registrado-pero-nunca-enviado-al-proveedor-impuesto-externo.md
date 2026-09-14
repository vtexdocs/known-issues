---
title: 'Reembolso parcial registrado pero nunca enviado al proveedor (impuesto externo)'
slug: reembolso-parcial-registrado-pero-nunca-enviado-al-proveedor-impuesto-externo
status: PUBLISHED
createdAt: 2026-08-31T19:20:00.000Z
updatedAt: 2026-09-15T00:50:19.000Z
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

En las tiendas que utilizan un proveedor de impuestos externo, el reembolso de un subpedido ya facturado a un vendedor falla dentro de la pasarela de pago. No se recibe ninguna información del proveedor de pagos y el comprador no recibe el reembolso; sin embargo, se registra un reembolso por el importe total como notificación por correo electrónico, con un total reembolsado de cero, por lo que parece que la transacción se realizó correctamente. La transacción puede permanecer en estado de «Liquidación».

Causa: la pasarela de pago recalcula cómo dividir el reembolso entre la plataforma y el vendedor, y este recálculo no tiene en cuenta el impuesto externo. Abona un importe superior al del vendedor y luego lo corrige, pero no a la plataforma, por lo que las partes ya no suman el importe a reembolsar y la pasarela rechaza su propia solicitud: «El valor en destinatarios (xx.xx) es diferente del valor de la operación (xx.xx)».

Cancelar el pedido antes de facturarlo permite realizar el reembolso normalmente.

## Simulación

### Cómo reconocerlo

- El reembolso de un pedido dividido nunca llegó al comprador, y el conector indica que no se recibió ninguna solicitud.

- La transacción muestra un reembolso por el importe total como **notificación por correo electrónico**, pero el total reembolsado sigue siendo cero.

- El impuesto de la tienda proviene de un proveedor externo, y el importe faltante es similar al impuesto del subpedido.

###

### Pasos
Se necesita una cuenta de marketplace habilitada para pedidos divididos, una tienda con un proveedor de impuestos externo y un artículo de vendedor externo con comisión.

1. Realice un pedido que combine un artículo del marketplace con un artículo de un vendedor externo, con una comisión.

2. Permita que se procese el pago.

3. En la cuenta del vendedor, inicie el procesamiento del subpedido.

4. Facture el importe total (factura de venta).

5. Espere a que aparezca como facturada. Facturar antes de iniciar el procesamiento provoca que la devolución sea rechazada con el mensaje "pedido sin valor facturado".

6. Registre la devolución por el mismo importe (factura de devolución). El reembolso falla en este punto.

**Resultado:** El reembolso se rechaza, el total reembolsado permanece en cero y solo se registra una notificación por correo electrónico.

## Workaround

No existe ninguna solución alternativa.