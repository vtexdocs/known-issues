---
title: 'Las condiciones de pago configuradas en los ajustes B2B no se asignan tras aprobar las organizaciones'
slug: las-condiciones-de-pago-configuradas-en-los-ajustes-b2b-no-se-asignan-tras-aprobar-las-organizaciones
status: PUBLISHED
createdAt: 2024-02-26T22:28:50.000Z
updatedAt: 2024-02-26T22:28:50.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: payment-terms-configured-in-b2b-settings-is-not-assigned-after-approving-organizations
locale: es
kiStatus: Backlog
internalReference: 989507
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las condiciones de pago configuradas en los ajustes de las organizaciones B2B no se guardan en los detalles de la organización.

## Simulación

- Configure unas condiciones de pago predeterminadas en la configuración de organizaciones B2B;
- Cree una solicitud de organización;
- Apruebe la solicitud de organización;
- Compruebe los detalles de la organización; no tendrá asignadas ninguna condición de pago.

## Workaround

- Asigne las condiciones de pago a la organización a través del administrador;
- Cree un disparador para el esquema de la entidad de organizaciones.