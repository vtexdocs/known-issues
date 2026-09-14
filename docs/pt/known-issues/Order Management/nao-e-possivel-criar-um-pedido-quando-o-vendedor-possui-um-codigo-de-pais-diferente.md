---
title: 'Não é possível criar um pedido quando o vendedor possui um código de país diferente.'
slug: nao-e-possivel-criar-um-pedido-quando-o-vendedor-possui-um-codigo-de-pais-diferente
status: PUBLISHED
createdAt: 2023-03-03T16:02:05.000Z
updatedAt: 2026-09-14T22:50:19.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-cannot-be-created-when-seller-has-a-different-country-code
locale: pt
kiStatus: Backlog
internalReference: 763955
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um marketplace, quando um vendedor está configurado com um código de país diferente, o serviço de logística considerará o código de país do vendedor ao processar o pedido. Isso pode gerar um erro se o código de país do vendedor definir campos obrigatórios diferentes dos definidos pelo marketplace.

## Simulação

- Um vendedor com um código de país diferente;

- Adicione itens do vendedor ao carrinho;

- Finalize a compra; você receberá uma mensagem de erro e o pedido não será processado.

## Workaround

Configure o mesmo código de país para o vendedor.