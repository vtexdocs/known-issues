---
title: 'Interagir com o componente de endereço enquanto alguns dados na interface do usuário ainda estão em carregamento altera o modo de inserção do endereço'
slug: interagir-com-o-componente-de-endereco-enquanto-alguns-dados-na-interface-do-usuario-ainda-estao-em-carregamento-altera-o-modo-de-insercao-do-endereco
status: PUBLISHED
createdAt: 2021-09-01T20:36:31.000Z
updatedAt: 2023-09-13T20:39:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-address-component-while-some-data-on-the-ui-is-still-in-a-loading-state-changes-the-address-insertion-mode
locale: pt
kiStatus: Backlog
internalReference: 423811
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o usuário opta por alterar seu endereço enquanto alguns dados ainda estão sendo carregados na página, o componente de endereço muda da geolocalização para o componente com um menu suspenso. Os dados podem ser, por exemplo, a seleção de uma loja para retirada. Enquanto os dados são carregados na interface, o usuário clica em “alterar endereço”; com isso, o endereço de retorno fica em outro componente, e não no componente de geolocalização.

## Simulação

- Configure uma conta para usar coordenadas geográficas no checkout;
- Pesquise um endereço na etapa de envio;
- Clique em “Alterar” enquanto a página estiver carregando;
- O componente de endereço mudará e solicitará que você preencha as informações de endereço

## Workaround

N/A