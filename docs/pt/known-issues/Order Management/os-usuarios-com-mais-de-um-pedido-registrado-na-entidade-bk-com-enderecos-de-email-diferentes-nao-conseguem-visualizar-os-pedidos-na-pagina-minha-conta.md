---
title: 'Os usuários com mais de um pedido registrado na entidade BK com endereços de e-mail diferentes não conseguem visualizar os pedidos na página “Minha conta”'
slug: os-usuarios-com-mais-de-um-pedido-registrado-na-entidade-bk-com-enderecos-de-email-diferentes-nao-conseguem-visualizar-os-pedidos-na-pagina-minha-conta
status: PUBLISHED
createdAt: 2024-02-21T22:30:24.000Z
updatedAt: 2024-02-21T22:30:24.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: users-with-more-than-one-order-registered-on-bk-entity-with-different-emails-can-not-see-the-orders-on-my-account-page
locale: pt
kiStatus: Backlog
internalReference: 986324
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Devido à unificação de perfis, alguns usuários podem ter pedidos com endereços de e-mail diferentes, o que representa um problema para exibir os pedidos na página “Minha conta” (Meus pedidos).

A página “Meus pedidos” solicita essas informações na entidade BK do Master Data para eliminar o impacto do atraso na indexação, mas a entidade BK contém o histórico e os pedidos com endereços de e-mail diferentes. Mas o OMS possui a linha de código para verificar se o e-mail retornado está correto, comparando o e-mail do consultor com o e-mail registrado nos pedidos.

## Simulação

Dois pedidos criados com e-mails diferentes, por exemplo, joao@gmail.com e joao2@gmail.com; quando esse usuário tiver o perfil de unificação, apenas um e-mail será válido.
Depois disso, se o usuário joao2@gmail.com fizer login na página “Minha conta”, não será possível ver os pedidos porque há um pedido antigo sem o caractere “2” no e-mail, portanto, a chave principal (e-mail) é diferente.

## Workaround

Não há solução alternativa no momento.