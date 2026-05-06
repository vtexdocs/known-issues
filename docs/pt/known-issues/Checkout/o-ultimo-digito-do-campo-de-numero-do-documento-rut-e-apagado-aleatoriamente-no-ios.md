---
title: 'O último dígito do campo de número do documento (RUT) é apagado aleatoriamente no iOS'
slug: o-ultimo-digito-do-campo-de-numero-do-documento-rut-e-apagado-aleatoriamente-no-ios
status: PUBLISHED
createdAt: 2023-10-18T22:53:12.000Z
updatedAt: 2023-10-19T13:02:00.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: document-number-field-rut-randomly-getting-last-digit-deleted-on-ios
locale: pt
kiStatus: Backlog
internalReference: 921944
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Apenas no Safari/iOS, ao preencher o número do documento e passar para os campos de dados do cliente, o último dígito do campo do número do documento (RUT) é apagado.

## Simulação

- Insira um número de documento válido no campo RUT;
- Vá para o campo seguinte (telefone);
- Volte ao campo do documento, apague e digite o mesmo número;
- Altere a entrada novamente, e o último dígito do campo RUT será apagado.

## Workaround

N/A