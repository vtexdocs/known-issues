---
title: 'Portal del vendedor: fallo en el menú desplegable de selección de especificaciones'
slug: portal-del-vendedor-fallo-en-el-menu-desplegable-de-seleccion-de-especificaciones
status: PUBLISHED
createdAt: 2022-12-06T14:27:31.000Z
updatedAt: 2023-05-09T19:07:57.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-select-specifications-dropdown-malfunctioning
locale: es
kiStatus: Backlog
internalReference: 711303
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, el cuadro de selección de especificaciones de producto de la página accountname.myvtex.com/admin/products/new/ presenta un comportamiento anómalo al intentar seleccionar un valor para una especificación de producto.

Cuando el usuario intenta elegir un valor, en ocasiones se selecciona en su lugar el campo de entrada situado debajo.

Por ejemplo, hay dos opciones: color y talla. Al hacer clic en «color», a veces se selecciona «talla» en su lugar:

 ![](https://vtexhelp.zendesk.com/attachments/token/PpTFjmsH4i975D0uQSLD7WmkO/?name=image.png)

## Simulación

Se trata de un caso intermitente, por lo que es bastante difícil de reproducir de forma consistente.

De todos modos, para hacerlo, debes ir a la página mencionada anteriormente y seleccionar la función «+» para añadir variaciones.

Al hacerlo, aparecerá una ventana emergente con el menú desplegable en cuestión, que presenta el comportamiento defectuoso. Al intentar seleccionar un valor, es posible que aparezcan los datos que se muestran a continuación en su lugar.

## Workaround

El uso de las API o, simplemente, cambiar el idioma de administración dará resultados positivos.