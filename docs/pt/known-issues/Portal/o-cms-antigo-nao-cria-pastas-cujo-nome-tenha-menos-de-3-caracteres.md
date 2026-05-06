---
title: 'O CMS antigo não cria pastas cujo nome tenha menos de 3 caracteres'
slug: o-cms-antigo-nao-cria-pastas-cujo-nome-tenha-menos-de-3-caracteres
status: PUBLISHED
createdAt: 2023-05-15T14:32:48.000Z
updatedAt: 2023-05-15T14:32:48.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: legacy-cms-does-not-create-folders-with-less-than-3-characters-in-the-name
locale: pt
kiStatus: Backlog
internalReference: 825530
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O CMS antigo não cria pastas com nomes de menos de 3 caracteres

## Simulação

- Acesse o CMS antigo
- Crie uma nova pasta
- Digite um nome de pasta com menos de 3 caracteres
- Tente salvar a pasta

Será exibida uma mensagem de erro:

 O nome da pasta é inválido. Verifique as instruções para criar um nome de pasta. O nome é obrigatório e deve conter apenas letras, números, "@" e “-” (hífen). O caractere "@" deve ser usado no início e no final. O hífen não pode ser usado no início ou no final do nome.

## Workaround

Use um nome de pasta com 3 ou mais caracteres