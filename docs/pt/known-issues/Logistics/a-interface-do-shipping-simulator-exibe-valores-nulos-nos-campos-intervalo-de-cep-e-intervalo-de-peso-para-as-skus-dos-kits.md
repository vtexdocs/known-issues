---
title: 'A interface do Shipping Simulator exibe valores nulos nos campos “Intervalo de CEP” e “Intervalo de peso” para as SKUs dos kits'
slug: a-interface-do-shipping-simulator-exibe-valores-nulos-nos-campos-intervalo-de-cep-e-intervalo-de-peso-para-as-skus-dos-kits
status: PUBLISHED
createdAt: 2026-03-23T21:30:57.960Z
updatedAt: 2026-03-23T21:30:57.960Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-simulator-ui-returns-empty-postal-code-range-weight-range-for-kits-skus
locale: pt
kiStatus: Backlog
internalReference: 1382356
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o SKU é um KIT, o mecanismo de logística não calcula o frete com base no próprio SKU do kit. Em vez disso, ele desmembra o kit e considera os componentes individualmente.

No Simulador de Frete da plataforma de logística, os SKUs de KIT retornam o SLA normalmente, mas os campos de metadados `Intervalo de CEP` e `Intervalo de peso` aparecem vazios.
Isso ocorre apenas para KITS, mas funciona normalmente com SKUs individuais.

## Simulação

Pré-requisitos: Uma conta VTEX com Logística configurada e pelo menos um SKU de KIT, com componentes devidamente configurados e tabela de frete preenchida.

Etapas:

- Abra a Simulação de Frete no Admin em Logística > Simulador de Frete.
- Simule usando um SKU de KIT e um código postal
- Observe que as opções de SLA são retornadas, mas os campos “Intervalo de CEP” e “Intervalo de peso” estão vazios no painel de resultados:
 ![](https://vtexhelp.zendesk.com/attachments/token/CvTMgIytcecA07TOkM22vBcDq/?name=image.png)


- O mesmo aparece na depuração do DevTools:
 ![](https://vtexhelp.zendesk.com/attachments/token/rxmxeFqsTvUJ9GzXH17QNd1KZ/?name=image.png)


- Compare simulando um SKU que não seja KIT e observe que os campos são preenchidos conforme o esperado para SKUs simples.

 ![](https://vtexhelp.zendesk.com/attachments/token/VlnVeTUDJvtU8zEBBjFlh9iLv/?name=image.png)

## Workaround

Não há solução alternativa, uma vez que **não foi identificado nenhum impacto operacional no checkout ou no cálculo do SLA.**
O problema afeta apenas a exibição da simulação, mas o cálculo está correto e as compras não são afetadas.