---
title: 'APP FBE As páginas da loja aguardam o carregamento de um arquivo externo quando a Extensão de Negócios do Facebook está instalada.'
slug: app-fbe-as-paginas-da-loja-aguardam-o-carregamento-de-um-arquivo-externo-quando-a-extensao-de-negocios-do-facebook-esta-instalada
status: PUBLISHED
createdAt: 2026-11-12T19:09:42.000Z
updatedAt: 2026-11-12T19:09:42.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: app-fbe-store-pages-wait-for-an-external-file-to-load-when-facebook-business-extension-is-installed
locale: pt
kiStatus: Backlog
internalReference: 1484482
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas Store Framework (VTEX IO) com a extensão Facebook Business Extension (FBE) instalada, um arquivo externo é carregado no início das páginas da loja, e a página aguarda a conclusão do carregamento desse arquivo antes de ser exibida. Isso pode atrasar a velocidade de exibição da loja. O comportamento também ocorre quando o Pixel está desativado nas configurações de integração.

## Simulação

1. Em uma loja Store Framework com a extensão Facebook Business Extension instalada, abra uma página da loja.

2. Abra as ferramentas de desenvolvedor do navegador e execute o seguinte no console:
`performance.getEntriesByType('resource').find(e => e.name.includes('clientParamBuilder')).renderBlockingStatus`
3. O resultado é "bloqueando", o que significa que a exibição da página aguarda o carregamento deste arquivo.

4. Desative o Pixel nas configurações de integração Meta e repita os passos de 1 a 3. O resultado ainda é "bloqueando".

## Workaround

n/a