---
title: 'El dominio personalizado movido entre proyectos de FastStore sigue redirigiendo a la cuenta anterior.'
slug: el-dominio-personalizado-movido-entre-proyectos-de-faststore-sigue-redirigiendo-a-la-cuenta-anterior
status: PUBLISHED
createdAt: 2026-09-25T16:17:05.000Z
updatedAt: 2026-09-25T16:17:05.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: custom-domain-moved-between-faststore-projects-keeps-routing-to-the-previous-account
locale: es
kiStatus: Backlog
internalReference: 1466415
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se agrega un dominio personalizado a un proyecto de FastStore en WebOps y se implementa en producción, se crea una asignación de dominio a cuenta en la infraestructura de alojamiento. Eliminar el dominio de ese proyecto en WebOps no elimina esta asignación. Si luego se agrega el mismo dominio a un proyecto de FastStore desde una cuenta diferente y se implementa, la asignación existente se mantiene en lugar de reasignarse.

Como resultado, el dominio sigue sirviendo la tienda del primer proyecto, aunque la configuración de WebOps, los hosts del Administrador de licencias, el DNS y el archivo `discovery.config.js` del nuevo proyecto estén configurados correctamente. Volver a implementar cualquiera de los proyectos y vaciar la caché de la CDN no resuelve el problema.

## Simulación

1. Tener dos proyectos de FastStore en WebOps, cada uno vinculado a una cuenta VTEX diferente (Cuenta A y Cuenta B).
2. En el proyecto de la Cuenta A, vaya a **WebOps > Configuración > Dominios**, agregue un dominio personalizado (por ejemplo, `store.example.com`) e implemente en producción.

3. Elimine `store.example.com` del proyecto de la Cuenta A.
4. Asegúrese de que `store.example.com` esté registrado solo como host en el Administrador de licencias de la Cuenta B y, a continuación, agréguelo al proyecto de la Cuenta B en **WebOps > Configuración > Dominios**.

5. Implemente ambos proyectos en producción.

6. Acceda a `https://store.example.com`.

**Comportamiento esperado:** El dominio sirve la tienda en línea de la Cuenta B.
**Comportamiento real:** El dominio sigue sirviendo la tienda en línea de la Cuenta A.

## Workaround

No hay ninguna solución alternativa disponible para el cliente. Póngase en contacto con el soporte de VTEX para que se reasigne el dominio a la cuenta correcta.