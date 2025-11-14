---
title: 'A pesquisa de televendas não aceita caracteres especiais além de "@".'
slug: a-pesquisa-de-televendas-nao-aceita-caracteres-especiais-alem-de
status: PUBLISHED
createdAt: 2025-11-14T19:14:50.880Z
updatedAt: 2025-11-14T19:14:50.880Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: telesales-search-doesnt-accept-special-characters-aside-from
locale: pt
kiStatus: Backlog
internalReference: 1072418
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, ao usar a caixa de pesquisa de televendas, um usuário pode se passar por comprador para ajudar nas compras e, para isso, é necessário inserir, na caixa de pesquisa nativa, o e-mail de quem será representado.

No entanto, ao usar essa ferramenta, os e-mails que contêm caracteres especiais, como "+", "$", "#", etc., não são identificados pela ferramenta de pesquisa. não são identificados pela ferramenta de pesquisa, fazendo com que ela retorne uma resposta "não encontrado".
## Simulação


1 - Em uma loja que tenha o televendas (https://help.vtex.com/en/tutorial/telesales-features--UqhiccIRIK2KD0OqkzJaS) implementado, acesse-o por meio de um usuário com a autenticação necessária.

2 - crie um e-mail, nos dados mestre da loja, que use um caractere especial, como "+"

3 - tente usar a barra de ferramentas de personificação do telesales para pesquisar o e-mail fornecido - ela retornará uma resposta "não encontrado".

4 - ajustar esse mesmo e-mail para remover o caractere especial e pesquisar novamente normalizará a situação
## Workaround


Adapte os endereços de e-mail dos usuários para que não usem caracteres especiais.


