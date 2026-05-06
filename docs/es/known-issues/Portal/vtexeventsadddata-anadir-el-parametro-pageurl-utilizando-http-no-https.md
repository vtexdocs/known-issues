---
title: 'vtex.events.addData: añadir el parámetro «pageUrl» utilizando http, no https'
slug: vtexeventsadddata-anadir-el-parametro-pageurl-utilizando-http-no-https
status: PUBLISHED
createdAt: 2021-03-24T14:48:37.000Z
updatedAt: 2022-01-21T18:02:41.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: vtexeventsadddata-adding-pageurl-parameter-using-http-not-https
locale: es
kiStatus: Backlog
internalReference: 348128
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

`vtex.events.addData`: añadir el parámetro `pageUrl` utilizando HTTP, no HTTPS

## Simulación

- Comprueba el código fuente de una cuenta del Portal VTEX
- La URL de la página utilizará HTTP:

 <script>
 vtex.events.addData({"pageCategory":"Home","pageDepartment":null,"pageUrl":"**http**://account.myvtex.com/", ...})
    </script>​

## Workaround

No hay ninguna solución alternativa