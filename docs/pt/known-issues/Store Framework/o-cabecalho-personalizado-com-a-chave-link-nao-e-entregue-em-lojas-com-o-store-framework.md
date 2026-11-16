---
title: 'O cabeçalho personalizado com a chave "Link" não é entregue em lojas com o Store Framework.'
slug: o-cabecalho-personalizado-com-a-chave-link-nao-e-entregue-em-lojas-com-o-store-framework
status: PUBLISHED
createdAt: 2026-11-16T20:03:20.000Z
updatedAt: 2026-11-16T20:03:20.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-header-with-key-link-is-not-delivered-on-store-framework-stores
locale: pt
kiStatus: Backlog
internalReference: 1485532
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas que utilizam o Store Framework, os lojistas podem adicionar cabeçalhos de resposta HTTP personalizados no painel de administração (Configurações da Loja > Configurações avançadas > Cabeçalhos personalizados). Se um cabeçalho personalizado usar a chave `Link`, seu valor nunca chegará à resposta. O cabeçalho `Link` retornado pela loja contém apenas as dicas de recursos padrão da plataforma (`dns-prefetch`/`preconnect` para o domínio de ativos da loja, Google Analytics, Google Tag Manager e Facebook). O valor configurado pelo lojista é descartado.

Cabeçalhos personalizados com qualquer outra chave funcionam como esperado.

## Simulação

1. No painel de administração, acesse Configurações da Loja > Vitrine > Configurações avançadas > Cabeçalhos personalizados.

2. Adicione um novo cabeçalho:

- ID: qualquer rótulo (por exemplo, `my-link-header`)

- Chave: `Link`

- Valor: qualquer valor válido para `Link` (por exemplo, `</about>; rel="related"`)

3. Salve as configurações e aguarde a propagação.
4. Solicite qualquer página da loja diretamente da origem e verifique os cabeçalhos da resposta.
5. O cabeçalho `Link` contém apenas os valores padrão (`{account}.vtexassets.com`, `google-analytics.com`, `googletagmanager.com`, `connect.facebook.net`). O valor configurado está ausente.
6. Para comparação, adicione outro cabeçalho personalizado com uma chave diferente (por exemplo, `X-Test-Header`). Esse cabeçalho aparece na resposta.

## Workaround

Não há solução alternativa para fornecer um valor personalizado no cabeçalho de resposta HTTP `Link`.

Se o caso de uso do comerciante também aceitar a relação declarada no HTML, ela poderá ser adicionada como uma tag `<link>` dentro de `<head>` (por exemplo, `<link rel="related" href="/about">`) por meio de um pixel de rastreamento. Isso não substitui o cabeçalho HTTP para clientes que leem apenas os cabeçalhos de resposta.