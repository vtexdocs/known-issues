---
title: 'O campo de pesquisa não retorna nenhum resultado na simulação logística.'
slug: o-campo-de-pesquisa-nao-retorna-nenhum-resultado-na-simulacao-logistica
status: PUBLISHED
createdAt: 2022-11-14T18:06:22.000Z
updatedAt: 2026-08-18T16:36:08.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: search-item-field-does-not-return-anything-in-logistics-simulation
locale: pt
kiStatus: Backlog
internalReference: 697628
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário insere o nome de um item no campo de

## Simulação

para realizar uma simulação, o sistema de logística utiliza uma rota do catálogo para escaneá-lo e exibir os itens que contêm o nome pesquisado. Essa consulta pode levar mais tempo do que o limite de tempo de espera da logística e, portanto, não retornará nenhum resultado. Esse atraso pode ocorrer devido à estrutura do catálogo da loja e ao tempo de espera da API de logística.

## **Simulação**

Acesse o painel de administração.

Acesse o Simulador de Envio.

No campo "Selecionar produto", digite o nome de um item existente no catálogo da conta.

Observe que o campo "Selecionar produto" será carregado.

No console, você verá um erro 500 (Solicitação Inválida) na rota de consulta `textToSearch`.

## Workaround

Realize a pesquisa diretamente usando o SKU ou o ID do produto.