---
title: 'El envío «Lean» se aplica de forma obligatoria incluso cuando los artículos tienen los mismos SLA, pero en un orden diferente'
slug: el-envio-lean-se-aplica-de-forma-obligatoria-incluso-cuando-los-articulos-tienen-los-mismos-sla-pero-en-un-orden-diferente
status: PUBLISHED
createdAt: 2021-10-22T16:40:31.000Z
updatedAt: 2023-09-11T21:38:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-being-forced-even-when-the-items-have-the-same-slas-but-in-a-different-ordination
locale: es
kiStatus: Fixed
internalReference: 455218
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, es posible que, aunque la función LeanShipping esté desactivada en la configuración, el sistema siga considerando necesario agrupar las opciones de envío y, por lo tanto, no desactive LeanShipping. Esto se debe a que la regla que utiliza el sistema para determinar si se aplica o no LeanShipping no se basa únicamente en si la configuración está activada o desactivada, sino también en si hay SLA iguales o diferentes disponibles para los artículos del carrito;
Sin embargo, hay casos en los que el mero orden en que se muestran los SLA hace que el sistema entienda que se trata de SLA diferentes y active LeanShipping al finalizar la compra, comenzando a mostrar las etiquetas más rápidas y económicas para el método de envío.

## Simulación

No hay una forma lineal de replicar el escenario; sin embargo, puede ocurrir siempre que tengamos un carrito con dos o más artículos cuyos SLA sean similares entre sí y se presenten en órdenes diferentes dentro del SLA de cada artículo;

## Workaround

N/A