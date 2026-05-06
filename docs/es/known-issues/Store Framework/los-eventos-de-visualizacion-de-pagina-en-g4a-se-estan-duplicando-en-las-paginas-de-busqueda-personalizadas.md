---
title: 'Los eventos de visualización de página en G4A se están duplicando en las páginas de búsqueda personalizadas'
slug: los-eventos-de-visualizacion-de-pagina-en-g4a-se-estan-duplicando-en-las-paginas-de-busqueda-personalizadas
status: PUBLISHED
createdAt: 2023-08-25T17:36:51.000Z
updatedAt: 2024-02-19T18:42:58.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pageview-triggers-on-g4a-are-being-duplicated-in-custom-search-pages
locale: es
kiStatus: Backlog
internalReference: 888042
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El evento «pageView» aparece duplicado en dataLayer cuando se accede a páginas de búsqueda personalizadas

## Simulación

- Accede a cualquier página de búsqueda personalizada
- Abre la consola de tu navegador
- Escribe «dataLayer» y comprueba el evento «pageView»

El comportamiento esperado es que el evento aparezca duplicado

## Workaround

provisional**
N/A


## **Notas internas**

También se ha encontrado algo curioso en la página del departamento con pageView y page_view

https://storetheme.vtex.com/apparel---accessories/

 ![](https://vtexhelp.zendesk.com/attachments/token/dXFuDY5Q9XhZ7hgIvA8m8ugJ3/?name=image.png)

Sin embargo, este problema concreto se puede reproducir en

https://www.dzarm.com.br/outlet

 ![](https://vtexhelp.zendesk.com/attachments/token/EVakZYSBKtcrCQoNXBe92uAzQ/?name=image.png)