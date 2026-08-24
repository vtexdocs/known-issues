---
title: 'El mapa del sitio devuelve "Cuenta no encontrada" en dominios públicos para tiendas divididas entre Store Framework y FastStore.'
slug: el-mapa-del-sitio-devuelve-cuenta-no-encontrada-en-dominios-publicos-para-tiendas-divididas-entre-store-framework-y-faststore
status: PUBLISHED
createdAt: 2026-08-24T17:38:37.000Z
updatedAt: 2026-08-24T17:38:37.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-returns-account-not-found-on-public-domains-for-stores-split-between-store-framework-and-faststore
locale: es
kiStatus: Backlog
internalReference: 1451253
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las tiendas que utilizan una distribución de tráfico activa entre VTEX IO y FastStore no pueden servir `/sitemap.xml` en sus dominios públicos (apex y `www`); devuelven el error `400 - Cuenta no encontrada`. Los dominios internos (`{account}.myvtex.com`, `{account}.vtexcommercestable.com.br`) funcionan correctamente para la misma cuenta. El equipo de ingeniería confirmó que el diseño actual de distribución es incompatible con la publicación de mapas del sitio para estas tiendas.

## Simulación

- Cree una tienda con una distribución de tráfico activa entre IO y FastStore (cualquier porcentaje).

- Solicite `https://{dominio-personalizado-público}/sitemap.xml` (apex y/o `www`).

- Observe el error `400 Solicitud incorrecta`, con el mensaje "Cuenta no encontrada" en el cuerpo. - Comparar con la misma cuenta en:

- `https://{account}.vtexcommercestable.com.br/sitemap.xml` → funciona (200)

- `https://{account}.myvtex.com/sitemap.xml` → funciona (200)

## Workaround

No aplica