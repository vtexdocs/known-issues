---
title: 'El mapa del sitio devuelve "Error al obtener los datos del mapa del sitio".'
slug: el-mapa-del-sitio-devuelve-error-al-obtener-los-datos-del-mapa-del-sitio
status: PUBLISHED
createdAt: 2025-11-06T20:20:23.547Z
updatedAt: 2025-11-06T20:20:23.547Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-returns-error-fetching-sitemap-data
locale: es
kiStatus: Backlog
internalReference: 1319643
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Algunas tiendas están experimentando el error "Error fetching sitemap data" al intentar acceder al archivo principal `/sitemap.xml`. Esto impide que los robots y rastreadores estándar accedan a la estructura del mapa del sitio de la tienda.


#### Simulación



- Acceda a la URL principal del mapa del sitio de una tienda afectada (por ejemplo, `https://www.{storedomain}.com/sitemap.xml`).
- Observa que en lugar de devolver el índice XML, el sistema devuelve el mensaje "Error fetching sitemap data".

## Workaround


Instale la versión hotfix de la aplicación sitemap en la cuenta afectada: `vtex.store-sitemap@2.18.4-hkignore`



