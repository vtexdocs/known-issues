---
title: 'Cuenta de vendedor creada con edición/patrocinador incorrecto durante el proceso de incorporación.'
slug: cuenta-de-vendedor-creada-con-edicionpatrocinador-incorrecto-durante-el-proceso-de-incorporacion
status: PUBLISHED
createdAt: 2025-06-04T22:14:13.000Z
updatedAt: 2026-10-20T17:48:13.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: seller-account-created-with-incorrect-editionsponsor-during-onboarding
locale: es
kiStatus: Backlog
internalReference: 1238783
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Durante el proceso de incorporación de nuevos vendedores a través del Portal del Vendedor, algunas cuentas se crean con la edición o el patrocinador incorrectos. El comportamiento esperado es que la cuenta se aprovisione con la edición "edition-seller" patrocinada por la cuenta patrocinadora. Sin embargo, en ciertos casos, la cuenta se crea utilizando la edición/patrocinador VTEX predeterminado.

La investigación indica que este problema se origina por fallos o reintentos durante el proceso de aprovisionamiento de IO. La carga útil enviada para la creación de la cuenta contiene la información correcta, pero si se produce un reintento interno dentro de IO, la edición/patrocinador podría no aplicarse correctamente, lo que genera un entorno de vendedor inconsistente.

## Simulación

- Inicie el flujo de incorporación de un nuevo vendedor en la plataforma a través del Portal del Vendedor.

- El vendedor recibirá una invitación y la aceptará, lo que activará acciones de aprovisionamiento internas (Onboarding.Web, OnboardingBO, Billing). - Supervise los registros de incorporación y creación de cuentas (especialmente vendor_onboarding, las llamadas a la API de incorporación y la creación de cuentas en Facturación).

- Si se produce un error de E/S interno o un reintento durante la configuración de la edición/patrocinador, la cuenta podría crearse con una edición o patrocinador incorrectos.

- El vendedor afectado no dispondrá del entorno correcto, lo que repercutirá en las funcionalidades y los permisos.

## Workaround

N/A