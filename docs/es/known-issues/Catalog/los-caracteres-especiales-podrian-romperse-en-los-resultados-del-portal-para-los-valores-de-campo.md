---
title: Los caracteres especiales podrían romperse en los resultados del portal para los valores de campo
slug: los-caracteres-especiales-podrian-romperse-en-los-resultados-del-portal-para-los-valores-de-campo
status: PUBLISHED
createdAt: 2025-09-09T14:50:03.377Z
updatedAt: 2025-09-09T14:50:03.377Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: special-characters-might-break-on-portal-results-for-field-values
locale: es
kiStatus: Backlog
internalReference: 1289146
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, al cargar páginas en las que el resultado de la búsqueda tiene un producto o sku valor de campo caracteres específicos en ellos, tales como °, %, etc ...

El resultado de la búsqueda puede responder con un error de "algo salió mal".


#### Simulación


Añadir el carácter especial ° para un resultado de búsqueda con varios skus.

Al cargar la página, se mostrará un mensaje "Algo ha ido mal".

## Workaround


Cambie el valor del carácter especial por otro (ejemplo: grados, en lugar de °)



