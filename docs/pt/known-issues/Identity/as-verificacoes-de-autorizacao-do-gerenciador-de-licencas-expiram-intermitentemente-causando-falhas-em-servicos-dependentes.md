---
title: 'As verificações de autorização do Gerenciador de Licenças expiram intermitentemente, causando falhas em serviços dependentes.'
slug: as-verificacoes-de-autorizacao-do-gerenciador-de-licencas-expiram-intermitentemente-causando-falhas-em-servicos-dependentes
status: PUBLISHED
createdAt: 2026-10-08T19:03:55.000Z
updatedAt: 2026-10-08T19:03:55.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: license-manager-authorization-checks-intermittently-time-out-causing-failures-in-dependent-services
locale: pt
kiStatus: Backlog
internalReference: 1471842
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Uma pequena parcela das solicitações para os endpoints de autorização do Gerenciador de Licenças (LM), como `/logins/{user}/granted` e `/resources/{resourceKey}/granted`, demora mais do que o tempo limite definido pelo serviço que as invoca. A maioria dessas solicitações é respondida em milissegundos, mas algumas levam vários segundos. Quando isso acontece, o serviço que faz a chamada desiste e falha em sua própria solicitação. Ocasionalmente, o LM também retorna erros 503 ou 500.

Como muitos serviços VTEX verificam as permissões com o LM antes de qualquer outra ação, uma resposta lenta ou falha do LM faz com que esses serviços também falhem, mesmo que o usuário ou aplicativo tenha as permissões corretas. Os serviços afetados incluem Gateway de Pagamento, Checkout, SOS, OMS, Master Datas e Administração. Cada um exibe um erro diferente, dependendo de seu próprio tempo limite e tratamento de erros.

O impacto mais significativo hoje é no **Gateway de Pagamento**. Ele verifica o acesso à conta no LM em cada solicitação, com um limite de 2 segundos. Quando o LM não responde a tempo, o gateway retorna o erro HTTP 500 "Uma tarefa foi cancelada" sem executar a operação solicitada. O efeito depende da rota do gateway:

- `StartTransaction`, `SendAdditionalData` e `AuthorizeTransaction`: a transação é interrompida antes de chegar ao adquirente e o pedido pode ser cancelado.

- `GetTransaction`, quando o Checkout a chama após a aprovação do pagamento: o pedido pode ser cancelado mesmo que o pagamento tenha sido aprovado. Com conectores que usam reembolsos manuais, o comprador permanece cobrado até que a loja o reembolse.

- Rotas de leitura (pagamentos, liquidações, reembolsos): geralmente são bem-sucedidas quando repetidas.

O problema é intermitente, ocorre diariamente e se espalha por várias contas sem um padrão específico. Repetir a mesma solicitação geralmente resolve o problema.

## Simulação

Este problema não pode ser reproduzido sob demanda. É intermitente e ocorre principalmente quando o serviço que faz a chamada precisa de um novo resultado de autorização do Gerenciador de Licenças. Por exemplo, o Gateway de Pagamento reutiliza um resultado por 5 minutos e, em seguida, solicita novamente ao Gerenciador de Licenças. As falhas aparecem nos logs do serviço que chamou o Gerenciador de Licenças, e não nos logs do próprio Gerenciador de Licenças.

- **Gateway de Pagamento:** HTTP 500 "Uma tarefa foi cancelada" após cerca de 2.000 ms, registrado como `CancelingRequestProcessing` / `GatewayRequestTimeoutException`.

- Se a falha ocorrer durante a criação ou autorização da transação, o adquirente não terá registro da solicitação.

- Se a falha ocorrer em `GetTransaction` durante o retorno de chamada do Checkout, o pedido será cancelado mesmo que o pagamento tenha sido aprovado.

- **Outros serviços que chamam o Gerenciador de Licenças:** nos logs da malha (`vlm`), as solicitações terminam com o status `0` (o chamador desistiu) ou `503`, aproximadamente no tempo limite do próprio chamador.
- **Gerenciador de Licenças:** em alguns dias, erros `BrokenCircuitException` são retornados como 500. Esses erros são provenientes das consultas de usuário do Gerenciador de Licenças no ID VTEX.

## Workaround

Não há solução alternativa no lado da loja.

- Tentar novamente a solicitação com falha geralmente funciona.

- Pedidos cancelados após um pagamento aprovado devem ser reembolsados ​​por meio do fluxo do conector.