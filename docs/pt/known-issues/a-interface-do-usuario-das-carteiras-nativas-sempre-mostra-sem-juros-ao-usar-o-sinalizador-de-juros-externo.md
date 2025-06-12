---
title: A interface do usuário das carteiras nativas sempre mostra "sem juros" ao usar o sinalizador de juros externo
slug: a-interface-do-usuario-das-carteiras-nativas-sempre-mostra-sem-juros-ao-usar-o-sinalizador-de-juros-externo
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: native-wallets-ui-always-shows-no-interest-when-using-external-interest-flag
locale: pt
kiStatus: -
internalReference: 1243648
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Ao usar uma carteira nativa, como o Google Pay, com uma regra de cartão de crédito que tem a opção "Taxa de juros de terceiros" ativada, o valor dos juros não é calculado ou exibido durante o checkout. Exibindo o texto "sem juros" nas opções.

Além disso, se forem definidos "Juros de terceiros" e uma taxa de juros padrão, o valor da parcela será atualizado de acordo com a taxa padrão, mas o checkout indicará incorretamente "sem juros".
## Simulação




1. Ative o pagamento da carteira (como o GooglePay)
2. Adicionar uma regra de cartão de crédito com uma taxa de juros
3. Marque a opção de taxa de juros de terceiros
4. Vá para o checkout e verifique as opções de pagamento para a carteira


## Workaround


Não há nenhuma solução alternativa disponível.



