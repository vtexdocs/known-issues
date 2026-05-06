---
title: 'O comportamento do RefId não é consistente entre a API e a interface do usuário'
slug: o-comportamento-do-refid-nao-e-consistente-entre-a-api-e-a-interface-do-usuario
status: PUBLISHED
createdAt: 2023-09-29T13:10:51.000Z
updatedAt: 2023-10-20T13:41:33.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: refid-behavior-not-consistent-between-api-and-ui
locale: pt
kiStatus: Backlog
internalReference: 910050
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, temos dois comportamentos para o código refid: via API, não é possível que ele seja igual ao de outros produtos, mas via interface do usuário (UI), é possível inserir o mesmo valor que outros produtos já possuem.

## Simulação

Crie um produto com um código refId
Crie outro produto e tente usar o mesmo código refId do outro; via API, isso não será possível, mas via interface do usuário (UI), sim.

## Workaround

Se você precisar usar os mesmos refIds para produtos diferentes, insira-os via interface do usuário (UI).