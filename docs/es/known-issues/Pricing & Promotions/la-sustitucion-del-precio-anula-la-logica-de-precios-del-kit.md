---
title: 'La sustitución del precio anula la lógica de precios del KIT'
slug: la-sustitucion-del-precio-anula-la-logica-de-precios-del-kit
status: PUBLISHED
createdAt: 2021-07-30T14:09:27.000Z
updatedAt: 2025-01-02T13:48:52.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: put-price-overwrites-kit-price-logic
locale: es
kiStatus: Backlog
internalReference: 404486
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La composición del precio de un kit debe basarse en el cálculo de sus componentes y sus cantidades.

Es decir, el precio de un kit debe ser:
`SKU_KIT_Price= (componente_1*cantidad_1) + (componente_2*cantidad_2) + (...) + (componente_n*cantidad_n)`

Sin embargo, actualmente existe una forma de eludir esta lógica si el usuario introduce un precio PUT directamente en el SKU del kit en el módulo de precios.

## Simulación

1. Crea un KIT con al menos 2 componentes y establece su precio y cantidades;
2. Comprueba que el precio del KIT se establece de acuerdo con la lógica mencionada anteriormente.
3. Actualice el precio del KIT en el módulo de precios insertando un precio PUT en el SKU del kit;
4. Compruebe que, incluso al actualizar los precios de los componentes y sus cantidades, el precio del KIT seguirá siendo el precio PUT establecido anteriormente.

*Nota importante: esto también ocurre con los cambios realizados directamente en el administrador del módulo de precios tras crear el kit. Básicamente, el precio del kit solo se corrige según la fórmula anterior en el momento de su creación, pero no en las actualizaciones posteriores.

## Workaround

Realice cualquier cambio en los componentes; un nuevo precio PUT con el nuevo cálculo y la lógica correcta lo sobrescribirá de nuevo, normalizando así el comportamiento «incorrecto».