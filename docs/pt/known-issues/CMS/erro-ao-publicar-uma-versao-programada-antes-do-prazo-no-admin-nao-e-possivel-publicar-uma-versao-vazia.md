---
title: 'Erro ao publicar uma versão programada antes do prazo no Admin (“Não é possível publicar uma versão vazia”)'
slug: erro-ao-publicar-uma-versao-programada-antes-do-prazo-no-admin-nao-e-possivel-publicar-uma-versao-vazia
status: PUBLISHED
createdAt: 2026-02-27T21:30:41.986Z
updatedAt: 2026-02-27T21:30:41.986Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: error-publishing-scheduled-release-ahead-of-schedule-in-admin-you-cant-publish-an-empty-release
locale: pt
kiStatus: Backlog
internalReference: 1346648
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar publicar manualmente uma **Versão Programada** antes da data programada através do painel de administração, o sistema bloqueia a ação e exibe a mensagem de erro: **“Não é possível publicar uma versão vazia. Adicione atualizações e tente novamente.”**

Foi verificado por meio da API que a publicação **não está vazia** e, na verdade, contém eventos/atualizações associados. Isso indica um falso positivo na validação da interface de administração que impede a publicação manual antes do horário programado.

## Simulação

- Crie uma nova publicação no módulo **CMS / Publicações**. - Adicione atualizações/eventos a esta publicação (certifique-se de que ela não esteja vazia).
- Programe esta versão para uma data futura. - Antes da data programada, tente publicar a versão manualmente usando o botão publicar no Admin. - O sistema exibirá o erro: _"Você não pode publicar uma versão vazia. Adicione atualizações e tente novamente."_

## Workaround

N/A