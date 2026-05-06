---
title: 'A promoção “Compre junto”, com muitos SKUs, pode fazer com que os produtos elegíveis não sejam carregados na página inicial (tempo de espera esgotado)'
slug: a-promocao-compre-junto-com-muitos-skus-pode-fazer-com-que-os-produtos-elegiveis-nao-sejam-carregados-na-pagina-inicial-tempo-de-espera-esgotado
status: PUBLISHED
createdAt: 2020-10-30T18:47:39.000Z
updatedAt: 2024-01-23T15:09:02.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: buy-together-promotion-with-lots-of-skus-may-let-the-eligible-products-not-to-load-on-the-front-timeout
locale: pt
kiStatus: No Fix
internalReference: 301463
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A promoção “Compre junto” com muitos SKUs pode fazer com que os produtos elegíveis não sejam carregados na página inicial devido a um tempo limite excedido. As páginas de produtos utilizam o controle de produto `<vtex.cmc:BuyTogether/>`. Esse controle é responsável por trazer as informações de todos os SKUs elegíveis definidos na promoção para a página do produto.

O problema é que, se o cliente definir muitos SKUs nessa promoção, o Portal terá que trazer essas informações (preço, estoque etc.) de todos os produtos desses SKUs para a página do produto. E o Portal faz isso simulando seus produtos com o checkout. Se tivermos uma promoção definida, por exemplo, com 50 SKUs, e essas SKUs forem de produtos que têm pelo menos 5 SKUs por produto e estiverem disponíveis, por exemplo, em 3 Canais de Venda, o Portal terá que simular com o checkout cada SKU para cada CV de cada produto elegível nesta promoção apenas para mostrar essa página de produto específica. Neste exemplo, o Portal terá que fazer 750 simulações com o checkout (50 SKUs definidos na promoção; supondo que esses SKUs sejam de produtos que tenham 5 SKUs cada, são 250 SKUs, e todos devem ser simulados para cada canal de vendas, o que nos dá 750 simulações).

ps: não temos um número correto para definir na Lista de SKUs, pois isso dependerá de cada cliente. Se o cliente tiver produtos com poucos SKUs e apenas um SC disponível, ele poderá usar mais SKUs nesse tipo de promoção.

## Simulação

- Crie uma promoção “Compre Juntos”
- Coloque na Lista de SKUs 1 ou na Lista de SKUs 2 muitos SKUs, tipo mais de 50.
- Tente carregar a página do produto que usa o controle `<vtex.cmc:BuyTogether/>`; a página não deve carregar devido a um tempo limite excedido.

## Workaround

Existem duas maneiras de “resolver” esse problema:
- Remova o controle de modelo <vtex.cmc:BuyTogether/>; isso fará com que a página do produto não carregue as informações sobre esse produto disponíveis nesta promoção;
- Use menos SKUs na lista da promoção "Compre Juntos". Mais uma vez, infelizmente, não temos um número específico que funcione. Aconselho o cliente a tentar com algo em torno de 10 e começar a aumentar e testar.%0A