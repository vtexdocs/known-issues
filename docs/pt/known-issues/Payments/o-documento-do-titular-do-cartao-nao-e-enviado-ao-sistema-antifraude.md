---
title: 'O documento do titular do cartão não é enviado ao sistema antifraude.'
slug: o-documento-do-titular-do-cartao-nao-e-enviado-ao-sistema-antifraude
status: PUBLISHED
createdAt: 2023-05-22T18:24:32.000Z
updatedAt: 2023-05-22T18:24:32.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cardholderdocument-is-not-sent-to-antifraud
locale: pt
kiStatus: Backlog
internalReference: 829864
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar a carga útil a ser enviada para análise antifraude, não estamos instanciando o `cardholderDocument` de acordo com os dados do documento, Enviar Dados Antifraude, mesmo que a configuração no manifesto seja feita de acordo com nossa documentação, o comprador será obrigado a preenchê-lo no checkout se assim estiver configurado na afiliação do sistema antifraude, mas em nenhuma circunstância as informações sobre o documento do titular do cartão serão enviadas ao provedor antifraude na análise de risco.

## Simulação

1. Configure o menu suspenso “Campo do documento do titular do cartão” como obrigatório ou opcional;
2. Registre uma regra com a antifraude configurada;
3. Faça uma compra preenchendo as informações do CPF na interface do cartão no checkout
4. Verifique se, no corpo do Enviar dados antifraude, o cardholderDocument não é enviado.

## Workaround

Não há solução alternativa disponível