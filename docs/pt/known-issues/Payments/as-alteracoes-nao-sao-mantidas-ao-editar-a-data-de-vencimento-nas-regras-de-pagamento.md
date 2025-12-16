---
title: 'As alterações não são mantidas ao editar a data de vencimento nas regras de pagamento'
slug: as-alteracoes-nao-sao-mantidas-ao-editar-a-data-de-vencimento-nas-regras-de-pagamento
status: PUBLISHED
createdAt: 2025-12-16T20:09:49.418Z
updatedAt: 2025-12-16T20:09:49.418Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: changes-not-persisted-when-editing-expiration-date-in-payment-rules
locale: pt
kiStatus: Backlog
internalReference: 1338791
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao editar o campo Data de expiração (propriedade API: endDate) de uma regra de pagamento no Admin, a interface mostra "Saved successfully", mas o Ul continua mostrando a data anterior; o ajuste não persiste visual ou funcionalmente.
## Simulação



Reprodução intermitente.

- Navegue até Admin > PCI Gateway > Regras de pagamento e abra a regra específica
- Adicione uma condição especial: Data de expiração (teste interno com 31/12/2025: GMT -3)
- Clique em Save (Salvar) e confirme se Ul mostra "Saved successfully" (Salvo com sucesso).
- Altere a data para outra e salve-a novamente. (teste interno com 31/12/2026: GMT -3)
- Observe os detalhes da regra; a data de expiração não mostra o valor atualizado. (teste interno com 31/12/2025: GMT -3)


## Workaround



Tentar salvar novamente a data de vencimento: uma tentativa subsequente de salvar a data de vencimento tende a refletir corretamente (funcionou em testes internos após uma falha).


