---
title: 'Headless CMS no está monetizando datos entre espacios de trabajo'
slug: headless-cms-no-esta-monetizando-datos-entre-espacios-de-trabajo
status: PUBLISHED
createdAt: 2025-10-16T20:49:28.365Z
updatedAt: 2025-10-16T20:49:28.365Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: headless-cms-is-not-mocking-data-between-workspaces
locale: es
kiStatus: Backlog
internalReference: 1215583
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La característica que simula los datos entre los espacios de trabajo dentro del Headless CMS no está funcionando actualmente. En este momento, los borradores que se crean en un espacio de trabajo también se pueden ver en el maestro.


#### Simulación


Intente crear un nuevo borrador en un espacio de trabajo, como en el ejemplo de abajo, verá que la versión simulada se guardará:
 ![](https://vtexhelp.zendesk.com/attachments/token/ALJXihZcrD2L1K4FwrXfqZpML/?name=image.png)

Después de editar, prueba a guardar los cambios, la versión simulada se convertirá en un borrador normal:
 ![](https://vtexhelp.zendesk.com/attachments/token/mrwjyqtC4ALC3DIlVXwP9sXXA/?name=image.png)

Pero si accedes al entorno maestro de tu tienda, el borrador también estará allí:
 ![](https://vtexhelp.zendesk.com/attachments/token/DgHHvGNcu18BBx5CZqXoPmw9Z/?name=image.png)

Este borrador también se puede publicar


#### Workaround


N/A



