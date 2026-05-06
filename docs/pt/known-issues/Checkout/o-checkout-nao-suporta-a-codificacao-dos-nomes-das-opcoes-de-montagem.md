---
title: 'O Checkout não suporta a codificação dos nomes das opções de montagem'
slug: o-checkout-nao-suporta-a-codificacao-dos-nomes-das-opcoes-de-montagem
status: PUBLISHED
createdAt: 2021-06-08T15:26:16.000Z
updatedAt: 2024-05-06T19:01:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-does-not-support-encoding-assembly-options-names
locale: pt
kiStatus: Backlog
internalReference: 378842
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os nomes das opções de montagem são utilizados na rota da API. Portanto, é necessário oferecer suporte à codificação desses nomes para evitar problemas na URL com caracteres especiais, como "/". Ao adicionar uma opção de montagem com "/" ao carrinho, ela simplesmente não é adicionada e o usuário também não é notificado.

## Simulação

- Adicione um "/" ao nome da opção de montagem;
- Tente adicionar um produto com a opção de montagem;
- O item será adicionado ao carrinho sem a opção de montagem.

## Workaround

Remova o "/" do nome da opção de montagem.