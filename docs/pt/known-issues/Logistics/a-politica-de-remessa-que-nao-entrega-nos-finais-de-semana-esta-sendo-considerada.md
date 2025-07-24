---
title: 'A política de remessa que não entrega nos finais de semana está sendo considerada'
id: 25bhUZXA9sZvyFVNeMUSJl
status: PUBLISHED
createdAt: 2022-06-08T18:32:07.971Z
updatedAt: 2024-02-16T20:25:34.078Z
publishedAt: 2024-02-16T20:25:34.078Z
firstPublishedAt: 2022-06-08T18:32:08.836Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-policy-that-does-not-deliver-on-weekends-is-being-considered
locale: pt
kiStatus: No Fix
internalReference: 594828
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Antes, a funcionalidade "**Fins de semana e feriados**" e "**Horário comercial**" funcionavam em conjunto, em outras palavras, uma informação dependia da outra.
Entretanto, como algumas arquiteturas optaram por utilizar o "Horário comercial" como horário das docas, então havia a necessidade de romper esta informação.
Assim, com isto, os "fins de semana e feriados" não desconsideram as políticas de embarque que não entregariam em um determinado dia. E consequentemente, as políticas de embarque que não fazem entregas nos finais de semana e feriados são consideradas como tendo um SLA muito maior do que o esperado, desconsiderando outras políticas de embarque do mesmo método de embarque que cobririam o pedido.



## Simulação


Ter uma política de envio que a opção "**Fins de semana e feriados**" é **uncheed** (entrega ao sábado, entrega ao domingo e/ou entrega no feriado) e a única opção de entrega (horário comercial) desta política de envio é sábado e/ou domingo. Aqui está um exemplo:

Nenhuma entrega aos sábados, domingos e feriados:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Logistics/a-politica-de-remessa-que-nao-entrega-nos-finais-de-semana-esta-sendo-considerada_1.png)

O horário comercial é estabelecido apenas para o sábado:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Logistics/a-politica-de-remessa-que-nao-entrega-nos-finais-de-semana-esta-sendo-considerada_2.png)

Embora a política de embarque não seja capaz de entregar aos sábados, ela está disponível porque o sábado está incluído em seu horário de funcionamento, mas o tempo é muito maior do que o definido:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Logistics/a-politica-de-remessa-que-nao-entrega-nos-finais-de-semana-esta-sendo-considerada_3.png)



## Workaround


É possível habilitar a opção "Fins de semana e feriados" de acordo com o "Horário comercial" da política de embarque. Ou seja, se a política de remessa entregar somente no sábado, a opção de "Fins de Semana e Feriados" deve ser habilitada.

