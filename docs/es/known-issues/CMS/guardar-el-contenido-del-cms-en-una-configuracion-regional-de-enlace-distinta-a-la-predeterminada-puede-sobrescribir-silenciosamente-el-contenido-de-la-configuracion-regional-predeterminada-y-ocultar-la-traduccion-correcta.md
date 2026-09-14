---
title: 'Guardar el contenido del CMS en una configuración regional de enlace distinta a la predeterminada puede sobrescribir silenciosamente el contenido de la configuración regional predeterminada y ocultar la traducción correcta.'
slug: guardar-el-contenido-del-cms-en-una-configuracion-regional-de-enlace-distinta-a-la-predeterminada-puede-sobrescribir-silenciosamente-el-contenido-de-la-configuracion-regional-predeterminada-y-ocultar-la-traduccion-correcta
status: PUBLISHED
createdAt: 2026-09-14T22:05:22.000Z
updatedAt: 2026-09-14T22:05:22.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: saving-cms-content-in-a-nondefault-binding-locale-can-silently-overwrite-the-defaultlocale-content-and-hide-the-correct-translation
locale: es
kiStatus: Backlog
internalReference: 1460967
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al editar el contenido de una página o bloque en el Editor del sitio en una tienda con varios idiomas compatibles, guardar una traducción para un idioma distinto al predeterminado de la tienda puede, en algunos casos, sobrescribir el contenido original del idioma predeterminado en lugar de crear una traducción independiente. Este error generalmente no es visible por sí solo, pero si el texto afectado también tiene un espacio adicional al principio o al final, la tienda puede mostrar el texto en el idioma incorrecto para ese contenido, aunque exista la traducción correcta.

## Simulación

1. En una tienda con dos o más idiomas compatibles, guarde un bloque de texto en el Editor del sitio con el selector de idioma configurado en el idioma **predeterminado** de la tienda.

2. Recargue la página, edite y guarde el **mismo** bloque nuevamente con el selector de idioma en un idioma **diferente** (distinto del predeterminado). 3. Si el texto afectado contiene espacios al principio o al final, al visualizar la página en la configuración regional que debería mostrar el contenido original, es posible que se muestre el texto guardado en la otra configuración regional, aunque la traducción correcta exista.

## Workaround

Elimine manualmente los espacios iniciales y finales del texto antes de guardarlo en el Editor del sitio.