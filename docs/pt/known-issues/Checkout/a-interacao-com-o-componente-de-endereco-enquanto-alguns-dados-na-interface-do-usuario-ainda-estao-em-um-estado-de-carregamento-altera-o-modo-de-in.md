---
title: 'A interação com o componente de endereço enquanto alguns dados na interface do usuário ainda estão em um estado de carregamento altera o modo de inserção de endereço'
id: 7t3jzIpIppmZDAc9R2BgpS
status: PUBLISHED
createdAt: 2023-09-13T20:39:43.294Z
updatedAt: 2023-09-13T20:39:44.079Z
publishedAt: 2023-09-13T20:39:44.079Z
firstPublishedAt: 2023-09-13T20:39:44.079Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-address-component-while-some-data-on-the-ui-is-still-in-a-loading-state-changes-the-address-insertion-mode
locale: pt
kiStatus: Backlog
internalReference: 423811
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o usuário decide alterar seu endereço enquanto alguns dados respectivos ainda estão sendo carregados na página, o componente de endereço muda de geolocalização para o componente com um menu suspenso. Os dados podem ser, por exemplo, a seleção de uma loja para retirada. Enquanto os dados são carregados na interface, o usuário clica em "alterar endereço" e, com isso, o endereço de retorno fica em outro componente, não no componente de geolocalização.

## Simulação



- Configure uma conta para usar coordenadas geográficas no checkout;
- Procure um endereço na etapa de envio;
- Clique em Change (Alterar) enquanto a página estiver carregando;
- O componente de endereço será alterado e solicitará que você preencha as informações de endereç

## Workaround


N/A




