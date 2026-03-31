---
title: 'A pesquisa no campo de relação da interface do usuário do CRM falha quando o campo relacionado é de incremento automático'
slug: a-pesquisa-no-campo-de-relacao-da-interface-do-usuario-do-crm-falha-quando-o-campo-relacionado-e-de-incremento-automatico
status: PUBLISHED
createdAt: 2026-03-31T16:50:15.613Z
updatedAt: 2026-03-31T16:50:15.613Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: crm-ui-relationship-field-search-fails-when-related-field-is-auto-increment
locale: pt
kiStatus: Backlog
internalReference: 1386097
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na interface do usuário do Master Data v1 CRM, os campos de relacionamento que exibem o campo de incremento automático de uma entidade relacionada não conseguem carregar as opções de preenchimento automático. A interface do usuário emite uma solicitação DynamicForm/LoadAutocompleteValues que utiliza curingas, mas os campos de incremento automático são indexados como long (numéricos), que não suportam operações com curingas, resultando em um “filtro inválido” e bloqueando as edições no campo de relacionamento.

## Simulação

- Pré-requisitos:
  - Master Data v1 com um campo de relação na entidade A apontando para a entidade B.
  - O campo “Campo relacionado a ser exibido” da relação na entidade B é um campo de Autoincremento.
- Passos:
  - Abra o formulário da interface do usuário do CRM que contém o campo de relação.
  - Digite caracteres parciais para pesquisar um registro relacionado (isso aciona o preenchimento automático).
  - Observe a solicitação de back-end:
    - GET DynamicForm/LoadAutocompleteValues com containsExpression (curingas).
  - Resultado:
    - A solicitação retorna “filtro inválido” e a interface do usuário não consegue listar/selecionar registros relacionados para o campo.

## Workaround

- Edite o valor da relação via API em vez de usar a interface do usuário do CRM enquanto essa limitação existir.
- Se possível no modelo de dados do cliente, altere o campo “Campo relacionado a ser exibido” da relação para um campo de string (por exemplo, e-mail, nome, código externo) que suporte pesquisa de texto/caracteres curinga no preenchimento automático.