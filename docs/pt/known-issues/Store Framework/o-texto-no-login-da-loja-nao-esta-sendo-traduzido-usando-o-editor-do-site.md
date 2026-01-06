---
title: 'O texto no login da loja não está sendo traduzido usando o editor do site'
slug: o-texto-no-login-da-loja-nao-esta-sendo-traduzido-usando-o-editor-do-site
status: PUBLISHED
createdAt: 2026-01-06T14:19:04.851Z
updatedAt: 2026-01-06T14:19:04.851Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: text-in-store-login-are-not-being-translated-using-site-editor
locale: pt
kiStatus: Backlog
internalReference: 911757
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao tentar traduzir um texto usando o editor do site para o login da loja, as alterações não serão aplicadas na frente da loja.
## Simulação



1. Abra o editor do site
2. Selecione o bloco Store Login
3. Altere o rótulo de texto no login para o que desejar
4. Salve as alterações
5. Visualize a página e o texto será o mesmo, independentemente da localidade selecionada



## Workaround


Certifique-se de que iconLabel esteja vazio tanto no código da loja quanto no editor do site.
Se não tiver certeza de que está vazio no editor do site, você pode redefinir o conteúdo acessando a versão do editor do site > redefinir.
 ![](https://vtexhelp.zendesk.com/attachments/token/PXovY6zVHdqqhxjodbtMqdXAa/?name=image.png)

Siga a documentação aqui e os contextos aqui para definir o rótulo conforme desejado.



