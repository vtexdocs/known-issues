---
title: 'KI O sitemap personalizado (saveIndex) retorna "Entidade não encontrada" no domínio final'
slug: ki-o-sitemap-personalizado-saveindex-retorna-entidade-nao-encontrada-no-dominio-final
status: PUBLISHED
createdAt: 2026-09-17T23:26:22.000Z
updatedAt: 2026-09-17T23:31:38.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-sitemap-saveindex-returns-entity-not-found-on-the-final-domain
locale: pt
kiStatus: Backlog
internalReference: 1462938
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Lojas que utilizam o recurso `saveIndex` para gerar sitemaps personalizados (URLs no formato `/sitemap/{nome-do-índice}.xml`) podem receber um erro de "Entidade não encontrada" ao acessar esses arquivos por meio do domínio de produção final, mesmo que o índice mestre (/sitemap.xml) seja atualizado corretamente. O mesmo arquivo ainda funciona normalmente em `*.myvtex.com`. O problema está relacionado a uma diferença de roteamento entre os dois domínios, o que faz com que o índice personalizado não seja reconhecido corretamente no domínio final.

## Simulação

- Tenha uma conta que utilize o recurso `saveIndex` para registrar um índice de sitemap personalizado (por exemplo, `myindex`), associado à vinculação de produção.

- O acesso a `https://{accountName}.myvtex.com/sitemap/myindex.xml` retorna o código 200.
- O acesso a `https://{final-domain}/sitemap/myindex.xml` retorna o erro "Entidade não encontrada".

- O índice principal `sitemap/custom-user-routes-1.xml` lista a entrada corretamente em ambos os domínios, indicando que apenas a leitura do arquivo filho falha no domínio final.

## Workaround

A loja afetada deve abrir um chamado de suporte solicitando a solução alternativa, que será aplicada individualmente a cada conta.