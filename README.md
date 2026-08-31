# Dr. Jorge Patrick Rocha — site institucional (exemplo)

Site estático em HTML/CSS/JS puro. Nenhuma dependência, nenhum build.

## Publicar no GitHub Pages

1. Crie um repositório e envie todos os arquivos desta pasta na raiz (`index.html` na raiz).
2. No repositório: **Settings → Pages**.
3. Em *Source*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
4. Salve. Em cerca de 1 minuto o site fica em `https://<usuario>.github.io/<repo>/`.

O arquivo `.nojekyll` já está incluído para o GitHub servir os arquivos como estão.

## Estrutura

```
index.html          Home
sobre.html          Sobre o médico
tratamentos.html    Tratamentos e procedimentos
blog.html           Blog / conteúdo
contato.html        Contato e formulário
assets/styles.css   Design system + camada mobile
assets/main.js      Interações (menu, reveals, barra de ação mobile)
assets/tweaks.js    Variações de tema (opcional)
assets/fonts/       Cherona + Lato
assets/logos/       Logos da marca
assets/placeholders/ Imagens provisórias (SVG) — substituir por fotos reais
```

## O que trocar antes de ir ao ar

- Número de WhatsApp e telefone: buscar por `5511999999999` em todos os arquivos.
- E-mail: `contato@drjorgepatrick.com.br`.
- CRM no rodapé.
- Imagens em `assets/placeholders/` — são marcações provisórias, não fotos.
