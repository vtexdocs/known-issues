---
title: 'Fazer pedido de um carrinho existente ignora a validação da resposta do serviço de impostos quando o sinalizador isMarketplaceResponsibleForTaxes é verdadeiro em taxConfiguration'
slug: fazer-pedido-de-um-carrinho-existente-ignora-a-validacao-da-resposta-do-servico-de-impostos-quando-o-sinalizador-ismarketplaceresponsiblefortaxes-e-verdadeiro-em-taxconfiguration
status: PUBLISHED
createdAt: 2025-12-02T20:02:12.708Z
updatedAt: 2025-12-02T20:02:12.708Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: place-order-from-exisiting-cart-ignores-tax-service-response-validation-when-ismarketplaceresponsiblefortaxes-flag-is-true-on-taxconfiguration
locale: pt
kiStatus: Backlog
internalReference: 1334135
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Se `isMarketplaceResponsibleForTaxes` for definido como `true` em `taxConfiguration` na configuração do orderForm, a opção Place Order from Existing Cart ignorará a validação da resposta do serviço de impostos. Isso significa que, se a resposta do serviço de impostos for um valor diferente do valor do imposto presente no orderForm, nenhum erro será gerado e o pedido será feito usando o valor do imposto do orderForm.
## Simulação




1. Crie um serviço fiscal de acordo com nossa documentação oficial. Pode ser por meio de um Mocker ou de um aplicativo vinculado ao serviço de impostos

2. Configure os objetos `taxConfiguration` da configuração do OrderForm da seguinte forma, usando o ponto de extremidade Update OrderForm Configuration (Atualizar configuração do OrderForm):

`"taxConfiguration": {
        "url": {YOUR_TAX_SERVICE_URL},
        "authorizationHeader": {YOUR_AUTHORIZATION_CODE},
        "allowExecutionAfterErrors": false,
        "integratedAuthentication": falso,
        "appId": "tax-protocol-example",
        "isMarketplaceResponsibleForTaxes": true
    }`

3. Crie um novo carrinho e siga com o fluxo de checkout via API. Mantenha a resposta do serviço de impostos para o valor do imposto aplicado ao carrinho em um valor fixo (ex.: 500) até imediatamente antes da solicitação Place Order

4. Antes de executar o Place Order, altere a resposta do serviço de impostos para outro valor (ex.: 900)

5. Execute o Place Order usando o depurador do Checkout. Com o depurador, será possível ver que o Tax Service retornará o valor atualizado (900), diferente do valor anterior, mas o pedido será criado com sucesso com o valor anterior do imposto contido no orderForm (500)
## Workaround



Como esse cenário só acontece quando o Marketplace é responsável pelos impostos, o comerciante responsável pelo Marketplace pode alterar o valor do pedido para aplicar o valor correto do imposto depois que ele for criado.



%0A