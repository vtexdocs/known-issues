---
title: 'Atualmente, a interface do usuário da Transação apresenta uma limitação que a impede de exibir registros de /interactions caso o conteúdo exceda 5.000 linhas.'
slug: atualmente-a-interface-do-usuario-da-transacao-apresenta-uma-limitacao-que-a-impede-de-exibir-registros-de-interactions-caso-o-conteudo-exceda-5000-linhas
status: PUBLISHED
createdAt: 2023-03-27T13:40:30.000Z
updatedAt: 2023-03-27T13:40:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-transaction-ui-currently-has-a-limitation-where-it-cannot-display-logs-from-interactions-if-the-payload-exceeds-5000-lines
locale: pt
kiStatus: Backlog
internalReference: 778408
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, a API /interactions só consegue recuperar no máximo 5.000 linhas do arquivo S3 onde todos os dados estão armazenados. Isso pode causar um problema quando uma transação gera registros que excedem esse limite.

## Simulação

Se uma transação gerar registros que excedam o limite de 5.000 linhas, a API /interactions não conseguirá recuperar todos os dados.

## Workaround

Se você precisar dos logs ausentes para investigar um problema, entre em contato com nossa equipe de suporte para solicitar uma auditoria diretamente do arquivo S3. Observe que essa operação acarreta um custo significativo, portanto, nossa equipe analisará e buscará esses dados quando necessário.