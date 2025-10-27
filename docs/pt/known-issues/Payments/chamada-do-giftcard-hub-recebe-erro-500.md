---
title: 'Chamada do Giftcard Hub recebe erro 500'
slug: chamada-do-giftcard-hub-recebe-erro-500
status: PUBLISHED
createdAt: 2025-09-03T15:21:36.789Z
updatedAt: 2025-09-03T15:21:36.789Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-hub-call-receives-500-error
locale: pt
kiStatus: Backlog
internalReference: 1286257
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando o Giftcard Hub recebe algum erro, ele acaba retornando um **500 error** para o usuário. Isso ocorre porque os erros são tratados no código do sistema do Giftcard.

Esse comportamento pode ocorrer em diferentes solicitações, independentemente do verbo HTTP. A causa principal é que, quando o Giftcard System não encontra conteúdo na resposta, o que é comum nas respostas **4xx** e **5xx**, ele limpa o conteúdo da memória.
Posteriormente, quando o código tenta acessar esse elemento novamente, ele já foi descartado, resultando na seguinte mensagem de erro:


    Não é possível acessar um objeto descartado. Nome do objeto: 'System.Net.Http.StreamContent'.

##
Com isso, o usuário não tem informações claras sobre o que aconteceu, o que torna a solução de problemas muito mais difícil.
## Simulação


Não é possível simular esse comportamento.


## Workaround


Nenhuma.



