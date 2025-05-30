---
title: Problemas com gatilhos que contêm anexos
slug: problemas-com-gatilhos-que-contem-anexos
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: problems-with-triggers-that-contain-attachments
locale: pt
kiStatus: Backlog
internalReference: 1215924
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao configurar um acionador para enviar um e-mail contendo um anexo, o sistema enviará o e-mail, mas não incluirá o anexo.

Esse problema conhecido normalmente afeta contas que configuraram um formulário em seu site no qual o usuário anexou um currículo (ex.: Trabalhe conosco) ou especificações do produto.
## Simulação



1. Acesse o armazenamento dinâmico da conta ( https://VTEX.ds.vtexcrm.com.br/)
2. Clique na guia Triggers e configure as ações de acordo
3. Clique em Anexo (attachment) e selecione "Arquivo" (File) no menu suspenso
4. O acionador enviará o e-mail com êxito, mas ele não conterá o anexo.



## Workaround


Embora não haja nenhuma solução alternativa no momento que permita que o arquivo seja armazenado com a VTEX e usado como um acionador, a funcionalidade desejada pode ser reproduzida de uma maneira diferente: O usuário pode configurar o formulário voltado para o cliente para aceitar um URL (onde o arquivo é armazenado externamente). O usuário final pode armazenar o arquivo em um serviço separado (GoogleDrive, Dropbox, S3) e copiar e colar o URL nesse campo.



