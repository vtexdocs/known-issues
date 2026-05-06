---
title: 'Las operaciones no se pueden realizar correctamente debido a que el campo «documentType» está vacío.'
slug: las-operaciones-no-se-pueden-realizar-correctamente-debido-a-que-el-campo-documenttype-esta-vacio
status: PUBLISHED
createdAt: 2022-11-11T20:22:14.000Z
updatedAt: 2023-12-06T15:20:55.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: operations-cannot-be-performed-correctly-due-to-null-documenttype-field
locale: es
kiStatus: Backlog
internalReference: 697107
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos proveedores requieren que el campo `documentType` no sea `null`, es decir, que esté correctamente rellenado para poder realizar determinadas operaciones de pago.

Hasta ahora conocemos dos casos:

1. La ausencia de este campo impide que el sistema antifraude analice correctamente el pago, lo que pone en riesgo la transacción.
2. La ausencia del campo impide que se autorice el pago y, en consecuencia, provoca la cancelación de la transacción.

## Simulación

Este problema se produce cuando un cliente utiliza los datos de una empresa para completar un pedido.
Si se utiliza el nombre de la empresa para completar la transacción, el campo `documentType` queda sin rellenar, lo que provoca problemas con la aprobación del pago.

## Workaround

En el primer caso, es posible utilizar una API interna para omitir el paso del análisis antifraude.
Aunque se desaconseja encarecidamente, es una operación posible.