---
title: 'Autor da versão: "Observação: Não encontrado no VTEX ID." no perfil'
slug: autor-da-versao-observacao-nao-encontrado-no-vtex-id-no-perfil
status: PUBLISHED
createdAt: 2023-10-04T21:45:38.000Z
updatedAt: 2023-10-04T22:14:33.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: version-author-note-not-found-on-vtex-id-on-the-profile
locale: pt
kiStatus: Scheduled
internalReference: 914314
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o cliente realiza uma compra, ao autor da versão é atribuído um ID de usuário (GUID) ou um serviço, seguido do texto "`Nota: Não encontrado no VTEX ID.`" no perfil.
Esse comportamento não afeta o perfil nem a experiência do comprador, uma vez que se trata apenas de uma questão de interface do usuário, e é possível verificar as informações por meio da API de versões.

## Simulação

- Acesse o Master Data CRM (por exemplo, https://my-account-here.vtexcrm.com.br);
- Acesse a guia Entidade de Dados CL (Clientes):
- Selecione um documento e clique no ícone de olho para visualizar os dados;
- Clique no botão "_Registro de Alterações_";
- Abra uma versão recente;
- Verifique o "_Autor da versão_", que será um ID de usuário, e o nome "`Nota: Não encontrado no VTEX ID.`", por exemplo:
 ![](https://vtexhelp.zendesk.com/attachments/token/9ngSibhlO4er0Df3Fi7oQAhot/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/8tlsDbxNSFFHdJMVHf2yvctem/?name=image.png)

- Verificação por meio da API Get version:
 ![](https://vtexhelp.zendesk.com/attachments/token/MRrTRox5E0t91F3OpsDcRmJ9z/?name=image.png)

    "updatedBy_USER": "{\"Id\":\"d6d8269f-e7cc-4e4b-8b89-3b46a1407937\",\"Login\":\"vtex-service::checkout::stable\",\"Name\":null}",

## Workaround

Você pode verificar o autor usando nossas APIs:

- Listar versões
- Obter versão