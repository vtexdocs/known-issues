---
title: 'Revista Luiza Error de puente: "Solicitud bloqueada por CDN de mercado'
slug: revista-luiza-error-de-puente-solicitud-bloqueada-por-cdn-de-mercado
status: PUBLISHED
createdAt: 2025-11-18T17:40:27.798Z
updatedAt: 2025-11-18T17:40:27.798Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-bridge-error-request-blocked-by-marketplace-cdn
locale: es
kiStatus: Backlog
internalReference: 1327151
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Algunas solicitudes de actualización de SKU/Catálogo enviadas desde VTEX Bridge a Magazine Luiza están siendo bloqueadas por la CDN/WAF del mercado.
En estos casos, Bridge muestra:
**"No se pudo completar la solicitud. Solicitud bloqueada por la CDN del mercado "**.
Este comportamiento se produce principalmente cuando la carga útil incluye imágenes con patrones de nombre de archivo que Magalu rechaza, como secuencias de caracteres específicas (por ejemplo, `--1-`).


#### Simulación



- En Bridge, intente enviar el SKU/producto afectado a Magalu.
- Bridge devuelve:
**"No se ha podido completar la solicitud. Solicitud bloqueada por la CDN del mercado "**.

## Workaround



- Cambie el nombre de los archivos de imagen para eliminar los patrones no permitidos (por ejemplo, elimine `--1-`).
- Actualice las imágenes del catálogo, borre las cachés si es necesario y vuelva a enviar el SKU a través de Bridge.



