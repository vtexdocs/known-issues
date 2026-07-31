---
title: 'Error de búsqueda de precios ("Error - indefinido") en subcuentas debido a la falta de carpetas de configuración de CMS.'
slug: error-de-busqueda-de-precios-error-indefinido-en-subcuentas-debido-a-la-falta-de-carpetas-de-configuracion-de-cms
status: PUBLISHED
createdAt: 2026-07-31T16:52:22.000Z
updatedAt: 2026-07-31T16:52:22.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: pricing-search-error-error-undefined-on-subaccounts-due-to-missing-cms-configuration-folders
locale: es
kiStatus: Backlog
internalReference: 1441865
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al buscar una lista de precios de un producto en la aplicación de administración de precios (`/admin/pricing#/prices`) en una subcuenta (por ejemplo, una política comercial/cuenta secundaria como `{account}b2b`), la página muestra el error "Error - indefinido (Código de error = indefinido)" y la búsqueda falla. Esto ocurre porque estas subcuentas carecen de las carpetas de configuración del CMS de las que depende la página de administración de precios. La cuenta principal (por ejemplo, `{account}`) tiene estas carpetas configuradas correctamente, por lo que la misma búsqueda funciona sin problemas.

## Simulación

1. Acceda a la administración de la subcuenta, por ejemplo, `https://{subaccount}.``myvtex.com/admin/pricing#/prices/?tradePolicy=1&page=1&qtd=10`.

2. Busque una lista de precios.

3. Observe el mensaje "Error - indefinido (Código de error = indefinido)".

4. Repita la misma búsqueda con la cuenta principal correspondiente: funciona correctamente, lo que confirma que las carpetas existen allí, pero no en la subcuenta.

## Workaround

Utilice la cuenta principal para buscar/editar precios en lugar de la subcuenta. Si necesita gestionar los precios desde la subcuenta, deberá recrear las carpetas de configuración de CMS que faltan en dicha subcuenta.

O bien

Configure la estructura de carpetas de CMS correcta en la subcuenta siguiendo las instrucciones de https://help.vtex.com/docs/tutorials/cms-folder-structure.