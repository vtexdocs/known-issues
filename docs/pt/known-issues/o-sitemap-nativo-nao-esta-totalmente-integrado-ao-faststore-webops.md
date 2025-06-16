---
title: O Sitemap nativo não está totalmente integrado ao Faststore Webops
slug: o-sitemap-nativo-nao-esta-totalmente-integrado-ao-faststore-webops
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: native-sitemap-is-not-fully-integrated-with-faststore-webops
locale: pt
kiStatus: Backlog
internalReference: 1220872
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A Faststore usa o aplicativo `vtex.store-sitemap` do IO para criar o mapa do site da loja, mas no momento ele não está totalmente integrado. As páginas criadas no hCMS, por exemplo, não são acessíveis no mapa do site, e as URLs do mapa do site podem apontar para o ambiente seguro.
## Simulação



- Acesse o GraphQL IDE da sua loja Faststore e gere o mapa do site por meio do aplicativo `vtex.store-sitemap`
- Você verá que as páginas do hCMS não estão lá e que o domínio final não está correto (ele está usando o domínio seguro
## Workaround


Para lojas que usam v1 e v2, é possível usar um proxy para apontar para o domínio correto. Isso é algo que o cliente precisa personalizar e resolverá apenas o mapa do site em si, mas as páginas do hCMS não serão adicionadas ao mapa do site. Infelizmente, ainda não temos uma solução alternativa para as páginas do hCMS nas lojas v1 e v2.
Sugerimos usar a unificação de domínio para lojas que usam a v3 (webops). Confirme se sua loja está atualizada corretamente e abra um tíquete com o suporte ao produto para que possamos ativar esse recurso.



