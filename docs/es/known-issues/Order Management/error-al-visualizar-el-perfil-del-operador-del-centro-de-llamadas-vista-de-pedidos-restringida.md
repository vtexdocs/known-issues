---
title: 'Error al visualizar el perfil del operador del centro de llamadas (vista de pedidos restringida).'
slug: error-al-visualizar-el-perfil-del-operador-del-centro-de-llamadas-vista-de-pedidos-restringida
status: PUBLISHED
createdAt: 2024-11-05T19:34:18.000Z
updatedAt: 2026-09-14T23:03:16.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-when-viewing-the-call-center-operator-profile-restricted-orders-view
locale: es
kiStatus: Fixed
internalReference: 1129938
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para limitar el acceso de un usuario de televentas a los pedidos que él mismo crea, debe asignarle el perfil «Operador de centro de llamadas (visualización restringida de pedidos)». Sin embargo, al acceder a la pantalla de perfiles, observará que la opción «Mostrar solo pedidos creados por el usuario (a través del centro de llamadas)» no está seleccionada, lo que da la impresión de que el perfil no cumple con sus expectativas. No obstante, al validarlo accediendo al panel de administración con un usuario que tenga este perfil, comprobará que el comportamiento es correcto, restringiendo el acceso del usuario a los pedidos que él mismo crea.

## Simulación

Acceda a la pantalla «Nuevo rol».

Busque «Operador de centro de llamadas (visualización restringida de pedidos)».

Al acceder a los detalles del perfil, verá que la opción «Mostrar solo pedidos creados por el usuario (a través del centro de llamadas)» no está marcada.

Asigne un usuario a este perfil.

Ahora, al acceder al OMS con el usuario asociado al perfil en el paso anterior, verá que su acceso está limitado a los pedidos que él mismo creó, tal como se esperaba, aunque en la interfaz del administrador de licencias esta opción no se muestre correctamente.

## Workaround

No existe una solución alternativa para este caso, pero el impacto es solo visual, ya que la funcionalidad sigue siendo correcta.