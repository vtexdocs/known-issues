---
title: 'Buscacep no funciona en el formulario de creación de listas de regalos.'
slug: buscacep-no-funciona-en-el-formulario-de-creacion-de-listas-de-regalos
status: PUBLISHED
createdAt: 2021-03-09T21:38:37.000Z
updatedAt: 2026-09-22T20:35:03.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: buscacep-not-working-in-create-giftlist-form
locale: es
kiStatus: Fixed
internalReference: 342418
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, el enlace "No sé mi código postal" en la página "/_secure/giftlist/create" para el tipo de lista "Al donante de la lista" redirige al usuario a la misma página:

## Simulación

1) Acceda a https://.myvtex.com/_secure/giftlist/create

2) Pulse el enlace con el ID "dont-know-postal-code":

Se observa claramente que el atributo de destino está vacío, cuando debería dirigir a un hipervínculo válido.

## Workaround

Usando directamente el localizador de códigos postales de Correios: http://www.buscacep.correios.com.br/sistemas/buscacep/default.cfm