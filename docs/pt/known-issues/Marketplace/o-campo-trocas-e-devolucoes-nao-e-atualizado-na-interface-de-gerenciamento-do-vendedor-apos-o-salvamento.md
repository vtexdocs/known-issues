---
title: 'O campo "Trocas e devoluções" não é atualizado na interface de gerenciamento do vendedor após o salvamento'
slug: o-campo-trocas-e-devolucoes-nao-e-atualizado-na-interface-de-gerenciamento-do-vendedor-apos-o-salvamento
status: PUBLISHED
createdAt: 2022-11-01T17:46:46.000Z
updatedAt: 2023-10-30T19:28:08.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: field-exchanges-and-returns-is-not-updating-on-seller-management-ui-after-save
locale: pt
kiStatus: Fixed
internalReference: 689886
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Após salvar o campo “Trocas e devoluções” na interface do usuário, as informações são atualizadas inicialmente, mas se tentarmos sair da área de gerenciamento ou atualizar a página, as informações são perdidas.

As informações exibidas na interface do usuário são as mesmas do campo “Política de envio”.

No entanto, isso parece ocorrer apenas na interface do usuário; via API, as informações estão corretas.

## Simulação

1. Acesse um vendedor na área de gerenciamento de vendedores;
2. Altere as informações no campo “Trocas e devoluções” e salve;
3. Acesse novamente o mesmo vendedor e verifique se as informações não estão corretas.

## Workaround

Não há necessidade de solução alternativa, as informações estão corretas no backend do sistema.