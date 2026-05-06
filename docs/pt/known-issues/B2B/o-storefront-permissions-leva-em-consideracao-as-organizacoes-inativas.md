---
title: 'O Storefront Permissions leva em consideração as organizações inativas'
slug: o-storefront-permissions-leva-em-consideracao-as-organizacoes-inativas
status: PUBLISHED
createdAt: 2023-10-27T22:07:57.000Z
updatedAt: 2024-09-05T17:42:31.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: storefront-permissions-considers-inactive-organizations
locale: pt
kiStatus: Fixed
internalReference: 927174
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário tem mais de uma organização atribuída a ele e a primeira registrada está inativa, isso não é reconhecido, pois nenhuma organização é atribuída após o login.

## Simulação

- Crie duas organizações e atribua o mesmo usuário/e-mail;
- Desative a primeira organização criada;
- Faça login no site.

## Workaround

Remova o usuário/e-mail da organização inativa.