---
title: 'KI Mapa del sitio personalizado (saveIndex) retorna "Entidad no encontrada" en el domínio final'
slug: ki-mapa-del-sitio-personalizado-saveindex-retorna-entidad-no-encontrada-en-el-dominio-final
status: PUBLISHED
createdAt: 2026-09-17T23:26:22.000Z
updatedAt: 2026-09-17T23:26:22.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-customizado-saveindex-retorna-entity-not-found-no-dominio-final
locale: es
kiStatus: Backlog
internalReference: 1462938
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Lojas que usan una función `saveIndex` para generar mapas de sitio personalizados (URL sin formato `/sitemap/{index-name}.xml`) pueden detectar el error "Entidad no encontrada" al acceder a esos archivos en el dominio de producción, mesmo con el índice mestre (/sitemap.xml) que se está actualizando correctamente. El archivo continúa funcionando normalmente en `*.myvtex.com`. El problema está relacionado con una diferencia de roteamento entre los dos dominios, que faz com que o índice personalizado não seja reconhecido corretamente no domínio final.

## Simulación

- Hay un contacto que utiliza una función `saveIndex` para registrar un índice personalizado de mapa del sitio (ej.: `meuindice`), asociado al enlace de producción.
- Acceder a `https://{accountName}.myvtex.com/sitemap/meuindice.xml` → retorna 200.
- Acceder a `https://{dominio-final}/sitemap/meuindice.xml` → retorna el error "Entidad no encontrada".
- El índice mestre `sitemap/custom-user-routes-1.xml` lista una entrada normalmente en ambos os domínios, indicando que apenas a leitura do arquivo filho falha no domínio final.

## Workaround

Una loja afetada debe abrir un ticket de soporte solicitando una solución alternativa, que se aplicará pontualmente para un contacto.