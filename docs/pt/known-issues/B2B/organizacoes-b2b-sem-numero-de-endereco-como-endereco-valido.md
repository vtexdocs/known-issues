---
title: 'Organizações B2B sem número de endereço como endereço válido'
slug: organizacoes-b2b-sem-numero-de-endereco-como-endereco-valido
status: PUBLISHED
createdAt: 2025-02-04T19:55:26.000Z
updatedAt: 2026-10-15T17:34:52.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-without-an-address-number-as-a-valid-address
locale: pt
kiStatus: Fixed
internalReference: 1173874
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em organizações B2B, é possível adicionar um endereço sem número, mesmo que o número seja obrigatório para finalizar a compra. Isso impede que o comprador conclua a compra.

Observamos esse comportamento no Chile, mas ele não se limita a esse país.

## Simulação

- Criar uma organização;

- Adicionar um endereço sem número;

- Tentar finalizar uma compra; o sistema não permite prosseguir para a etapa de pagamento.

## Workaround

Adicionar o número ao cadastrar o endereço.