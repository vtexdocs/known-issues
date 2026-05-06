---
title: 'A função "Criar vendedor com informações adicionais" está apresentando um erro'
slug: a-funcao-criar-vendedor-com-informacoes-adicionais-esta-apresentando-um-erro
status: PUBLISHED
createdAt: 2023-01-26T17:12:42.000Z
updatedAt: 2023-02-06T20:34:01.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: create-seller-with-additional-information-is-returning-an-error
locale: pt
kiStatus: Fixed
internalReference: 741110
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar criar um vendedor pelo painel de administração e preencher o formulário opcional de Informações Adicionais, é exibida a seguinte mensagem de erro:
`O vendedor foi adicionado com sucesso, mas algumas informações não puderam ser salvas.`
 ![](https://vtexhelp.zendesk.com/attachments/token/FYe7irRht0psXP4PwkEH7fm05/?name=image.png)

Apesar da mensagem, o vendedor não foi realmente salvo.

## Simulação

1. Acesse a gestão de vendedores e clique em “Criar novo vendedor”;
2. Preencha todas as informações obrigatórias;
3. Preencha pelo menos uma informação opcional na seção “Informações adicionais”;
4. Verifique se a mensagem de erro aparece.

## Workaround

Primeiro, crie o vendedor sem as “Informações adicionais”.
Depois que o vendedor for criado com sucesso, volte à sua configuração e preencha as “Informações adicionais”.