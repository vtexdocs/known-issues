---
title: 'O elemento personalizado de banner do CMS Legacy não está funcionando'
slug: o-elemento-personalizado-de-banner-do-cms-legacy-nao-esta-funcionando
status: PUBLISHED
createdAt: 2024-02-07T13:44:04.000Z
updatedAt: 2024-02-07T13:44:04.000Z
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

Atualmente, a guia “elementos personalizados” das configurações do CMS antigo não está funcionando corretamente.

Configurar um elemento personalizado desse tipo não produzirá efeitos na maioria dos casos, sendo recomendável configurá-lo diretamente no HTML do layout.

Isso ocorre apenas em lojas com modelos antigos.

## Simulação

1 - acesse o CMS legado e selecione a guia de elementos personalizados
2 - faça o upload de um elemento personalizado do tipo “banner”
3 - faça referência a esse banner no seu HTML
4 - o banner configurado não será renderizado corretamente

## Workaround

configure os banners usando o tipo de layout HTML e/ou submodelos associados a ele.

OU

migre para a estrutura de loja VTEX