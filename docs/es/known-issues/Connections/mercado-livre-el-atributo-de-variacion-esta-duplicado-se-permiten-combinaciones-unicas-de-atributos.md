---
title: 'Mercado Livre El atributo de variación está duplicado. Se permiten combinaciones únicas de atributos.'
slug: mercado-livre-el-atributo-de-variacion-esta-duplicado-se-permiten-combinaciones-unicas-de-atributos
status: PUBLISHED
createdAt: 2023-02-23T16:00:33.000Z
updatedAt: 2025-10-03T19:52:18.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-variation-attribute-is-duplicated-allowed-unique-attributes-combinations
locale: es
kiStatus: No Fix
internalReference: 758331
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Esta situación se produjo debido a un uso diferente del mismo atributo por parte del vendedor. Mientras que Mercado Livre (ML) interpreta este atributo como una variante, el vendedor lo utiliza simplemente como información descriptiva del producto.

Al enviar el anuncio, la integración sigue la lógica de ML y trata el atributo como una variante. Dado que, desde el punto de vista del vendedor, este valor permanece fijo, la primera variación se crea correctamente. Sin embargo, al intentar registrar una segunda variación con el mismo valor, el sistema de ML la interpreta como un duplicado, lo que da lugar a un error porque considera que la combinación ya existe. Creemos que proporcionar una orientación clara al vendedor sobre el uso correcto de los atributos evitaría eficazmente este tipo de conflicto.

## Simulación

- En Product Bridge, configura el mapeador de modo que una especificación a nivel de producto (por ejemplo, «Nome do desenho») que exista en el producto de VTEX se asigne a un atributo de MELI que permita variaciones.
- Exporta un producto con múltiples SKU en el que el valor exista a nivel de producto (no en la especificación de la SKU).
- Observa en Product Bridge que la exportación falla tras la primera SKU con el error: «El atributo de variación está duplicado. Se permiten combinaciones de atributos únicas». Nota: este error de MELI también puede producirse debido a variaciones realmente duplicadas en el catálogo de VTEX o en el mapeador; compruebe primero los datos de la SKU para descartar duplicados reales.

## Workaround

- Elimine en Product Bridge el valor mapeado que está provocando que MELI trate la especificación a nivel de producto como una variación.
- Asegúrese de que solo las especificaciones a nivel de SKU mapeadas como «Variación» de VTEX se envíen como variaciones de MELI, mientras que las especificaciones a nivel de producto se envíen como información.
- Si es necesario, consulte los atributos de categoría de MELI a través de su API para confirmar qué atributos permiten variaciones y, a continuación, ajuste el mapeo de modo que las especificaciones de SKU de VTEX = Variación y las especificaciones de producto de VTEX = Información


%0A