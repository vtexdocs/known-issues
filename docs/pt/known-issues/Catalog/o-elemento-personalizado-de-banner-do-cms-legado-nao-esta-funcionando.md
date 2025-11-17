---
title: 'O elemento personalizado de banner do CMS legado não está funcionando'
slug: o-elemento-personalizado-de-banner-do-cms-legado-nao-esta-funcionando
status: PUBLISHED
createdAt: 2025-11-17T17:32:32.714Z
updatedAt: 2025-11-17T17:32:32.714Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-cmss-banner-custom-element-not-working
locale: pt
kiStatus: Backlog
internalReference: 978466
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, a guia "elementos personalizados" das configurações do CMS legado não está funcionando corretamente.

A configuração de um elemento personalizado desse tipo não produzirá efeitos na maioria dos casos, e recomenda-se configurá-lo diretamente no HTML do layout.

Isso só ocorre em lojas de modelos herdadas.
## Simulação


1 - vá para o CMS antigo e selecione a guia de elementos personalizados
2 - Carregue um elemento personalizado do tipo "banner".
3 - faça referência a esse banner em seu html
4 - o banner configurado não será renderizado corretamente


## Workaround


Configure os banners usando o layout HTML do tipo e/ou os subtemplates associados a ele.

OU

migrar para a estrutura de loja da VTEX



