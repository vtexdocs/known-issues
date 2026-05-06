---
title: 'Las opciones de pago a plazos no se actualizan automáticamente en PDP/PLP'
slug: las-opciones-de-pago-a-plazos-no-se-actualizan-automaticamente-en-pdpplp
status: PUBLISHED
createdAt: 2024-02-23T12:31:14.000Z
updatedAt: 2024-02-23T12:31:14.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: installment-options-not-updating-automatically-on-pdpplp
locale: es
kiStatus: Backlog
internalReference: 987467
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una cuenta modifica las opciones de pago a plazos de un producto, aunque el producto esté correctamente indexado, las opciones de pago a plazos no se actualizan en la PLP ni en la PDP (a veces en ninguna de las dos).

## Simulación

1. Crea una opción de pago a plazos y comprueba que se refleja correctamente en la PDP/PLP.
2. Actualiza esta misma opción de pago a plazos.
3. Comprueba que no todas las PDP y PLP se han actualizado con la nueva información correcta.

## Workaround

provisional**
Vuelve a indexar los productos afectados.