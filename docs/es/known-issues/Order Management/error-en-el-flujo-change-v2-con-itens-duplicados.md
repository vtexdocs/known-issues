---
title: Error en el flujo Change v2 con itens duplicados
slug: error-en-el-flujo-change-v2-con-itens-duplicados
status: PUBLISHED
createdAt: 2025-10-16T20:51:03.090Z
updatedAt: 2025-10-16T20:51:03.090Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: erro-in-change-v2-flow-with-duplicated-itens
locale: es
kiStatus: Backlog
internalReference: 1219914
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La funcionalidad Change v2, utilizada para modificar pedidos directamente en la plataforma, tiene un problema cuando el pedido contiene dos artículos con el mismo SKU ID. En esta situación, al intentar eliminar, editar o manipular uno de los artículos, el sistema no puede identificar correctamente qué artículo debe ser modificado dentro del conjunto de artículos, generando un error que impide continuar con el flujo de cambios.
Una vez que se produce este error, el cambio no puede deshacerse, y el cambio no se lleva a cabo correctamente.


#### Simulación



- Cree un pedido con dos artículos que tengan el mismo SKU ID.

- Acceda a la pantalla Modificar v2 para este pedido.

- Intente realizar un cambio (como eliminar o editar uno de los artículos duplicados).

- Observe que el sistema no localiza correctamente el artículo y muestra un error, impidiendo que se proceda al cambio.

## Workaround



Si el error aún no se ha producido (es decir, no se ha realizado ninguna acción en Cambiar v2), el comerciante puede utilizar el flujo antiguo, Cambiar v1, para editar el pedido.
Si el intento de modificación a través de Change v2 ya se ha producido, recomendamos:


- Continuar con el pedido normalmente hasta la facturación;
- A continuación, lleve a cabo el proceso de devolución, si es necesario;
- Como alternativa, realice el cambio manualmente, fuera de la plataforma, si se trata de una situación puntual.



