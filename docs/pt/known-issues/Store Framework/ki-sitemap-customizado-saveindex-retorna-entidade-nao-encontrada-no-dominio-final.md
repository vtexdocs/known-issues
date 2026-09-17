---
title: 'KI Sitemap customizado (saveIndex) retorna "Entidade não encontrada" no domínio final'
slug: ki-sitemap-customizado-saveindex-retorna-entidade-nao-encontrada-no-dominio-final
status: PUBLISHED
createdAt: 2026-09-17T23:26:22.000Z
updatedAt: 2026-09-17T23:26:22.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-customizado-saveindex-retorna-entity-not-found-no-dominio-final
locale: pt
kiStatus: Backlog
internalReference: 1462938
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Lojas que utilizam o recurso `saveIndex` para gerar sitemaps customizados (URLs no formato `/sitemap/{index-name}.xml`) podem receber o erro "Entity not found" ao acessar esses arquivos no domínio de produção, mesmo com o índice mestre (/sitemap.xml) sendo atualizado corretamente. O mesmo arquivo continua funcionando normalmente em `*.myvtex.com`. O problema está relacionado a uma diferença de roteamento entre os dois domínios, que faz com que o índice customizado não seja reconhecido corretamente no domínio final.

## Simulação

- Ter uma conta que utiliza um recurso `saveIndex` para registrar um índice customizado de sitemap (ex.: `meuindice`), associado ao vínculo de produção.
- Acesse `https://{nomedaconta}.myvtex.com/sitemap/meuindice.xml` → retorna 200.
- Acessar `https://{dominio-final}/sitemap/meuindice.xml` → retorna erro "Entidade não encontrada".
- O índice mestre `sitemap/custom-user-routes-1.xml` lista a entrada normalmente em ambos os domínios, destacando que apenas a leitura do arquivo filho falha no domínio final.

## Workaround

A loja afetada deverá abrir um ticket de suporte solicitando uma solução alternativa, que será aplicada pontualmente para a conta.