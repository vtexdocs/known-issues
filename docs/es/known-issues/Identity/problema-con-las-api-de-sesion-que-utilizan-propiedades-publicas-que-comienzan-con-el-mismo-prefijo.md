---
title: 'Problema con las API de sesión que utilizan propiedades públicas que comienzan con el mismo prefijo'
slug: problema-con-las-api-de-sesion-que-utilizan-propiedades-publicas-que-comienzan-con-el-mismo-prefijo
status: PUBLISHED
createdAt: 2023-08-21T20:00:25.000Z
updatedAt: 2023-08-21T20:11:31.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: issue-with-session-apis-using-public-properties-beginning-with-the-same-prefix
locale: es
kiStatus: Backlog
internalReference: 885011
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API de sesión está generando algunas inconsistencias. El equipo de ingeniería ha identificado el error, que está relacionado con propiedades que comienzan con la misma palabra.

## Simulación

Si se realiza una solicitud POST enviando dos valores públicos con el mismo prefijo, la API solo recibe uno. Si se vuelve a intentar, realizando la misma solicitud POST y enviando los mismos dos valores, la API recibe ambos.

## Workaround

provisional**
n/a