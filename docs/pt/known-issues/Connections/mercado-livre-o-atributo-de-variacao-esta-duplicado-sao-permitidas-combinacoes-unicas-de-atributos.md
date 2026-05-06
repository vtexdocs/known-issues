---
title: 'Mercado Livre O atributo de variação está duplicado. São permitidas combinações únicas de atributos.'
slug: mercado-livre-o-atributo-de-variacao-esta-duplicado-sao-permitidas-combinacoes-unicas-de-atributos
status: PUBLISHED
createdAt: 2023-02-23T16:00:33.000Z
updatedAt: 2025-10-03T19:52:18.000Z
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

Essa situação ocorreu devido ao uso divergente do mesmo atributo pelo vendedor. Enquanto o Mercado Livre (ML) interpreta esse atributo como uma variação, o vendedor o utiliza apenas como informação descritiva do produto.

Quando o anúncio é enviado, a integração segue a lógica do ML, tratando o atributo como uma variação. Como, do lado do vendedor, esse valor permanece fixo, a primeira variação é criada corretamente. No entanto, ao tentar registrar uma segunda variação com o mesmo valor, o sistema do ML interpreta-a como uma duplicata, resultando em um erro, pois considera que a combinação já existe. Acreditamos que fornecer orientações claras ao vendedor sobre o uso correto dos atributos evitaria efetivamente esse tipo de conflito.

## Simulação

- No Product Bridge, configure o mapeador para que uma especificação no nível do produto (por exemplo, “Nome do desenho”) que existe no VTEX Product seja mapeada para um atributo MELI que permita variações.
- Exporte um produto com múltiplos SKUs onde o valor exista no nível do produto (não na especificação do SKU).
- Observe no Product Bridge que a exportação falha após o primeiro SKU com o erro: “O atributo de variação está duplicado. São permitidas combinações únicas de atributos.” Observação: esse erro do MELI também pode ocorrer devido a variações realmente duplicadas no catálogo VTEX ou no mapeador; verifique primeiro os dados do SKU para excluir duplicatas genuínas.

## Workaround

- Remova o valor mapeado no Product Bridge que está fazendo com que o MELI trate a especificação no nível do produto como uma variação.
- Certifique-se de que apenas as especificações no nível do SKU mapeadas como “Variação” do VTEX sejam enviadas como variações do MELI, enquanto as especificações no nível do produto sejam enviadas como informações.
- Se necessário, consulte os atributos de categoria do MELI por meio de sua API para confirmar quais atributos permitem variações e, em seguida, alinhe o mapeamento de forma que as especificações do SKU do VTEX = Variação e as especificações do produto do VTEX = Informação


%0A