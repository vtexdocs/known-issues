---
title: Os métodos de pagamento desativados continuam a ser exibidos.
slug: os-metodos-de-pagamento-desativados-continuam-a-ser-exibidos
status: PUBLISHED
createdAt: 2025-10-16T20:58:49.270Z
updatedAt: 2025-10-16T20:58:49.270Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: deactivated-payment-methods-continue-to-be-displayed
locale: pt
kiStatus: Backlog
internalReference: 1235817
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


## Simulação



1. Configure um ambiente VTEX com uma conta principal (por exemplo, **myAccount**) e uma subconta que compartilha o mesmo sufixo da conta principal (por exemplo, sub**myAccount**), ambas ativas e reconhecidas pelo sistema.
2. Certifique-se de que ambas as contas tenham pelo menos um salesChannel configurado (por exemplo, salesChannel 4). Ambas as contas devem ter regras de pagamento ativas e configuráveis.
3. Modifique ou desative/ative os métodos de pagamento relevantes para a subconta.
4. Simule uma compra no checkout da subconta (submyAccount) e observe que a alteração feita na regra de pagamento da subconta não tem efeito no checkout; o comprador vê a configuração anterior, não a atualizada
## Workaround


Abra um tíquete para a equipe de suporte ao produto.



