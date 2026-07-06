---
title: 'A opção `oneOfVariant` apaga os dados do campo e retorna à primeira variante como padrão ao carregar o jogo.'
slug: a-opcao-oneofvariant-apaga-os-dados-do-campo-e-retorna-a-primeira-variante-como-padrao-ao-carregar-o-jogo
status: PUBLISHED
createdAt: 2026-07-06T20:26:16.000Z
updatedAt: 2026-07-06T20:26:16.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: oneof-variant-switch-erases-field-data-and-defaults-to-first-variant-on-load
locale: pt
kiStatus: Backlog
internalReference: 1430638
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O formulário de entrada de conteúdo do Headless CMS lida parcialmente com campos `oneOf`: ele valida o esquema corretamente, mas a interface do usuário sempre renderiza, por padrão, apenas a primeira variante definida em `oneOf`. Quando o editor alterna para uma variante diferente, todos os dados inseridos anteriormente são apagados.

## Simulação

1. Crie ou abra um tipo de conteúdo cujo esquema inclua uma matriz cujos itens usem `oneOf` para definir duas ou mais formas de objeto possíveis.

2. Abra o formulário de entrada de conteúdo para esse tipo de conteúdo.

3. Observe que a interface do usuário renderiza apenas a **primeira** variante de `oneOf` por padrão, independentemente dos dados já salvos na entrada.

4. Preencha os dados para a variante atualmente exibida.

5. Alterne para uma variante diferente usando o seletor de variantes.

6. Observe que todos os dados inseridos anteriormente são **apagados** e substituídos por um formulário vazio para a variante recém-selecionada.
7. Ao retornar à primeira variante, confirma-se que os dados foram perdidos — eles não persistem entre as mudanças de variante.

## Workaround

Defina a variante desejada **antes** de preencher qualquer conteúdo e não a altere posteriormente. Se uma mudança de variante for inevitável, anote manualmente os valores dos campos existentes antes de alternar.

Como alternativa em nível de esquema, remova `oneOf` e combine ambas as variantes em um único objeto com todos os campos opcionais, usando um campo discriminador (por exemplo, `"groupType": { "enum": ["default", "faq"] }`) para indicar qual forma está ativa. Isso elimina a rigidez do esquema, mas evita completamente o problema de interface do usuário.