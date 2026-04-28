---
title: 'El permiso «Acceso completo al inventario logístico» no funcionó como se esperaba'
slug: el-permiso-acceso-completo-al-inventario-logistico-no-funciono-como-se-esperaba
status: PUBLISHED
createdAt: 2026-04-28T14:15:16.330Z
updatedAt: 2026-04-28T14:15:16.330Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: logistics-inventory-full-access-permission-did-not-work-as-expected
locale: es
kiStatus: Fixed
internalReference: 482353
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En este momento, dentro de los permisos de Logística, existe uno denominado «Acceso completo al inventario de logística», que, en teoría, debería permitir gestionar el inventario de forma totalmente independiente; es decir, el usuario podría manipular únicamente los datos de inventario, sin poder acceder a nada más dentro del módulo de logística.

El problema actual es que este permiso no funciona como se esperaba, es decir, se necesita el permiso general de logística para poder gestionar el inventario. El riesgo, en este caso, es que el usuario pueda realizar acciones en otros módulos dentro de Logística, como políticas de envío, geolocalización, etc.

## Simulación

1. Puede añadir el permiso «**Acceso completo al inventario de Logística**» a un usuario e intentar editar alguna información en el administrador de inventario. Verás que no será posible realizar ningún cambio ni simplemente ver la lista de inventario.
2. Permiso del Gestor de licencias:
  - ![](https://vtexhelp.zendesk.com/attachments/token/wBGPB2maBntieEZdAxOEYNYkT/?name=inline-5358520.png)
3. Usuario con solo ese permiso
  - ![](https://vtexhelp.zendesk.com/attachments/token/V5aBNZngEUfMQH8czLiQm7e88/?name=inline-1080298236.png)​

## Workaround

En este momento, la única solución alternativa es configurar el permiso «Acceso completo a logística», teniendo en cuenta que el usuario podrá realizar acciones en las demás funcionalidades del módulo de logística, como políticas de envío, geolocalización, etc.