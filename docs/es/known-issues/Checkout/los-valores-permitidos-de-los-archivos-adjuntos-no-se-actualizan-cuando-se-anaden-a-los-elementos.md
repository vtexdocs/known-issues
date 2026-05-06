---
title: 'Los valores permitidos de los archivos adjuntos no se actualizan cuando se añaden a los elementos'
slug: los-valores-permitidos-de-los-archivos-adjuntos-no-se-actualizan-cuando-se-anaden-a-los-elementos
status: PUBLISHED
createdAt: 2023-10-17T20:16:26.000Z
updatedAt: 2023-10-17T20:16:26.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachments-permitted-values-are-not-updated-when-its-added-to-items
locale: es
kiStatus: Backlog
internalReference: 920970
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los valores permitidos de un archivo adjunto no se actualizan si se ha añadido a un artículo antes de modificar dichos valores en el panel de administración. Esto provocará un error en el carrito con el mensaje «No se puede establecer comunicación con el vendedor».

## Simulación

- Crea un archivo adjunto con valores permitidos;
- Añade un artículo con el archivo adjunto;
- Cambia los valores permitidos del archivo adjunto;
- Actualiza el carrito.

## Workaround

N/A