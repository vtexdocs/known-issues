---
title: 'El campo «Cambios y devoluciones» no se actualiza en la interfaz de usuario de gestión de vendedores tras guardar'
slug: el-campo-cambios-y-devoluciones-no-se-actualiza-en-la-interfaz-de-usuario-de-gestion-de-vendedores-tras-guardar
status: PUBLISHED
createdAt: 2022-11-01T17:46:46.000Z
updatedAt: 2023-10-30T19:28:08.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: field-exchanges-and-returns-is-not-updating-on-seller-management-ui-after-save
locale: es
kiStatus: Fixed
internalReference: 689886
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al guardar el campo «Cambios y devoluciones» en la interfaz de usuario, la información se actualiza inicialmente, pero si intentamos salir del área de gestión o actualizar la página, la información se pierde.

La información que se muestra en la interfaz de usuario es la misma que la del campo «Política de envíos».

Sin embargo, esto parece ocurrir solo en la interfaz de usuario; a través de la API, la información es correcta.

## Simulación

1. Accede a un vendedor en el área de gestión de vendedores;
2. Modifica la información del campo «Cambios y devoluciones» y guarda los cambios;
3. Vuelve a acceder al mismo vendedor y comprueba que la información no es correcta.

## Workaround

provisional**
No es necesario aplicar ninguna solución provisional, ya que la información es correcta en el backend del sistema.