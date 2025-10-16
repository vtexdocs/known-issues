---
title: B2B Checkout Settings está considerando o endereço de coleta para entregas
slug: b2b-checkout-settings-esta-considerando-o-endereco-de-coleta-para-entregas
status: PUBLISHED
createdAt: 2025-10-16T20:39:27.513Z
updatedAt: 2025-10-16T20:39:27.513Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-checkout-settings-is-considering-pickup-address-for-deliveries
locale: pt
kiStatus: Backlog
internalReference: 1186568
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As configurações do B2B Checkout estão considerando todos os endereços disponíveis para entregas, inclusive os endereços de retirada. Se um endereço de retirada for selecionado, a página Checkout será congelada.

Na API de checkout é possível ver a mensagem "O endereço não pode ser usado para o canal de entrega fornecido".
## Simulação



- Adicione qualquer produto ao carrinho;
- Na etapa de envio, mude para retirada e volte para entrega;
- O endereço de retirada estará no endereço de entrega
## Workaround


Atualize a página.


