---
title: 'Pedido do vendedor faturado com problema na captura do pagamento'
slug: pedido-do-vendedor-faturado-com-problema-na-captura-do-pagamento
status: PUBLISHED
createdAt: 2021-06-02T15:40:03.000Z
updatedAt: 2024-01-29T16:51:29.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: sellers-order-invoiced-with-problem-in-the-payment-capture
locale: pt
kiStatus: Backlog
internalReference: 376646
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, da forma como nossa arquitetura está estruturada, tanto o Vendedor quanto o Marketplace são duas entidades totalmente distintas. Funciona da seguinte maneira: o Marketplace é responsável por receber o pagamento do cliente, enquanto o Vendedor é responsável por toda a logística até o momento da entrega da mercadoria ao cliente.

A parte de “receber o pagamento” é dividida em Autorização e Captura. Ambas são ações separadas no Gateway e são executadas em dois momentos distintos. A primeira ocorre quando o cliente realiza a compra e a segunda quando uma nota fiscal é inserida no sistema. Após o processo de Autorização, o Marketplace “informa” ao Vendedor que ele pode prosseguir com a preparação e o envio da mercadoria ao cliente. Como há um intervalo de tempo entre a Autorização e a Captura e, como são ações separadas, não há garantia de que a ação de Captura será executada corretamente.

Isso nos deixa com o problema de que o Vendedor recebeu uma notificação para enviar a mercadoria, inseriu uma notificação de fatura no sistema, e o Marketplace teve um problema ao tentar realizar a ação de Captura.

Nesses casos de notificação de Autorização e Captura, o Gateway sempre notifica inicialmente o Marketplace, que, por sua vez, notifica o Vendedor.

O problema é que o fluxo do Vendedor não é interrompido por problemas que possa ter na Captura do pagamento, mas isso se reflete no fluxo do Marketplace.

## Simulação

Não temos um passo a passo para replicar, no entanto, é possível validar um pedido de exemplo.

Podemos ver que o pedido do Marketplace relatou um problema na captura e não conseguiu concluir o fluxo, exibindo o erro: “A operação de liquidação retornou Falha”

No fluxo, o status do pedido no Marketplace será “Verificando fatura” e, nas interações, a mensagem: “A operação de liquidação retornou Falha” será exibida.

Nos eventos de transação, será exibida a mensagem: “Erro: a resposta foi Entity_Declined”.

Embora o pedido do Vendedor tenha chegado ao status “Faturado”, isso ocorre porque, para o Vendedor na arquitetura atual, a captura do pagamento não é de sua responsabilidade, mesmo sendo o proprietário do pagamento.

## Workaround

No momento, não temos uma solução alternativa para concluir o fluxo do Marketplace, pois isso depende da captura ser realizada corretamente. Sem a confirmação do Gateway, o pedido não poderá avançar. Infelizmente, a única saída para esse tipo de inconsistência é cancelar o pedido do MKT e tentar fazer um novo manualmente.

É importante sempre verificar se a captura do pagamento foi concluída antes de entregar os produtos



%0A