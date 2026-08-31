---
title: 'O reembolso dividido foi registrado, mas nunca enviado ao fornecedor (imposto externo).'
slug: o-reembolso-dividido-foi-registrado-mas-nunca-enviado-ao-fornecedor-imposto-externo
status: PUBLISHED
createdAt: 2026-08-31T19:20:00.000Z
updatedAt: 2026-08-31T19:20:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: split-refund-recorded-but-never-sent-to-the-provider-external-tax
locale: pt
kiStatus: Backlog
internalReference: 1454215
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas que utilizam um provedor de impostos externo, o reembolso de um subpedido do vendedor já faturado falha no gateway e nunca chega ao conector. O comprador não recebe o reembolso; a transação pode permanecer em "Liquidação", e um registro de reembolso ainda é gravado com o valor total como uma "notificação por e-mail", enquanto o "totalRefunds" permanece "0" — dando a impressão de que o reembolso ocorreu.

Em vez de reutilizar a divisão de destinatários acordada na autorização, o gateway a reconstrói para o reembolso a partir da soma dos itens do carrinho, o que exclui o imposto fornecido externamente. Como essa soma é menor que o valor a ser reembolsado, as partes são aumentadas — na prática, apenas a do vendedor, já que a parte do marketplace é apenas o restante e diminui na mesma proporção. O valor do vendedor é então reduzido ao valor acordado, o marketplace nunca é recalculado e a diferença não é distribuída.

**Esperado:** o array de destinatários totaliza o valor reembolsado e o reembolso é enviado ao conector.

**Real:** o total é menor e o gateway rejeita sua própria solicitação com `ValidationException: O valor nos destinatários (xx.xx) é diferente do valor da operação (xx.xx)`.

O mesmo subpedido reembolsado por meio de um cancelamento, antes da emissão da fatura, cria um array correto e é despachado normalmente — a fatura não é a causa; ela apenas direciona a operação para o caminho de reembolso, o único caminho que dimensiona as participações.

## Simulação

**Pré-requisitos**

- Conta do Marketplace com `nativeSplitEnabled: True` na transação e um conector usando o Protocolo de Provedor de Pagamento com divisão.
- Campo de transação `postPurchaseOperationMode` = `Total` ou `Retained` (ambos mapeiam para a estratégia afetada). `Partial` usa uma estratégia diferente.

- Loja configurada com um **provedor de impostos externo**, portanto, os itens do carrinho devem ter `"tax": 0` e o imposto aparece apenas nas entradas `priceTags` (por exemplo, `TAXHUB@STATE | ... | Imposto Geral sobre Vendas e Uso`). O item não deve ter a **chave** `totalTax` no campo `cart` da transação.

- Pelo menos um item do vendedor com uma `comissão` diferente de zero.

**Etapas**

1. Em uma loja cujo imposto é proveniente de um fornecedor externo, faça um pedido combinando um item vendido pelo próprio marketplace com um item fornecido por um vendedor terceirizado que possui um contrato de comissão. O item do vendedor deve ter o imposto em etiquetas de preço, e não no preço do item, portanto, o total do subpedido do vendedor será maior que o preço do item mais o frete.
2. Deixe o pedido ser pago e o pagamento ser capturado, para que o subpedido do vendedor se torne elegível para faturamento. A divisão acordada neste ponto é armazenada na transação e é a referência com a qual o reembolso será verificado posteriormente.
3. No gerenciamento de pedidos da conta do vendedor, comece a processar o subpedido do vendedor.
4. Fature o subpedido do vendedor pelo seu valor total — uma fatura de venda, `tipo: Saída`.
5. Aguarde até que o subpedido do vendedor seja exibido como faturado. As etapas 3 e 5 são importantes: a emissão da fatura enquanto o subpedido ainda está "pronto para processamento" anexa o pacote sem dar andamento ao pedido, e a devolução na próxima etapa é recusada com "pedido sem valor faturado".
6. Registre a devolução do subpedido do vendedor pelo mesmo valor — uma fatura de devolução, `type: Input`. Esta é a ação que aciona o reembolso e onde ocorre a falha.

**Esperado:** um reembolso do valor total do subpedido do vendedor é enviado ao conector e `totalRefunds` aumenta.

**Realizado:** `Valor nos destinatários (<A>) é diferente do valor da operação (<B>)` com `<A> < <B>`, `totalRefunds` permanece `0`, e o reembolso é registrado com `type: "email-notification"` e `connectorResponse: null`. A diferença `<B> − <A>` representa a parte que foi retirada do vendedor e nunca devolvida ao mercado.

## Workaround

Não há solução alternativa disponível.