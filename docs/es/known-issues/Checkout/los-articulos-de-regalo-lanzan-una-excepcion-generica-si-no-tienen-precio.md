---
title: 'Los artículos de regalo lanzan una excepción genérica si no tienen precio'
id: 7Jw1Nihqp3Sg2ecg7R9IEt
status: PUBLISHED
createdAt: 2022-05-12T14:52:18.546Z
updatedAt: 2024-02-16T20:27:57.698Z
publishedAt: 2024-02-16T20:27:57.698Z
firstPublishedAt: 2022-05-12T14:52:18.968Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: gift-items-throws-a-generic-exception-if-it-has-no-price
locale: es
kiStatus: No Fix
internalReference: 510490
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La selección de un artículo de regalo en el carrito lanzará una excepción genérica si no tiene precio, especialmente si la tienda utiliza un servicio de impuestos externo. El cliente no puede seguir seleccionándolo.

Dado que el precio es un requisito, el comportamiento esperado es que el artículo/regalo no se ofrezca.



## Simulación


- para registrar un nuevo artículo o actualizarlo para que no tenga precio
- para crear una promoción de regalo que ofrezca este artículo
- crear un carrito donde se ofrecerá el artículo
- intentar seleccionar el regalo; se presentará un error



## Workaround


Registrar un precio, que es un requisito para cada artículo que estará activo y se venderá, incluso como un regalo.

