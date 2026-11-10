---
title: 'El flujo de reordenamiento en B2B Suite puede provocar que se realicen pedidos con datos de marketing incorrectos.'
slug: el-flujo-de-reordenamiento-en-b2b-suite-puede-provocar-que-se-realicen-pedidos-con-datos-de-marketing-incorrectos
status: PUBLISHED
createdAt: 2026-11-10T22:14:12.000Z
updatedAt: 2026-11-10T22:14:12.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: reorder-flow-in-b2b-suite-can-lead-to-orders-placed-with-wrong-marketing-data
locale: es
kiStatus: Backlog
internalReference: 1483449
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al volver a realizar un pedido desde una organización (A), cambiar a otra organización (B) y volver a realizar otro pedido desde esta última, el segundo pedido se puede crear con el `orgId` y el `costId` de la organización A en sus `marketingData`.

## Simulación

- Un usuario se registra en dos organizaciones, A y B, en una tienda que utiliza B2B Suite.
- Realiza el pedido A desde la organización A.
- Realiza el pedido B desde la organización B.
- Inicia sesión como la organización A.
- Vuelve a realizar el pedido A y serás redirigido al proceso de pago.
- Verifica que las etiquetas UTM de la cookie IPS se establezcan con el `orgId` y el `costId` de la organización A mediante la solicitud `/marketingData` realizada por `b2b-checkout-settings`.
- Cambia de organización a la organización B.
- Vuelve a realizar el pedido B y serás redirigido al proceso de pago.
- Verifica que:

- Las etiquetas UTM de la cookie IPS mantengan los mismos valores: `orgId` y `costId`. De la Organización A

- No se realizará ninguna solicitud nueva de `/marketingData` por parte de `b2b-checkout-settings`.

- El formulario de pedido tendrá sus datos de marketing configurados con `orgId` y `costId` de la Organización A.

- Si continúa con el pedido, se realizará con los datos de la Organización B, pero con las etiquetas de la Organización A.

## Workaround

1. Elimine la cookie IPS antes de volver a realizar el pedido en una organización diferente a la que utilizó originalmente.
2. Agregue parámetros de consulta a la solicitud de reordenamiento `/createBy` con el `orgId` y el `costId` de la organización actual.