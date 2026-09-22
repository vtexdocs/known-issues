---
title: 'O Buscacep não está funcionando no formulário de criação da Lista de Presentes.'
slug: o-buscacep-nao-esta-funcionando-no-formulario-de-criacao-da-lista-de-presentes
status: PUBLISHED
createdAt: 2021-03-09T21:38:37.000Z
updatedAt: 2026-09-22T20:35:03.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: buscacep-not-working-in-create-giftlist-form
locale: pt
kiStatus: Fixed
internalReference: 342418
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o link "`Não sei meu cep`" na página `/_secure/giftlist/create` para listas do tipo "Ao dono da lista" está redirecionando o usuário para a própria página:

## Simulação

1) Acesse https://.myvtex.com/_secure/giftlist/create

2) Clique no link com o id="dont-know-postal-code":

É possível ver claramente que o atributo `target` está definido como `_blank`, quando deveria direcionar para um hiperlink válido.

## Workaround

Utilizando diretamente o localizador CEP dos Correios: http://www.buscacep.correios.com.br/sistemas/buscacep/default.cfm