---
title: 'Meli Integração do SKU com o erro “Referência de objeto não definida para uma instância de um objeto”.'
slug: meli-integracao-do-sku-com-o-erro-referencia-de-objeto-nao-definida-para-uma-instancia-de-um-objeto
status: PUBLISHED
createdAt: 2022-09-13T19:44:30.000Z
updatedAt: 2022-12-07T11:59:10.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-sku-integration-with-object-reference-not-set-to-an-instance-of-an-object-error
locale: pt
kiStatus: Fixed
internalReference: 657515
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas SKUs no Mercado Livre estão apresentando o erro: "Referência de objeto não definida para uma instância de objeto".

## Simulação

![](https://vtexhelp.zendesk.com/attachments/token/ZGOJZmpO93pL3HqOVp0dDmzKh/?name=image.png)

_**Validações e testes:**_
- O SKU não está registrado no Meli;
- Simulação FFT com depurador;
- Simulação CHK;
- Reindexei o SKU;
- Pesquisei no log por “Referência de objeto não definida para uma instância de objeto”

## Workaround

n/a