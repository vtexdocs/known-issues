---
title: 'Los pedidos de tarjetas de regalo se quedan bloqueados después de la facturación (falta el ID de transacción del proveedor en la autorización).'
slug: los-pedidos-de-tarjetas-de-regalo-se-quedan-bloqueados-despues-de-la-facturacion-falta-el-id-de-transaccion-del-proveedor-en-la-autorizacion
status: PUBLISHED
createdAt: 2023-07-05T15:50:22.000Z
updatedAt: 2026-10-21T12:10:34.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-orders-stuck-after-invoicing-provider-transaction-id-missing-at-authorization
locale: es
kiStatus: Backlog
internalReference: 855864
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos pagados total o parcialmente con una tarjeta de regalo de un proveedor externo de Gift Card Hub se facturan, pero no se procesan: el pedido permanece en "Verificando factura" y el pago con tarjeta de regalo nunca se registra. Esto ocurre cuando el proveedor responde a la solicitud de creación de transacción sin un ID de transacción. El pago se aprueba, pero cada intento posterior de registro falla sin un ID de referencia, y reintentarlo no soluciona el problema. El pedido permanece en "Verificando factura" después de que se envía la factura. El historial del pedido muestra "Se ha producido un error con la pasarela" (SalesOrderSystem009), que se repite en cada reintento. La transacción permanece como "Aprobada" en Pagos VTEX y nunca llega a "Finalizada".

## Simulación

1. Registre un proveedor de tarjetas de regalo de prueba en Gift Card Hub cuyo endpoint de creación de transacción devuelva una respuesta exitosa con un ID de transacción vacío.

2. Realice un pedido en una tienda de prueba pagando con una tarjeta de regalo de ese proveedor. 3. Verificar el pedido: el pago se aprueba y el pedido pasa al estado "Listo para procesar".

4. Facturar el pedido.

5. El pedido permanece en "Verificando factura" y su historial muestra "Se ha producido un error con la pasarela de pago" en cada intento.

## Workaround

Proveedor (prevención): la respuesta de creación de transacción siempre debe incluir un ID de transacción no vacío, como lo exige el protocolo del proveedor Gift Card Hub.