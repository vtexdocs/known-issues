---
title: 'O upload do File Manager com dois ou mais arquivos existentes não atualiza todos os arquivos, apenas o primeiro'
id: 2LHdzsFFe83E1Tf0Z4j66y
status: PUBLISHED
createdAt: 2022-03-17T00:20:51.454Z
updatedAt: 2024-02-16T20:23:18.080Z
publishedAt: 2024-02-16T20:23:18.080Z
firstPublishedAt: 2022-03-17T00:20:52.317Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: file-manager-upload-with-two-one-more-existent-files-does-not-update-all-the-files-only-the-first
locale: pt
kiStatus: No Fix
internalReference: 418253
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O upload do gerenciador de arquivos com dois ou mais arquivos existentes não atualiza todos os arquivos, apenas o primeiro

## Simulação


- Vá para /admin/a, gerenciador de arquivos e adicione dois ou mais arquivos para upload;
- Agora carregue dois outros arquivos com o mesmo nome:
- Receberemos um aviso informando que o arquivo existe e perguntando se queremos substituí-lo.

Esse aviso está nos informando apenas sobre um arquivo, o segundo não está sendo validado.

- Ambos os arquivos são carregados, mas apenas um substituirá o mais antigo

## Workaround


Atualize um arquivo por vez.

