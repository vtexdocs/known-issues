---
title: 'Conta de vendedor criada com edição/patrocinador incorreto durante a integração'
slug: conta-de-vendedor-criada-com-edicaopatrocinador-incorreto-durante-a-integracao
status: PUBLISHED
createdAt: 2025-10-16T20:59:05.664Z
updatedAt: 2025-10-16T20:59:05.664Z
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


Durante o processo de integração de novos vendedores por meio do Portal do Vendedor, algumas contas estão sendo criadas com a edição e/ou o patrocinador incorretos. O comportamento esperado é que a conta seja provisionada com a edição "edição-vendedor" patrocinada pela conta patrocinadora. No entanto, em alguns casos, a conta é criada usando a edição/esponja padrão da VTEX.

A investigação indica que esse problema tem origem em falhas ou eventos de repetição durante o processo de provisionamento de IO. A carga útil enviada para a criação da conta contém as informações corretas, mas se houver uma nova tentativa interna no IO, a edição/patrocinador pode não ser aplicada corretamente, levando a um ambiente de vendedor inconsistente.
## Simulação



- Inicie o fluxo de integração de um novo vendedor na plataforma por meio do Portal do Vendedor.
- O vendedor receberá um convite e o aceitará, acionando ações internas de provisionamento (Onboarding.Web, OnboardingBO, Billing).
- Monitore os registros de integração e de criação de conta (especialmente vendor_onboarding, chamadas onboarding-api, criação de conta no Billing).
- Se ocorrer um erro interno de IO ou uma nova tentativa durante a configuração da edição/patrocinador, a conta poderá ser criada com uma edição e/ou patrocinador incorretos.
- O vendedor afetado não terá o ambiente correto, o que afetará os recursos e as permissões
## Workaround


N/A



