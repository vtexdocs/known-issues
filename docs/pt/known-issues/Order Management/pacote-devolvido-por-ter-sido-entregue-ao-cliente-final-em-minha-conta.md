---
title: 'Pacote devolvido por ter sido entregue ao cliente final em minha conta.'
slug: pacote-devolvido-por-ter-sido-entregue-ao-cliente-final-em-minha-conta
status: PUBLISHED
createdAt: 2021-08-18T22:25:39.000Z
updatedAt: 2026-09-14T22:56:04.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: returned-package-as-delivering-to-final-customer-on-my-account
locale: pt
kiStatus: Fixed
internalReference: 415482
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Há um cenário em que o pacote devolvido aparece como entregue na página **Minha Conta > Meus Pedidos**. Parece que mais de um pacote será entregue ao cliente, em vez de mostrar que o pacote já foi entregue e que um novo pacote foi gerado representando a devolução.

Isso pode causar confusão para o cliente final, pois parece que ele recebeu mais produtos e não é exibido como totalmente entregue no fluxo de **Meus Pedidos**.

## Simulação

- Faça um pedido com um produto/pacote.

- Conclua o fluxo do pedido e marque como entregue.

- Tente devolver esse item.

- Será gerado um novo pacote representando a devolução do produto.

- Portanto, na página Meus Pedidos, o pacote devolvido aparece como mais um.

- O cliente e o administrador da loja podem ficar confusos com o status do pedido e os detalhes do fluxo.

## Workaround

Não há solução alternativa disponível.