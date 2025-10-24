---
title: 'Mercado Livre El atributo Variación está duplicado. Combinaciones de atributos únicos permitidas.'
slug: mercado-livre-el-atributo-variacion-esta-duplicado-combinaciones-de-atributos-unicos-permitidas
status: PUBLISHED
createdAt: 2025-10-03T16:52:52.089Z
updatedAt: 2025-10-03T16:52:52.089Z
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


Este escenario se produjo debido al uso divergente del mismo atributo por parte del vendedor. Mientras que Mercado Livre (ML) interpreta este atributo como una variación, el vendedor lo utiliza simplemente como información descriptiva del producto.

Cuando se envía el anuncio, la integración sigue la lógica de ML, que trata el atributo como una variación. Dado que, por parte del vendedor, este valor permanece fijo, la primera variación se crea correctamente. Sin embargo, al intentar registrar una segunda variación con el mismo valor, el sistema de ML lo interpreta como un duplicado, lo que da lugar a un error porque considera que la combinación ya existe. Creemos que proporcionar una orientación clara al vendedor sobre el uso correcto de los atributos evitaría eficazmente este tipo de conflictos.


#### Simulación



- En Product Bridge, configure el mapeador para que una especificación a nivel de producto (por ejemplo, "Nome do desenho") que exista en el producto VTEX se mapee a un atributo MELI que permita variaciones.
- Exportar un producto con múltiples SKUs donde el valor existe a nivel de producto (no especificación SKU).
- Observe en Product Bridge que la exportación falla después de la primera SKU con el error: "Atributo de variación duplicado. Combinaciones de atributos únicas permitidas". Nota: este error MELI también puede ocurrir debido a variaciones duplicadas reales en el catálogo o mapeador VTEX; verifique primero los datos SKU para excluir duplicados genuinos.

## Workaround



- Elimine el valor mapeado en Product Bridge que está causando que MELI trate la especificación a nivel de producto como una variación.
- Asegúrese de que sólo las especificaciones a nivel de SKU asignadas como VTEX "Variación" se envían como variaciones MELI, mientras que las especificaciones a nivel de producto se envían como información.
- Si es necesario, consulta los atributos de categoría de MELI a través de su API para confirmar qué atributos permiten variaciones y, a continuación, alinea la asignación para que las especificaciones VTEX SKU = Variación y las especificaciones VTEX Producto = Información.


%0A