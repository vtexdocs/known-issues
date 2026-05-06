---
title: 'Error 403 en todas las URL que contengan «develop-»'
slug: error-403-en-todas-las-url-que-contengan-develop
status: PUBLISHED
createdAt: 2024-02-01T13:46:36.000Z
updatedAt: 2024-11-11T15:19:14.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: 403-error-for-all-urls-containing-develop
locale: es
kiStatus: Backlog
internalReference: 975182
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se espera que una URL pueda contener cualquier palabra sin generar un error, pero la palabra «**develop**» seguida del carácter «**-**» genera automáticamente un error 403.
Por ejemplo, un producto con un enlace de texto  `how-to-develop-a-culture-of-customer-centricity` mostrará un error 403, ya que contiene la cadena «develop-».

## Simulación

1. Introduce la cadena «develop-» en un enlace de texto
2. Carga el producto
3. Observa el error 403

## Workaround

No utilices la cadena «develop-»