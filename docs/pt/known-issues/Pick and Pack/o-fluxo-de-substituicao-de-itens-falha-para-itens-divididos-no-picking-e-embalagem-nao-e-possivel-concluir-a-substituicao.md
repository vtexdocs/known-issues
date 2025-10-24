---
title: 'O fluxo de substituição de itens falha para itens divididos no picking e embalagem (não é possível concluir a substituição)'
slug: o-fluxo-de-substituicao-de-itens-falha-para-itens-divididos-no-picking-e-embalagem-nao-e-possivel-concluir-a-substituicao
status: PUBLISHED
createdAt: 2025-10-07T21:38:57.455Z
updatedAt: 2025-10-07T21:38:57.455Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: replace-items-flow-fails-for-split-items-in-pick-and-pack-cannot-complete-replacement
locale: pt
kiStatus: Backlog
internalReference: 1303803
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em **Pick and Pack**, o fluxo **Replace Items** não funciona corretamente quando um pedido contém itens divididos (ou seja, a mesma SKU dividida em várias linhas de pedido devido a diferentes **preços,** **promoções ou uma condição/personalização individual**). A interface do usuário exige que o selecionador selecione uma linha dividida específica e, em seguida, bloqueia a conclusão da substituição.

Isso também ocorre em **planilhas de picking de pedido único**, impedindo que a ação de substituição seja finalizada para os itens afetados.
## Simulação


**Pré-requisitos**: Um pedido em **Pick and Pack** em que uma **SKU** aparece **dividida** em várias linhas devido a diferenças em **preços,** **promoções ou uma condição/personalização individual**. Esse cenário está documentado e pode ser reproduzido.

Etapas:

1.

Abra a **planilha de picking** para o pedido afetado em **Pick and Pack**.



2.

Selecione um **item de partição** e escolha **Substituir itens**; o sistema exige a seleção da **linha de partição específica** a ser substituída.



3.

Prossiga com a substituição; o fluxo **não permite a conclusão** e bloqueia a operação, mesmo para planilhas de **escolha única**.


## Workaround


**Descartar** itens divididos **individualmente** e **adicionar novos produtos** conforme necessário, alinhando esse processo com as partes interessadas até que o comportamento seja aprimorado.



