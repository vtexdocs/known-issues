---
title: 'Las opciones de montaje adjuntas pierden vinculación si los artículos están disponibles en diferentes vendedores de marca blanca'
slug: las-opciones-de-montaje-adjuntas-pierden-vinculacion-si-los-articulos-estan-disponibles-en-diferentes-vendedores-de-marca-blanca
status: PUBLISHED
createdAt: 2025-10-15T21:11:15.093Z
updatedAt: 2025-10-15T21:11:15.093Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: assembly-options-attachments-lose-binding-if-items-are-available-in-different-whitelabel-sellers
locale: es
kiStatus: Backlog
internalReference: 1074856
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los archivos adjuntos de las opciones de montaje pierden vinculación cuando se añaden dos artículos al carro de diferentes vendedores de marca blanca (uno de los vendedores puede ser el vendedor 1), y ambos tienen los mismos archivos adjuntos registrados en las opciones de montaje.

El comportamiento esperado es que cada accesorio se entregue según sus opciones de montaje. Sin embargo, ambos accesorios serán entregados por el mismo vendedor, provocando que todos los accesorios de las opciones de montaje y el segundo artículo se muestren como no disponibles.

 ![](https://vtexhelp.zendesk.com/attachments/token/pAnVC0tyWPYhIrtDBJJXfERRR/?name=image.png)


#### Simulación



- Registrar dos opciones de montaje con los mismos accesorios;
- Registrar existencias de cada opción de montaje en distintos vendedores de marca blanca;
- Registrar existencias del accesorio en ambos vendedores de marca blanca;
- Añadir las opciones de montaje a una cesta.


#### Workaround


N/A


