---
title: 'O componente de envio está bloqueado no estado "Aguardando mais informações"'
slug: o-componente-de-envio-esta-bloqueado-no-estado-aguardando-mais-informacoes
status: PUBLISHED
createdAt: 2023-03-29T19:25:51.000Z
updatedAt: 2023-03-29T20:51:25.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-component-locked-in-waiting-for-more-information-state
locale: pt
kiStatus: Backlog
internalReference: 780673
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface de checkout não exibe o componente de envio quando se acessa a página de checkout diretamente por meio de uma etapa específica na URL (exceto para /cart e /shipping); o "shippingData" está incompleto e há um aumento na latência das solicitações da API orderForm. Você verá a mensagem "Aguardando mais informações" e não poderá prosseguir com a compra.

## Simulação

- Adicione um produto ao carrinho;
- Preencha o perfil e deixe as informações de envio em branco;
- Como o aumento da latência é necessário para reproduzir o problema, considere usar uma extensão como o URL Throttler para adicionar um atraso nas solicitações da API orderForm;
- Vá para uma nova guia e acesse o checkout diretamente em uma etapa específica por meio da URL, por exemplo, usando "_www.store.com_/checkout/#/payment";
- Você verá a mensagem “Aguardando mais informações” no componente de envio.

## Workaround

Atualize a página ou acesse o checkout usando especificamente a etapa de envio (_www.store.com_/checkout/#/shipping).