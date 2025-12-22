---
title: 'Acción de pegar bloqueada en el inicio de sesión y en el campo de búsqueda de picking Pick and Pack'
slug: accion-de-pegar-bloqueada-en-el-inicio-de-sesion-y-en-el-campo-de-busqueda-de-picking-pick-and-pack
status: PUBLISHED
createdAt: 2025-12-22T19:09:10.271Z
updatedAt: 2025-12-22T19:09:10.271Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: paste-action-blocked-on-login-and-on-the-pick-and-pack-picking-search-field
locale: es
kiStatus: Backlog
internalReference: 1343368
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los usuarios no pueden pegar texto en campos específicos del flujo Recoger y empaquetar: los campos de inicio de sesión (nombre de usuario/contraseña) y el campo de búsqueda del panel de selección.

Al intentar pegar utilizando los atajos de teclado (Ctrl+C / Ctrl+V) o la opción de pegar del menú contextual, no se inserta nada en estos campos.

El comportamiento fue reportado en la cuenta **gruporamos**; sin embargo, ocurre en todas las cuentas que usan Pick and Pack al acceder a la aplicación de picking, e indica que la acción de pegar está siendo bloqueada o interceptada en estas entradas.


#### Simulación


**Requisito:** Tener acceso a la aplicación de picking Pick and Pack.
**Pasos:**

1. Copiar un texto cualquiera (por ejemplo: `129318231838`).
2. Accede a la página de picking en `/tasks/picking` (se informa en https://picking.pick-and-pack.com/tasks/picking).
3. Intenta pegar el texto copiado en los siguientes campos:
  - Campos de inicio de sesión (nombre de usuario y contraseña).
  - Campo de búsqueda en el panel de picking.
4. Observe que en estas entradas no se acepta la acción de pegar (no se inserta texto).

## Workaround


Escriba los datos directamente en el campo.



