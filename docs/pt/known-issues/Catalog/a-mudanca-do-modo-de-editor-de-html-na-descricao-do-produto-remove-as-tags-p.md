---
title: A mudança do modo de editor de html na descrição do produto remove as tags <p>
slug: a-mudanca-do-modo-de-editor-de-html-na-descricao-do-produto-remove-as-tags-p
status: PUBLISHED
createdAt: 2025-10-16T20:46:43.322Z
updatedAt: 2025-10-16T20:46:43.322Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: switching-from-html-editor-mode-in-product-description-removes-p-tags
locale: pt
kiStatus: Backlog
internalReference: 1208549
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, no novo editor de descrição de catálogo de produtos, se você alternar a visualização do modo normal para HTML, poderá ver todas as tags que a formatação HTML atual está usando no texto.

Se você inserir manualmente uma tag de abertura e fechamento de parágrafo <p></p> no editor e voltar ao modo normal, essas tags serão removidas automaticamente e nenhum parágrafo será criado.
## Simulação


1 - Em uma descrição de produto com mais de 2 parágrafos, alterne para o modo de editor HTML disponível pressionando o botão </> na parte inferior

 ![](https://vtexhelp.zendesk.com/attachments/token/4WtexfuFAhq9kNA6yCac7kXeS/?name=image.png)

2 - adicione manualmente um conjunto de tags <p> </p>

3 - voltar ao modo normal

4 - Alterne novamente para o modo HTML, as tags <p> não estarão mais presentes


## Workaround


Use o editor de texto do catálogo herdado ou não alterne o formulário para o modo de edição HTML ao editar descrições de produtos.

OU

Criar descrições de produtos por meio de planilhas/API



