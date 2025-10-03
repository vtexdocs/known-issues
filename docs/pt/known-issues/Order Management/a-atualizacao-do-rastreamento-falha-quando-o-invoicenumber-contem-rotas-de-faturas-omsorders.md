---
title: A atualização do rastreamento falha quando o invoiceNumber contém "/" (rotas de faturas OMS/Orders)
slug: a-atualizacao-do-rastreamento-falha-quando-o-invoicenumber-contem-rotas-de-faturas-omsorders
status: PUBLISHED
createdAt: 2025-10-03T14:04:51.487Z
updatedAt: 2025-10-03T14:04:51.487Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: tracking-update-fails-when-invoicenumber-contains-omsorders-invoice-routes
locale: pt
kiStatus: Backlog
internalReference: 1302085
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando uma fatura é criada com um caractere de barra no invoiceNumber (por exemplo, 6584634/09), as chamadas de API subsequentes para adicionar ou atualizar o rastreamento falham.
O sintoma visível são erros HTTP 404/400 nos pontos de extremidade de rastreamento de faturas porque "/" no caminho é interpretado como um separador de URL.
As contas que usam integrações para atualizar o rastreamento via OMS são afetadas; as rotas de pedidos suportam parcialmente a codificação, mas o comportamento é inconsistente. Isso é semelhante a um KI-953285 anterior, sobre a propagação do invoiceNumber, mas agora a replicação funciona e a falha está especificamente nas atualizações de rastreamento com caracteres especiais.
## Simulação


(Como reproduzir) - Pré-requisitos: - Pedido com uma fatura cujo invoiceNumber contém "/" (por exemplo, criado via Admin UI: 123456/71).

- Etapas:
  - Tentativa de atualizar o rastreamento via OMS:
    - PATCH /api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}/tracking usando o valor bruto com barra, por exemplo, .../invoice/123456/789 → retorna NOT FOUND devido à análise de rota em "/".
  - Tentativa de codificar a barra por URL e atualizar via OMS:
    - PATCH .../invoice/123456%2F71/tracking → ainda falha; o OMS parece decodificar automaticamente e interrompe o caminho, retornando 404/400
## Workaround


Prefira a interface de usuário do administrador para edições de rastreamento em faturas com "/": - Insira ou atualize as informações de rastreamento diretamente na interface de usuário do pedido do administrador, que codifica o valor internamente.

-

Se estiver usando a API, evite caracteres especiais no invoiceNumber:

  - Até que um comportamento consistente de API esteja disponível, instrua os integradores a não incluir "/" ou outros caracteres especiais no invoiceNumber quando as faturas forem atualizadas por meio de rotas de API (OMS/Orders).






