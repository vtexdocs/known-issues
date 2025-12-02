---
title: 'Mercado Livre Falha no primeiro carregamento na administração de promoções do Mercado Livre (os dados só são carregados depois de navegar para fora/voltar)'
slug: mercado-livre-falha-no-primeiro-carregamento-na-administracao-de-promocoes-do-mercado-livre-os-dados-so-sao-carregados-depois-de-navegar-para-foravoltar
status: PUBLISHED
createdAt: 2025-12-02T13:02:31.461Z
updatedAt: 2025-12-02T13:02:31.461Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-firstload-failure-in-mercado-libre-promotions-admin-data-only-loads-after-navigating-awayback
locale: pt
kiStatus: Fixed
internalReference: 1327218
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Finalizamos os ajustes.
## Simulação


Depois de instalar o módulo de promoções do Mercado Livre, a página de administração às vezes falha ao carregar os dados na primeira tentativa. O sintoma visível é uma tela de erro inicial; nas tentativas subsequentes (navegando para outro menu de administração e retornando, ou abrindo o módulo em uma nova guia), os dados são carregados corretamente. Isso afeta os usuários que acessam Admin > Promoções do Mercado Livre logo após a instalação ou em um novo carregamento da página


- Acesse Admin > Promoções do Mercado Livre pela primeira vez após a instalação (nova guia/sessão).
- Observe que a página mostra um erro e não carrega os dados esperados nessa primeira tentativa.
- Navegue para outro menu Admin e retorne ao módulo Promoções ou abra o módulo em uma nova guia do navegador.
- Observe que os dados agora são carregados corretamente na(s) tentativa(s) subsequente(s
## Workaround



- Navegue para outro menu de administração e depois retorne ao Mercado Livre Promoções; os dados deverão ser carregados.
- Como alternativa, abra as Promoções do Mercado Livre em uma nova guia do navegador; os dados deverão ser carregados nessa segunda tentativa.



