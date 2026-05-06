---
title: 'La información indexada queda desactualizada cuando se realizan dos cambios de producto seguidos.'
slug: la-informacion-indexada-queda-desactualizada-cuando-se-realizan-dos-cambios-de-producto-seguidos
status: PUBLISHED
createdAt: 2023-09-26T14:44:24.000Z
updatedAt: 2023-09-26T14:44:24.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: outdated-indexed-information-when-performing-2-product-changes-in-a-row
locale: es
kiStatus: No Fix
internalReference: 907428
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas que utilizan el motor de búsqueda heredado, si se realizan dos cambios en los datos de un producto en rápida sucesión (por ejemplo, si se desactiva un producto y se vuelve a activar inmediatamente después), y el último cambio restablece la información del producto tal y como estaba justo antes, el estado de dicho artículo puede quedarse bloqueado en el primer cambio, ya que el último no se reconoce correctamente.

Este problema no se produce en las tiendas que utilizan la aplicación de búsqueda inteligente.

## Simulación

1 - Selecciona un artículo activo en tu tienda y desactívalo.
2 - Inmediatamente después (< 5 min), reactívalo.
3 - Tras unos minutos, comprueba tu producto: no aparecerá en la tienda, a pesar de que esté configurado para ello. (en otras palabras, se ha «atascado» en ese estado intermedio).

## Workaround

provisional**
1 - Vuelve a indexar dichos productos tras más de 5 minutos desde que se produjo el problema.
2 - Utiliza el motor de búsqueda inteligente, que no presenta este problema en absoluto.
3 - Evita realizar más de dos cambios consecutivos en un producto en los que el último cambio simplemente revierta el anterior.