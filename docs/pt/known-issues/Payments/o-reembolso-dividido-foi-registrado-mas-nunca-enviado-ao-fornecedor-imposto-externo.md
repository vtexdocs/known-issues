---
title: 'O reembolso dividido foi registrado, mas nunca enviado ao fornecedor (imposto externo).'
slug: o-reembolso-dividido-foi-registrado-mas-nunca-enviado-ao-fornecedor-imposto-externo
status: PUBLISHED
createdAt: 2026-08-31T19:20:00.000Z
updatedAt: 2026-09-15T00:50:19.000Z
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

Em lojas que utilizam um provedor de impostos externo, o reembolso de um subpedido do vendedor já faturado falha no gateway. Nada chega ao provedor de pagamento e o comprador não recebe o reembolso — mas um reembolso do valor total ainda é registrado como uma notificação por e-mail, com o total reembolsado zerado, dando a impressão de que funcionou. A transação pode permanecer em "Liquidação".

Causa: o gateway recalcula como dividir o reembolso entre o marketplace e o vendedor, e esse recálculo não considera o imposto externo. Ele credita o vendedor em excesso e, em seguida, corrige o vendedor, mas não o marketplace, de modo que as parcelas não somam mais o valor a ser reembolsado e o gateway rejeita sua própria solicitação: "O valor nos destinatários (xx.xx) é diferente do valor da operação (xx.xx)".

Cancelar o pedido antes da emissão da fatura resulta em reembolsos normais.

## Simulação

### Como reconhecer

- Um reembolso em um pedido dividido nunca chegou ao comprador e o conector indica que nenhuma solicitação foi recebida. - A transação mostra um reembolso do valor total como uma **notificação por e-mail**, mas o total reembolsado continua zerado.

- O imposto da loja é cobrado por um provedor externo, e o valor faltante é próximo ao imposto do subpedido.

###

### Etapas
Requer uma conta de marketplace com divisão habilitada, uma loja com um provedor de impostos externo e um item de vendedor terceirizado com comissão.

1. Faça um pedido combinando um item do marketplace e um item de um vendedor terceirizado com comissão.
2. Deixe o pagamento ser efetuado e registrado.
3. Na conta do vendedor, inicie o processamento do subpedido do vendedor.
4. Emita uma fatura pelo valor total — uma nota fiscal de venda.
5. Aguarde até que a fatura seja exibida como emitida. A emissão da fatura antes do início do processamento resulta na recusa da devolução com a mensagem "pedido sem valor faturado".

6. Registre a devolução pelo mesmo valor — uma nota fiscal de devolução. O reembolso falha neste caso.

**Resultado:** o reembolso é rejeitado, o valor reembolsado permanece zerado e apenas uma notificação por e-mail é registrada.

## Workaround

Não há solução alternativa disponível.