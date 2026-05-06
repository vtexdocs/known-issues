---
title: 'Problemas de traducción al utilizar una subcuenta para implementar tiendas multilingües'
slug: problemas-de-traduccion-al-utilizar-una-subcuenta-para-implementar-tiendas-multilingues
status: PUBLISHED
createdAt: 2023-06-21T20:36:21.000Z
updatedAt: 2024-02-29T15:19:24.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: translation-issues-when-using-a-subaccount-to-implement-multilanguage-stores
locale: es
kiStatus: Backlog
internalReference: 848524
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La indexación unificada del catálogo solo tiene en cuenta las traducciones de los mensajes de la cuenta principal, incluso cuando se utiliza una arquitectura de subcuentas para implementar tiendas transfronterizas.

Esto da lugar a una traducción diferente en la página de búsqueda y en la página del producto, ya que el contenido de la página de búsqueda se basa únicamente en las traducciones recuperadas por el indexador del catálogo.

## Simulación

- Crea una subcuenta e implementa tiendas transfronterizas;
- Traduce el contenido del catálogo en la subcuenta;
- Compara la página de búsqueda y la página de productos; tendrán traducciones diferentes.

## Workaround

Configura los idiomas adicionales (enlaces y contenido de los mensajes) en la cuenta principal, replicando las traducciones de la subcuenta también en la cuenta principal.