---
title: 'El flujo de "Volver a pedir" en B2B Suite puede dar lugar a pedidos realizados con datos de marketing incorrectos.'
slug: el-flujo-de-volver-a-pedir-en-b2b-suite-puede-dar-lugar-a-pedidos-realizados-con-datos-de-marketing-incorrectos
status: PUBLISHED
createdAt: 2026-11-10T22:14:12.000Z
updatedAt: 2026-11-10T22:17:31.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: order-again-flow-in-b2b-suite-can-lead-to-orders-placed-with-wrong-marketing-data
locale: es
kiStatus: Backlog
internalReference: 1483449
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al repetir un pedido de la organización (A) mediante el flujo "Repetir pedido" del historial de pedidos, y luego cambiar a la organización (B) y repetir otro pedido de esta organización mediante el mismo flujo, el segundo pedido se puede crear con el `orgId` y el `costId` de la organización A en sus datos de marketing.

## Simulación

- Un usuario se registra en dos organizaciones, A y B, en una tienda que utiliza B2B Suite.
- Realiza el pedido A con la organización A.
- Realiza el pedido B con la organización B.
- Inicia sesión como la organización A.
- Repite el pedido A mediante el botón "Repetir pedido" del historial de pedidos, siendo redirigido a la página de pago.
- Verifica que las etiquetas UTM de la cookie IPS se establezcan con el `orgId` y el `costId` de la organización A mediante la solicitud `/marketingData` realizada por `b2b-checkout-settings`.
- Cambia de organización a la organización B.
- Repite el pedido B mediante el mismo flujo, siendo redirigido a la página de pago.
- Verifica que el proceso haya finalizado correctamente. Esto:

- Las etiquetas UTM de la cookie IPS conservarán los mismos valores: `orgId` y `costId` de la Organización A.

- No se realizará ninguna solicitud nueva de `/marketingData` por parte de `b2b-checkout-settings`.

- El formulario de pedido tendrá sus datos de marketing configurados con `orgId` y `costId` de la Organización A.

- Si continúa con el pedido, este se realizará con los datos de la Organización B, pero con las etiquetas de la Organización A.

## Workaround

1. Elimine la cookie IPS antes de volver a realizar el pedido en una organización diferente a la que utilizó originalmente.
2. Añada parámetros de consulta a la solicitud de reordenamiento `/createBy` con el `orgId` y el `costId` de la organización actual.