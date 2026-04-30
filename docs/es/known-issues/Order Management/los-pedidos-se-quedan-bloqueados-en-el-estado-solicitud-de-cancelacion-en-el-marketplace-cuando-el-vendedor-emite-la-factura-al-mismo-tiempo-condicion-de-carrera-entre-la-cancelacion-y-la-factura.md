---
title: 'Los pedidos se quedan bloqueados en el estado «solicitud de cancelación» en el marketplace cuando el vendedor emite la factura al mismo tiempo (condición de carrera entre la cancelación y la factura)'
slug: los-pedidos-se-quedan-bloqueados-en-el-estado-solicitud-de-cancelacion-en-el-marketplace-cuando-el-vendedor-emite-la-factura-al-mismo-tiempo-condicion-de-carrera-entre-la-cancelacion-y-la-factura
status: PUBLISHED
createdAt: 2026-04-30T21:32:05.565Z
updatedAt: 2026-04-30T21:32:05.565Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-requestcancel-on-marketplace-when-seller-invoices-at-the-same-time-cancel-vs-invoice-race-condition
locale: es
kiStatus: Backlog
internalReference: 1400005
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos pueden quedar bloqueados de forma permanente en el marketplace con el estado «request-cancel» y workflowIsInError: true cuando una solicitud de cancelación del marketplace se solapa con el evento de facturación del vendedor por unos pocos cientos de milisegundos. El síntoma visible es que el pedido del marketplace no pasa a «Cancelado» o «Facturado», mientras que el pedido del vendedor permanece en «Facturado»; los intentos de ajustar el estado a través de la API o la interfaz de usuario fallan. Esto afecta a los escenarios entre el mercado y el vendedor en todos los tipos de entrega y pagos (no se limita a la recogida/Pix), tal y como se ha confirmado en otros ejemplos. El equipo de ingeniería ha identificado esto como una condición de carrera arquitectónica y está planificando su corrección.

## Simulación

No hay una forma fácil de reproducir el escenario.

## Workaround

Procesa o reembolsa la transacción para compensar al cliente, tal y como se hizo con los pedidos afectados.