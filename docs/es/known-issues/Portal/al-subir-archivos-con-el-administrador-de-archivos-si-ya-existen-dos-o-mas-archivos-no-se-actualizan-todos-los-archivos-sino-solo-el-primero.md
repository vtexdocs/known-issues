---
title: 'Al subir archivos con el Administrador de archivos, si ya existen dos o más archivos, no se actualizan todos los archivos, sino solo el primero'
slug: al-subir-archivos-con-el-administrador-de-archivos-si-ya-existen-dos-o-mas-archivos-no-se-actualizan-todos-los-archivos-sino-solo-el-primero
status: PUBLISHED
createdAt: 2021-08-24T14:19:36.000Z
updatedAt: 2024-01-23T18:32:23.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: file-manager-upload-with-two-one-more-existent-files-does-not-update-all-the-files-only-the-first
locale: es
kiStatus: No Fix
internalReference: 418253
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al subir archivos mediante el gestor de archivos cuando ya existen dos o más archivos con el mismo nombre, no se actualizan todos los archivos, sino solo el primero

## Simulación

- Ve a /admin/a, al gestor de archivos, y añade dos o más archivos para subirlos;
- Ahora sube otros dos archivos con el mismo nombre:
- Aparecerá una advertencia indicando que el archivo ya existe y preguntándonos si queremos sustituirlo.

Esta advertencia solo se refiere a un archivo; el segundo no se está validando.

- Se suben ambos archivos, pero solo uno sustituirá al anterior.

## Workaround

Actualiza un archivo cada vez.