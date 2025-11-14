---
title: 'Problema de arrastar e soltar no Site Editor'
slug: problema-de-arrastar-e-soltar-no-site-editor
status: PUBLISHED
createdAt: 2025-11-14T17:12:28.458Z
updatedAt: 2025-11-14T17:12:28.458Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: drag-and-drop-issue-on-site-editor
locale: pt
kiStatus: Backlog
internalReference: 685103
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os clientes não podem usar o recurso de arrastar e soltar no editor do site para fazer upload de imagens, isso provavelmente ocorre devido à nova implementação do nosso novo CMS Media Management.
## Simulação



Acesse qualquer conta e tente carregar uma imagem de banner por meio do recurso de arrastar e soltar

 ![](https://vtexhelp.zendesk.com/attachments/token/VImrMx2X11Cyb9sePaOFJJbj2/?name=inline785506209.png)
https://share.vidyard.com/watch/RXWHL4QYir7i5h1U4zuEu
## Workaround


Faça upload de imagens sem usar o recurso de arrastar e soltar ou,

Tente reverter para uma versão mais antiga do admin-pages sem algumas correções e o CMS Media Management, que é a versão do admin-pages 4.43.1

Execute `vtex install vtex.admin-pages@4.43.1`
Isso resolverá o problema de arrastar e soltar, mas outros problemas podem aparecer novamente