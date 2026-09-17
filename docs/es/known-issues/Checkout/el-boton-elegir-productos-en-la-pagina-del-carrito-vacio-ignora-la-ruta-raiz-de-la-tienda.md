---
title: 'El botón "Elegir productos" en la página del carrito vacío ignora la ruta raíz de la tienda.'
slug: el-boton-elegir-productos-en-la-pagina-del-carrito-vacio-ignora-la-ruta-raiz-de-la-tienda
status: PUBLISHED
createdAt: 2021-01-12T18:39:44.000Z
updatedAt: 2026-09-17T16:17:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: choose-products-button-on-the-empty-cart-page-ignores-the-stores-rootpath
locale: es
kiStatus: No Fix
internalReference: 323515
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas que usan rootPath, el botón "Elegir productos" en la página del carrito vacío redirige al comprador al dominio raíz en lugar de a la ruta configurada para esa tienda, sacándolo de la página correcta.

## Simulación

1. En una tienda que usa rootPath, abre la página de pago con el carrito vacío.

2. Observa el botón "Elegir productos" en la página del carrito vacío.

3. El botón apunta al dominio raíz (p. ej., www.store.com) en lugar de a la ruta de la tienda (p. ej., www.store.com/nl).

## Workaround

Personaliza ese botón en la interfaz para corregir su URL.