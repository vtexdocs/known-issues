---
title: 'A permissão "Acesso total ao estoque de logística" não funcionou como esperado'
slug: a-permissao-acesso-total-ao-estoque-de-logistica-nao-funcionou-como-esperado
status: PUBLISHED
createdAt: 2026-04-28T14:15:12.116Z
updatedAt: 2026-04-28T14:15:12.116Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: logistics-inventory-full-access-permission-did-not-work-as-expected
locale: pt
kiStatus: Fixed
internalReference: 482353
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, entre as permissões de Logística, existe uma chamada “Acesso total ao estoque de Logística”, que, em teoria, deveria permitir o gerenciamento do estoque de forma totalmente independente; ou seja, o usuário poderia manipular apenas os dados de estoque, sem acesso a nada mais dentro do módulo de logística.

O problema, neste momento, é que essa permissão não está funcionando como esperado; ou seja, é necessária a permissão geral de logística para poder gerenciar o estoque. O risco, neste caso, é que o usuário possa realizar ações em outros módulos dentro da logística, como políticas de envio, geolocalização, etc.

## Simulação

1. Você pode adicionar a permissão "**Acesso total ao estoque de logística**" a um usuário e tentar editar algumas informações no administrador de estoque. Você verá que não será possível fazer nenhuma alteração nem simplesmente visualizar a lista de estoque.
2. Permissão do Gerenciador de Licenças:
  - ![](https://vtexhelp.zendesk.com/attachments/token/wBGPB2maBntieEZdAxOEYNYkT/?name=inline-5358520.png)
3. Usuário com apenas essa permissão
  - ![](https://vtexhelp.zendesk.com/attachments/token/V5aBNZngEUfMQH8czLiQm7e88/?name=inline-1080298236.png)​

## Workaround

No momento, a única solução alternativa é configurar a permissão “Acesso total à logística”, levando em conta que o usuário poderá realizar ações nas outras funcionalidades do módulo de logística, como políticas de envio, geolocalização, etc.