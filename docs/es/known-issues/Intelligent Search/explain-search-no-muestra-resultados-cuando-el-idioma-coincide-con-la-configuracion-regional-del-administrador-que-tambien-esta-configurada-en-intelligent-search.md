---
title: 'Explain Search no muestra resultados cuando el idioma coincide con la configuración regional del administrador, que también está configurada en Intelligent Search'
slug: explain-search-no-muestra-resultados-cuando-el-idioma-coincide-con-la-configuracion-regional-del-administrador-que-tambien-esta-configurada-en-intelligent-search
status: PUBLISHED
createdAt: 2023-05-23T15:35:02.000Z
updatedAt: 2023-05-23T15:35:02.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: explain-search-has-no-results-when-language-matches-with-admin-locale-also-configured-in-intelligent-search
locale: es
kiStatus: Backlog
internalReference: 830490
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando hay más de un idioma configurado en Intelligent Search, la función «Explain Search» no mostrará ningún resultado si se realiza una búsqueda con una configuración regional de administración que también esté en Intelligent Search, pero que no coincida exactamente. Por ejemplo:


- Idiomas en Intelligent Search: es-AR y en-US
- Si se selecciona es-AR en «Explain Search» y la configuración regional de administración es en-US, no se muestran resultados.

## Simulación

- Acceda a la Búsqueda explicada y seleccione un idioma;
- Seleccione en el panel de administración un idioma que también esté en la Búsqueda inteligente.

## Workaround

Seleccione el idioma exacto en el panel de administración o cualquier otro que no esté configurado en la Búsqueda inteligente.