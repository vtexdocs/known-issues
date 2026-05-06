---
title: 'Las cuentas de franquicia no pueden modificar el límite máximo de unidades del mismo artículo en el carrito'
slug: las-cuentas-de-franquicia-no-pueden-modificar-el-limite-maximo-de-unidades-del-mismo-articulo-en-el-carrito
status: PUBLISHED
createdAt: 2021-01-18T18:00:30.000Z
updatedAt: 2025-04-22T22:36:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: maximum-quantity-setting-of-the-same-item-in-the-cart-cannot-be-changed-by-franchise-accounts
locale: es
kiStatus: Backlog
internalReference: 325273
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las cuentas de franquicia (vendedores de marca blanca) y el portal de vendedores no pueden modificar la configuración de la cantidad máxima de un mismo artículo en el carrito, ya que esta se establece en una pantalla del catálogo heredado (/admin/Site/ConfigForm.aspx), un módulo que se ha eliminado de las cuentas de franquicia, puesto que estas heredan los productos de la cuenta principal.

## Simulación

- Acceda a un entorno de cuenta de franquicia o de vendedor de marca blanca
- Acceda a la pantalla «CMS > Configuración > pestaña General» desde el panel de administración, o vaya directamente a la página /admin/Site/ConfigForm.aspx
- Tenga en cuenta que no es posible acceder al contenido de esta área

## Workaround

Solicite la configuración mediante un ticket a VTEX.