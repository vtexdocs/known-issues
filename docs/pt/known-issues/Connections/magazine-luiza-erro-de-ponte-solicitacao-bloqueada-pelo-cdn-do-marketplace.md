---
title: 'Magazine Luiza Erro de ponte: "Solicitação bloqueada pelo CDN do marketplace'
slug: magazine-luiza-erro-de-ponte-solicitacao-bloqueada-pelo-cdn-do-marketplace
status: PUBLISHED
createdAt: 2025-11-18T17:40:21.254Z
updatedAt: 2025-11-18T17:40:21.254Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-bridge-error-request-blocked-by-marketplace-cdn
locale: pt
kiStatus: Backlog
internalReference: 1327151
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Algumas solicitações de atualização de SKU/Catálogo enviadas do VTEX Bridge para o Magazine Luiza estão sendo bloqueadas pelo CDN/WAF do marketplace.
Nesses casos, o Bridge exibe:
**"Não foi possível concluir a solicitação. Solicitação bloqueada pelo CDN do marketplace. "**
Esse comportamento ocorre principalmente quando a carga útil inclui imagens com padrões de nome de arquivo que o Magalu rejeita, como sequências de caracteres específicas (por exemplo, `--1-`).
## Simulação



- No Bridge, tente enviar o SKU/produto afetado para o Magalu.
- O Bridge retorna:
**"Não foi possível concluir a solicitação. Solicitação bloqueada pelo CDN do marketplace. "*
## Workaround



- Renomeie os arquivos de imagem para remover padrões não permitidos (por exemplo, remova `--1-`).
- Atualize as imagens do catálogo, limpe os caches, se necessário, e reenvie a SKU pelo Bridge.



