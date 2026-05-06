---
title: 'Ao fazer upload no Gerenciador de Arquivos com dois arquivos, sendo que um deles já existe, nem todos os arquivos são atualizados, apenas o primeiro'
slug: ao-fazer-upload-no-gerenciador-de-arquivos-com-dois-arquivos-sendo-que-um-deles-ja-existe-nem-todos-os-arquivos-sao-atualizados-apenas-o-primeiro
status: PUBLISHED
createdAt: 2021-08-24T14:19:36.000Z
updatedAt: 2024-01-23T18:32:23.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: file-manager-upload-with-two-one-more-existent-files-does-not-update-all-the-files-only-the-first
locale: pt
kiStatus: No Fix
internalReference: 418253
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O upload no Gerenciador de Arquivos, quando há dois ou mais arquivos já existentes, não atualiza todos os arquivos, mas apenas o primeiro

## Simulação

- Acesse /admin/a, vá ao Gerenciador de Arquivos e adicione dois ou mais arquivos para upload;
- Agora, faça o upload de outros dois arquivos com o mesmo nome:
- Receberemos um aviso informando que o arquivo já existe e perguntando se desejamos substituí-lo.

Esse aviso se refere apenas a um arquivo; o segundo não está sendo validado.

- Ambos os arquivos são enviados, mas apenas um substituirá o antigo.

## Workaround

Atualize um arquivo por vez.