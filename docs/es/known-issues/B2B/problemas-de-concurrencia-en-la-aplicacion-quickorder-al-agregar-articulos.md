---
title: 'Problemas de concurrencia en la aplicación Quickorder al agregar artículos'
slug: problemas-de-concurrencia-en-la-aplicacion-quickorder-al-agregar-articulos
status: PUBLISHED
createdAt: 2026-08-21T22:16:42.000Z
updatedAt: 2026-08-31T23:09:34.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: quickorder-app-concurrency-issues-when-adding-items
locale: es
kiStatus: Backlog
internalReference: 1450887
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La aplicación Quickorder divide la adición de artículos al carrito en lotes de 10 y llama a las API de pago en paralelo.

Esto puede provocar problemas de concurrencia con lotes grandes de artículos.

## Simulación

Este problema no es fácil de reproducir; la concurrencia puede ocurrir o no.

## Workaround

No aplica