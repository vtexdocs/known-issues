---
title: 'Lista de regalos Los datos del evento salvado en la interfaz de usuario no son mensajes que se reflejen en la bd'
slug: lista-de-regalos-los-datos-del-evento-salvado-en-la-interfaz-de-usuario-no-son-mensajes-que-se-reflejen-en-la-bd
status: PUBLISHED
createdAt: 2021-07-27T17:19:17.000Z
updatedAt: 2026-09-22T20:55:10.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: giftlist-data-de-evento-salva-na-ui-nao-e-a-mesma-que-reflete-no-bd
locale: es
kiStatus: Fixed
internalReference: 402134
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Salvando el evento da giftlist com data 31/12/2021, ela registra na UI 30/12/3031, mas na exportação fica 31/12/2021 (a data correta)

## Simulación

1- cuenta https://danilo.myvtex.com/_secure/giftlist/create
2- criar uma nova lista com evento e usar a data 31/12/2021
3- verificar los datos de la interfaz de usuario y exportar otros datos

## Workaround

n / A