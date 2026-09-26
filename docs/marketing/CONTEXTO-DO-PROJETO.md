# Contexto do projeto — Scandex Plus

## Repositório

- GitHub: `https://github.com/sdx-joao/sdx-pages`
- Cópia local: `C:\Users\JOAO\Documents\Codex\ScandexPlus\sdx-pages`
- Branch inicial: `main`
- Site público: `https://scandexplus.com.br`

## Objetivo atual

Transformar o site da Scandex Plus em base para geração de oportunidades B2B e validar uma rotina de tráfego pago que possa se tornar uma fonte de renda. O orçamento inicial total informado é de **R$ 100**.

O plano completo de aquisição, métricas, campanhas, rotina e priorização está em `docs/marketing/plano-trafego-pago-scandex-plus.md`.

## Premissas já definidas

- Priorizar conversões qualificadas (diagnóstico, demonstração ou piloto), não apenas cliques.
- Antes de gastar, corrigir os pontos críticos de conversão e mensuração.
- Com R$ 100, testar somente Google Search de alta intenção; não dividir verba entre Google, Meta e LinkedIn.
- Manter prospecção orgânica como motor principal enquanto a mídia paga gera dados.
- Não publicar, fazer deploy, criar campanha ou gastar verba sem solicitação explícita do responsável.

## Produtos identificados

- ScandexPRO
- SDX Operações
- Servus
- Prontus

## Achados prioritários da auditoria

1. O número oficial foi confirmado como **+55 (21) 96721-6375** e o site foi padronizado em 26/09/2026.
2. Alguns CTAs não têm ação ou levam para canal incorreto.
3. Parte dos CTAs abertos por JavaScript não entra na mensuração atual de links.
4. O formulário preserva apenas parte dos parâmetros UTM.
5. Ainda faltam Google Ads/Meta Pixel; GA4 e consentimento já existem.
6. `robots.txt` e `sitemap.xml` não estavam disponíveis.
7. Há lacunas de canonical/Open Graph em páginas importantes.
8. A home carrega Babel/React em modo pouco adequado para produção e imagens pesadas.

## Próxima etapa sugerida

Auditar o código local contra esta lista, separar correções que não dependem de decisão comercial e preparar a primeira alteração segura. Não escolher unilateralmente qual telefone é o oficial.
