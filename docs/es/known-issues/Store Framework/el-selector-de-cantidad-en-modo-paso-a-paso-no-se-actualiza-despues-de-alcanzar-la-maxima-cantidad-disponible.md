---
title: 'El selector de cantidad en modo paso a paso no se actualiza después de alcanzar la máxima cantidad disponible.'
slug: el-selector-de-cantidad-en-modo-paso-a-paso-no-se-actualiza-despues-de-alcanzar-la-maxima-cantidad-disponible
status: PUBLISHED
createdAt: 2025-11-17T17:43:25.817Z
updatedAt: 2025-11-17T17:43:25.817Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: quantityselector-on-stepper-mode-doesnt-refresh-after-reaching-max-available-qunatity
locale: es
kiStatus: Backlog
internalReference: 704458
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Si alcanzas la cantidad disponible del producto haciendo clic más de una vez, el componente tarda demasiado en avisarte y ni siquiera actualiza el selector de cantidad con la cantidad máxima disponible.


#### Simulación


Intente sobrepasar la cantidad disponible de un producto haciendo clic en las flechas de cantidad, recibirá un mensaje diciendo que esa cantidad no está disponible pero el número de cantidad no se actualiza. Si cambia la cantidad manualmente funciona como se espera.

## Workaround



N/A