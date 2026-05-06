---
title: 'La configuración avanzada de la tienda se registra a nivel global en lugar de mediante vinculación'
slug: la-configuracion-avanzada-de-la-tienda-se-registra-a-nivel-global-en-lugar-de-mediante-vinculacion
status: PUBLISHED
createdAt: 2023-04-04T03:15:41.000Z
updatedAt: 2023-04-04T03:15:41.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: advanced-store-settings-being-registered-globally-insted-of-by-binding
locale: es
kiStatus: Backlog
internalReference: 783835
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al guardar la configuración avanzada dividida por enlace, el sistema registra todos los valores; sin embargo, al solicitar estos valores en tiempo de ejecución del renderizado, se obtienen los valores del enlace y no del contexto global:

https://github.com/vtex-apps/store/blob/46e3df3ecba20170fc3a6eebf12370969e3b5abf/react/components/ProductTitleAndPixel.tsx#L186

## Simulación

Necesitarás una tienda con enlaces múltiples y habilitar el enlace para la configuración de la tienda en admin/cms/store:

 ![](https://vtexhelp.zendesk.com/attachments/token/CNgIedTpUI7LPWqCEfA10HIxz/?name=image.png)

Guarda tu configuración avanzada y comprueba la configuración de tu tienda Vtex:

https://infra.io.vtex.com/apps/v0///apps/vtex.store/settings

Observarás que la configuración avanzada quedará fuera de los contextos de enlace

## Workaround

Añade la configuración que desees mediante un PUT en la clave de configuración dentro de uno de los objetos de enlace:

 ![](https://vtexhelp.zendesk.com/attachments/token/JYKSnxOk9qHdm8RGGp9IutNB3/?name=image.png)