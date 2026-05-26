---
title: 'Persistência do código de segurança no formulário da interface do usuário ao mudar de um cartão salvo para um novo cartão'
slug: persistencia-do-codigo-de-seguranca-no-formulario-da-interface-do-usuario-ao-mudar-de-um-cartao-salvo-para-um-novo-cartao
status: PUBLISHED
createdAt: 2026-05-26T18:48:20.000Z
updatedAt: 2026-05-26T18:54:21.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: security-code-persistence-in-ui-form-when-changing-from-a-saved-card-to-a-new-card
locale: pt
kiStatus: Backlog
internalReference: 1412484
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário que possui um cartão salvo digita o código de segurança desse cartão e, em seguida, opta por usar um novo cartão, o código de segurança permanece preenchido no formulário da interface do usuário do cartão.

## Simulação

- Passe para a etapa de pagamento com um usuário que tenha um cartão salvo;
- Preencha as informações do código de segurança;

 ![](https://vtexhelp.zendesk.com/attachments/token/B9BTYjBOLIBur6banW5qXqvwV/?name=image.png)

- Escolha a opção de usar outro cartão; o código de segurança continuará presente no formulário.

 ![](https://vtexhelp.zendesk.com/attachments/token/hDkQDPMznDXl7s7eJnW0QnMuF/?name=image.png)

## Workaround

Preencha o código de segurança com as informações do novo cartão.