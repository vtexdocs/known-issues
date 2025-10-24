---
title: 'Erro ao renderizar a página de visualização xmlChar inválido'
slug: erro-ao-renderizar-a-pagina-de-visualizacao-xmlchar-invalido
status: PUBLISHED
createdAt: 2025-10-16T19:55:28.791Z
updatedAt: 2025-10-16T19:55:28.791Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-on-render-the-view-page-invalid-xmlchar
locale: pt
kiStatus: Backlog
internalReference: 1140738
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao renderizar a página de visualização, ocorre um erro `erro na linha ... na coluna ...: xmlParseCharRef: valor xmlChar inválido ...`. Esse erro ocorre porque o formulário contém um caractere não interpretado pelo analisador XML, fazendo com que a página falhe durante a renderização.

 ![](https://vtexhelp.zendesk.com/attachments/token/vXtAkcFk2c2KKi0QNLO58P9dw/?name=Captura+de+Tela+2024-11-26+a%CC%80s+15.08.07.png)

Esse campo foi marcado na caixa de seleção do formulário List Fields.

 ![](https://vtexhelp.zendesk.com/attachments/token/LmZN49pwizGkuoR89Q7FWzA5n/?name=Captura+de+Tela+2024-11-26+a%CC%80s+14.59.02.png)
## Simulação



1. Acesse a página de visualização no sistema.
2. Carregue um formulário que contenha um campo com um caractere não suportado pelo analisador XML.
3. Nas ferramentas de desenvolvimento do Chrome, observe que a página não é renderizada e exibe o seguinte

    erro: erro na linha ... na coluna ...: xmlParseCharRef: valor xmlChar inválido ...
## Workaround


Identifique o campo que contém o caractere não suportado.
Remova o caractere inválido do valor do campo usando a API.
Recarregue a página para verificar se ela está sendo renderizada corretamente.