---
title: 'As promoções de adesão opcional podem ser configuradas com vendedores de marca branca via API.'
slug: as-promocoes-de-adesao-opcional-podem-ser-configuradas-com-vendedores-de-marca-branca-via-api
status: PUBLISHED
createdAt: 2026-09-25T20:19:09.000Z
updatedAt: 2026-09-25T20:20:57.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: optin-promotions-can-be-configured-with-white-label-sellers-via-api
locale: pt
kiStatus: Backlog
internalReference: 1466622
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Vendedores de marca branca (tipo de vendedor 2) não são compatíveis com promoções que utilizam a funcionalidade de adesão (Opt-in). A interface administrativa impede intencionalmente essa configuração, pois o fluxo de adesão não foi projetado para suportar vendedores de marca branca.

No entanto, a configuração pode ser criada ou atualizada por meio da API. Isso permite que promoções de adesão não compatíveis com vendedores de marca branca sejam configuradas, mas seu comportamento não é garantido e pode não funcionar como esperado.

## Simulação

1. Crie ou edite uma promoção com a funcionalidade de adesão (Opt-in).

2. Tente configurar um vendedor de marca branca (tipo de vendedor 2) como um vendedor com adesão (Opt-in) por meio da interface administrativa.

3. Observe que a interface administrativa não permite essa configuração.

4. Configure o mesmo vendedor por meio da API de Promoções.

5. Observe que a API permite que o vendedor de marca branca seja adicionado à configuração de adesão (Opt-in).

A promoção resultante pode ser configurada com sucesso, mas este cenário não é suportado e o comportamento da promoção não pode ser garantido.

## Workaround

N/A