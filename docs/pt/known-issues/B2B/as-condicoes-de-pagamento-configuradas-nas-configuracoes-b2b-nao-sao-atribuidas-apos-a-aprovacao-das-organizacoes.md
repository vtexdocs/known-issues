---
title: 'As condições de pagamento configuradas nas configurações B2B não são atribuídas após a aprovação das organizações'
slug: as-condicoes-de-pagamento-configuradas-nas-configuracoes-b2b-nao-sao-atribuidas-apos-a-aprovacao-das-organizacoes
status: PUBLISHED
createdAt: 2024-02-26T22:28:50.000Z
updatedAt: 2024-02-26T22:28:50.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: payment-terms-configured-in-b2b-settings-is-not-assigned-after-approving-organizations
locale: pt
kiStatus: Backlog
internalReference: 989507
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As condições de pagamento configuradas nas Configurações de Organizações B2B não são salvas nos Detalhes da Organização.

## Simulação

- Configure condições de pagamento padrão nas Configurações de Organizações B2B;
- Crie uma Solicitação de Organização;
- Aprove a Solicitação de Organização;
- Verifique os Detalhes da Organização; ela não terá nenhuma condição de pagamento atribuída.

## Workaround

- Atribua as condições de pagamento à organização por meio do administrador;
- Crie um gatilho para o esquema da entidade de organizações.