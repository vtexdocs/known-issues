---
title: Mercado Livre O atributo Variation está duplicado. Combinações de atributos exclusivos permitidas.
slug: mercado-livre-o-atributo-variation-esta-duplicado-combinacoes-de-atributos-exclusivos-permitidas
status: PUBLISHED
createdAt: 2025-10-03T16:52:43.772Z
updatedAt: 2025-10-03T16:52:43.772Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-variation-attribute-is-duplicated-allowed-unique-attributes-combinations
locale: pt
kiStatus: No Fix
internalReference: 758331
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Esse cenário ocorreu devido ao uso divergente do mesmo atributo pelo vendedor. Enquanto o Mercado Livre (ML) interpreta esse atributo como uma variação, o vendedor o utiliza apenas como informação descritiva do produto.

Quando a listagem é enviada, a integração segue a lógica do ML, tratando o atributo como uma variação. Como, do lado do vendedor, esse valor permanece fixo, a primeira variação é criada corretamente. No entanto, ao tentar registrar uma segunda variação com o mesmo valor, o sistema do ML a interpreta como uma duplicata, resultando em um erro por considerar que a combinação já existe. Acreditamos que fornecer orientações claras ao vendedor sobre o uso correto dos atributos evitaria efetivamente esse tipo de conflito.
## Simulação



- No Product Bridge, configure o mapeador de modo que uma especificação em nível de produto (por exemplo, "Nome do desenho") existente no produto VTEX seja mapeada para um atributo MELI que permita variações.
- Exporte um produto com vários SKUs em que o valor existe em nível de produto (não em nível de especificação de SKU).
- Observe no Product Bridge que a exportação falha após o primeiro SKU com o erro: "O atributo de variação está duplicado. Combinações de atributos exclusivos permitidas". Observação: esse erro MELI também pode ocorrer devido a variações duplicadas reais no catálogo ou mapeador VTEX; verifique os dados de SKU primeiro para excluir duplicatas genuínas
## Workaround



- Remova o valor mapeado no Product Bridge que está fazendo com que o MELI trate a especificação de nível de produto como uma variação.
- Certifique-se de que apenas as especificações em nível de SKU mapeadas como VTEX "Variation" sejam enviadas como variações MELI, enquanto as especificações em nível de produto são enviadas como informações.
- Se necessário, consulte os atributos da categoria MELI por meio de sua API para confirmar quais atributos permitem variações e, em seguida, alinhe o mapeamento para que as especificações VTEX SKU = Variação e as especificações VTEX Product = Informação


%0A