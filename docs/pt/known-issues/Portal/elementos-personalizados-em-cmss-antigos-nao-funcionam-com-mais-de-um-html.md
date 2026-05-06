---
title: 'Elementos personalizados em CMSs antigos não funcionam com mais de um HTML'
slug: elementos-personalizados-em-cmss-antigos-nao-funcionam-com-mais-de-um-html
status: PUBLISHED
createdAt: 2023-07-31T16:34:51.000Z
updatedAt: 2023-07-31T16:34:51.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: custom-elements-on-legacy-cms-not-working-with-more-than-one-html
locale: pt
kiStatus: Backlog
internalReference: 871480
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar um elemento personalizado com mais de um elemento HTML, apenas o primeiro é carregado no modelo.

## Simulação

1. Crie um elemento personalizado do tipo HTML;
2. Crie pelo menos dois códigos HTML nesse elemento personalizado;
3. Verifique se o modelo que contém esse elemento personalizado carrega apenas o primeiro HTML.

## Workaround

Reúna todos os códigos HTML em apenas um elemento dentro do elemento personalizado.