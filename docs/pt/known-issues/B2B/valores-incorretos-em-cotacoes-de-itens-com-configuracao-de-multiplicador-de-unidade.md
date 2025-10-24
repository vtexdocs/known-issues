---
title: 'Valores incorretos em cotações de itens com configuração de multiplicador de unidade'
slug: valores-incorretos-em-cotacoes-de-itens-com-configuracao-de-multiplicador-de-unidade
status: PUBLISHED
createdAt: 2025-10-16T19:16:40.887Z
updatedAt: 2025-10-16T19:16:40.887Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: incorrect-values-in-quotes-on-items-with-unity-multiplier-configuration
locale: pt
kiStatus: Backlog
internalReference: 1271492
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao criar uma cotação com itens que têm uma configuração de multiplicador de unidade, apenas a quantidade original, não multiplicada, é considerada, enquanto a quantidade multiplicada é desconsiderada. O preço é multiplicado corretamente.

Isso leva a um cenário em que `n` unidades do item recebem o preço de `n * multiplicador` de itens na cotação criada.
## Simulação



- Adicione um item com a configuração do multiplicador de unidades ao carrinho;
- Selecione a opção `Criar uma cotação`;
- A quantidade original do item será mantida e o preço considerará os itens multiplicados
## Workaround


N/A



