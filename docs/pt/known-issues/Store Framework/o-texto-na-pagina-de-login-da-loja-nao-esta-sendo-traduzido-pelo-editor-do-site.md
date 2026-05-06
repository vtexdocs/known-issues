---
title: 'O texto na página de login da loja não está sendo traduzido pelo editor do site'
slug: o-texto-na-pagina-de-login-da-loja-nao-esta-sendo-traduzido-pelo-editor-do-site
status: PUBLISHED
createdAt: 2023-10-02T22:55:14.000Z
updatedAt: 2026-01-06T15:59:21.000Z
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

Ao tentar traduzir um texto usando o editor do site para o Login da Loja, as alterações não são aplicadas na página inicial da loja.

## Simulação

1. Abra o editor do site
2. Selecione o bloco Login da Loja
3. Altere o texto do rótulo no login para o que desejar
4. Salve as alterações
5. Visualize a página e o texto permanecerá o mesmo, independentemente da localidade selecionada

## Workaround

Certifique-se de que o campo `iconLabel` esteja vazio tanto no código da loja quanto no editor do site.
Se você não tiver certeza se ele está vazio no editor do site, pode redefinir o conteúdo acessando a versão do editor do site > redefinir.
 ![](https://vtexhelp.zendesk.com/attachments/token/PXovY6zVHdqqhxjodbtMqdXAa/?name=image.png)

Siga a documentação aqui e os contextos aqui para definir o rótulo conforme desejado.