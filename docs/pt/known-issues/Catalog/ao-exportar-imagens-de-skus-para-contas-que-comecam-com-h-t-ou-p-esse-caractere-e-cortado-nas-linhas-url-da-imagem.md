---
title: 'Ao exportar imagens de SKUs para contas que começam com "h", "t" ou "p", esse caractere é cortado nas linhas "URL da imagem".'
slug: ao-exportar-imagens-de-skus-para-contas-que-comecam-com-h-t-ou-p-esse-caractere-e-cortado-nas-linhas-url-da-imagem
status: PUBLISHED
createdAt: 2023-10-13T15:20:36.000Z
updatedAt: 2023-10-13T15:20:36.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: exporting-sku-images-for-accounts-starting-with-ht-or-p-get-this-character-cut-in-the-image-url-rows
locale: pt
kiStatus: Backlog
internalReference: 919199
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O relatório de imagens de SKU, /admin/Site/ProdutoImagemExportacao.aspx, para nomes de conta que começam com “h”, “t” ou “p”, como “testaccount”, exibirá um caractere faltando na planilha de exportação, na linha de imageURL.

## Simulação

1 - para uma conta que comece com os caracteres iniciais mencionados, acesse /admin/Site/ProdutoImagemExportacao.aspx e exporte uma planilha para qualquer SKU que tenha pelo menos 1 imagem.
2 - abra a planilha exportada e verifique a coluna "UrlImagem": ela estará sem o caractere inicial

Por exemplo, se a conta se chamar "testaccount":

 ![](https://vtexhelp.zendesk.com/attachments/token/3VxPtxFSDjU1obEtgqkS16BXM/?name=image.png)

## Workaround

Crie uma subconta começando com outro caractere (por exemplo, "mytestaccount") e acesse a interface de exportação usando essa subconta. A exportação então  exibirá a string completa da URL sem nenhum corte incorreto.