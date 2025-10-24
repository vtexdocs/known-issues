---
title: 'Comportamiento inesperado al registrar varias vacaciones seguidas'
slug: comportamiento-inesperado-al-registrar-varias-vacaciones-seguidas
status: PUBLISHED
createdAt: 2025-10-16T20:44:16.739Z
updatedAt: 2025-10-16T20:44:16.739Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: unexpected-behavior-when-registering-multiple-holidays-in-sequence
locale: es
kiStatus: Backlog
internalReference: 1202478
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al registrar varios días festivos en secuencia, se producirán algunos comportamientos inesperados, ya que algunos días festivos registrados previamente pueden ser eliminados y algunos días festivos nuevos pueden no ser registrados.


#### Simulación


Se puede reproducir fácilmente, basta con registrar varios días festivos seguidos, equivalentes a 10.

## Workaround


Será necesario espaciar la creación de festivos, definiendo un intervalo de al menos 1 minuto entre registros.



