# Plano de tráfego pago — Scandex Plus

## Objetivo

Usar a Scandex Plus como operação real para gerar diagnósticos, demonstrações, pilotos e contratos; construir um estudo de caso B2B; e depois vender gestão de tráfego a outras software houses.

A empresa vende software, digitalização, automação e gestão operacional. O resultado principal não será quantidade de mensagens, mas organizações qualificadas que avançam pelo pipeline.

## Oferta e posicionamento

### Produtos encontrados

- **ScandexPRO:** gestão documental, prontuários, O.S., inventário, estoque, permissões e relatórios.
- **SDX Operações:** O.S., inventário, patrimônio e estoque para clínicas e hospitais.
- **Servus:** app de campo com QR Code, assinatura, evidências e movimentação de patrimônio.
- **Prontus:** consulta móvel de prontuários; apresentado como produto em evolução.

### Serviços

Software sob medida, digitalização/GED, automação, consultoria e sustentação.

### Primeira oferta para mídia

> Diagnóstico inicial de 20 minutos para mapear ordens de serviço, inventário, estoque e controles paralelos de clínicas e hospitais.

Não anunciar todo o portfólio simultaneamente. Confirmar internamente diagnóstico sem compromisso, demonstração com dados fictícios e possibilidade de piloto.

---

## Auditoria do site em 26/09/2026

### Pontos positivos

- proposta B2B clara em SDX Operações;
- formulário que abre WhatsApp estruturado;
- GA4 G-N46CEK4ZCT instalado;
- consentimento negado por padrão, com aceitar/recusar;
- eventos generate_lead e whatsapp_click previstos;
- aviso para não inserir dados de pacientes;
- canonical e Open Graph em SDX Operações;
- visual e texto profissionais.

### Correções antes dos anúncios

1. **Contato unificado.** O número oficial confirmado é (21) 96721-6375; links e páginas foram padronizados em 26/09/2026.
2. **Corrigir CTAs da home.** “Conhecer as soluções” e “contato@scandexplus.com.br” aparecem como botões sem destino verificável.
3. **Corrigir e-mail.** Em Servus e Prontus, o texto do e-mail aponta para WhatsApp.
4. **Medir botões React.** O analytics observa links com wa.me/whatsapp.com, mas os CTAs principais usam window.open. Converter para links ou emitir evento explícito.
5. **Separar intenção de lead real.** Clique/submit do WhatsApp não é lead qualificado.
6. **Preservar atribuição.** O formulário leva somente utm_campaign ao WhatsApp.
7. **Completar mídia.** Não foram detectados Meta Pixel nem tag específica do Google Ads.
8. **SEO.** robots.txt e sitemap.xml não foram encontrados. Home, Servus e Prontus não mostraram canonical/Open Graph completos.
9. **Desempenho.** A home carrega React de desenvolvimento, Babel, vários scripts e imagens grandes. Para mídia, preferir landing estática e leve.

### Eventos necessários

~~~text
whatsapp_intent
lead_form_submit
lead_qualified
diagnostic_scheduled
diagnostic_completed
demo_completed
pilot_started
proposal_sent
contract_won
~~~

Depois de obter volume, otimizar para lead_qualified ou diagnostic_scheduled.

### Atribuição necessária

~~~text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
gclid
gbraid
wbraid
fbclid
landing_page
first_visit_at
~~~

Levar esses campos ao CRM. Nunca enviar respostas comerciais ou dados de pacientes às plataformas.

---

## Funil comercial

~~~text
Google / LinkedIn / Meta / conteúdo
                ↓
Landing page específica
                ↓
Formulário sem dados de pacientes
                ↓
WhatsApp ou agenda
                ↓
Qualificação
                ↓
Diagnóstico de 20 minutos
                ↓
Demonstração
                ↓
Piloto
                ↓
Proposta
                ↓
Contrato
~~~

### Lead qualificado

- organização aderente;
- problema real de O.S., inventário, estoque, documentos ou processos;
- responsável pelo projeto identificável;
- prazo ou motivação;
- aceita diagnóstico;
- não procura emprego nem assistência a computador.

### Perguntas

1. Qual organização e cidade?
2. Quantas pessoas participam da operação?
3. Qual processo gera mais retrabalho?
4. Como controlam O.S., inventário, estoque ou documentos?
5. Quais sistemas já existem?
6. Existe prazo?
7. Quem participa da decisão?

---

## Landing pages

Usar operacoes.html como base e criar:

- /operacoes-ordens-de-servico-saude;
- /inventario-patrimonio-clinicas;
- /estoque-manutencao-hospitalar;
- /ged-digitalizacao-prontuarios;
- /software-sob-medida-saude.

Cada página deve ter uma promessa, problema e público específicos; telas reais; processo; integrações; segurança descrita com precisão; CTA único; formulário curto; FAQ; e rastreamento.

Não usar Prontus como campanha principal enquanto estiver “em evolução”. Pode servir para conteúdo ou lista de interesse.

---

## Google Ads — prioridade inicial

### G1 — SDX Operações/O.S.

~~~text
software ordem de serviço hospital
sistema manutenção hospitalar
gestão de chamados hospital
ordem de serviço clínica
software manutenção clínica
gestão operação hospitalar
~~~

### G2 — inventário e patrimônio

~~~text
sistema inventário hospitalar
controle patrimônio hospital
inventário equipamentos clínica
rastreabilidade equipamentos hospitalares
controle equipamentos qr code
~~~

### G3 — GED/digitalização

~~~text
empresa digitalização documentos
digitalização prontuários médicos
sistema ged hospitalar
gestão eletrônica documentos saúde
digitalização acervo físico
~~~

Confirmar capacidade, região e requisitos de custódia.

### G4 — software sob medida

~~~text
software sob medida clínica
desenvolvimento sistema hospitalar
automação processos saúde
integração sistemas hospitalares
empresa software sob medida rj
~~~

### G5 — marca

~~~text
scandex plus
scandexpro
sdx operações
servus scandex
prontus scandex
~~~

### Negativas iniciais

~~~text
grátis
pirata
emprego
vaga
salário
curso
faculdade
apostila
como fazer
modelo planilha
template
assistência técnica computador
conserto notebook
scanner usado
~~~

Não negativar preço, orçamento ou demonstração automaticamente.

### Anúncios

**Título:** Ordens de Serviço para Clínicas  
**Título:** Inventário e Estoque Conectados  
**Título:** Diagnóstico Inicial de 20 Minutos  
**Descrição:** Centralize chamados, patrimônio, materiais e evidências. Conheça o SDX Operações em um diagnóstico.

Outro ângulo:

**Título:** Sua Operação Ainda Depende de Planilhas?  
**Descrição:** Mapeie controles paralelos e veja como conectar O.S., inventário e estoque sem implantar tudo de uma vez.

Não afirmar “100% seguro”, “adequado à LGPD” ou “elimina erros” sem comprovação.

---

## Meta Ads

Meta recebe verba menor inicialmente.

### Conteúdo

- 5 sinais de que sua O.S. virou conversa no WhatsApp;
- custo invisível de patrimônio sem histórico;
- como conectar atendimento, equipamento e material;
- o que mapear antes de comprar um sistema.

### Remarketing

Visitantes de produtos, visualizadores de vídeo, engajados e formulário iniciado, sem dados sensíveis.

### Click-to-WhatsApp

Ativar quando triagem e atribuição funcionarem. Medir lead qualificado, não conversa.

---

## LinkedIn e prospecção por contas

1. listar 50 organizações aderentes;
2. mapear 2–3 decisores por organização;
3. publicar conteúdo técnico semanal;
4. fazer abordagem humana;
5. convidar para diagnóstico;
6. usar mídia somente para contas prioritárias quando houver orçamento.

Personas: direção administrativa, operações, manutenção/engenharia clínica, patrimônio, TI e arquivo/prontuários.

Não automatizar spam.

---

## Conteúdo e criativos

### Pilares

O.S. rastreáveis; inventário; estoque vinculado à execução; evidências; GED; campo + gestão; diagnóstico de processos; segurança explicada com precisão.

### Formatos

Vídeo curto com fluxo real, carrossel problema→solução, checklist, demo com dados fictícios, estudo de caso autorizado, artigo e webinar.

### Primeiro criativo

1. chamado em mensagem isolada;
2. equipamento em planilha;
3. material sem vínculo;
4. SDX Operações conectando o fluxo;
5. CTA: “Agende um diagnóstico de 20 minutos”.

Nunca usar dados ou telas de pacientes reais.

---

## Ferramentas

| Função | Ferramenta |
|---|---|
| Demanda | Keyword Planner e Google Trends |
| Busca | Google Ads |
| Social | Meta Ads Manager |
| Analytics | GA4 |
| Tags | Google Tag Manager |
| SEO | Search Console |
| CRM | HubSpot, Airtable ou planilha |
| Painel | Looker Studio |
| Criativos | Figma/Canva e CapCut |
| Agenda | Calendly/Google Calendar |
| Automação | n8n, Make ou Zapier |

Contas em nome da empresa, 2FA, acessos individuais e mídia paga pela Scandex Plus.

---

## CRM e métricas

### Campos

~~~text
data
organização
contato/cargo
cidade/UF
segmento
problema
origem/campanha/conteúdo/termo
landing page
gclid/fbclid
qualificado
diagnóstico
demonstração
piloto
proposta/valor
contrato/receita
motivo de perda
~~~

### Indicadores

~~~text
CPL = mídia ÷ leads
CPQL = mídia ÷ leads qualificados
Custo por diagnóstico = mídia ÷ diagnósticos
Custo por oportunidade = mídia ÷ oportunidades
CAC = aquisição total ÷ contratos
Pipeline = soma do valor potencial
ROAS = receita atribuída ÷ mídia
Payback = CAC ÷ margem mensal
~~~

CTR e CPC são diagnósticos, não resultados.

---

## Orçamento de teste — 30 dias

| Canal | Verba |
|---|---:|
| Google Search | R$ 1.200–1.800 |
| Meta/remarketing | R$ 300–600 |
| Total | R$ 1.500–2.400 |

Com caixa menor, começar apenas com Google e uma oferta. Não dividir R$ 600 entre muitas campanhas.

Distribuição Google:

- 45% SDX Operações;
- 25% inventário;
- 20% GED, se disponível;
- 5% software sob medida;
- 5% marca.

LinkedIn pago fica para depois.

### Plano realista com apenas R$ 100

Com R$ 100, a mídia não será o principal motor comercial. Ela funcionará como um microteste para descobrir se as palavras escolhidas geram buscas e visitas relevantes. O motor principal será prospecção personalizada e conteúdo, que não exigem verba de mídia.

Não investir antes de unificar o telefone, corrigir os CTAs e testar o formulário e a atribuição.

#### Distribuição

| Uso | Valor |
|---|---:|
| Uma campanha Google Search | R$ 100 |
| Meta Ads | R$ 0 |
| LinkedIn Ads | R$ 0 |
| Display, YouTube e Performance Max | R$ 0 |

#### Configuração do microteste

- uma campanha de pesquisa;
- uma landing page: SDX Operações;
- uma região compatível com a capacidade comercial da empresa;
- somente rede de pesquisa do Google;
- R$ 10/dia por 10 dias ou R$ 7/dia por 14 dias;
- correspondência exata e de frase;
- no máximo cinco palavras de alta intenção;
- estratégia de cliques com limite de CPC inicial, ajustado se não houver impressões;
- formulário e WhatsApp testados antes da publicação.

Palavras para começar:

~~~text
[software ordem de serviço hospital]
[sistema manutenção hospitalar]
[sistema inventário hospitalar]
"ordem de serviço clínica"
"controle patrimônio hospital"
~~~

Não usar correspondência ampla, parceiros de pesquisa, Display ou expansão automática nesse teste.

#### Critérios de sucesso

O teste não terá volume para provar rentabilidade. Procurar estes sinais:

- buscas realmente relacionadas ao produto;
- pelo menos 10 cliques relevantes, se o mercado permitir;
- tempo e interação com a landing page;
- um formulário ou conversa qualificada;
- idealmente um diagnóstico agendado.

Um único diagnóstico qualificado já justifica continuar acompanhando o pipeline. Zero leads não prova que o produto não tem mercado: pode indicar baixo volume, anúncio, palavra, página, região ou oferta inadequados.

#### Regras de proteção da verba

- revisar termos de pesquisa todos os dias;
- negativar imediatamente buscas de emprego, cursos, downloads e assistência de computador;
- pausar palavra que consumir verba relevante apenas com buscas inadequadas;
- não alterar tudo durante os primeiros dias;
- não colocar crédito automático além dos R$ 100;
- não aumentar orçamento sem saber se os contatos foram qualificados.

#### Trabalho orgânico paralelo — R$ 0

1. selecionar 30 clínicas ou hospitais compatíveis;
2. mapear um ou dois responsáveis por operação, manutenção, patrimônio ou TI;
3. fazer cinco abordagens individuais por dia;
4. publicar duas vezes por semana no LinkedIn;
5. gravar uma demonstração curta com dados fictícios;
6. oferecer o diagnóstico de 20 minutos;
7. registrar origem e resultado no CRM.

Mensagem-base, sempre personalizada:

> Olá, [nome]. Trabalho na Scandex Plus, que desenvolve uma solução para conectar ordens de serviço, inventário e estoque em operações de saúde. Estamos conversando com gestores para entender como esses fluxos são controlados atualmente. Se esse tema fizer sentido para a [organização], posso apresentar em 20 minutos como mapeamos o processo, sem usar qualquer dado de paciente.

Com apenas R$ 100, essa prospecção personalizada possui maior chance de produzir uma reunião do que dividir a verba entre várias plataformas.

---

## Rotina

### Diária — 20 minutos

- verificar gasto, reprovações e conversões;
- registrar e qualificar;
- responder no horário;
- confirmar origem;
- atualizar CRM;
- anotar objeções.

### Duas vezes por semana — 45 minutos

- revisar termos/negativas;
- conferir localização, horário e dispositivo;
- comparar palavras com qualificados;
- testar formulário/WhatsApp/agenda;
- verificar UTMs e IDs.

### Semanal — 90 minutos

- reunião marketing + vendas;
- revisar qualificados, diagnósticos e oportunidades;
- produzir um criativo;
- atualizar relatório;
- transformar objeções em FAQ.

### Mensal — 2 horas

- calcular CPQL, custo por diagnóstico, CAC e pipeline;
- analisar perdas;
- comparar produtos/canais;
- decidir orçamento;
- atualizar estudo de caso.

---

## Implantação em 30 dias

### Semana 1

Unificar contatos; corrigir CTAs; implementar eventos/UTMs; configurar CRM; revisar privacidade; criar robots/sitemap/Search Console; confirmar oferta.

### Semana 2

Ajustar SDX Operações; criar landing de inventário; pesquisar palavras; criar G1, G2 e marca; preparar criativos; testar conversões.

### Semana 3

Lançar Google Search; revisar termos e qualificação; registrar oportunidades; não escalar sem medição confiável.

### Semana 4

Comparar CPQL; revisar diagnósticos; ativar remarketing se houver audiência; produzir conteúdo; fechar relatório.

---

## Como virar renda recorrente

Após 2–3 meses de dados, oferecer:

> Aquisição B2B para software houses: Google Ads, landing page, leads qualificados, CRM e relatório de pipeline.

Faixas iniciais:

- implantação: R$ 800–2.000;
- gestão: R$ 900–1.800/mês;
- mídia paga pelo cliente;
- páginas/automações separadas.

Um cliente pode superar R$ 1.000/mês. O caso precisa mostrar CPQL, diagnósticos, oportunidades e pipeline.

---

## Checklist pré-mídia

- [x] contato unificado;
- [ ] CTAs/e-mail funcionando;
- [ ] formulário sem dados de pacientes;
- [ ] GA4 validado;
- [ ] Google Ads tag instalada;
- [ ] Pixel somente se Meta for usado;
- [ ] intenção separada de qualificado;
- [ ] UTMs/click IDs preservados;
- [ ] CRM pronto;
- [ ] qualificação definida;
- [ ] oferta/capacidade confirmadas;
- [ ] landing publicada;
- [ ] privacidade revisada;
- [ ] negativas revisadas;
- [ ] orçamento separado;
- [ ] responsável comercial definido;
- [ ] rotina agendada.

## Fontes oficiais

- Google Ads — conversões: https://support.google.com/google-ads/answer/1722022
- Google Ads — Keyword Planner: https://support.google.com/google-ads/answer/7337243
- WhatsApp Business — click-to-WhatsApp: https://whatsappbusiness.com/products/ads-that-click-to-whatsapp/
- Meta Blueprint — anúncios para WhatsApp: https://www.facebookblueprint.com/student/path/253067-smb-ads-click-whatsapp-course
