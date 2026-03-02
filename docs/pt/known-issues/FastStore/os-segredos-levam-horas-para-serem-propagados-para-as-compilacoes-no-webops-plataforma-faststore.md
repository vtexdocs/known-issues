---
title: 'Os segredos levam horas para serem propagados para as compilações no WebOps (Plataforma FastStore)'
slug: os-segredos-levam-horas-para-serem-propagados-para-as-compilacoes-no-webops-plataforma-faststore
status: PUBLISHED
createdAt: 2026-03-02T17:52:16.039Z
updatedAt: 2026-03-02T17:52:16.039Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: secrets-take-hours-to-propagate-to-builds-in-webops-faststore-platform
locale: pt
kiStatus: Backlog
internalReference: 1371882
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, as atualizações de segredos do WebOps levam horas para ficarem disponíveis nas compilações do FastStore, em vez dos poucos minutos esperados. O sintoma visível é que os segredos novos ou editados estão faltando na imagem/ambiente da compilação, mesmo após acionar uma nova implantação.

## Simulação

Pré-requisitos: Um projeto FastStore usando WebOps com variáveis e segredos configurados.

Etapas: 1) Em WebOps → Configurações → Variáveis e Segredos para a conta/ambiente de destino, crie ou atualize segredos. Registre a data e hora do salvamento. 2) Acione uma nova implantação (por meio de commit ou iniciando uma implantação no WebOps) e anote o link da implantação e a hora da compilação. 3) Inspecione as variáveis da imagem/ambiente de compilação resultantes. O problema se repete quando os segredos recém-salvos não aparecem na compilação por um longo período (possivelmente horas).

## Workaround

Após salvar os segredos, aguarde alguns minutos e acione uma nova implantação. Se os segredos ainda estiverem faltando, abra um ticket de suporte imediatamente com: - Conta/ambiente, nomes exatos dos segredos (sem valores), data e hora de salvamento dos segredos, link de implantação e hora da compilação.