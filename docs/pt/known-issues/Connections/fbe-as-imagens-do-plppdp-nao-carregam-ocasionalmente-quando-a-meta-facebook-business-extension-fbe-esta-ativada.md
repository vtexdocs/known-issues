---
title: 'FBE As imagens do PLP/PDP não carregam ocasionalmente quando a Meta Facebook Business Extension (FBE) está ativada'
slug: fbe-as-imagens-do-plppdp-nao-carregam-ocasionalmente-quando-a-meta-facebook-business-extension-fbe-esta-ativada
status: PUBLISHED
createdAt: 2026-03-24T16:36:56.754Z
updatedAt: 2026-03-24T16:36:56.754Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: fbe-plppdp-images-intermittently-fail-to-load-when-meta-facebook-business-extension-fbe-is-enabled
locale: pt
kiStatus: Backlog
internalReference: 1382819
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Certas coleções de PLP e algumas PDPs deixam de exibir imagens de produtos de forma intermitente quando a Meta Facebook Business Extension está ativada. O problema ocorre com mais frequência em dispositivos móveis e no domínio de produção; os ambientes de QA e myvtex.com não apresentam essa falha. Desativar o aplicativo FBE restaura imediatamente o carregamento das imagens, e reativá-lo reproduz a falha, indicando uma correlação com a extensão na loja afetada

## Simulação

- Ative a Meta Facebook Business Extension na conta.
- Navegue até a PLP afetada no domínio de produção. Observe falhas intermitentes em que as imagens dos produtos não carregam.
- Abra uma PDP dessas coleções e verifique se as imagens também podem deixar de carregar. O comportamento é observado com mais frequência em dispositivos móveis.
- Desative a extensão FBE e recarregue as mesmas páginas PLP/PDP. As imagens começam a carregar normalmente novamente, confirmando a correlação.

## Workaround

Existe uma solução alternativa para este bug? Se sim, descreva-a aqui. Se não, escreva “N/A” ou “Não há solução alternativa disponível”. Não remova esta seção se não houver solução alternativa, por favor.