# Betímetro · Observatório e Extensão de Escolhas Digitais

Protótipo interativo de alta fidelidade desenvolvido como projeto da disciplina de **IHC (Interação Humano-Computador) da UFABC** (Grupo 1).

> **Aviso importante — Protótipo interativo não funcional**
> Este repositório contém **apenas um protótipo estático de interface** para fins acadêmicos e de demonstração. **Não há motor real de análise de páginas nem funcionalidades de servidor/backend.** Todas as pontuações, auditorias técnicas, detecções na página demonstrativa, envio de relatos/sugestões e o fluxo de *Login com Google* são **simulados localmente no navegador** (com dados fictícios e persistência opcional via `localStorage`).

A proposta conceitual do **Betímetro** é auxiliar usuários a identificar e mitigar práticas enganosas e manipulativas (*dark patterns*) em interfaces digitais, integrando um **portal web informativo** a uma **extensão de navegador** baseada na escala unificada **Índice Ético (0 a 100 · quanto maior, melhor)**.

---

## 📂 Estrutura do Projeto

```text
.
├── index.html                  # Portal Web do Betímetro (ponto de entrada)
├── favicon.svg                 # Ícone do Betímetro
├── .nojekyll                   # Configuração para publicação direta no GitHub Pages
├── css/
│   ├── portal.css              # Estilos do portal web (inclui WCAG 2.2 AA/AAA)
│   └── extensao.css            # Estilos da extensão, modal de auditoria e overlays
├── js/
│   ├── portal.js               # Rotas, interações simuladas, acessibilidade e preferências locais
│   └── extensao.js             # Simulação do pop-up, auditoria técnica, VLibras e overlays
├── pages/
│   ├── extensao-menu.html      # Menu pop-up da extensão (visualização dedicada)
│   ├── demo-amazon.html        # Página estática demonstrativa com a simulação da extensão
│   └── demo-amazon-assets/     # Assets locais (CSS e imagens) da página demonstrativa
└── README.md                   # Documentação do projeto
```

---

## 🚀 Como Executar e Testar

O projeto é 100% estático (HTML5, CSS3 e Vanilla JavaScript), sem dependência de frameworks, servidores ou etapa de build. Pode ser aberto diretamente via **GitHub Pages** ou em qualquer servidor HTTP estático local.

### 1. Portal Web (Entrada Principal)
Abra `index.html`:
- Consulte o catálogo demonstrativo de sites (com categoria e **Índice Ético**), incluindo a página de detalhes da **Amazon Brasil** (`#site-0` / `#site-amazon`).
- Selecione sites para testar a tela de comparação e o botão **Limpar seleção**.
- Explore o menu **Acessibilidade** (tamanho do texto, Tema Escuro, Alto Contraste, Modo Simplificado e **VLibras**).
- Teste os formulários simulados de relatos (`#opinioes-0`) e sugestões (`#sugestoes`), incluindo o fluxo simulado de **Login com Google**.

### 2. Simulação da Extensão na Página Demonstrativa
Acesse **Extensão (Amazon)** no menu superior (ou abra `pages/demo-amazon.html`):
- A extensão inicia desligada por padrão; abra o menu pelo botão **Betímetro** na barra superior (ou pelo atalho `Alt + B`) e ative a extensão para visualizar os destaques simulados na página.
- Clique nos marcadores destacados na página para ver o tooltip de **Caminho Honesto / Seguro**.
- Ative **Mostrar opções avançadas** no menu para visualizar a **Auditoria Técnica Completa** simulada.

### 3. Menu da Extensão Isolado
Abra `pages/extensao-menu.html` para visualizar o pop-up da extensão em tela dedicada.

---

## 👥 Autoria

Projeto acadêmico desenvolvido na disciplina de Interação Humano-Computador (IHC) — UFABC, Quadrimestre 2026.3.
Todos os dados, pontuações, relatos, e-mails de exemplo e classificações têm finalidade estritamente didática e de demonstração.
