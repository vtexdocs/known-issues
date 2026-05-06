---
title: 'Los elementos personalizados en los CMS antiguos no funcionan con más de un archivo HTML'
slug: los-elementos-personalizados-en-los-cms-antiguos-no-funcionan-con-mas-de-un-archivo-html
status: PUBLISHED
createdAt: 2023-07-31T16:34:51.000Z
updatedAt: 2023-07-31T16:34:51.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: custom-elements-on-legacy-cms-not-working-with-more-than-one-html
locale: es
kiStatus: Backlog
internalReference: 871480
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al crear un elemento personalizado con más de un elemento HTML, solo se carga el primero en la plantilla.

## Simulación

1. Crea un elemento personalizado de tipo HTML;
2. Crea al menos dos códigos HTML en este elemento personalizado;
3. Comprueba que la plantilla que contiene este elemento personalizado solo carga el primer HTML.

## Workaround

Reúne todos los códigos HTML en un único elemento dentro del elemento personalizado.