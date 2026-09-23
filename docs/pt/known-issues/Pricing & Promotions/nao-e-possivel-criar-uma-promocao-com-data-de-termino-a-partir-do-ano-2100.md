---
title: 'Não é possível criar uma promoção com data de término a partir do ano 2100.'
slug: nao-e-possivel-criar-uma-promocao-com-data-de-termino-a-partir-do-ano-2100
status: PUBLISHED
createdAt: 2023-05-30T00:42:52.000Z
updatedAt: 2026-09-23T15:19:34.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: it-is-not-possible-to-create-a-promotion-with-end-date-from-the-year-2100-onwards
locale: pt
kiStatus: Fixed
internalReference: 833957
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao criar uma promoção, se você selecionar uma data de término posterior a 2100, a interface do usuário (IU) entenderá que a data de término é anterior à data de início e não será possível salvar a promoção, mesmo que os outros campos estejam preenchidos corretamente.

_*Este problema não ocorre quando o idioma do administrador selecionado é o português._

## Simulação

1-Acesse o módulo Promoções;

2-Clique em "Criar Promoção" e selecione um dos tipos de promoção;

3-Selecione qualquer data de término a partir do ano 2100 (a IU exibirá a mensagem "Atenção: a data de término não pode ser anterior à data de início");

4-Preencha os demais campos obrigatórios;
5- Tente salvar a promoção (a interface exibirá o erro "Erro - A data de início deve ser menor que a data de término").

## Workaround

Se possível, selecione como data de término qualquer ano anterior a 2100, como 2099, por exemplo.