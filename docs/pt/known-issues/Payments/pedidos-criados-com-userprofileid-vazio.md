---
title: 'Pedidos criados com userProfileId vazio'
slug: pedidos-criados-com-userprofileid-vazio
status: PUBLISHED
createdAt: 2026-09-23T18:33:36.000Z
updatedAt: 2026-09-23T18:33:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-created-with-empty-userprofileid
locale: pt
kiStatus: Backlog
internalReference: 1465130
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os clientes recorrentes não são reconhecidos no checkout: seus dados salvos e endereço não são preenchidos automaticamente, eles digitam tudo novamente e o pedido gerado não é vinculado ao seu perfil de cliente. O lojista recebe então um pedido com o campo `clientProfileData.userProfileId` vazio, o que quebra a ligação com o registro do cliente no CRM, ERP e na conciliação. Isso ocorre quando a busca de perfil realizada pelo checkout após o cliente inserir seu e-mail falha; a compra em si é processada normalmente, incluindo o pagamento, portanto, nada indica um problema para o cliente ou para a loja. O checkout mantém essa falha no carrinho e, no momento da finalização do pedido, ignora a associação de perfil em vez de tentar novamente.

- `clientProfileData.userProfileId` está vazio no pedido e `profileErrorOnLoading` é `true`.
- A linha do tempo do pedido mostra "Não foi necessário salvar o perfil do usuário no Sistema de Perfil".
- O endereço de entrega no pedido é um endereço recém-digitado, mesmo quando o comprador tem um endereço salvo em seu perfil.
- O pedido está completo e funcionando corretamente: pagamento aprovado, faturado, nenhum erro exibido em qualquer etapa.
- Compradores recorrentes perdem o vínculo com um perfil existente; compradores que compram pela primeira vez não têm nenhum perfil criado.
- Afeta pedidos feitos na loja virtual, não pedidos do marketplace.

Não é o mesmo que um `userProfileId` vazio causado por `ignoreProfileData: true` em pedidos de Compra com Um Clique / Finalização Rápida, que é o comportamento esperado.

## Simulação

Não reproduzível sob demanda: depende de uma falha intermitente na busca do perfil durante a finalização da compra.

Use esta lista de verificação para confirmar se um caso é este:

1. A solicitação `GET /api/checkout/pvt/orders/{orderId}` retorna `clientProfileData.profileErrorOnLoading: true` com `userProfileId` vazio.
2. A linha do tempo do pedido mostra `Não foi necessário salvar o perfil do usuário no Sistema de Perfis`.
3. O endereço de entrega do pedido está marcado como `isDisposable: true`, e o perfil do comprador possui um endereço salvo diferente.
4. Descartar a hipótese de "perfil não encontrado": em um novo carrinho, um e-mail sem perfil retorna `profileErrorOnLoading: false`. O valor `true` significa, portanto, que a pesquisa falhou, e não que o comprador seja desconhecido.
5. Descartar a hipótese de `ignoreProfileData`: está ausente do pedido e é `null` em `GET /api/checkout/pvt/configuration/orderForm`.
6. Se o cliente tiver um pedido anterior na conta, esse pedido terá um `userProfileId` preenchido, sob condições idênticas.

## Workaround

**Comerciante/integração** — resolva o identificador por e-mail a partir dos Master Datas e preencha-o posteriormente: `GET /api/dataentities/CL/search?_where=email={email}&_fields=id,userId` — use o campo `userId`, não o `id` do documento.

Nada pode ser recuperado se o cliente não tiver um perfil na conta antes da realização do pedido.