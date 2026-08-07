---
title: 'Algunas páginas personalizadas no se devuelven en la API de Rutas Personalizadas, lo que provoca que falten entradas en el mapa del sitio.'
slug: algunas-paginas-personalizadas-no-se-devuelven-en-la-api-de-rutas-personalizadas-lo-que-provoca-que-falten-entradas-en-el-mapa-del-sitio
status: PUBLISHED
createdAt: 2025-11-05T20:23:46.000Z
updatedAt: 2026-08-07T16:55:08.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: some-custom-pages-are-not-returning-in-custom-routes-api-causing-missing-entries-in-the-sitemap
locale: es
kiStatus: Backlog
internalReference: 1319581
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En tiendas con un alto volumen de rutas registradas en el Rewriter, algunas páginas personalizadas no aparecen en la respuesta de la API de Rutas Personalizadas (`/_v/public/sitemap/custom-routes`) y faltan en el mapa del sitio generado. El proceso de generación tiene un límite de escaneo y puede detenerse antes de leer todas las rutas si la cuenta tiene un gran número de entradas obsoletas o caducadas, lo que provoca que algunas páginas válidas se omitan silenciosamente.

## Simulación

- Identifique una cuenta con un alto volumen de rutas registradas en el Rewriter.

- Llame a la API de Rutas Personalizadas y confirme que faltan algunas páginas personalizadas conocidas en la respuesta.

- Acceda al mapa del sitio generado para la tienda y confirme que las mismas páginas también faltan allí.

## Workaround

N/A