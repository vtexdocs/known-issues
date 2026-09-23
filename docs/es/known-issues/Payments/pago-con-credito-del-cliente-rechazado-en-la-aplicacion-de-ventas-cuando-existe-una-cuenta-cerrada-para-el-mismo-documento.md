---
title: 'Pago con crédito del cliente rechazado en la aplicación de ventas cuando existe una cuenta cerrada para el mismo documento.'
slug: pago-con-credito-del-cliente-rechazado-en-la-aplicacion-de-ventas-cuando-existe-una-cuenta-cerrada-para-el-mismo-documento
status: PUBLISHED
createdAt: 2026-09-23T23:29:06.000Z
updatedAt: 2026-09-23T23:29:06.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: customer-credit-payment-denied-in-sales-app-when-a-closed-account-exists-for-the-same-document
locale: es
kiStatus: Backlog
internalReference: 1465432
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos realizados a través de la **Aplicación de Ventas** y pagados con **Crédito de Cliente** son rechazados, incluso si la cuenta de crédito del cliente está _Abierta_ y tiene crédito disponible. Esto ocurre cuando el cliente tiene una cuenta _Abierta_ creada con un `documentType` personalizado (p. ej., `{document}_CUSTOM`) y también una cuenta _Cerrada_ con un `documentType` nativo (`{document}_CPF` o `{document}_CNPJ`). El error que se muestra en la transacción es "Pago DENEGADO por Crédito de Cliente VTEX. Motivo: La cuenta de crédito está cerrada."`. La misma compra se aprueba en la interfaz de pago web.

## Simulación

1. Cree una cuenta de Crédito de Cliente para un documento utilizando un `documentType` personalizado, dejándola _Abierta_ y con crédito disponible;

2. Asegúrese de que exista una cuenta con el patrón de ID nativo (`{document}_CPF`) para el mismo documento con el estado _Cerrada_;
3. Realice un pedido para este cliente a través de la **Aplicación de Ventas, pagando con Crédito de Cliente**;

4. El pago se rechaza con el mensaje «La cuenta de crédito está cerrada». Sin embargo, la misma compra se aprobaría en la interfaz de pago web.

## Workaround

Complete el pedido a través de la interfaz de pago web. Para clientes nuevos, crear la cuenta de Crédito de Cliente con un `documentType` nativo evita este problema, pero esto no aplica cuando el ID nativo ya está en uso por una cuenta cerrada.