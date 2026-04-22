---
title: 'PDP devuelve un error 404 para los productos que no están asociados a un canal de ventas predeterminado (discovery.config.js)'
slug: pdp-devuelve-un-error-404-para-los-productos-que-no-estan-asociados-a-un-canal-de-ventas-predeterminado-discoveryconfigjs
status: PUBLISHED
createdAt: 2026-04-22T17:26:51.923Z
updatedAt: 2026-04-22T17:26:51.923Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: pdp-returns-a-404-error-for-products-not-associated-with-a-default-sales-channel-discoveryconfigjs
locale: es
kiStatus: Backlog
internalReference: 1396347
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las tiendas FastStore tienen un canal de ventas configurado en `discovery.config.js` como política de ventas predeterminada; por lo tanto, Intelligent Search utiliza esta política de ventas para generar PLP y PDP, ignorando los parámetros de consulta en el momento de la visualización. Por lo tanto, las PDP de los productos que existen **únicamente en una política comercial secundaria** (por ejemplo, un producto exclusivo para miembros) devuelven un error 404, incluso cuando:

- el usuario haya iniciado sesión y pertenezca al clúster correspondiente (p. ej., «miembros»)
- el producto aparezca en la PLP al añadir `?sc={{id}}` a la URL

Actualmente, el producto debe estar disponible en el canal de ventas configurado en `discovery.config.js` para que exista la ruta PDP. En la actualidad, `discovery.config.js` permite la configuración de una única política comercial.

## Simulación

1. Configura un proyecto FastStore con una política comercial/canal de ventas predeterminado fijo (por ejemplo, SC 1) en `discovery.config.js`, utilizando Intelligent Search como motor de búsqueda.
2. Registre uno o más productos que solo figuren en una política comercial secundaria (por ejemplo, SC 3), vinculados a un grupo de clientes específico (miembros, VIP, acceso anticipado, etc.).
3. Verifique, mediante una simulación de pago, si el SKU se entrega **únicamente bajo la política secundaria** y no está disponible bajo la política predeterminada.
4. En la tienda, acceda a una página de listado de productos (PLP) que fuerce la política secundaria mediante `?sc=` en la URL y compruebe que el producto aparece normalmente en los resultados.
5. Inicie sesión con un usuario perteneciente al grupo de clientes asociado a esta política (por ejemplo, con el indicador «member» establecido en true).
6. Sin forzar `?sc={{id}}` en la URL, observe que la sesión sigue utilizando la política comercial predeterminada definida en `discovery.config.js` a través del evento `ValidateSession` en la pestaña Red de DevTools, y que el producto único de la política secundaria no aparece en la PLP ni en los resultados de búsqueda.
7. Intente acceder a la página de detalles de este producto (a través del enlace o introduciendo la URL amigable).

La PDP devuelve un error 404, aunque el producto esté disponible en el inventario secundario y el usuario esté correctamente segmentado.

## Workaround

N/A



%0A