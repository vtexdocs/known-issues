---
title: 'As tabelas de preços não são aplicadas devido à perda do cookie da sessão'
slug: as-tabelas-de-precos-nao-sao-aplicadas-devido-a-perda-do-cookie-da-sessao
status: PUBLISHED
createdAt: 2025-12-03T22:20:04.482Z
updatedAt: 2025-12-03T22:20:04.482Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: price-tables-are-not-applied-due-to-session-cookie-loss
locale: pt
kiStatus: Backlog
internalReference: 1335123
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Quando o cookie `vtex_session` é removido da navegação por qualquer motivo e depois recriado, a interface do usuário nativa do Checkout pode iniciar solicitações de atualização do formulário de pedido (como `/paymentData`) antes da resposta de `/api/sessions`, que é a rota que realiza a renovação da sessão.

Isso faz com que as solicitações de atualização do orderForm sejam enviadas sem o cookie da sessão, o que, por sua vez, faz com que os preços base sejam retornados no orderForm mesmo depois que o cookie `vtex_session` tenha sido renovado com os valores corretos de `priceTables`.
## Simulação



O comportamento é intermitente, mas pode ser verificado com bastante frequência ao seguir essas etapas:

1) Autentique-se com um usuário que esteja qualificado para tabelas de preços específicas; vá para `/checkout/#/cart` e observe que o preço correto está sendo exibido

2) Exclua o cookie `vtex_session` da navegação

3) Faça qualquer atualização do carrinho e observe o preço caindo de volta para o preço base, como esperado, já que não há cookie de sessão

4) Atualize; o cookie `vtex_session` é recriado com as informações corretas do `priceTables`, mas os `preços` podem permanecer incorretos no formulário de pedido, mesmo após a execução de uma solicitação de atualização do formulário de pedido (como `/api/checkout/pub/orderForm/{orderFormId}/attachments/paymentData`)
## Workaround



Qualquer solicitação adicional de atualização do OrderForm (como `/paymentData`, `/shippingData`, `/clientProfileData` etc.) que seja feita após a criação do novo cookie usará o novo cookie da sessão, retornando assim o `price` correto para o contexto da sessão.


