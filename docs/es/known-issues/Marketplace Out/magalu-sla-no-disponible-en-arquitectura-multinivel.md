---
title: 'Magalu SLA no disponible en arquitectura multinivel'
slug: magalu-sla-no-disponible-en-arquitectura-multinivel
status: PUBLISHED
createdAt: 2022-12-20T00:00:31.000Z
updatedAt: 2026-11-13T17:38:00.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magalu-sla-not-available-in-multilevel-architecture
locale: es
kiStatus: Backlog
internalReference: 719367
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El cliente utiliza una arquitectura de inventario omnicanal multinivel y la mayoría de los pedidos no se integran correctamente, lo que genera un error de SLA.

_**Mercado:**_ Magazine Luiza
_**Causa raíz del producto:**_ Pedidos
_**Arquitectura:**_ Inventario omnicanal multinivel

## Simulación

Se registra un error en el puente y no se puede crear la solicitud en OMS (VTEX).
El error se produce cuando la solicitud contiene dos `IdOrderPackage`.

![](https://vtexhelp.zendesk.com/attachments/token/etBqC3RxwLfjQHzObSSLpjDbN/?name=image.png)

## Workaround

N/A