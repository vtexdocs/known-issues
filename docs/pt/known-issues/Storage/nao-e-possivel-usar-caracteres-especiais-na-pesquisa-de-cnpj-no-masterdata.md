---
title: 'Não é possível usar caracteres especiais na pesquisa de CNPJ no MasterData'
slug: nao-e-possivel-usar-caracteres-especiais-na-pesquisa-de-cnpj-no-masterdata
status: PUBLISHED
createdAt: 2022-06-21T15:34:44.000Z
updatedAt: 2024-12-12T19:59:29.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: special-characters-cannot-be-used-for-cnpj-search-on-masterdata
locale: pt
kiStatus: Backlog
internalReference: 602054
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os tipos de campo CNPJ e CPF são utilizados em várias partes do VTEX e são campos essenciais presentes também na entidade MasterData CL.

Esses campos devem ser formatados de maneira muito específica e seus caracteres especiais (como "." e "/") não são, atualmente, compatíveis com a pesquisa disponível tanto na API ( ) quanto na interface do usuário.

## Simulação

Acesse os dados mestre da sua conta em myaccount.vtexcrm.com.br
Na lista de aplicativos, acesse o formulário de "Clientes"
Nos filtros, pesquise por "CNPJ"
Digite um caractere especial na sua pesquisa, como "/"
Uma janela de "Erro Inesperado" será exibida

## Workaround

Faça a pesquisa usando o campo "Todos" ou entre aspas duplas ("00.000.000/0000-00") para que o sistema interprete a sequência, ou use campos alternativos para a pesquisa, ou apenas caracteres alfanuméricos ao pesquisar com CPF e CNPF.