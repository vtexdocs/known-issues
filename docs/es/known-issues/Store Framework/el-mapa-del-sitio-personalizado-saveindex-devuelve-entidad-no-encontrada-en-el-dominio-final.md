---
title: 'El mapa del sitio personalizado (saveIndex) devuelve "Entidad no encontrada" en el dominio final.'
slug: el-mapa-del-sitio-personalizado-saveindex-devuelve-entidad-no-encontrada-en-el-dominio-final
status: PUBLISHED
createdAt: 2026-09-17T23:26:22.000Z
updatedAt: 2026-09-18T21:13:21.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-sitemap-saveindex-returns-entity-not-found-on-the-final-domain
locale: es
kiStatus: Backlog
internalReference: 1462938
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las tiendas que utilizan la función `saveIndex` para generar mapas del sitio personalizados (URLs con el formato `/sitemap/{index-name}.xml`) pueden recibir un error de "Entidad no encontrada" al acceder a estos archivos a través del dominio de producción final, aunque el índice maestro (/sitemap.xml) se actualice correctamente. El mismo archivo funciona con normalidad en `*.myvtex.com`. El problema se debe a una diferencia de enrutamiento entre ambos dominios, lo que provoca que el índice personalizado no se reconozca correctamente en el dominio final.

## Simulación

- Disponer de una cuenta que utilice la función `saveIndex` para registrar un índice de mapa del sitio personalizado (por ejemplo, `myindex`), asociado al enlace de producción.
- El acceso a `https://{accountName}.myvtex.com/sitemap/myindex.xml` devuelve un código 200.
- El acceso a `https://{final-domain}/sitemap/myindex.xml` devuelve el error "Entidad no encontrada".

- El índice maestro `sitemap/custom-user-routes-1.xml` muestra la entrada correctamente en ambos dominios, lo que indica que solo falla la lectura del archivo secundario en el dominio final.

## Workaround

La tienda afectada debe abrir un ticket de soporte solicitando la solución alternativa, que se aplicará por cuenta.