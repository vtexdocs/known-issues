---
title: 'No es posible subir nuevos archivos multimedia o documentos en un espacio de trabajo de desarrollo cuando la entidad tiene más de 10 000 documentos'
slug: no-es-posible-subir-nuevos-archivos-multimedia-o-documentos-en-un-espacio-de-trabajo-de-desarrollo-cuando-la-entidad-tiene-mas-de-10-000-documentos
status: PUBLISHED
createdAt: 2023-04-24T20:00:41.000Z
updatedAt: 2024-06-28T16:07:11.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: not-possible-to-upload-new-mediadocument-in-a-development-workspace-when-entity-has-more-than-10k-documents
locale: es
kiStatus: Fixed
internalReference: 795940
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

No es posible subir un nuevo archivo multimedia o documento a una entidad a través de la galería multimedia (admin/new-cms/media-gallery) o del editor del sitio (admin/cms/site-editor) en un entorno de desarrollo cuando una entidad tiene más de 10 000 documentos, ya que en estos casos no se utiliza el desplazamiento desde Master Data.

## Simulación

- Debes tener al menos 10 000 documentos en el gestor de archivos (estas dos entidades: `vtex_admin_cms_graphql_content`
`vtex_admin_cms_graphql_contentVariant`


- Crea un espacio de trabajo de desarrollo (`vtex use devWorkspace`)
- Accede a: admin/new-cms/media-gallery, en este nuevo espacio de trabajo de desarrollo
- Intenta subir una nueva imagen
- La imagen no se subirá, lo que provocará el error de desplazamiento en Master Data

*Ocurre lo mismo cuando utilizas la galería multimedia a través del editor del sitio

## Workaround

- Sube las imágenes en un espacio de trabajo de producción o en el maestro y, una vez creadas, podrás seleccionarlas en un espacio de trabajo de desarrollo
- Realiza todos los procesos en un entorno o espacio de trabajo de producción en lugar de en un entorno de desarrollo (`vtex use prodWorkspace --production`)