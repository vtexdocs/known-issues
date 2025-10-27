---
title: 'Planilha presa na coluna "A embalar" com o status "Embalado" após a confirmação da embalagem'
slug: planilha-presa-na-coluna-a-embalar-com-o-status-embalado-apos-a-confirmacao-da-embalagem
status: PUBLISHED
createdAt: 2025-09-30T14:51:33.333Z
updatedAt: 2025-09-30T14:51:33.333Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: worksheet-stuck-in-to-pack-column-with-status-packed-after-packing-confirmation
locale: pt
kiStatus: Backlog
internalReference: 1299842
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em casos raros, após a confirmação da embalagem, a planilha permanece na coluna "To pack" com o status "Packed" em vez de passar para "Completed". O pedido no Pick and Pack chega a COMPLETED, mas a planilha correspondente não avança, criando uma inconsistência nas informações do Pick and Pack e também no OMS.

A análise indica que a sincronização de status entre o pedido (COMPLETED) e a planilha (PACKED → COMPLETED) falha silenciosamente quando o pedido contém itens rejeitados; nenhum registro de erro é produzido, sugerindo uma lacuna no tratamento da transição de estado em vez de uma exceção. Isso foi observado em casos isolados (exemplos fornecidos pelo cliente).
## Simulação


Observação: a reprodução não é determinística; as ocorrências relatadas compartilham um padrão comum.


1. Crie um pedido que passe por Picking e Embalagem em Pick and Pack.
2. Durante o picking/embalagem, rejeite pelo menos um item (por exemplo, devido à falta de estoque). Prossiga para confirmar a embalagem dos itens restantes para que o pedido possa ser concluído no OMS.
3. Observe que o pedido passa para COMPLETED (Concluído), mas a planilha permanece na coluna "To pack" (Para embalar) com o status "Packed" (Embalado), em vez de se tornar "Completed" (Concluído)
## Workaround


Correção manual: Ajustar/forçar manualmente o status da planilha afetada para que se alinhe ao status final do pedido (ação interna da engenharia/suporte quando o problema ocorre). Isso foi usado para resolver o impacto imediato sobre o cliente nos casos relatados.

Monitoramento: Rastrear ocorrências futuras, especialmente pedidos em que pelo menos um item foi rejeitado, pois essa condição está correlacionada à falha de sincronização. Capture IDs de pedidos e IDs de planilhas para acompanhamento da engenharia.



