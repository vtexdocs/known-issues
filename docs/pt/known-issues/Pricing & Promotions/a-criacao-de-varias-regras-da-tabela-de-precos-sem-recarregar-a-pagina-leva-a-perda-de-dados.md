---
title: A criação de várias regras da tabela de preços sem recarregar a página leva à perda de dados
slug: a-criacao-de-varias-regras-da-tabela-de-precos-sem-recarregar-a-pagina-leva-a-perda-de-dados
status: PUBLISHED
createdAt: 2025-07-08T12:48:30.419Z
updatedAt: 2025-07-08T12:48:30.419Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: creating-multiple-price-table-rules-without-page-reload-leads-to-data-loss
locale: pt
kiStatus: Backlog
internalReference: 1256473
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao criar várias regras de preço para **Tabelas de preço**, a interface não recarrega corretamente as regras existentes. Isso pode fazer com que as regras criadas anteriormente desapareçam da interface do usuário e, em alguns casos, sejam substituídas quando novas regras são adicionadas, levando à perda de dados. Esse comportamento não ocorre quando as regras estão associadas a políticas comerciais, somente a tabelas de preços.

##
## Simulação



- Acessar o administrador de qualquer conta
- Vá para a tela Regras de preço
- Crie uma regra de preço associada a uma **Tabela de preços** (não a uma política comercial).
- Sem atualizar a página, crie uma segunda e uma terceira regra para a mesma tabela de preços.
- Observe o seguinte:
  - A primeira e a segunda regras podem desaparecer da interface do usuário.
  - Depois de adicionar a segunda regra, a primeira **não é mais mantida**.
- Reproduza isso algumas vezes e confirme que somente a última regra permanece salva, enquanto as outras são perdidas
## Workaround


Atualize a página (F5) depois de criar cada regra de preço para as tabelas de preços. Isso garante que a interface do usuário recarregue todas as regras existentes antes que uma nova seja adicionada, evitando inconsistências e perda de regras salvas anteriormente.


