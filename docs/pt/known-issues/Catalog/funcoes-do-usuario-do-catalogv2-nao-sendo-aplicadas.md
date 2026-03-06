---
title: 'Funções do usuário do CatalogV2 não sendo aplicadas'
slug: funcoes-do-usuario-do-catalogv2-nao-sendo-aplicadas
status: PUBLISHED
createdAt: 2026-03-06T19:25:36.193Z
updatedAt: 2026-03-06T19:25:36.193Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalogv2-user-roles-not-applying
locale: pt
kiStatus: No Fix
internalReference: 489297
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário está vinculado a uma função configurada como somente leitura no Gerenciador de Licenças, ele ainda pode editar produtos no Catálogo V2.

## Simulação

1) Acesse a interface do usuário do gerenciador de licenças para uma loja que tenha o Catálogo V2 instalado (/admin/license-manager/#/role-details)

2) Defina uma função de usuário somente leitura ![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png)

3) Com essas regras definidas, faça login com o usuário relacionado 4) Tente atualizar um produto. Você conseguirá, apesar das credenciais somente leitura.

## Workaround

Use a API do Gerenciador de Licenças para gerenciar essas permissões.