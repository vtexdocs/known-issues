---
title: 'As configurações avançadas da loja estão sendo registradas globalmente, em vez de por meio de vinculação'
slug: as-configuracoes-avancadas-da-loja-estao-sendo-registradas-globalmente-em-vez-de-por-meio-de-vinculacao
status: PUBLISHED
createdAt: 2023-04-04T03:15:41.000Z
updatedAt: 2023-04-04T03:15:41.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: advanced-store-settings-being-registered-globally-insted-of-by-binding
locale: pt
kiStatus: Backlog
internalReference: 783835
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao salvar as configurações avançadas separadas por ligação, o sistema as registra para todas elas; no entanto, ao solicitar esses valores durante a renderização, obtemos os valores da ligação e não do contexto global:

https://github.com/vtex-apps/store/blob/46e3df3ecba20170fc3a6eebf12370969e3b5abf/react/components/ProductTitleAndPixel.tsx#L186

## Simulação

Você precisará de uma loja com múltiplas ligações e ativar a ligação para as configurações da loja em admin/cms/store:

 ![](https://vtexhelp.zendesk.com/attachments/token/CNgIedTpUI7LPWqCEfA10HIxz/?name=image.png)

Salve suas configurações avançadas e verifique as configurações da sua loja Vtex:

https://infra.io.vtex.com/apps/v0///apps/vtex.store/settings

Você notará que as configurações avançadas estarão fora dos contextos de ligação

## Workaround

Adicione as configurações desejadas por meio de um PUT na chave settings dentro de um dos objetos de binding:

 ![](https://vtexhelp.zendesk.com/attachments/token/JYKSnxOk9qHdm8RGGp9IutNB3/?name=image.png)