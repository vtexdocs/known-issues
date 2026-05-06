---
title: 'As notificações de inventário enviadas ao indexador são armazenadas em cache'
slug: as-notificacoes-de-inventario-enviadas-ao-indexador-sao-armazenadas-em-cache
status: PUBLISHED
createdAt: 2023-10-05T12:47:51.000Z
updatedAt: 2024-05-14T11:26:20.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inventory-notifications-to-indexer-are-cached
locale: pt
kiStatus: Fixed
internalReference: 914545
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma conta de franquia ou um vendedor notifica a conta principal (ou o marketplace) sobre alterações no estoque, a conta envia o produto ao indexador para que as informações fiquem atualizadas.

O sistema responsável por receber as notificações e repassá-las ao indexador é o Broadcaster.

O problema é que o fluxo de trabalho Disponibilidade -> Broadcaster -> Indexador funciona em um ritmo muito rápido e, em alguns casos, as informações ainda estão armazenadas em cache. Dessa forma, o Indexador permanece com as informações antigas até uma nova indexação.

## Simulação

Não há uma maneira fácil de simular esse cenário, já que ele não ocorre em todas as ocasiões.
O processo deve ser:

1. A conta da franquia atualiza um estoque;
2. O Broadcaster envia o produto para o Indexer;
3. O Indexer atualiza o SKU da conta principal com as informações antigas.

## Workaround

N/A