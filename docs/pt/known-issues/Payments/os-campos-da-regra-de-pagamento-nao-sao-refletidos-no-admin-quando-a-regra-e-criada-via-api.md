---
title: 'Os campos da regra de pagamento não são refletidos no Admin quando a regra é criada via API'
slug: os-campos-da-regra-de-pagamento-nao-sao-refletidos-no-admin-quando-a-regra-e-criada-via-api
status: PUBLISHED
createdAt: 2025-10-24T17:05:28.244Z
updatedAt: 2025-10-24T17:05:28.244Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-fields-not-reflected-in-admin-when-rule-is-created-via-api
locale: pt
kiStatus: Backlog
internalReference: 1313230
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando uma regra de pagamento é criada por meio da API de pagamentos, a página de detalhes do administrador para essa regra não exibe algumas seleções (por exemplo, Emissor e Segmento) como selecionadas, mesmo que a regra seja aplicada corretamente no checkout.
## Simulação



-

Pré-requisito: Permissão para criar regras via API usando **POST Insira uma nova regra de pagamento** em /api/pvt/rules



-

Passos:



1) Crie uma nova regra via API, incluindo a configuração do emissor e o segmento no payload.



2) Abra Admin > Pagamentos > Regras. Observe que a regra "card" mostra o emissor/segmento configurado conforme esperado.



3) Clique na página de detalhes da regra. Observe que os menus suspensos Emissor e Segmento não estão pré-selecionados



4) Valide o comportamento funcional no checkout: um BIN que corresponda ao emissor/segmento configurado permite a duração da parcela configurada; um BIN que não corresponda não mostra essa opção de parcela.
## Workaround


Abra a regra no Admin, selecione novamente manualmente o Emissor e o Segmento na interface do usuário e salve, para que a interface do usuário escreva de volta a forma esperada e os campos fiquem visíveis na tela de detalhes



