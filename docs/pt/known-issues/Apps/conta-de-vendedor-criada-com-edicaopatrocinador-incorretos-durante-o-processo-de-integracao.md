---
title: 'Conta de vendedor criada com edição/patrocinador incorretos durante o processo de integração.'
slug: conta-de-vendedor-criada-com-edicaopatrocinador-incorretos-durante-o-processo-de-integracao
status: PUBLISHED
createdAt: 2025-06-04T22:14:13.000Z
updatedAt: 2026-10-20T17:48:13.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: seller-account-created-with-incorrect-editionsponsor-during-onboarding
locale: pt
kiStatus: Backlog
internalReference: 1238783
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Durante o processo de integração de novos vendedores pelo Seller Portal, algumas contas estão sendo criadas com a edição e/ou patrocinador incorretos. O comportamento esperado é que a conta seja provisionada com a edição "edition-seller" patrocinada pela conta do patrocinador. No entanto, em certos casos, a conta é criada usando a edição/patrocinador padrão da VTEX.

A investigação indica que esse problema se origina de falhas ou tentativas de reprocessamento durante o processo de provisionamento interno. A carga útil enviada para a criação da conta contém as informações corretas, mas se houver uma nova tentativa de reprocessamento interna, a edição/patrocinador pode não ser aplicada corretamente, levando a um ambiente inconsistente para o vendedor.

## Simulação

- Inicie o fluxo de integração para um novo vendedor na plataforma pelo Seller Portal.

- O vendedor receberá um convite e o aceitará, acionando ações de provisionamento interno (Onboarding.Web, OnboardingBO, Billing).
- Monitore os registros de integração e criação de contas (especialmente vendor_onboarding, chamadas à API de integração e criação de contas no módulo de Faturamento).

- Se ocorrer um erro interno de E/S ou uma nova tentativa durante a configuração da edição/patrocinador, a conta poderá ser criada com uma edição e/ou patrocinador incorretos.

- O vendedor afetado não terá o ambiente correto, o que impactará recursos e permissões.

## Workaround

N/A