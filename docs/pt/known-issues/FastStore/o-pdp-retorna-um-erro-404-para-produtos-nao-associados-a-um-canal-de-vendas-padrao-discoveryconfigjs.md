---
title: 'O PDP retorna um erro 404 para produtos não associados a um canal de vendas padrão (discovery.config.js)'
slug: o-pdp-retorna-um-erro-404-para-produtos-nao-associados-a-um-canal-de-vendas-padrao-discoveryconfigjs
status: PUBLISHED
createdAt: 2026-04-22T20:23:42.767Z
updatedAt: 2026-04-22T20:23:42.767Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: pdp-returns-a-404-error-for-products-not-associated-with-a-default-sales-channel-discoveryconfigjs
locale: pt
kiStatus: Backlog
internalReference: 1396347
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As lojas FastStore têm um salesChannel configurado no `discovery.config.js` como política de vendas padrão; portanto, a Pesquisa Inteligente utiliza essa política de vendas para gerar PLPs e PDPs, ignorando os parâmetros de consulta no momento da renderização. Assim, as PDPs de produtos que existem **apenas em uma política comercial secundária** (por exemplo, um produto exclusivo para membros) retornam um erro 404, mesmo quando:

- o usuário estiver conectado e pertencer ao cluster correspondente (por exemplo, “membros”)
- o produto aparecer na PLP quando você adicionar `?sc={{id}}` à URL

Atualmente, o produto deve estar disponível no canal de vendas configurado em `discovery.config.js` para que a rota PDP exista. Atualmente, `discovery.config.js` permite a configuração de uma única política de vendas.

## Simulação

1. Configure um projeto FastStore com uma política comercial/canal de vendas padrão fixo (por exemplo, SC 1) em `discovery.config.js`, usando a Pesquisa Inteligente como mecanismo de busca.
2. Registre um ou mais produtos listados apenas em uma política comercial secundária (por exemplo, SC 3), vinculados a um cluster de clientes específico (membros, VIP, acesso antecipado, etc.).
3. Verifique, por meio de uma simulação de checkout, se o SKU é entregue **apenas sob a política secundária** e não está disponível sob a política padrão.
4. Na loja, acesse uma página de listagem de produtos (PLP) que force a política secundária por meio de `?sc=` na URL e verifique se o produto aparece normalmente nos resultados.
5. Faça login com um usuário pertencente ao cluster de clientes associado a essa política (por exemplo, com o sinalizador “member” definido como true).
6. Sem forçar `?sc={{id}}` na URL, observe que a sessão continua a usar a política de negócios padrão definida em `discovery.config.js` por meio do evento `ValidateSession` na guia Rede do DevTools, e que o produto exclusivo da política secundária não aparece na PLP/nos resultados de pesquisa.
7. Tente acessar a página de detalhes deste produto (por meio do link ou digitando a URL amigável).

A PDP retorna um erro 404, mesmo que o produto esteja disponível no estoque secundário e o usuário tenha sido direcionado corretamente.

## Workaround

N/A



%0A