---
title: 'Não é possível enviar imagens de planilhas com serviços de hospedagem que utilizam o protocolo de criptografia SSL 1.3'
slug: nao-e-possivel-enviar-imagens-de-planilhas-com-servicos-de-hospedagem-que-utilizam-o-protocolo-de-criptografia-ssl-13
status: PUBLISHED
createdAt: 2023-06-28T12:23:39.000Z
updatedAt: 2023-06-28T12:25:05.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: unable-to-upload-spreadsheet-images-with-host-services-using-protocol-encryption-protocol-ssl13
locale: pt
kiStatus: Backlog
internalReference: 851911
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o servidor de imagens da planilha utiliza o protocolo de criptografia SSL 1.3, ocorre um erro ao tentar fazer o upload da planilha:

"Falha ao processar o registro. Verifique se os dados da planilha estão consistentes e tente novamente. Detalhes do erro: Ocorreu um erro ao enviar a solicitação."

Esse erro ocorre porque nosso serviço do Windows permite apenas versões mais antigas, como 1.2 ou 1.1.

## Simulação

1. Use um host com uma versão de protocolo mais recente;
2. Tente fazer o upload de uma imagem, usando a planilha, que esteja hospedada nesse host;
3. Verifique se a mensagem de erro aparece.

## Workaround

Use um host diferente ou verifique com o host se é possível usar uma versão mais antiga.