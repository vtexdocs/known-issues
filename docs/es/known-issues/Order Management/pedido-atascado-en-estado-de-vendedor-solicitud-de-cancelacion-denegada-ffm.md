---
title: 'Pedido atascado en estado de vendedor: solicitud de cancelación denegada (ffm)'
slug: pedido-atascado-en-estado-de-vendedor-solicitud-de-cancelacion-denegada-ffm
status: PUBLISHED
createdAt: 2024-03-22T20:50:22.000Z
updatedAt: 2026-09-23T22:27:41.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-at-seller-status-cancellationrequestdeniedffm
locale: es
kiStatus: Fixed
internalReference: 1004978
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos detectado que algunos vendedores, en la estructura de vendedores y marketplaces de VTEX, al solicitar la cancelación, la rechazan a través de la interfaz de usuario o llaman a la API "cancellation-request-denied-ffm". Esto equivale a rechazar la solicitud de cancelación en sí misma, ya que, por alguna razón, la solicitud de rechazo se superpone con la solicitud de cancelación.

Como resultado, el pedido queda bloqueado en el vendedor, con el estado "cancellation-request-denied-ffm".

En algunos casos, el propio marketplace intenta solicitar la cancelación, lo que también provoca que el marketplace quede bloqueado en el estado "solicitud de cancelación".

Por otro lado, se ha dado el caso en que el marketplace no recibe esta notificación de cancelación y continúa con el pedido hasta que alcanza el estado "Facturado".

En todos los casos, no podemos cambiar el estado de estos pedidos.

## Simulación

1- Crear un pedido con la marca blanca del vendedor;
2. En el pedido del vendedor, cambie el estado a "en procesamiento".

3. Aún en la página del vendedor, solicite la cancelación del pedido.

4. En la solicitud del vendedor, aparecerá el mensaje "aceptar o rechazar la cancelación". Haga clic en "rechazar" en la página del vendedor o utilice la API. Verá que la solicitud del vendedor pasará al estado "cancelation-request-denied-ffm".

5. En el pedido de Marketplace, haga clic en "cancelar".

6. La solicitud de Marketplace se quedará en "Solicitud de cancelación".

Es posible que el pedido de Marketplace continúe su procesamiento y se envíe la factura.

## Workaround

Esto no es una solución alternativa, sino una recomendación para las cuentas: una vez que el vendedor solicite la cancelación, no rechace la solicitud directamente.