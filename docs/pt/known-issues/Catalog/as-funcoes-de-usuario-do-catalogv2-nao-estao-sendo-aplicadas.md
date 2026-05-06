---
title: 'As funções de usuário do CatalogV2 não estão sendo aplicadas'
slug: as-funcoes-de-usuario-do-catalogv2-nao-estao-sendo-aplicadas
status: PUBLISHED
createdAt: 2021-12-16T18:28:26.000Z
updatedAt: 2026-03-06T22:25:04.000Z
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

Quando um usuário é vinculado a uma função configurada como somente leitura no Gerenciador de Licenças, ele ainda pode editar produtos no Catálogo V2.

## Simulação

1) Acesse a interface do usuário do Gerenciador de Licenças de uma loja que tenha o Catálogo V2 instalado (/admin/license-manager/#/role-details)

2) Defina uma função de usuário somente leitura

 ![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png)

3) Com essas regras definidas, faça login com o usuário em questão

4) Tente atualizar um produto; você conseguirá fazê-lo, apesar das credenciais de somente leitura.

## Workaround

Use a API do Gerenciador de Licenças para gerenciar essas permissões.