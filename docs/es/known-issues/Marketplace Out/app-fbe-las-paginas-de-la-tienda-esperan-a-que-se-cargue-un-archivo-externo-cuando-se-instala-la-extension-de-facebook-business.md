---
title: 'APP FBE Las páginas de la tienda esperan a que se cargue un archivo externo cuando se instala la extensión de Facebook Business.'
slug: app-fbe-las-paginas-de-la-tienda-esperan-a-que-se-cargue-un-archivo-externo-cuando-se-instala-la-extension-de-facebook-business
status: PUBLISHED
createdAt: 2026-11-12T19:09:42.000Z
updatedAt: 2026-11-12T19:09:42.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: app-fbe-store-pages-wait-for-an-external-file-to-load-when-facebook-business-extension-is-installed
locale: es
kiStatus: Backlog
internalReference: 1484482
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas Store Framework (VTEX IO) con la extensión de Facebook Business (FBE) instalada, se carga un archivo externo al inicio de las páginas de la tienda, y la página espera a que este archivo termine de cargarse antes de mostrarse. Esto puede retrasar la carga de la tienda. Este comportamiento también se produce cuando el píxel está desactivado en la configuración de integración.

## Simulación

1. En una tienda Store Framework con la extensión de Facebook Business instalada, abra una página de la tienda.

2. Abra las herramientas para desarrolladores del navegador y ejecute lo siguiente en la consola:
`performance.getEntriesByType('resource').find(e => e.name.includes('clientParamBuilder')).renderBlockingStatus`
3. El resultado es "bloqueando", lo que significa que la página espera a que se cargue este archivo.

4. Desactive el píxel en la configuración de integración de Meta y repita los pasos 1 a 3. El resultado sigue siendo "bloqueando".

## Workaround

No aplica


Sin embargo, no aplica