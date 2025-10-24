---
title: 'A navegação de especificação da árvore de categorias pode retornar dados incorretos'
slug: a-navegacao-de-especificacao-da-arvore-de-categorias-pode-retornar-dados-incorretos
status: PUBLISHED
createdAt: 2025-10-16T20:36:24.778Z
updatedAt: 2025-10-16T20:36:24.778Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: category-trees-specification-navigation-can-return-incorrect-data
locale: pt
kiStatus: Backlog
internalReference: 1179682
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, ao navegar na árvore de categorias, se um usuário navegar para "Campo (SKU)" e depois para "Valores" de uma especificação e depois voltar para a visualização da árvore de categorias clicando no link de navegação:

 ![](https://vtexhelp.zendesk.com/attachments/token/qtPOrJ9QkBSTLEALtov7At2nI/?name=image.png)

e depois voltar para o mesmo formulário de especificação, os valores de especificação listados anteriormente não serão mais listados.
## Simulação


1 - Na árvore de categorias, vá para qualquer categoria com grupos e campos registrados, clique com o botão direito do mouse e acesse a opção "Fields (SKU)"

2 - Na lista de campos SKU, procure um campo de especificação que tenha valores de especificação para ele.

3 - Clique na opção "Values" (Valores) e eles serão listados

4 - Em seguida, no breadcrumb, clique no link "Categories" (Categorias)

5 - Repita as etapas de 1 a 3, os mesmos campos não serão exibidos novamente, como se não estivessem presentes no catálogo
## Workaround


Gerenciar valores de especificação via API ou planilha

E/ou

Se esse problema ocorrer com você, faça logout ou limpe os cookies do navegador para redefinir o cache



