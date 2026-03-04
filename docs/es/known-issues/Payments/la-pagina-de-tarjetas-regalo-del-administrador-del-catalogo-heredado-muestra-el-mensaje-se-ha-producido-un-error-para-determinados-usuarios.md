---
title: 'La página de tarjetas regalo del administrador del catálogo heredado muestra el mensaje «Se ha producido un error» para determinados usuarios.'
slug: la-pagina-de-tarjetas-regalo-del-administrador-del-catalogo-heredado-muestra-el-mensaje-se-ha-producido-un-error-para-determinados-usuarios
status: PUBLISHED
createdAt: 2026-03-04T20:07:27.986Z
updatedAt: 2026-03-04T20:07:27.986Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: legacy-catalog-admin-gift-card-page-shows-something-went-wrong-for-specific-users
locale: es
kiStatus: Backlog
internalReference: 1373636
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos usuarios no pueden acceder a la página de tarjetas regalo en el administrador del catálogo heredado (por ejemplo, /admin/Site/Vale.aspx). La pantalla muestra un error genérico «Algo ha salido mal». El problema es específico del usuario y se produce cuando un filtro no válido persiste en el lado del servidor para esa página y ese usuario, lo que provoca que las llamadas internas al sistema de tarjetas regalo devuelvan un HTTP 400.

## Simulación

1) Acceda a la página heredada de tarjetas regalo: _/admin/Site/Vale.aspx. _ 2) Aplique un valor de filtro malformado (por ejemplo, pegando una cadena de etiqueta + código como «Código: AAAA-XXXX-BBBB-YYYY» en lugar de un código de canje puro). La página mantiene el filtro por usuario + página en la base de datos.
3) La interfaz de usuario se recarga con un error «Algo salió mal».

## Workaround

N/A