---
title: 'O cartão de salvamento não funciona quando o 3DS2 está ativo'
slug: o-cartao-de-salvamento-nao-funciona-quando-o-3ds2-esta-ativo
status: PUBLISHED
createdAt: 2020-12-28T20:31:10.000Z
updatedAt: 2025-10-16T23:06:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: save-card-doesnt-work-when-3ds2-is-active
locale: pt
kiStatus: Backlog
internalReference: 319708
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando os clientes tentam adicionar um novo cartão de crédito na seção "Minha conta" de lojas que utilizam a autenticação 3DS (V1 ou V2), podem receber uma mensagem de erro informando: "Ocorreu um erro ao tentar salvar o cartão". Esse erro ocorre porque o cartão de crédito ainda não foi validado.

Para validar o cartão, ele deve estar associado a uma condição de pagamento. Assim que essa associação for estabelecida, será cobrado um valor de 1,50 USD no cartão. No entanto, essa transação é posteriormente cancelada, e o cartão é validado nesse processo.

Em lojas onde os adquirentes utilizam a autenticação 3DS, essa transação aciona o processo de autenticação e solicita a validação do cartão. No entanto, como não se trata de uma compra real, a etapa de “desafio” da autenticação 3DS não pode ser concluída, resultando no erro mencionado acima ao tentar salvar o cartão.

## Simulação

Para simular as etapas que levam ao erro, siga as instruções descritas abaixo:


1. Acesse a plataforma VTEX Admin.
2. Configure um adquirente que utilize a autenticação 3DS. Para a V1, certifique-se de que esteja configurado corretamente. Para a V2, consulte nosso artigo “Configurando o fluxo de autenticação 3DS 2” para obter instruções mais detalhadas.
3. Configure um método de pagamento com cartão de crédito (por exemplo, Mastercard, Visa, American Express) a ser processado pelo adquirente configurado.
4. Acesse a página inicial da sua loja.
5. Faça login informando seu endereço de e-mail e senha.
6. Clique em “Minha conta” para acessar as configurações da sua conta.
7. Navegue até a seção “Cartões de crédito”.
8. Selecione a opção “Adicionar novo cartão”.
9. Preencha todos os campos obrigatórios com as informações necessárias do cartão.
10. Clique em “Salvar novo cartão” para prosseguir com o salvamento dos dados do cartão.
11. Seguir este processo resultará na exibição de um erro, indicando o problema encontrado durante a adição do cartão.

## Workaround

Você pode resolver este erro adicionando uma condição de pagamento para um cartão de crédito associado a um adquirente que não utilize o 3-D Secure (V1 ou V2)



%0A