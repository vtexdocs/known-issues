---
title: 'Algunos datos estructurados de la Oferta no son compatibles con el esquema'
slug: algunos-datos-estructurados-de-la-oferta-no-son-compatibles-con-el-esquema
status: PUBLISHED
createdAt: 2025-10-16T19:30:23.073Z
updatedAt: 2025-10-16T19:30:23.073Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: some-structured-data-from-offer-are-not-supported-by-the-schema
locale: es
kiStatus: Backlog
internalReference: 1244839
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Algunos campos del tipo Oferta no están siendo validados correctamente por el schema.org. Algunas propiedades con este problema son:

- **listPrecioConImpuestos**
- PrecioConImpuestos
- Cantidad


#### Simulación


Puede ver este comportamiento en nuestra tienda por defecto https://www.fast.store/ buscando cualquier PDP en schema.org, por ejemplo:
https://validator.schema.org/#url=https%3A%2F%2Fwww.fast.store%2Fwireless-controller-white-10000000%2Fp
 ![](https://vtexhelp.zendesk.com/attachments/token/2O5AHNwwktZmy2LXC8isSVWpt/?name=image.png)


#### Workaround


N/A



