---
title: 'A interface do checkout avança para a página de pagamento com um endereço de faturamento incompleto para compradores com perfil completo'
slug: a-interface-do-checkout-avanca-para-a-pagina-de-pagamento-com-um-endereco-de-faturamento-incompleto-para-compradores-com-perfil-completo
status: PUBLISHED
createdAt: 2023-11-16T17:45:44.000Z
updatedAt: 2023-12-12T15:46:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-goes-to-payment-with-an-incomplete-invoice-address-for-shoppers-with-complete-profile
locale: pt
kiStatus: Fixed
internalReference: 937615
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um cliente possui um perfil completo e a loja está configurada para usar um endereço de faturamento para retirada, a interface do usuário avançará para a etapa de pagamento mesmo com o endereço de faturamento incompleto.

## Simulação

- Configure o endereço de faturamento para retirada;
 ![](https://vtexhelp.zendesk.com/attachments/token/1zJ19Lq9oJ5CHdkaHUfw4SAka/?name=image.png)

- Após adicionar produtos ao carrinho, use um e-mail com um perfil completo;
- A interface do usuário (UI) avançará para o pagamento mesmo com um endereço de faturamento incompleto no Sistema de Perfis.

## Workaround

Atualize o endereço de faturamento por meio dos Dados Mestres.