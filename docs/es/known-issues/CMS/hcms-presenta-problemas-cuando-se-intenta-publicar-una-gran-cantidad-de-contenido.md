---
title: 'hCMS presenta problemas cuando se intenta publicar una gran cantidad de contenido'
slug: hcms-presenta-problemas-cuando-se-intenta-publicar-una-gran-cantidad-de-contenido
status: PUBLISHED
createdAt: 2025-07-24T17:46:56.526Z
updatedAt: 2025-07-24T17:46:56.526Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: hcms-presents-issues-when-trying-to-publish-huge-amount-of-content
locale: es
kiStatus: Backlog
internalReference: 1262405
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al intentar publicar una página con una gran cantidad de contenido, el hCMS puede presentar problemas. El problema parece estar en el módulo de publicaciones, ya que el borrador se puede guardar, el problema no está en los Datos Maestros.


#### Simulación


Intente añadir un texto largo, por ejemplo, en una página hCMS. El borrador se guardará correctamente, pero al intentar publicarlo, no será posible. El error será:
 ![](https://vtexhelp.zendesk.com/attachments/token/YmERJsiEpxbtpSzCa7heytRjs/?name=image.png)

En la red, verá:

    {"errors":[{"message": "Request failed with status code 500", "name": "Error"}]}




#### Workaround


N/A



