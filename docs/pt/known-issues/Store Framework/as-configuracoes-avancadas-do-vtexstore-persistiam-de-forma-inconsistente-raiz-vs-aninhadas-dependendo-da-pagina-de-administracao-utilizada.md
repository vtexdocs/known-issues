---
title: 'As configurações avançadas do vtex.store persistiam de forma inconsistente (raiz vs. aninhadas), dependendo da página de administração utilizada.'
slug: as-configuracoes-avancadas-do-vtexstore-persistiam-de-forma-inconsistente-raiz-vs-aninhadas-dependendo-da-pagina-de-administracao-utilizada
status: PUBLISHED
createdAt: 2026-09-17T20:42:54.000Z
updatedAt: 2026-09-17T20:42:54.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: vtexstore-advanced-settings-persisted-inconsistently-root-vs-nested-depending-on-which-admin-page-is-used
locale: pt
kiStatus: Backlog
internalReference: 1462792
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As opções de Configurações Avançadas do `vtex.store` (`enableCriticalCSS`, `enableCSSConcatenation`, `enableMenuRenderingOptimization` e outras declaradas em `advancedSettings` no esquema do aplicativo) são persistidas de forma diferente dependendo de qual das duas páginas de administração foi usada para salvá-las. `/admin/cms/store` (Configurações da Loja clássica, guias Geral/Avançado) salva essas opções diretamente na raiz do JSON de configurações. `/admin/apps/vtex.store@{version}/setup` (página genérica de Configurações do Aplicativo) salva as mesmas opções aninhadas em `advancedSettings`, correspondendo literalmente ao esquema declarado do aplicativo. Os componentes da loja virtual que consomem essas opções as leem apenas na raiz; portanto, uma opção configurada via `/admin/apps/vtex.store@@{version}/setup` aparece habilitada na interface de administração, mas não tem efeito na loja virtual.

## Simulação

- Acesse `/admin/apps/vtex.store@{versão instalada}/setup` para qualquer conta/espaço de trabalho.

- Habilite "Ativar otimização de renderização de menu" (`enableMenuRenderingOptimization`) e salve.

- Execute `vtex settings get vtex.store` — a flag aparece aninhada: `{"advancedSettings":{"enableMenuRenderingOptimization":true}}`.

- Observe que a otimização de renderização (montagem lenta de submenu, links SSR reduzidos) não surte efeito, mesmo que a interface administrativa a mostre como habilitada.

- Repita a mesma ativação/desativação em `/admin/cms/store` → guia Avançado → Salvar. `vtex settings get vtex.store` agora mostra a flag diretamente na raiz (`{"enableMenuRenderingOptimization":true}`), e a otimização do bloco `menu` entra em vigor.

## Workaround

Configure essas opções específicas de Configurações Avançadas por meio de `/admin/cms/store` (Configurações da Loja clássica, guia Avançado) em vez de `/admin/apps/vtex.store@.../setup`. Salvar pela página clássica mantém as opções no formato raiz/plano que os componentes da loja virtual (por exemplo, `menu`) realmente leem.