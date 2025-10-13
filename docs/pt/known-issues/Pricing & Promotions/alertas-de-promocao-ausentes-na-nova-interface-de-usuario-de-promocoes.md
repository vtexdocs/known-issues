---
title: Alertas de promoção ausentes na nova interface de usuário de promoções
slug: alertas-de-promocao-ausentes-na-nova-interface-de-usuario-de-promocoes
status: PUBLISHED
createdAt: 2025-10-13T15:26:42.159Z
updatedAt: 2025-10-13T15:26:42.159Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-alerts-missing-in-new-promotions-ui
locale: pt
kiStatus: Scheduled
internalReference: 1306763
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Na nova UI de Promoções, os comerciantes não recebem mais os antigos "alertas de promoção" que avisavam sobre ações de alto impacto (por exemplo, aplicar uma promoção a todo o catálogo).
Como resultado, os usuários não têm uma etapa de confirmação ou aviso e correm o risco de aplicar involuntariamente promoções de forma muito ampla.
As contas que dependem desses alertas para segurança operacional são afetadas.
O departamento de engenharia confirmou que uma experiência de alerta redesenhada está sendo desenvolvida e será adicionada à nova interface do usuário, mas sua implementação depende de várias equipes e ainda não está disponível.
## Simulação



- Criar ou editar uma promoção que deve ser aplicada a todo o catálogo.
- Tente salvar a configuração.
- Observe que há apenas uma confirmação de dados para salvar, mas nenhum prompt de "alerta de promoção" semelhante ao legado que avisa explicitamente sobre alterações de escopo amplo
## Workaround



- Revise manualmente o escopo da promoção antes de salvá-la: verifique novamente o público, os produtos/categorias e as condições para evitar a aplicação não intencional de descontos globais.
- Coordene alterações de alto impacto durante janelas de baixo tráfego ou de baixo risco.


