---
title: 'A função "Configurações do CMS" não está funcionando como esperado'
slug: a-funcao-configuracoes-do-cms-nao-esta-funcionando-como-esperado
status: PUBLISHED
createdAt: 2022-03-09T13:13:47.000Z
updatedAt: 2023-06-19T12:31:18.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: cms-settings-role-not-working-as-expected
locale: pt
kiStatus: Backlog
internalReference: 538706
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A função "Configurações do CMS" não está funcionando conforme o esperado. Às vezes, o usuário não consegue acessar o CMS mesmo depois de ter sido adicionado à função.
Outro comportamento inesperado é que outros módulos continuam disponíveis para a função do CMS, mesmo sem as permissões necessárias.

## Simulação

- Crie uma função no aplicativo Funções do Gerenciador de Licenças concedendo acesso apenas a:
  - Menu CMS na barra superior;
  - Configurações do CMS.

 ![](https://vtexhelp.zendesk.com/attachments/token/fbpObVoVdnEYGeYjd3GDh9Qqf/?name=image.png)


- Associe essa função a um usuário;
- Faça login com esse usuário e tente acessar o menu de configurações do CMS; você não conseguirá.
- Verifique se os outros módulos continuam disponíveis.

## Workaround

Para acessar o Menu do CMS, o usuário deve ser um Superadministrador.