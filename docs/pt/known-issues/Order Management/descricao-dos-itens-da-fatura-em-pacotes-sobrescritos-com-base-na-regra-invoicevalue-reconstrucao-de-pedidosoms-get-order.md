---
title: 'Descrição dos itens da fatura em pacotes sobrescritos com base na regra invoiceValue (reconstrução de pedidos/OMS GET Order)'
slug: descricao-dos-itens-da-fatura-em-pacotes-sobrescritos-com-base-na-regra-invoicevalue-reconstrucao-de-pedidosoms-get-order
status: PUBLISHED
createdAt: 2025-11-25T12:52:47.212Z
updatedAt: 2025-11-25T12:52:47.212Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: invoice-items-description-in-packages-overwritten-based-on-invoicevalue-rule-ordersoms-get-order-reconstruction
locale: pt
kiStatus: Backlog
internalReference: 1330069
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao enviar uma fatura por meio da API de notificação de faturas de pedidos com itens personalizados[].description, a descrição mostrada posteriormente em GET Order (packages.items[].description) pode ser substituída pelo nome do produto. O sintoma visível é que alguns pedidos exibem o nome do produto em vez da descrição personalizada fornecida na carga da fatura. Isso afeta os consumidores de OMS/Orders que dependem das descrições de packages.items para reconciliação logística, fiscal ou de ERP, especialmente quando o invoiceValue é igual ou maior que o valor total do pedido. O departamento de engenharia confirmou que esse é um comportamento de longa data vinculado à reconstrução do pedido GET, e não uma interrupção transitória.
## Simulação



- Pré-requisitos:
  - Um pedido pronto para receber uma fatura.
  - Capacidade de fazer o POST da fatura para a API de notificação de faturas de pedidos e, posteriormente, obter o pedido da API do OMS.
-

Etapas:

1) Enviar um POST de fatura com itens e uma descrição personalizada por item (por exemplo, items[].description = "1010").



2) Caso A: Defina invoiceValue maior ou igual ao valor total do pedido. Depois que a fatura for processada, chame GET /api/oms/pvt/orders/{orderId}. Observe que packages.items[].description é reconstruído como o nome do item (substitui a descrição personalizada).



3) Caso B: Definir invoiceValue menor que o valor total do pedido. Após o processamento, chame GET /api/oms/pvt/orders/{orderId}. Observe que os itens originais da fatura enviada são preservados, inclusive a descrição personalizada que você enviou.



4) Se você omitir totalmente a descrição nos itens da fatura, o GET Order mostrará packages.items[].description preenchido automaticamente com o nome do produto.



- Observações:
  - A engenharia destacou que essa reconstrução ocorre em cada GET Order e é apoiada por testes existentes que validam o comportamento replace-when-invoiceValue>=order.Value
## Workaround


N/A



%0A