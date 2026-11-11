---
title: 'ActivateIfPossible se establece en "False" si las especificaciones obligatorias no se guardan completamente en el administrador del catálogo.'
slug: activateifpossible-se-establece-en-false-si-las-especificaciones-obligatorias-no-se-guardan-completamente-en-el-administrador-del-catalogo
status: PUBLISHED
createdAt: 2026-11-12T01:23:15.000Z
updatedAt: 2026-11-12T01:23:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activateifpossible-set-to-false-if-mandatory-specifications-are-not-fully-saved-on-catalog-admin
locale: es
kiStatus: Backlog
internalReference: 1484224
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, el campo `ActivateIfPossible` del administrador del catálogo de un producto se establece incorrectamente en "false" cuando un usuario intenta guardar las especificaciones del producto y aún hay una especificación obligatoria sin completar al guardar.

## Simulación

1 - Cree un producto inactivo con al menos un SKU y especificaciones obligatorias (2 o más) sin completar.

2 - Cree también este producto con el campo `ActivateIfPossible` establecido en "True".

3 - Después de crearlo, edite el producto en el administrador del catálogo e intente guardarlo con algunas, pero no todas, las especificaciones obligatorias completadas.

4 - El campo `ActivateIfPossible` se establecerá incorrectamente en "false" y, por lo tanto, el producto no se activará automáticamente una vez que se cumplan todos los campos y demás criterios.

## Workaround

Utilice las API para guardar las especificaciones o guarde todas las especificaciones obligatorias a la vez en el administrador.