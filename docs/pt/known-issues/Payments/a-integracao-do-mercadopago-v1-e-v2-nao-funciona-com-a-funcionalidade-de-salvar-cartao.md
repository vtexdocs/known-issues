---
title: 'A integração do MercadoPago V1 e V2 não funciona com a funcionalidade de salvar cartão'
slug: a-integracao-do-mercadopago-v1-e-v2-nao-funciona-com-a-funcionalidade-de-salvar-cartao
status: PUBLISHED
createdAt: 2020-09-01T15:25:36.000Z
updatedAt: 2024-01-09T13:23:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-mercadopagov1-and-v2-integration-does-not-work-with-save-card-functionality
locale: pt
kiStatus: Backlog
internalReference: 283727
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A integração do MercadoPagoV1 e do MercadoPagoV2 não funciona corretamente com a funcionalidade de salvar cartões na seção “Minha conta” para países que não permitem transações com valores decimais.

Esse problema ocorre porque o recurso “Meus cartões” gera uma nova transação com o valor de $1,5. No entanto, alguns países não permitem transações com valores decimais, resultando na rejeição de qualquer tentativa de aprovar essas transações.

## Simulação

1. Acesse o **Admin.** da VTEX.
2. Configure o adquirente MercadoPagoV1 ou MercadoPagoV2.
3. Configure uma forma de pagamento com cartão de crédito — como Mastercard, Visa, American Express, etc. — para ser processada pelo adquirente.
4. Acesse a página inicial da sua loja.
5. Faça login digitando seu endereço de e-mail e senha.
6. Clique em **Minha conta**.
7. Acesse a seção **Cartões de crédito**.
8. Clique em **Adicionar novo cartão**.
9. Preencha todos os campos e clique em **Salvar novo cartão**.
10. Esse processo retornará a mensagem _ocorreu um erro ao tentar registrar o cartão_

## Workaround

N/A