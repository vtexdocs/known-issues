---
title: 'La interfaz de usuario de Shipping Simulator muestra valores vacíos en los campos «Rango de códigos postales» y «Rango de peso» para las referencias de los kits'
slug: la-interfaz-de-usuario-de-shipping-simulator-muestra-valores-vacios-en-los-campos-rango-de-codigos-postales-y-rango-de-peso-para-las-referencias-de-los-kits
status: PUBLISHED
createdAt: 2026-03-23T21:31:07.275Z
updatedAt: 2026-03-23T21:31:07.275Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-simulator-ui-returns-empty-postal-code-range-weight-range-for-kits-skus
locale: es
kiStatus: Backlog
internalReference: 1382356
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la SKU es un KIT, el motor de logística no calcula los gastos de envío basándose en la propia SKU del kit. En su lugar, desglosa el kit y tiene en cuenta los componentes de forma individual.

En el simulador de envíos de logística de la plataforma, las SKU de KIT devuelven el SLA con normalidad, pero los campos de metadatos «Rango de códigos postales» y «Rango de peso» aparecen vacíos.
Esto solo ocurre con los KITS, pero funciona con normalidad con SKU individuales.

## Simulación

Requisitos previos: Una cuenta de VTEX con Logística configurada y al menos un SKU de KIT, con los componentes correctamente configurados y la tabla de fletes rellenada.

Pasos:

- Abre la Simulación de envío en Admin a través de Logística > Simulador de envío.
- Realiza una simulación utilizando un SKU de KIT y un código postal
- Observe que se muestran las opciones de SLA, pero los campos «Rango de códigos postales» y «Rango de peso» están vacíos en el panel de resultados:
 ![](https://vtexhelp.zendesk.com/attachments/token/CvTMgIytcecA07TOkM22vBcDq/?name=image.png)


- Lo mismo aparece en la depuración de Devetools:
 ![](https://vtexhelp.zendesk.com/attachments/token/rxmxeFqsTvUJ9GzXH17QNd1KZ/?name=image.png)


- Compara simulando un SKU que no sea de KIT y observa que los campos se rellenan como se espera para los SKU simples.

 ![](https://vtexhelp.zendesk.com/attachments/token/VlnVeTUDJvtU8zEBBjFlh9iLv/?name=image.png)

## Workaround

provisional**
No hay ninguna solución provisional, ya que **no se ha identificado ningún impacto operativo en el proceso de pago ni en el cálculo del SLA.**
El problema afecta únicamente a la visualización de la simulación, pero el cálculo es correcto y las compras no se ven afectadas.