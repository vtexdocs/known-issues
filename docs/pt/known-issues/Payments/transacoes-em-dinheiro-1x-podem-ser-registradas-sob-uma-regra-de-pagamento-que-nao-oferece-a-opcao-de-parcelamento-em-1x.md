---
title: 'Transações em dinheiro (1x) podem ser registradas sob uma regra de pagamento que não oferece a opção de parcelamento em 1x.'
slug: transacoes-em-dinheiro-1x-podem-ser-registradas-sob-uma-regra-de-pagamento-que-nao-oferece-a-opcao-de-parcelamento-em-1x
status: PUBLISHED
createdAt: 2020-10-02T02:09:14.000Z
updatedAt: 2026-08-05T14:54:44.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cash-1x-transactions-may-be-recorded-under-a-payment-rule-that-does-not-offer-the-1x-installment-option
locale: pt
kiStatus: Backlog
internalReference: 292781
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um cliente paga em dinheiro (1 parcela, sem juros) e mais de uma regra de pagamento corresponde aos filtros de canal/emissor/co-brand/nível do cartão, o Gateway de Pagamentos pode registrar a transação em uma regra que não oferece a opção de parcelamento em 1x, em vez da regra genérica que oferece.

Esperado: o nome da regra (`ruleName`) registrado no pagamento deve ser uma regra cujo intervalo configurado realmente inclua o parcelamento em 1x.

Real: em uma compra com parcelamento em 1x, o seletor de regras adiciona _todas_ as regras que atendem aos filtros à lista de candidatas, independentemente de seu intervalo de parcelamento incluir ou não o parcelamento em 1x; a subsequente classificação por prioridade do emissor favorece a regra específica do emissor em detrimento da genérica, portanto, seu nome — e não a regra realmente usada para calcular as parcelas/juros — é o que é persistido. Na maioria dos casos observados, trata-se apenas de um **defeito de rotulagem**: as parcelas, a taxa de juros e o valor cobrado estão corretos e, quando as regras candidatas são direcionadas para a mesma afiliação/conector, não há impacto no roteamento ou nas finanças.

## Simulação

**Pré-requisitos:** duas regras de pagamento ativas para o mesmo canal e bandeira de cartão, ambas válidas para cartão de crédito:

- Regra A ("genérica"): qualquer emissor, parcelas de 1 a 12, sem juros
- Regra B ("específica do emissor"): emissor/banco específico, parcelas de 13 a 21, com juros

1. Faça um pedido e pague com um cartão de crédito configurado na Regra B.
2. Na finalização da compra, selecione 1 parcela (à vista / sem juros).
3. Conclua a compra (o pagamento deve atingir o status "aprovado").
4. No painel de administração, abra os detalhes do pagamento da transação ("+ Informações") e verifique o campo "Regras Disponíveis" — os IDs das Regras A e B serão listados como candidatos, mesmo que o intervalo configurado da Regra B (13–21) não inclua 1x.
5. Verifique o "Nome da Regra" no pagamento — ele mostrará a Regra B (a específica do emissor), não a Regra A.

**Etapa de verificação:** confirme se "parcelas = 1", "TaxaDeJurosDaParcela = 0" e "ValorDaParcela" são iguais ao valor total do pedido.
Isso comprova que a Regra A foi a realmente aplicada para fins de cobrança, enquanto o `ruleName` registrado está incorreto — diferenciando esse defeito de um erro real de roteamento, onde os termos cobrados também estariam incorretos.

## Workaround

- **Imediata/operacional:** configure a regra compatível com 1x (Regra A) como a **regra padrão** para a afiliação. Isso reduz — mas não elimina — a chance de uma regra específica do emissor, sem suporte a 1x, ser registrada quando houver empate entre as regras candidatas.

- **Correção estrutural (por loja, já implementada):** entre em contato com a equipe de produto de Pagamentos e solicite que a conta seja habilitada para a correção estrutural existente. Um caminho de seleção de regras corrigido já está disponível e pode ser ativado por loja pela equipe de produto.