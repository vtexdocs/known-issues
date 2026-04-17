---
title: 'Comportamento incorreto na inserção de crédito de fidelidade parcial na interface de checkout quando a política comercial tem 0 casas decimais'
slug: comportamento-incorreto-na-insercao-de-credito-de-fidelidade-parcial-na-interface-de-checkout-quando-a-politica-comercial-tem-0-casas-decimais
status: PUBLISHED
createdAt: 2026-04-17T21:12:59.035Z
updatedAt: 2026-04-17T21:12:59.035Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: partial-loyalty-credit-input-wrong-behavior-checkout-ui-when-commercial-policy-has-0-decimal-places
locale: pt
kiStatus: Backlog
internalReference: 1394857
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os clientes não conseguem definir um valor parcial de crédito de fidelidade no checkout: o campo de entrada permanece visualmente em 0 e aceita apenas um único dígito, apesar de a API receber o valor digitado. Isso ocorre quando a política comercial da loja está configurada com zero dígitos decimais. A camada de formatação remove a parte decimal e mantém os separadores de milhares, e o analisador de entrada, então, descarta os caracteres que não são dígitos, resultando em um comprimento incorreto do valor em centavos e na dessincronização da interface do usuário. Afeta os compradores que utilizam crédito de fidelidade com políticas definidas para 0 dígitos decimais na interface do usuário do Checkout.

## Simulação

Pré-requisitos:

- Política comercial com dígitos decimais configurados como 0.
- Uso parcial de cartão de fidelidade/vale-presente habilitado na interface de checkout.

Etapas:

1. Faça login na conta innew com o usuário fornecido e abra o orderFormId referenciado.
2. Tente alterar o valor parcial do crédito na entrada de crédito de fidelidade.
3. Observe que a entrada da interface do usuário muda de maneira inesperada, e apenas um dígito parece ser considerado, enquanto as solicitações de rede mostram que a API está recebendo o valor digitado.

## Workaround

Existe uma solução alternativa para este bug? Se sim, descreva-a aqui. Se não, escreva “N/A” ou “Não há solução alternativa disponível”. Não remova esta seção se não houver solução alternativa, por favor.