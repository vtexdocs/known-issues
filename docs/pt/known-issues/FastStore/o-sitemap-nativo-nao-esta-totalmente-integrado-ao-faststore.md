---
title: O Sitemap nativo não está totalmente integrado ao Faststore
slug: o-sitemap-nativo-nao-esta-totalmente-integrado-ao-faststore
status: PUBLISHED
createdAt: 2025-10-13T14:41:30.336Z
updatedAt: 2025-10-13T14:41:30.336Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: native-sitemap-is-not-fully-integrated-with-faststore
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


**Para lojas que usam v1 e v2,** é possível usar um proxy para apontar para o domínio correto. Isso é algo que o cliente precisa personalizar e resolverá apenas o mapa do site em si, mas as páginas do hCMS não serão adicionadas ao mapa do site. Infelizmente, ainda não temos uma solução alternativa para as páginas do hCMS nas lojas v1 e v2.

Sugerimos usar a unificação de domínio para **lojas que usam a v3** (webops). Isso é o que você precisa verificar antes de seguir:

1. Verifique se você renomeou corretamente o arquivo `faststore.config` para `discovery.config`. Você pode seguir esta nota de versão
2. Atualize as dependências: verifique esta nota de versão. Você deve usar apenas `@faststore/cli` como dependência
3. Atualize a loja para a versão mais recente da estrutura: você pode verificar isso no repositório faststore https://github.com/vtex/faststore

Agora você pode atualizar os domínios de sua loja para usar um único domínio:

De

    storeUrl: "https://www.domain.com (https://www.domain.com/)",secureSubdomain: "https://secure.domain.com (https://secure.domain.com/)",checkoutUrl: "https://secure.domain.com/checkout",loginUrl: "https://secure.domain.com/api/io/login",accountUrl: "https://secure.domain.com/api/io/account",To

    storeUrl: "https://www.domain.com (https://www.domain.com/)",secureSubdomain: "https://www.domain.com (https://www.domain.com/)",checkoutUrl: "https://www.domain.com/checkout",loginUrl: "https://www.domain.com/api/io/login",accountUrl: "https://www.domain.com/api/io/account",
É importante ressaltar que a unificação de domínios também não resolverá o problema de as páginas do hCMS estarem disponíveis no mapa do site para lojas que usam a V3.


%0A