---
title: 'Ausência de feedback para falhas na alteração de pedidos no Pick and Pack (comunicação com o OMS)'
slug: ausencia-de-feedback-para-falhas-na-alteracao-de-pedidos-no-pick-and-pack-comunicacao-com-o-oms
status: PUBLISHED
createdAt: 2025-11-14T19:35:45.857Z
updatedAt: 2025-11-14T19:35:45.857Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: absence-of-feedback-for-order-change-failures-in-pick-and-pack-communication-with-oms
locale: pt
kiStatus: Backlog
internalReference: 1275957
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



O fluxo de modificação de pedidos no Pick and Pack, integrado ao OMS (Order Management System), tem limitações significativas com relação à comunicação de resultados e erros de volta ao selecionador (selecionador de pedidos).

Independentemente do motivo - seja a rejeição devido a pagamento, restrições de limite ou erros do sistema - o aplicativo Pick and Pack não fornece nenhum tipo de notificação direta ou feedback explícito ao selecionador sobre o resultado da tentativa de alteração. Todo o processamento e a validação dessas alterações ocorrem nos sistemas de back-end e são enviados via API (changeOrderV2), mas o resultado nunca é comunicado ao usuário final.

Consequentemente, o selecionador pode operar com base em informações desatualizadas sobre o pedido, sem saber se sua ação foi realmente aceita, rejeitada ou se alguma ação corretiva é necessária, e o comerciante não saberá que o pedido no OMS não incluiu as alterações feitas durante o processo de picking e embalagem.
## Simulação




1. O selecionador solicita uma modificação no pedido (adicionar, remover ou substituir um item) usando o aplicativo Pick and Pack.
2. A solicitação é enviada ao OMS, que valida se a alteração é possível e, quando necessário, aciona sistemas externos (por exemplo, gateway de pagamento, mecanismo de regras, limites ou disponibilidade de estoque).
3. Se houver algum impedimento (saldo insuficiente, regra comercial, limite de produto/quantidade, erro de sistema), o OMS rejeita a alteração.
4. O aplicativo Pick and Pack continua a exibir a versão do pedido após o processo de Picking and Packing, sem indicar ao selecionador que a alteração foi rejeitada ou não foi aplicada de forma alguma
## Workaround




- A equipe operacional deve implementar o monitoramento ativo do OMS após as tentativas de alteração, identificando os pedidos cuja modificação foi rejeitada.
- Os coletores ou comerciantes devem ser informados manualmente, por meio de rotinas internas ou mensagens, quando as alterações não foram aplicadas, para que a situação real do pedido fique clara, especialmente quando forem necessários estornos.
- Recomenda-se estabelecer listas de verificação para confirmar os pedidos antes de fechar a embalagem, validando no OMS se as alterações pretendidas foram efetivamente aplicadas.



%0A