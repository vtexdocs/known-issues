---
title: 'Erro ao exportar entidade com excesso de documentos'
slug: erro-ao-exportar-entidade-com-excesso-de-documentos
status: PUBLISHED
createdAt: 2023-07-07T15:59:34.000Z
updatedAt: 2023-07-07T15:59:34.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-exporting-entity-with-too-many-documents
locale: pt
kiStatus: Backlog
internalReference: 857894
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A exportação de um grande número de documentos de uma entidade resulta em processamento excessivo, causando erros na fila de processamento e impedindo a exportação da lista de documentos.

## Simulação

1. Acesse a plataforma Master Data CRM e navegue até o formulário da entidade desejada.
2. Localize o botão “Exportar XLS” na interface e clique nele.
3. Localize e clique no botão “Exportar XLS”.
4. Inicie o processo de exportação confirmando a seleção e iniciando a exportação.
5. Para monitorar o andamento da exportação, navegue até a guia Aplicativos na plataforma.
6. Procure o botão “Exportações” e clique nele para visualizar a lista em andamento.
7. Observe o status da exportação e verifique se há erros ou problemas encontrados durante o processo de exportação.

## Workaround

Uma solução alternativa para este problema é utilizar a API de rolagem.