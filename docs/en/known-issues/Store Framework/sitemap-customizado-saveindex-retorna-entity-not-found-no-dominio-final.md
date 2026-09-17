---
title: 'Sitemap customizado (saveIndex) retorna "Entity not found" no domínio final'
slug: sitemap-customizado-saveindex-retorna-entity-not-found-no-dominio-final
status: PUBLISHED
createdAt: 2026-09-17T23:26:22.000Z
updatedAt: 2026-09-17T23:26:22.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-customizado-saveindex-retorna-entity-not-found-no-dominio-final
locale: en
kiStatus: Backlog
internalReference: 1462938
---

## Summary

Lojas que usam a feature `saveIndex` para gerar sitemaps customizados (URLs no formato `/sitemap/{index-name}.xml`) podem receber o erro "Entity not found" ao acessar esses arquivos no domínio de produção, mesmo com o índice mestre (/sitemap.xml) sendo atualizado corretamente. O mesmo arquivo continua funcionando normalmente em `*.myvtex.com`. O problema está relacionado a uma diferença de roteamento entre os dois domínios, que faz com que o índice customizado não seja reconhecido corretamente no domínio final.

## Simulation

- Ter uma conta que utilize a feature `saveIndex` para registrar um índice customizado de sitemap (ex.: `meuindice`), associado ao binding de produção.
- Acessar `https://{accountName}.myvtex.com/sitemap/meuindice.xml` → retorna 200.
- Acessar `https://{dominio-final}/sitemap/meuindice.xml` → retorna erro "Entity not found".
- O índice mestre `sitemap/custom-user-routes-1.xml` lista a entrada normalmente em ambos os domínios, indicando que apenas a leitura do arquivo filho falha no domínio final.

## Workaround

A loja afetada deve abrir um ticket de suporte solicitando o workaround, que será aplicado pontualmente para a conta.