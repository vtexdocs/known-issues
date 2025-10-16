---
title: Las reglas de comercialización manual no funcionan cuando está activado el Activador global.
slug: las-reglas-de-comercializacion-manual-no-funcionan-cuando-esta-activado-el-activador-global
status: PUBLISHED
createdAt: 2025-10-16T19:58:06.404Z
updatedAt: 2025-10-16T19:58:06.404Z
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


Las reglas de merchandising manual no funcionan cuando está activado el activador global.

Esto puede ocurrir cuando se actualiza una regla de merchandising activando el activador global sin haber eliminado previamente las reglas de activación existentes.

## Simulación


Siga los siguientes pasos para simular el escenario:

1. Haga clic en **Editar** para editar una Regla de merchandising específica.
2. Habilite **Disparador global**.
3. 3. Haga clic en **Guardar** para guardar las actualizaciones.

Después de actualizar las Reglas de merchandising, busque cualquier término y la Regla de merchandising no se activará. Sin embargo, al buscar cualquier término que encaje con las Reglas de activación anteriores, la regla de merchandising puede activarse.

## Workaround


Como solución alternativa, siga los pasos que se indican a continuación:

1. 1. Edite una regla de comercialización.
2. 2. Desactive el **disparador global**.
3. Haga clic en **Guardar** para aplicar los cambios. Al guardar los cambios, se mostrarán las reglas de activación existentes.
4. En el bloque **Reglas de disparo** del formulario de edición, haga clic en **Borrar reglas** para borrar las reglas de disparo existentes.
5. A continuación, active el **Disparador global**.
6. 6. Haga clic en **Guardar** para aplicar los cambios.

