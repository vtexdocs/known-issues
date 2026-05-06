---
title: 'Faststores no funciona correctamente en el modo de navegación privada de Firefox'
slug: faststores-no-funciona-correctamente-en-el-modo-de-navegacion-privada-de-firefox
status: PUBLISHED
createdAt: 2023-05-19T14:56:40.000Z
updatedAt: 2023-05-19T14:56:40.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststores-not-working-correctly-in-firefox-private-mode
locale: es
kiStatus: Backlog
internalReference: 828685
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hay un error en Mozilla Firefox, concretamente en el modo de navegación privada, que afecta al almacenamiento de IndexedDB, y Faststore depende de ello para funcionar correctamente. Por lo tanto, el sitio web no funcionará en su totalidad, ya que depende de la información de IndexedDB para su correcto funcionamiento.

Aquí hay algunas preguntas frecuentes relacionadas con el problema:

https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=1267582
https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=781982

## Simulación

- Abre una tienda en Faststore en la pestaña de incógnito.
- Puedes comprobar que existe una limitación en la creación del almacenamiento indexedDB, lo que ralentiza el funcionamiento de la tienda.

## Workaround

provisional**
No