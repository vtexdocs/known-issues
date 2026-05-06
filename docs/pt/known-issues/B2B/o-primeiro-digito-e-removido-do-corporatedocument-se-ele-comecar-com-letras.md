---
title: 'O primeiro dígito é removido do corporateDocument se ele começar com letras'
slug: o-primeiro-digito-e-removido-do-corporatedocument-se-ele-comecar-com-letras
status: PUBLISHED
createdAt: 2023-10-17T17:26:07.000Z
updatedAt: 2024-03-14T22:01:45.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: first-digit-is-removed-from-corporatedocument-if-starts-with-letters
locale: pt
kiStatus: Fixed
internalReference: 920703
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o documento corporativo de uma organização começa com letras, o primeiro dígito é removido após o acesso ao checkout.

## Simulação

- Registre uma organização cujo documento corporativo comece com letras;
- Adicione itens ao carrinho;
- Vá para o checkout e verifique o formulário de pedido: o primeiro dígito do campo `corporateDocument` será removido.

## Workaround

N/A