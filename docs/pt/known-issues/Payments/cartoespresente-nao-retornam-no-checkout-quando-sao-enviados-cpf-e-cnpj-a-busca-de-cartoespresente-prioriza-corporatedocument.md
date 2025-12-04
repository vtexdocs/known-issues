---
title: 'Cartões-presente não retornam no Checkout quando são enviados CPF e CNPJ (a busca de cartões-presente prioriza corporateDocument)'
slug: cartoespresente-nao-retornam-no-checkout-quando-sao-enviados-cpf-e-cnpj-a-busca-de-cartoespresente-prioriza-corporatedocument
status: PUBLISHED
createdAt: 2025-12-04T12:33:19.796Z
updatedAt: 2025-12-04T12:33:19.796Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-cards-not-returned-in-checkout-when-both-cpf-and-cnpj-are-sent-gift-card-search-prioritizes-corporatedocument
locale: pt
kiStatus: Backlog
internalReference: 1335218
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um perfil de comprador inclui documentos pessoais (CPF) e corporativos (CNPJ), a Pesquisa de Cartão-Presente (/giftcards/_search) prioriza o documento corporativo (CNPJ) e ignora os cartões-presente emitidos para o documento pessoal (CPF).
O sintoma visível é que os cartões-presente válidos associados ao CPF do comprador não são retornados ao Checkout, resultando em respostas do tipo "código de presente inválido" ou `ListAllGiftCards` vazias. Isso afeta os compradores que receberam anteriormente cartões-presente vinculados ao seu CPF e que, posteriormente, prosseguem com o checkout com o CPF e o CNPJ preenchidos em seu perfil ou no payload da solicitação.
## Simulação



- Pré-requisitos:
  - Conta com o provedor de cartão-presente da VTEX (VtexGiftCard) ativa.
  - Perfil do comprador em que ambos os campos estão presentes no contexto de checkout: documento (CPF) e corporateDocument (CNPJ).
  -

Um cartão-presente criado/associado ao CPF do comprador (ownerId = document/CPF).





Passos:

1. No Checkout, prossiga com o comprador que tem o CPF e o CNPJ preenchidos (isCorporate pode ser verdadeiro, mas a rota de pesquisa recebe apenas document e corporateDocument).
2. Acione o fluxo de recuperação do cartão-presente (`ListAllGiftCards` ou durante a anexação do pagamento). Observe que a resposta está vazia quando ambos os documentos são enviados; se o corporateDocument for omitido, o gift card vinculado ao CPF será retornado
## Workaround


Certifique-se de que apenas o documento pretendido seja enviado no contexto de pesquisa do cartão-presente:

- Se o cartão-presente foi criado para o CPF, evite enviar corporateDocument na solicitação (ou no contexto do perfil ativo do comprador no checkout) para que a pesquisa utilize o documento (CPF).
- Como alternativa, reemita/registre um cartão-presente espelho com o mesmo saldo, mas associado ao CNPJ (corporateDocument) para esse cliente, para que a pesquisa que retorna corporateDocument o encontre.


