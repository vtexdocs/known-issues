---
title: 'A importação/exportação da planilha do MasterData está apresentando tempo limite esgotado'
slug: a-importacaoexportacao-da-planilha-do-masterdata-esta-apresentando-tempo-limite-esgotado
status: PUBLISHED
createdAt: 2021-07-22T21:16:43.000Z
updatedAt: 2025-12-01T22:05:09.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: masterdata-worksheet-importexport-returning-timeout
locale: pt
kiStatus: Backlog
internalReference: 400265
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao exportar e/ou importar uma entidade, pode ocorrer um tempo limite esgotado nos seguintes cenários:

- Entidade com muitos campos;
- Um determinado campo com excesso de informações;
- Muitos documentos na entidade.
Esses cenários podem resultar em um arquivo de tamanho muito grande, sobrecarregando o usuário responsável pela exportação/importação dos documentos para o arquivo/banco de dados, resultando em uma resposta de tempo limite esgotado com a solicitação abortada.

## Simulação

Para o caso de **exportação**:

- Acesse o Master Data CRM (por exemplo, https://my-account-here.vtexcrm.com.br);
- Acesse um aplicativo de formulário com campos que contenham uma quantidade muito grande de dados por campo (ex.: imagens, vídeos...);
- Clique no botão "**Exportar XLS**":
 ![](https://vtexhelp.zendesk.com/attachments/token/p7ycuur8ck3Qtw2zmSUBNDmxE/?name=image.png)

- Na janela pop-up "**Exportação de dados**", clique em "**Selecionar todos os campos**" para marcá-la:
 ![](https://vtexhelp.zendesk.com/attachments/token/IIc8z6df21Cl6djTt5Toz4udk/?name=image.png)

- Volte para a página Aplicativos;
- Clique no botão "**Exportações**":
 ![](https://vtexhelp.zendesk.com/attachments/token/NsI7JG4oWcuHAhDewa7PoEx1M/?name=image.png)

- Você pode acompanhar a solicitação em "**Status da exportação**" (por exemplo: https://my-account-here.vtexcrm.com.br/ExportStatus/Index);
- O e-mail não será enviado ao usuário.

Para o caso de **importação**:

- Acesse o Master Data CRM (por exemplo, https://my-account-here.vtexcrm.com.br);
- Clique no botão "**Importar**":
 ![](https://vtexhelp.zendesk.com/attachments/token/3HUzAWSplEKGFAap3yU0jjmdf/?name=image.png)

- Escolha a Entidade de Dados e o arquivo .xls:
 ![](https://vtexhelp.zendesk.com/attachments/token/KFolvCXhUiqAhZV23iKDhTws0/?name=image.png)

- Clique no botão "**Importar**";
- A importação será iniciada, o processamento será realizado e, em seguida, você será redirecionado para `Import/ExecuteImport` (por exemplo, https://my-account-here.vtexcrm.com.br/Import/ExecuteImport), e o seguinte erro será exibido:

Esta página não está funcionando. my-account-here.vtexcrm.com.br demorou muito para responder.ERRO HTTP 504 ![](https://vtexhelp.zendesk.com/attachments/token/3brNPf70M3FBLGPiVwWsSHx94/?name=image.png)

## Workaround

Existem algumas maneiras fáceis de usar soluções alternativas neste caso.

**Exportação:**
**Opção 1:** Filtre apenas os documentos de que você precisa, caso não precise da entidade inteira:
 ![](https://vtexhelp.zendesk.com/attachments/token/CojS7MzbOiDkaQ9HgdbrxlzHD/?name=image.png)

**Opção 2:** Selecione apenas os campos de que você realmente precisa, caso não precise da entidade inteira:
 ![](https://vtexhelp.zendesk.com/attachments/token/pTOU7TEWidoOrtstbDALphW6k/?name=image.png)

**Opção 3:** É possível exportar via API. Você pode seguir esta documentação: Extração de dados do Master Data com pesquisa e rolagem.

**Importação:** Separe a planilha a ser importada. Por exemplo, uma planilha com 60.000 documentos, divida-a em 6 planilhas de 10.000 documentos e tente importá-la novamente.
Lembre-se de que não temos um número exato. Dividir o arquivo em até 10 mil documentos foi um exemplo sugerido. Isso dependerá do número de campos/colunas, do tamanho de cada informação no campo/coluna, do tamanho do arquivo, do trabalhador, etc. Existem alguns fatores que podem afetar a importação esperada.



%0A