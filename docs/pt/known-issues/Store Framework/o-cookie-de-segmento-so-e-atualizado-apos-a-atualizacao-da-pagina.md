---
title: 'O cookie de segmento só é atualizado após a atualização da página'
slug: o-cookie-de-segmento-so-e-atualizado-apos-a-atualizacao-da-pagina
status: PUBLISHED
createdAt: 2022-08-29T13:22:23.000Z
updatedAt: 2024-01-10T17:17:57.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: segment-cookie-updated-only-after-refreshing-the-page
locale: pt
kiStatus: Backlog
internalReference: 647116
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns recursos e componentes do VTEX podem utilizar dados solicitados ao Cookie de Segmento para apresentar informações (como preço, dados de promoções, disponibilidade de SKUs, etc.) na loja virtual. Esse cookie é armazenado no navegador do usuário quando a sessão é criada. Às vezes, principalmente em cenários dinâmicos em que é necessário fazer alterações na interface, o que aciona uma atualização do Cookie Segment, o próprio cookie perde alguns dados — um comportamento do render-runtime que não aciona a alteração do segmento no contexto.

Como recuperar informações da sessão:
https://developers.vtex.com/vtex-rest-api/reference/getsession

Você pode obter os dados do cookie de segmento por meio do token de segmento:

- Abra o console do navegador;
- Decodifique o token de segmento apresentado no objeto render-runtime;
- No console, execute: `atob(__RUNTIME__.segmentToken)`
 ![](https://vtexhelp.zendesk.com/attachments/token/wHuslnrutSh5W2CZS4FlHBm0d/?name=Captura+de+Tela+2022-09-23+a%CC%80s+14.09.57.png)

## Simulação

- Selecione uma loja que apresente informações com base nos dados de um cookie de segmento:
- Ex.: Preços diferentes são exibidos com base na identificação do cliente — relacionada às tabelas de preços;
- Obtenha os dados do cookie de segmento em diferentes cenários usando o aplicativo que recupera a identificação do usuário;

## Workaround

Atualize a página