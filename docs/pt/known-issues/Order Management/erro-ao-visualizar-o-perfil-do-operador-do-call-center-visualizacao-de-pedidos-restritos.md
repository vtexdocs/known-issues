---
title: 'Erro ao visualizar o perfil do operador do call center (visualização de pedidos restritos)'
slug: erro-ao-visualizar-o-perfil-do-operador-do-call-center-visualizacao-de-pedidos-restritos
status: PUBLISHED
createdAt: 2024-11-05T19:34:18.000Z
updatedAt: 2026-09-14T23:03:16.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-when-viewing-the-call-center-operator-profile-restricted-orders-view
locale: pt
kiStatus: Fixed
internalReference: 1129938
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para limitar o acesso de um usuário de telemarketing aos pedidos criados por ele, você precisa atribuir a ele o seguinte perfil: “Operador de call center (visualização restrita de pedidos)”. No entanto, ao acessar a tela de perfis, você notará que o recurso associado “Exibir somente pedidos criados pelo usuário (via call center)” não está selecionado, o que dá a impressão de que o perfil não atende às suas expectativas. Porém, ao validar acessando o painel de administração com um usuário com esse perfil, você verá que o comportamento está correto, restringindo o acesso do usuário aos pedidos criados por ele.

## Simulação

Acesse a tela Nova Função

Pesquise por “Operador de call center (visualização restrita de pedidos)”

Ao acessar os detalhes do perfil, você verá que a opção “Exibir somente pedidos criados pelo usuário (via call center)” não está marcada;

Associe um usuário a este perfil;

Agora, ao acessar o OMS com o usuário associado ao perfil na etapa anterior, você verá que o acesso dele está limitado aos pedidos que ele mesmo criou, exatamente como esperado, mesmo que essa opção não esteja sendo exibida corretamente na interface do gerenciador de licenças.

## Workaround

Não há solução alternativa para este cenário, mas o impacto é apenas visual, pois a funcionalidade continua funcionando corretamente.

## **Solução alternativa**