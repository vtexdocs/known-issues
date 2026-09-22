---
title: 'El formulario de sinónimos de búsqueda inteligente puede bloquear el campo de tipo de sinónimo después de crear un sinónimo unidireccional.'
slug: el-formulario-de-sinonimos-de-busqueda-inteligente-puede-bloquear-el-campo-de-tipo-de-sinonimo-despues-de-crear-un-sinonimo-unidireccional
status: PUBLISHED
createdAt: 2025-04-24T21:39:54.000Z
updatedAt: 2026-09-22T16:54:53.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-synonyms-form-may-freeze-the-synonym-type-field-after-creating-a-unidirectional-synonym
locale: es
kiStatus: Backlog
internalReference: 1215521
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Tras crear un sinónimo unidireccional, el formulario de Búsqueda Inteligente de Sinónimos puede bloquear los botones de selección de tipos de sinónimos al volver a abrirlo.

Este comportamiento solo puede ocurrir durante la segunda interacción con el formulario de creación, siempre que la primera interacción haya sido la creación de un sinónimo unidireccional.

## Simulación

Siga los pasos a continuación para simular el escenario:

1. Acceda a la página **Sinónimos** en **VTEX Admin**.

2. Cree un sinónimo unidireccional.

3. Guárdelo.

4. A continuación, haga clic en **Crear sinónimo**.

5. Con el formulario de creación abierto, haga clic en la opción **Unidireccional** en el campo **Tipo**.

Al hacer clic en la opción **Unidireccional** en el campo **Tipo**,

## Workaround

Actualice la página.