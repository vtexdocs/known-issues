---
title: 'A API Scroll retorna erros 429 e/ou 408 ao consultar entidades com um grande número de documentos, geralmente superior a milhões'
slug: a-api-scroll-retorna-erros-429-eou-408-ao-consultar-entidades-com-um-grande-numero-de-documentos-geralmente-superior-a-milhoes
status: PUBLISHED
createdAt: 2025-11-14T19:39:40.492Z
updatedAt: 2025-11-14T19:39:40.492Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: the-scroll-api-returns-429-andor-408-errors-when-querying-entities-with-a-large-number-of-documents-typically-exceeding-millions
locale: pt
kiStatus: Backlog
internalReference: 1035873
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A API Scroll foi projetada para lidar com grandes conjuntos de dados, permitindo a recuperação de documentos de forma rolável. No entanto, ao consultar entidades com um número significativo de documentos, normalmente na casa dos milhões, os usuários podem encontrar erros 429 (Too Many Requests) e/ou 408 (Request Timeout). Esses erros ocorrem devido ao alto volume de dados que estão sendo processados, o que pode sobrecarregar a API e resultar em limitação da taxa de solicitações ou timeouts.
## Simulação



1. Use a API Scroll para consultar uma entidade que contenha um grande número de documentos (por exemplo, milhões).
2. Observe as respostas da API.
3. Observe se a API retorna erros 429 (Too Many Requests) e/ou 408 (Request Timeout) durante o processo
## Workaround


Otimize a consulta implementando filtros para reduzir a carga na API, dividindo a solicitação em pedaços ou lotes menores.
Ao escolher os filtros, é importante prestar atenção se todos os documentos serão incluídos para garantir que a rolagem percorrerá todos os documentos da entidade.


