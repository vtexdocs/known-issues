---
title: 'Las reglas de comercialización manuales no funcionan cuando el activador global está habilitado.'
slug: las-reglas-de-comercializacion-manuales-no-funcionan-cuando-el-activador-global-esta-habilitado
status: PUBLISHED
createdAt: 2024-12-06T23:20:32.000Z
updatedAt: 2026-09-22T16:54:18.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: manual-merchandising-rules-do-not-work-when-global-trigger-is-enabled
locale: es
kiStatus: Backlog
internalReference: 1147282
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las reglas de merchandising manuales no funcionan cuando el activador global está habilitado.

Este escenario puede ocurrir al actualizar una regla de merchandising habilitando el activador global sin eliminar previamente las reglas de activación existentes.

## Simulación

Siga los siguientes pasos para simular el escenario:

1. Haga clic en **Editar** para editar una regla de merchandising específica.

2. Habilite el **Activador global**.

3. Haga clic en **Guardar** para guardar los cambios.

Tras actualizar las reglas de merchandising, al buscar cualquier término, la regla no se activa. Sin embargo, al buscar cualquier término que coincida con las reglas de activación anteriores, la regla sí se activa.

## Workaround

Como solución alternativa, siga los siguientes pasos:

1. Edite una regla de merchandising.

2. Desactive el **Activador global**.

3. Haga clic en **Guardar** para aplicar los cambios. Al guardar los cambios, se mostrarán las reglas de activación existentes.

4. En el bloque **Reglas de activación** del formulario de edición, haga clic en **Borrar reglas** para eliminar las reglas de activación existentes.

5. A continuación, active **Activación global**.

6. Haga clic en **Guardar** para aplicar los cambios.