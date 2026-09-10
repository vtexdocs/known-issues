---
title: 'CentauroKI O mapeador de arquivos tem um limite de tamanho de arquivo de 1 MB para uploads via API.'
slug: centauroki-o-mapeador-de-arquivos-tem-um-limite-de-tamanho-de-arquivo-de-1-mb-para-uploads-via-api
status: PUBLISHED
createdAt: 2026-09-10T23:30:29.000Z
updatedAt: 2026-09-10T23:30:41.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: centauroki-mapper-filer-have-1mb-file-size-limit-on-api-uploads
locale: pt
kiStatus: Backlog
internalReference: 1459896
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O carregamento de uma planilha de mapeamento com mais de 1 MB falha porque uma camada externa, à frente das APIs de integração da VTEX, a bloqueia.

## Simulação

Tente carregar uma planilha de mapeamento do Centauro com mais de 1 MB (aba Variação/Especificação ou aba Frete) através de Administração > Configuração do Marketplace > Centauro, ou diretamente pelo endpoint da API de mapeamento da integração. A solicitação é rejeitada pela camada de validação externa devido ao tamanho do arquivo (> 1 MB).

## Workaround

Realize um único carregamento da planilha com menos de 1 MB (reduza o conteúdo do arquivo — não o divida em vários carregamentos).