---
title: 'APP FBE La aplicación Checkout Pixel genera un error de "Se ha superado el tamaño máximo de la pila de llamadas" en el proceso de pago.'
slug: app-fbe-la-aplicacion-checkout-pixel-genera-un-error-de-se-ha-superado-el-tamano-maximo-de-la-pila-de-llamadas-en-el-proceso-de-pago
status: PUBLISHED
createdAt: 2026-09-24T16:27:43.000Z
updatedAt: 2026-09-24T16:27:43.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: app-fbe-checkout-pixel-app-throws-a-maximum-call-stack-size-exceeded-error-in-the-checkout
locale: es
kiStatus: Backlog
internalReference: 1465789
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas que utilizan la integración de Meta (Extensión de Negocios de Facebook), la consola del navegador puede mostrar el error "Se ha superado el tamaño máximo de la pila de llamadas" en las páginas de pago. Este error proviene de la aplicación Facebook Checkout Pixel, que se carga en el proceso de pago como parte de la integración.

Ocurre de forma intermitente, ya que depende del tiempo que tardan los scripts de la página en cargarse en el navegador, algo que la tienda no puede controlar. Es más frecuente en dispositivos o conexiones lentas. Cuando ocurre, los scripts de la página que intentan enviar eventos de Meta Pixel durante la carga pueden fallar.

La integración del catálogo y el proceso de pago no se ven afectados. Los eventos de compra enviados desde el servidor (API de Conversiones) tampoco dependen de esta aplicación.

Referencias:

- Integración: Extensión de Negocios de Facebook (FBE) / Extensión de Negocios Meta
- Función del píxel Meta afectada: `fbq` (`window.fbq`, `fbq.push`)
- Script Meta: `connect.facebook.net/en_US/fbevents.js`
- Mensaje de la consola: `RangeError: Se superó el tamaño máximo de la pila de llamadas`

## Simulación

- Utilice una tienda con la integración de la Extensión de Negocios Meta instalada y configurada.

- Añada un producto al carrito y vaya al proceso de pago, idealmente al paso de pago con los datos del cliente ya completados.
- Abra las herramientas para desarrolladores del navegador y observe la consola.

- Recargue la página varias veces, preferiblemente en un dispositivo móvil o con una conexión lenta.

- En algunas cargas, la consola muestra el error "Se superó el tamaño máximo de la pila de llamadas" proveniente de la aplicación del píxel de pago de Facebook.

## Workaround

No existe ninguna solución alternativa que mantenga la aplicación activa.
Desactivar la opción "¿Habilitar configuración de píxeles?" en la configuración de integración de Meta no resuelve el error. Cambiar el orden en que se cargan los scripts de la tienda tampoco lo resuelve.

Si el error causa problemas en la tienda, desinstalar la aplicación Facebook Checkout Pixel lo soluciona sin afectar la integración del catálogo. Los eventos de pago enviados por esta aplicación dejarán de enviarse.