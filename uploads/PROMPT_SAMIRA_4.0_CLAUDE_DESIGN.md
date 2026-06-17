# PROMPT MESTRE — LANDING PAGE "SAMIRA 4.0"
### Para execução no Claude Design

---

## 1. PAPEL & MISSÃO

Você é **Diretor de Criação + Design Engineer** especializado em experiências digitais de marcas de luxo. Construa uma landing page de página única, imersiva e cinematográfica para uma celebração de 40 anos.

Esta página **não pode parecer um convite de evento**. Ela deve parecer o **lançamento de um produto premium** — o anúncio de uma nova versão de uma pessoa. Pense em uma keynote da Apple dirigida pela equipe de arte da Vogue.

Ao terminar de carregar, o visitante precisa sentir uma única coisa: *"Eu fui convidado para algo que importa."*

---

## 2. A GRANDE IDEIA (conceito unificador)

**A vida tratada como um software premium que não envelhece — evolui.**

Toda a página vive na tensão entre dois mundos que se completam:

- **Luxo editorial** → serifas elegantes, muito espaço em branco, fotografia tratada como capa de revista, dourado champagne, vinho profundo.
- **Lançamento de software premium** → linguagem de "versão 4.0", rótulos em monoespaçada, barra de progresso, changelog, micro-detalhes de interface refinada.

Essa fricção entre o orgânico (história, fé, família) e o tecnológico (versão, atualização, release) é a assinatura da página. Use-a com sutileza e consistência.

> Conceito-chave: **40 anos de história. Versão ilimitada.**
> *Porque algumas versões não envelhecem. Elas evoluem.*

---

## 3. PRINCÍPIOS DE DIREÇÃO DE ARTE

1. **Restrição é luxo.** Menos elementos, maiores, com mais ar. Nada apertado.
2. **Tipografia faz o trabalho pesado.** Títulos enormes, contraste dramático de escala.
3. **Movimento é convite, não distração.** Tudo se move com lentidão e intenção.
4. **Profundidade real.** Camadas, parallax, vidro e sombra criam um ambiente, não uma página plana.
5. **Consistência obsessiva.** Mesmos easings, mesmos espaçamentos, mesma família de detalhes em tudo.

---

## 4. SISTEMA DE DESIGN

### 4.1 Paleta e regras de uso

| Token | Hex | Uso |
|---|---|---|
| Vinho profundo | `#5E2433` | Fundos dramáticos, rodapé, overlays, seções de impacto |
| Off White | `#F8F5F2` | Fundo padrão / respiração entre seções escuras |
| Nude sofisticado | `#E9D9CE` | Superfícies suaves, cards, blocos de apoio |
| Dourado champagne | `#D4B06A` | Destaques, ícones, linhas, rótulos de "versão", detalhes premium |
| Texto | `#2A2A2A` | Corpo de texto sobre fundos claros |

**Regras:**
- O dourado é **acento**, nunca preenchimento. Linhas finas, palavras isoladas, ícones, bordas de 1px. Pode ganhar tratamento metálico (gradiente sutil claro→escuro) em títulos especiais.
- Alterne ritmo claro/escuro entre seções para criar respiração cinematográfica (claro → vinho → claro → nude → vinho).
- Sobre fotos, sempre overlay vinho translúcido + leve vinheta nas bordas para legibilidade e clima editorial.

### 4.2 Fundo vivo (background em movimento)

O fundo **nunca é estático**. Em toda a página exista uma camada de atmosfera viva, sutil e lenta:

- **Gradiente mesh animado** em vinho/nude/dourado que se desloca muito lentamente (loop de 20–30s), como luz de fim de tarde se movendo.
- **Grão/noise fílmico** sobreposto com baixa opacidade (8–12%) para textura de revista impressa.
- **Bloom dourado** suave reagindo ao scroll em pontos-chave (hero, formulário, rodapé).
- Movimento **imperceptível e contínuo** — o visitante sente que o fundo "respira", não que ele pisca.

### 4.3 Tipografia

- **Display / títulos:** uma serifa editorial de alto contraste (estilo **Cormorant Garamond / Playfair**). Pesos light e medium. Títulos gigantes, tracking levemente negativo.
- **Corpo / interface:** uma grotesca limpa e moderna (estilo **Inter / Geist / Neue Montreal**). Confortável, neutra, elegante.
- **Acento "tech":** uma **monoespaçada** (estilo Space Mono / JetBrains Mono) usada SÓ para os elementos do conceito de software: `v4.0`, `INSTALANDO...`, rótulos de seção, contadores, changelog. É o que costura o conceito.

**Escala:** contraste dramático. Hero entre `clamp(4rem, 14vw, 12rem)`. Títulos de seção grandes. Corpo confortável (18–20px) com altura de linha generosa (1.6–1.7). Rótulos em monoespaçada pequenos, caixa alta, tracking amplo (`+0.25em`).

### 4.4 Layout, grid e formas

- Grid de 12 colunas, contêiner máx ~1240px, margens laterais generosas.
- **Mobile-first impecável.** No mobile o impacto vem da tipografia e do movimento vertical, não de layouts complexos.
- Cantos suaves (12–20px). Linhas de 1px douradas como elementos gráficos recorrentes.
- Vidro (glassmorphism) sutil: `blur(16–24px)` + fundo translúcido + borda fina clara. Usar em cards de apoio, botão flutuante e modal — nunca em excesso.

---

## 5. SISTEMA DE MOVIMENTO

### 5.1 Sensação geral
- **Scroll suave (smooth scroll)** em toda a página — inércia leve, premium, sem brusquidão.
- Easing padrão tipo `cubic-bezier(0.22, 1, 0.36, 1)` (saída suave). Durações entre 0.6s e 1.2s. Nada rápido demais.
- Tudo entra com **fade + leve deslocamento** (16–40px) e, em títulos, **revelação por linha/palavra** (text reveal mascarado).

### 5.2 Como as seções se encaixam e se movem
- **Parallax em camadas:** fundo, fotos e textos se movem em velocidades diferentes (profundidade real).
- **Transições costuradas:** seções não "começam do zero" — o fim de uma prepara a próxima (a cor de fundo faz cross-fade, um elemento dourado atravessa a dobra, o título da próxima já começa a aparecer antes do corte).
- **Seções fixadas (pinned):** a Timeline e a seção "Versão 4.0" podem fixar na tela enquanto o conteúdo interno avança ao scroll (scroll horizontal na timeline; cards entrando em sequência na 4.0).
- **Scroll-linked:** números, barras e revelações progridem conforme a rolagem, não em cliques.

### 5.3 Microinterações
- Hover refinado em botões: leve elevação, brilho dourado que percorre a borda, mudança de cor lenta.
- Cards: tilt sutil + sombra que cresce no hover.
- Cursor com leve "magnetismo" nos CTAs (desktop).
- Estados de foco visíveis e elegantes (acessibilidade).

### 5.4 Respeito ao usuário
- Honrar `prefers-reduced-motion`: desligar parallax/auto-animações e manter apenas fades curtos.

---

## 6. ESTRUTURA DA PÁGINA (seção a seção)

> Use a copy abaixo **exatamente**. Direção de visual e movimento entre colchetes.

### 0. PRELOADER — "Instalando versão 4.0"
Tela cheia em vinho profundo. Em monoespaçada dourada:
`INSTALANDO VERSÃO 4.0`
Barra de progresso fina e elegante: `0% → 25% → 50% → 75% → 100%`, depois `Atualização concluída.`
[Ao concluir, a tela faz cortina/reveal vertical suave e entrega o Hero. Rápido o suficiente para não cansar — ~2.5s.]

### 1. HERO — `100vh`
[Carrossel fullscreen automático com transição lenta (cross-fade ~6s) de fotos da Samira: família, profissional, momentos felizes, detalhes do espaço. Overlay vinho translúcido + vinheta + grão.]

- Rótulo mono no topo: `v4.0 — EDIÇÃO LIMITADA`
- Título gigante centralizado: **SAMIRA 4.0** [revelação por letra/máscara]
- Headline: **40 anos de história. Versão ilimitada.**
- Subheadline: *Porque algumas versões não envelhecem. Elas evoluem.*
- Texto: No dia 04 de julho vamos celebrar a vida, os encontros e as histórias que nos trouxeram até aqui. Uma tarde especial cercada por pessoas especiais.
- Bloco de informações (mono, elegante): **04 de julho de 2026 · A partir das 15h · Recanto Paraíso · Mairiporã**
- Botão principal: **Confirmar Presença** | Botão secundário (outline): **Como Chegar**
- [Indicador de scroll animado discreto na base.]

### 1.5 CONTAGEM REGRESSIVA — "Tempo até o deploy da v4.0"
[Faixa logo abaixo do Hero, transição costurada (o fundo vinho do hero faz cross-fade para esta faixa). Estética futurista e premium, alinhada ao conceito de software.]

- Rótulo mono no topo: `CONTAGEM REGRESSIVA PARA O LANÇAMENTO`
- Quatro blocos: **DIAS · HORAS · MINUTOS · SEGUNDOS**, em monoespaçada gigante dourada sobre cartões de vidro (glassmorphism) com borda fina dourada e leve glow.
- Os dígitos atualizam com micro-animação de "flip"/contador rolante (estilo display digital premium), não troca seca.
- Linha fina dourada animada (scanline sutil) ou pulso de luz percorrendo os cartões para o ar "futurista".
- Abaixo, em serifa: *A nova versão chega em…* → **04 de julho de 2026 · 15h**
- Quando o contador zerar: troca para o estado **"Atualização concluída · v4.0 disponível"** com brilho dourado.

**Lógica:** contar até **2026-07-04T15:00:00 (horário de Brasília, GMT-3)**. Atualizar a cada segundo, com zero à esquerda nos dígitos. Em mobile, manter os quatro blocos em uma linha confortável (ou 2x2 se necessário), sem quebrar a elegância.

### 2. O MARCO DOS 40
[Layout dividido: imagem grande de um lado (parallax), texto do outro. Fundo claro.]
Título: **Chegar aos 40 não é sobre contar anos. É sobre colecionar histórias.**
Texto:
É sobre tudo o que foi vivido. Tudo o que foi aprendido. Tudo o que foi superado. Tudo o que ainda está por vir.
Os melhores capítulos raramente acontecem no início da jornada. Eles acontecem quando descobrimos quem realmente somos.

### 3. TIMELINE PREMIUM
[Seção fixada com scroll horizontal. Cada marco entra com fade+slide e ganho de cor dourada. Linha do tempo dourada conecta os pontos.]
Marcos: **Filha · Família · Carreira · Empreendedorismo · Propósito · Fé · Amizades · Conquistas · Sonhos · Versão 4.0**

### 4. O QUE HÁ DE NOVO NA VERSÃO 4.0
[Tratar como um "changelog/release notes" elegante. Rótulo mono: `RELEASE NOTES — v4.0`. Cards premium com ícones dourados, hover suave, entrada em sequência (stagger).]
Itens: **Mais propósito · Mais autenticidade · Mais coragem · Mais gratidão · Mais liberdade · Mais vida**

### 5. A EXPERIÊNCIA
[Grid editorial com cards grandes e fotos. Hover com zoom suave da imagem dentro da máscara.]
Itens: **Comida boa · Música ao vivo · Surpresas especiais · Natureza · Momentos inesquecíveis · Boas conversas · Muitos brindes**

### 6. RECANTO PARAÍSO
[Seção de impacto: imagem panorâmica com forte parallax + vídeo/Reel incorporado em moldura elegante (vidro/borda dourada).]
Reel: `https://www.instagram.com/reel/DB90tTSx4-Y/?igsh=dmNzY2V4NGFqdTdq`
Título: **O cenário perfeito para celebrar.**
Texto: Escolhemos um lugar que combina perfeitamente com essa nova fase. Bonito. Leve. Acolhedor. Cheio de vida.

### 7. COMO CHEGAR
[Google Maps incorporado com estilo escuro/elegante quando possível.]
Endereço: **Rua Pégaso, 10 — Mairiporã**
Botão grande: **Abrir Rota**

### 8. FORMULÁRIO DE CONFIRMAÇÃO *(seção mais importante — máximo capricho)*
[Card central em vidro sobre fundo vinho com bloom dourado. Campos com labels flutuantes, foco animado, validação elegante, estado de sucesso celebrativo após envio.]
Título: **Confirme sua presença**
Texto: Sua presença tornará esse momento ainda mais especial.
Campos: **Nome Completo · WhatsApp · Email · Número de convidados · Nome dos acompanhantes · Observações**
Checkbox: **Confirmo minha presença.**
Botão: **Confirmar Presença**

### BOTÃO FLUTUANTE (obrigatório, sempre visível)
[Inferior direita, em vidro com borda dourada e leve pulsar. Texto **Confirmar Presença**. Ao clicar: scroll suave até o formulário ou abre modal elegante. Esconde discretamente quando o formulário já está visível na tela.]

### FAQ — accordion premium
[Abertura suave, linha dourada, ícone que rotaciona.]
- **Que horas começa?** A partir das 15h.
- **Tem hora para acabar?** Não. A celebração seguirá livremente.
- **Posso levar acompanhante?** Sim. Informe no formulário.
- **Preciso confirmar?** Sim.

### INSTAGRAM
[Foto circular com borda dourada e leve hover.]
**@samiragouvea.mkt**
Texto: Acompanhe a jornada de quem inspira tantas pessoas a viverem sua melhor versão.

### RODAPÉ PREMIUM
[Fundo vinho, detalhes dourados, monoespaçada nos metadados.]
**SAMIRA 4.0** — 40 anos de história. Versão ilimitada.
04 de julho de 2026 · Recanto Paraíso · Rua Pégaso, 10 · Mairiporã
Links clicáveis: **Como Chegar (Google Maps)** · **Instagram** · **WhatsApp**
Frase final (grande, serifa):
*Os melhores capítulos não acontecem quando a vida começa. Eles acontecem quando entendemos quem somos.*

---

## 7. INTEGRAÇÃO SUPABASE (preparar)

O formulário deve estar pronto para integração futura. Estruture o envio para inserir na tabela `confirmacoes`:

| Campo | Tipo |
|---|---|
| `id` | uuid (pk) |
| `nome` | text |
| `telefone` | text |
| `email` | text |
| `convidados` | int |
| `acompanhantes` | text |
| `observacoes` | text |
| `created_at` | timestamp |

Inclua validação dos campos, estados de loading/erro/sucesso e deixe um ponto claro e comentado para conectar o `insert` do Supabase e o disparo de e-mail posterior.

---

## 8. QUALIDADE & REQUISITOS

- Responsividade impecável, **mobile-first**.
- Performance: lazy load de imagens, animações em GPU, sem travamentos.
- Acessibilidade: contraste, foco visível, labels, `prefers-reduced-motion`.
- SEO básico: title, description e Open Graph.
- Código limpo e organizado.

---

## 9. O QUE ENTREGAR

Uma landing page de página única, completa e funcional, com todas as seções acima, o sistema de design e a linguagem de movimento aplicados de forma consistente. O resultado final deve transmitir uma sensação inequívoca de **celebração exclusiva, emocionante e inesquecível** — um lançamento, não um convite.

Onde não houver fotos reais, use placeholders elegantes e coerentes com a paleta (não imagens genéricas), para que o visual premium se mantenha.
