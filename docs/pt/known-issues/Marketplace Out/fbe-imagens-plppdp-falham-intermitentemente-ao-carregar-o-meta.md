---
title: 'FBE Imagens PLP/PDP falham intermitentemente ao carregar o Meta'
slug: fbe-imagens-plppdp-falham-intermitentemente-ao-carregar-o-meta
status: PUBLISHED
createdAt: 2026-03-24T19:36:10.000Z
updatedAt: 2026-09-14T22:38:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: fbe-plppdp-images-intermittently-fail-to-load-when-meta
locale: pt
kiStatus: Fixed
internalReference: 1382819
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

CORREÇÃO: Lançamos novas versões dos aplicativos vtex.facebook-pixel e vtex.facebook-fbe.

Coleções específicas de PLPs e algumas PDPs param intermitentemente de exibir imagens de produtos quando a extensão Meta Facebook Business Extension está ativada. O problema é mais frequente em dispositivos móveis e no domínio de produção; os ambientes de QA e myvtex.com não apresentam o problema. Desativar o aplicativo FBE restaura imediatamente o carregamento de imagens e reativá-lo reproduz a falha, indicando uma correlação com a extensão na loja afetada.

## Simulação

- Ative a extensão Meta Facebook Business Extension na conta.

- Navegue até a PLP afetada no domínio de produção. Observe falhas intermitentes em que as imagens dos produtos não carregam.

- Abra uma PDP dessas coleções e verifique se as imagens também podem não carregar. O comportamento é observado com mais frequência em dispositivos móveis.

- Desative a extensão FBE e recarregue as mesmas páginas de PLP/PDP. As imagens voltam a carregar normalmente, confirmando a correlação.

## Workaround

Existe alguma solução alternativa para este bug? Se sim, descreva-a aqui. Caso contrário, escreva "N/A" ou "Não há solução alternativa disponível". Por favor, não remova esta seção se não houver solução alternativa.