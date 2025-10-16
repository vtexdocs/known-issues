---
title: As regras da tabela de preços não são mantidas ao criar várias regras sem atualizar a página
slug: as-regras-da-tabela-de-precos-nao-sao-mantidas-ao-criar-varias-regras-sem-atualizar-a-pagina
status: PUBLISHED
createdAt: 2025-10-16T19:25:16.346Z
updatedAt: 2025-10-16T19:25:16.346Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: price-table-rules-not-persisted-when-creating-multiple-rules-without-refreshing-the-page
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


