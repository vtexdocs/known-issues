---
title: 'A propriedade blockClass do infoCard não está funcionando'
slug: a-propriedade-blockclass-do-infocard-nao-esta-funcionando
status: PUBLISHED
createdAt: 2025-11-17T17:42:59.996Z
updatedAt: 2025-11-17T17:42:59.996Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: property-blockclass-from-infocard-not-working
locale: pt
kiStatus: Backlog
internalReference: 743730
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



O Infocard tem uma propriedade chamada blockClass para adicionar classes personalizadas ao componente, mas essa propriedade não está funcionando
## Simulação



Abra seu componente infoCard e adicione a prop blockClass
Verifique seus elementos no DOM e você não encontrará nenhum elemento infocard com a classe adicionad
## Workaround


Crie seu próprio infocard com nossos componentes vtex.flex-layout, vtex.image e vtex.rich-text, o que lhe dará mais flexibilidade para criar seu infocard



