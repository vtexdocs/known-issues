---
title: Os anexos de opções de montagem perdem a vinculação se os itens estiverem disponíveis em diferentes vendedores de marca branca
slug: os-anexos-de-opcoes-de-montagem-perdem-a-vinculacao-se-os-itens-estiverem-disponiveis-em-diferentes-vendedores-de-marca-branca
status: PUBLISHED
createdAt: 2025-10-15T21:11:08.895Z
updatedAt: 2025-10-15T21:11:08.895Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: assembly-options-attachments-lose-binding-if-items-are-available-in-different-whitelabel-sellers
locale: pt
kiStatus: Backlog
internalReference: 1074856
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os anexos das opções de montagem perdem a vinculação quando dois itens são adicionados ao carrinho de diferentes vendedores de marca branca (um dos vendedores pode ser o vendedor 1), e ambos têm os mesmos anexos registrados nas opções de montagem.

O comportamento esperado é que cada anexo seja entregue de acordo com suas opções de montagem. No entanto, ambos os acessórios serão entregues pelo mesmo vendedor, fazendo com que todos os acessórios das opções de montagem e o segundo item sejam exibidos como indisponíveis.

 ![](https://vtexhelp.zendesk.com/attachments/token/pAnVC0tyWPYhIrtDBJJXfERRR/?name=image.png)
## Simulação



- Registre duas opções de montagem com os mesmos anexos;
- Registre o estoque de cada opção de montagem em diferentes vendedores de etiquetas brancas;
- Registre o estoque do acessório em ambos os vendedores de marca branca;
- Adicionar as opções de montagem a um carrinho
## Workaround


N/A


