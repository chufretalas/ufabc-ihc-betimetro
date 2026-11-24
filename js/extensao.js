/**
 * Betímetro · Extensão de Avaliação de Escolhas Digitais (Dark Patterns)
 * Motor de Análise 100% Local, Controle de Energia, Auditoria Técnica Completa,
 * Acessibilidade Sincronizada (Portal <-> Extensão) e Login Google Simulado
 * Disciplina de IHC - UFABC (Projeto de Alta Fidelidade)
 */

(() => {
    "use strict";

    const GOOGLE_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.08 3.56-5.15 3.56-8.65z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3a7.17 7.17 0 0 1-10.67-3.77H1.4v3.09A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.39 14.32a7.2 7.2 0 0 1 0-4.64V6.59H1.4a12 12 0 0 0 0 10.82l3.99-3.09z"/><path fill="#EA4335" d="M12 4.75c1.76 0 3.34.61 4.58 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.4 6.59l3.99 3.09A7.17 7.17 0 0 1 12 4.75z"/></svg>`;

    // Base de dados simulada da análise local da página atual (Amazon Brasil)
    // Escala unificada em toda a plataforma: Índice Ético 0 a 100 (quanto maior, melhor)
    const CURRENT_AUDIT = {
        domain: "amazon.com.br",
        category: "Compras",
        url: "https://www.amazon.com.br/Gatorade-Gx-inoxidavel-preto-946/dp/B0C5Y6H8HS",
        title: "Gatorade Gx inoxidável, preto, 946 ml : Amazon.com.br",
        ethicalIndex: 36, // 100 - 64 deduções = 36/100 (quanto maior, melhor)
        totalPenalty: 64,
        scoreLevel: "hi", // 'hi' (0-49), 'mi' (50-79), 'lo' (80-100)
        scoreLabel: "Mais sinais de atenção",
        simpleScoreLabel: "Muitos pontos de atenção",
        analyzedAt: "04/11/2026 às 17:10",
        totalDomNodes: 1842,
        totalElementsScanned: 184,
        scanDurationSec: 1.42,
        engineVersion: "Motor de Auditoria Betímetro v1.4 · Local",
        auditHash: "sha256:8f4b2c9e71d04a3b",
        patternsCount: 4,
        auditScores: [
            { id: "eth", label: "Índice Ético Geral", simpleLabel: "Nota geral", score: 36, cls: "hi" },
            { id: "aut", label: "Autonomia de Escolha", simpleLabel: "Liberdade de escolha", score: 32, cls: "hi" },
            { id: "trn", label: "Transparência de Custos", simpleLabel: "Clareza nos preços", score: 54, cls: "mi" },
            { id: "a11y", label: "Acessibilidade & Clareza", simpleLabel: "Facilidade de leitura", score: 82, cls: "lo" }
        ],
        breakdown: [
            { id: "ins", name: "Assinatura", pts: 26, cls: "ins", color: "#aa4c3f" },
            { id: "urg", name: "Pressão / Impulso", pts: 22, cls: "urg", color: "#d97706" },
            { id: "soc", name: "Anúncio / Preço", pts: 16, cls: "soc", color: "#b45309" }
        ],
        patterns: [
            {
                id: "pat-prime",
                title: "Insistência no Prime (Assinatura em destaque)",
                simpleTitle: "Convite insistente para pagar assinatura mensal",
                category: "Insistência na Assinatura",
                simpleCategory: "Assinatura mensal",
                tag: "ins",
                severity: "Alta",
                severityClass: "hi",
                penaltyPts: 26,
                confidence: 96,
                method: "Regra local de estrutura + Assimetria visual",
                simpleMethod: "Verificação visual local",
                targetSelector: "#prime-abb-signup-button",
                containerSelector: ".abb-widget-box-border",
                location: "Caixa de Compra",
                simpleLocation: "Área de compra do produto",
                shortReason: "Destaca assinatura mensal paga (R$ 19,90/mês) acima da compra avulsa.",
                simpleShortReason: "Tenta fazer você assinar um plano mensal em vez de comprar só este produto.",
                justification: "O banner induz o consumidor a assinar o serviço recorrente Amazon Prime (R$ 19,90/mês) prometendo frete grátis imediato para este pedido. A opção de compra avulsa com frete padrão não recebe o mesmo destaque visual, configurando indução por assimetria visual e benefício atrelado à recorrência.",
                simpleJustification: "Este quadro chama muita atenção para o plano pago todo mês (R$ 19,90) usando a promessa de frete grátis, deixando a compra comum mais escondida.",
                honestPath: "Você não é obrigado a assinar o Prime. Use 'Adicionar ao carrinho' e escolha o frete padrão para comprar sem cobrança mensal.",
                simpleHonestPath: "Você não precisa assinar nada. Clique em 'Adicionar ao carrinho' e escolha a entrega comum para pagar só por este produto."
            },
            {
                id: "pat-buynow",
                title: "Compre Agora com 1 Clique (Decisão Apressada)",
                simpleTitle: "Botão de compra rápida sem tela de conferência",
                category: "Urgência & Decisão Prematura",
                simpleCategory: "Compra apressada",
                tag: "urg",
                severity: "Média",
                severityClass: "mi",
                penaltyPts: 22,
                confidence: 88,
                method: "Heurística local de fluxo de checkout",
                simpleMethod: "Verificação local de botões de compra",
                targetSelector: "#buy-now-button",
                containerSelector: "#buyNow_feature_div",
                location: "Botão de Ação Primária",
                simpleLocation: "Botão principal de compra",
                shortReason: "Pula a tela de revisão de endereço, frete e valor total.",
                simpleShortReason: "Cobra na hora sem mostrar a tela para conferir endereço e frete.",
                justification: "O botão 'Compre agora' dispara a ordem de pagamento imediatamente usando dados previamente gravados, dispensando a tela de revisão e confirmação do pedido. Isso impede a conferência prévia do endereço de entrega selecionado, valor discriminado do frete e opções de parcelamento.",
                simpleJustification: "Ao clicar em 'Compre agora', o site fecha a compra direto usando seu cartão salvo, sem mostrar antes quanto vai custar o frete ou qual endereço será usado.",
                honestPath: "Prefira 'Adicionar ao carrinho' para revisar frete, prazo e forma de pagamento antes de confirmar a cobrança.",
                simpleHonestPath: "Use 'Adicionar ao carrinho'. Assim você vê com calma o preço final, o frete e o endereço antes de pagar."
            },
            {
                id: "pat-sponsored",
                title: "Carrossel Patrocinado Disfarçado de Recomendação",
                simpleTitle: "Anúncios pagos misturados com produtos comuns",
                category: "Interferência Visual & Prova Social",
                simpleCategory: "Anúncio disfarçado",
                tag: "soc",
                severity: "Média",
                severityClass: "mi",
                penaltyPts: 10,
                confidence: 91,
                method: "Análise contextual local + Contraste WCAG",
                simpleMethod: "Verificação local de anúncios e cores",
                targetSelector: "#sp_detail2",
                containerSelector: "#sp_detail2",
                location: "Seção de Produtos Relacionados",
                simpleLocation: "Lista de produtos parecidos",
                shortReason: "Anúncios pagos com visual quase idêntico às recomendações comuns.",
                simpleShortReason: "Estes itens são propagandas pagas, mas parecem indicações comuns.",
                justification: "Os produtos deste carrossel são anúncios pagos por vendedores terceiros, mas são apresentados com o mesmo design, estrelas e tipografia dos produtos recomendados por relevância ou histórico de navegação. A palavra 'Patrocinado' é grafada em cinza claro com contraste reduzido.",
                simpleJustification: "As lojas pagaram para mostrar estes produtos aqui, mas o aviso 'Patrocinado' fica bem apagado e eles parecem recomendações normais.",
                honestPath: "Compare preços e avaliações fora dos itens marcados como 'Patrocinado' antes de escolher.",
                simpleHonestPath: "Lembre que estes itens são anúncios pagos. Compare com outros resultados da página antes de escolher."
            },
            {
                id: "pat-price",
                title: "Ênfase Visual no Parcelamento sem Custo Total Claro",
                simpleTitle: "Valor da parcela maior que o preço total",
                category: "Taxas Pouco Visíveis",
                simpleCategory: "Preço pouco claro",
                tag: "tax",
                severity: "Baixa",
                severityClass: "mi",
                penaltyPts: 6,
                confidence: 78,
                method: "Regra tipográfica local / Proporção",
                simpleMethod: "Verificação local de tamanho dos preços",
                targetSelector: "#corePriceDisplay_desktop_feature_div",
                containerSelector: "#corePriceDisplay_desktop_feature_div",
                location: "Área de Preço Principal",
                simpleLocation: "Área do preço do produto",
                shortReason: "Parcela aparece em destaque enquanto o total fica menos evidente.",
                simpleShortReason: "O valor de cada parcela chama mais atenção do que o preço total.",
                justification: "O valor da parcela ('R$ 54,90 em até 3x') recebe destaque tipográfico expressivo enquanto o valor total e eventuais encargos no pagamento à vista ou a prazo aparecem em tamanho reduzido.",
                simpleJustification: "O site mostra o valor de cada parcela bem destacado, enquanto o valor total da compra aparece menor e mais difícil de notar.",
                honestPath: "Confira sempre o valor total à vista e a soma de todas as parcelas antes de fechar a compra.",
                simpleHonestPath: "Olhe sempre o valor total da compra e some todas as parcelas antes de pagar."
            }
        ]
    };

    // Estado da extensão (sincronizado com Portal via localStorage 'bm-pf' e 'bm-auth')
    const state = {
        extensionEnabled: true,
        highlightsActive: true,
        realtimeAlerts: true,
        advancedVisible: false,
        seniorMode: false,
        themePref: "auto", // 'auto' | 'light' | 'dark'
        highContrast: false,
        fontSize: 100,
        prevFontSize: 100,
        vlibrasActive: false,
        auth: null,
        pendingPublishAfterLogin: false,
        expandedCards: new Set(["pat-prime"]),
        activeInspectorId: null,
        activeInspectorPat: null,
        activeInspectorTarget: null,
        activeContestTarget: null,
        auditViewRendered: false
    };

    let dom = {};
    let vlibrasScriptLoaded = false;
    let vlibrasWidgetInitialized = false;
    let vlibrasFailed = false;

    function isNoSave() {
        try {
            return sessionStorage.getItem("bm-ns") === "1";
        } catch {
            return false;
        }
    }

    function escapeHtml(t) {
        return String(t).replace(/[&<>"]/g, (c) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        })[c]);
    }

    function resolveEffectiveTheme(pref) {
        if (pref === "dark" || pref === "light") return pref;
        try {
            return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        } catch {
            return "light";
        }
    }

    // =========================================================================
    // PERSISTÊNCIA E SINCRONIZAÇÃO DE PREFERÊNCIAS (bm-pf) E SESSÃO (bm-auth)
    // =========================================================================
    function loadSyncedPreferences() {
        try {
            const raw = localStorage.getItem("bm-pf");
            if (raw) {
                const pf = JSON.parse(raw);
                state.fontSize = [100, 115, 130].includes(+pf.fs) ? +pf.fs : 100;
                state.themePref = ["auto", "light", "dark"].includes(pf.th) ? pf.th : "auto";
                state.highContrast = !!pf.hc;
                state.seniorMode = !!pf.sp;
                state.vlibrasActive = !!pf.vl;
                state.prevFontSize = [100, 115, 130].includes(+pf.pfs) ? +pf.pfs : 100;
            }
        } catch {}

        try {
            const rawAuth = localStorage.getItem("bm-auth");
            state.auth = rawAuth ? JSON.parse(rawAuth) : null;
        } catch {
            state.auth = null;
        }
    }

    function saveSyncedPreferences() {
        if (isNoSave()) return;
        try {
            const existing = JSON.parse(localStorage.getItem("bm-pf") || "{}");
            const payload = Object.assign({}, existing, {
                fs: state.fontSize,
                th: state.themePref,
                hc: state.highContrast ? 1 : 0,
                sp: state.seniorMode ? 1 : 0,
                vl: state.vlibrasActive ? 1 : 0,
                pfs: state.prevFontSize
            });
            localStorage.setItem("bm-pf", JSON.stringify(payload));
        } catch {}
    }

    function saveAuth(user) {
        state.auth = user;
        if (!isNoSave()) {
            try {
                if (user) localStorage.setItem("bm-auth", JSON.stringify(user));
                else localStorage.removeItem("bm-auth");
            } catch {}
        }
        renderAuthBar();
    }

    function applyAllPreferences(options = {}) {
        const effectiveTheme = resolveEffectiveTheme(state.themePref);
        document.documentElement.setAttribute("data-btm-theme", effectiveTheme);
        document.documentElement.setAttribute("data-btm-contrast", state.highContrast ? "high" : "normal");
        document.documentElement.style.setProperty("--btm-zoom", (state.fontSize / 100).toFixed(2));
        document.body.classList.toggle("btm-senior-mode", state.seniorMode);

        if (dom.btnThemeToggle) {
            dom.btnThemeToggle.setAttribute("aria-pressed", effectiveTheme === "dark" ? "true" : "false");
        }
        if (dom.btnContrastToggle) {
            dom.btnContrastToggle.setAttribute("aria-pressed", state.highContrast ? "true" : "false");
        }
        if (dom.toggleSenior) {
            dom.toggleSenior.checked = state.seniorMode;
        }
        [dom.btnA11yNormal, dom.btnA11yLarge, dom.btnA11yXLarge].forEach((btn) => {
            if (btn) btn.setAttribute("aria-pressed", "false");
        });
        if (state.fontSize === 100 && dom.btnA11yNormal) dom.btnA11yNormal.setAttribute("aria-pressed", "true");
        if (state.fontSize === 115 && dom.btnA11yLarge) dom.btnA11yLarge.setAttribute("aria-pressed", "true");
        if (state.fontSize === 130 && dom.btnA11yXLarge) dom.btnA11yXLarge.setAttribute("aria-pressed", "true");

        applySimplifiedTexts();
        renderGauge(CURRENT_AUDIT.ethicalIndex);
        renderMenuContent();
        applyVlibras(state.vlibrasActive, !!options.announceVlibras);

        if (state.activeInspectorPat && state.activeInspectorTarget && state.activeInspectorId) {
            showInspectorTooltip(state.activeInspectorPat, state.activeInspectorTarget, true);
        }
        if (state.auditViewRendered && dom.auditModal && !dom.auditModal.hasAttribute("hidden")) {
            renderAuditReportView();
        }
    }

    // =========================================================================
    // VLIBRAS (WIDGET OFICIAL + FALLBACK ACESSÍVEL OFFLINE)
    // =========================================================================
    function updateVlibrasFallback(show, message) {
        let box = document.getElementById("btm-vlibras-fallback");
        if (!show) {
            if (box) box.remove();
            return;
        }
        if (!box) {
            box = document.createElement("div");
            box.id = "btm-vlibras-fallback";
            box.className = "btm-vlibras-fallback";
            box.setAttribute("role", "status");
            box.setAttribute("aria-live", "polite");
            document.body.appendChild(box);
        }
        box.innerHTML = `
            <div>
                <strong>🤟 VLibras ativado</strong>
                <p style="margin:2px 0 0;font-size:12px;color:var(--btm-tx-muted);">${escapeHtml(message)}</p>
            </div>
            <button class="btm-btn-sm" type="button" id="btm-vlibras-fallback-off" aria-label="Desativar VLibras">Desativar</button>
        `;
        const offBtn = document.getElementById("btm-vlibras-fallback-off");
        if (offBtn) {
            offBtn.addEventListener("click", () => {
                state.vlibrasActive = false;
                saveSyncedPreferences();
                applyVlibras(false, true);
            });
        }
    }

    function applyVlibras(enabled, announce) {
        if (dom.btnVlibrasToggle) {
            dom.btnVlibrasToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
            dom.btnVlibrasToggle.setAttribute(
                "aria-label",
                enabled ? "Desativar tradutor VLibras para Libras" : "Ativar tradutor VLibras para Libras"
            );
        }

        let vwRoot = document.getElementById("btm-vlibras-root");
        if (!enabled) {
            if (vwRoot) vwRoot.style.display = "none";
            updateVlibrasFallback(false);
            if (announce) announceLive("Tradutor VLibras para Libras desativado.");
            return;
        }

        if (!vwRoot) {
            vwRoot = document.createElement("div");
            vwRoot.id = "btm-vlibras-root";
            vwRoot.setAttribute("vw", "");
            vwRoot.className = "enabled";
            vwRoot.innerHTML = `<div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>`;
            document.body.appendChild(vwRoot);
        } else {
            vwRoot.style.display = "";
        }

        if (announce) announceLive("Tradutor VLibras para Libras ativado.");

        if (vlibrasFailed) {
            updateVlibrasFallback(true, "Widget oficial indisponível offline ou bloqueado. Indicador de Libras ativo.");
            return;
        }

        if (window.VLibras && window.VLibras.Widget) {
            if (!vlibrasWidgetInitialized) {
                try {
                    new window.VLibras.Widget("https://vlibras.gov.br/app");
                    vlibrasWidgetInitialized = true;
                } catch {
                    vlibrasFailed = true;
                    updateVlibrasFallback(true, "Widget oficial indisponível. Indicador de Libras ativo.");
                }
            }
            return;
        }

        if (!vlibrasScriptLoaded) {
            vlibrasScriptLoaded = true;
            const script = document.createElement("script");
            script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
            script.async = true;
            const fallbackTimer = setTimeout(() => {
                if (!vlibrasWidgetInitialized && state.vlibrasActive) {
                    updateVlibrasFallback(true, "Carregando tradutor VLibras. Se estiver offline, este indicador permanece ativo.");
                }
            }, 2500);
            script.onload = () => {
                clearTimeout(fallbackTimer);
                try {
                    if (window.VLibras && window.VLibras.Widget) {
                        new window.VLibras.Widget("https://vlibras.gov.br/app");
                        vlibrasWidgetInitialized = true;
                        updateVlibrasFallback(false);
                    } else {
                        throw new Error("VLibras unavailable");
                    }
                } catch {
                    vlibrasFailed = true;
                    if (state.vlibrasActive) {
                        updateVlibrasFallback(true, "Widget oficial indisponível. Indicador de Libras ativo.");
                    }
                }
            };
            script.onerror = () => {
                clearTimeout(fallbackTimer);
                vlibrasFailed = true;
                if (state.vlibrasActive) {
                    updateVlibrasFallback(true, "Widget oficial indisponível offline ou bloqueado. Indicador de Libras ativo.");
                }
            };
            document.head.appendChild(script);
        }
    }

    // =========================================================================
    // MODO SIMPLIFICADO (LINGUAGEM DIRETA SEM JARGÕES)
    // =========================================================================
    function applySimplifiedTexts() {
        const s = state.seniorMode;
        const setTxt = (id, normal, simple) => {
            const el = document.getElementById(id);
            if (el) el.textContent = s ? simple : normal;
        };
        const setHtml = (id, normal, simple) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = s ? simple : normal;
        };

        setTxt("btm-header-subtitle", "Análise 100% local no navegador", "Funciona só no seu computador");
        setTxt("btm-score-caption", "Índice Ético", "Nota de respeito da página");
        setTxt("btm-score-direction", "0–100 · Quanto maior, melhor", "De 0 a 100 · Quanto maior a nota, melhor");
        setTxt("btm-breakdown-title-text", "Deduções no Índice", "Pontos descontados da nota");
        setTxt("btm-breakdown-count", "4 sinais detectados", "4 alertas encontrados");
        setTxt("btm-breakdown-final", "Índice Ético: 36/100", "Nota final: 36/100");
        setTxt("btm-patterns-heading", "Padrões Identificados nesta Página", "Armadilhas visuais encontradas nesta página");
        setTxt("btm-count-pill", "4 no produto", "4 alertas aqui");
        setTxt("btm-sub-highlights", "Bordas e etiquetas visuais nos dark patterns", "Bordas e avisos nas armadilhas visuais");
        setTxt("btm-sub-alerts", "Avisos automáticos ao carregar páginas suspeitas", "Avisos automáticos ao abrir páginas com armadilhas");
        setTxt("btm-sub-advanced", "Exibe a Auditoria Técnica Completa e envio ao portal", "Mostra a verificação completa da página e envio ao portal");
        setTxt("btm-advanced-desc",
            "Varredura local da árvore DOM, contraste e fluxo de compra no seu navegador. Nenhum dado sai do dispositivo, salvo se você decidir publicar o relatório no Portal Betímetro (requer Login com Google).",
            "Verificação detalhada da estrutura da página, cores e botões de compra direto no seu computador. Nada é enviado para fora, a menos que você escolha publicar o relatório no portal (com conta Google)."
        );
        setTxt("btm-run-audit-text", "Executar Auditoria Técnica Completa", "Fazer verificação completa da página");
        setTxt("btm-local-badge", "🔒 Motor de análise 100% local no seu computador", "🔒 Tudo é verificado só no seu computador");
        setTxt("btm-footer-link-text", "Ver auditoria completa deste site no portal", "Ver relatório completo deste site no portal");

        const advTitleSpan = document.querySelector("#btm-advanced-title span");
        if (advTitleSpan) {
            advTitleSpan.textContent = s ? "Verificação completa da página" : "Auditoria Técnica Completa";
        }

        // Modal de Contestação
        setTxt("btm-contest-heading-text", "Contestar Classificação", "Avisar que o alerta está errado");
        setTxt("btm-contest-help",
            "Sua contribuição ajuda a corrigir falsos positivos e melhora as regras locais do Betímetro.",
            "Seu aviso ajuda a corrigir erros e melhorar o Betímetro."
        );
        setHtml("btm-opt-fp",
            "<strong>Falso positivo:</strong> O elemento é legítimo e não tenta induzir ou enganar o usuário.",
            "<strong>Aviso errado:</strong> Este item é normal e não tenta enganar você."
        );
        setHtml("btm-opt-cat",
            "<strong>Categoria incorreta:</strong> É um padrão manipulativo, mas está classificado sob a regra errada.",
            "<strong>Tipo de aviso errado:</strong> É uma armadilha visual, mas a descrição não combina."
        );
        setHtml("btm-opt-alt",
            "<strong>Site alterado:</strong> O site já corrigiu esta interface recentemente.",
            "<strong>Site mudou:</strong> O site já corrigiu esta parte da página."
        );
        setTxt("btm-contest-submit-btn", "Enviar Contestação", "Enviar aviso");

        // Modal de Auditoria Técnica
        const auditTitleSpan = document.getElementById("btm-audit-modal-title-text");
        if (auditTitleSpan) {
            auditTitleSpan.textContent = s ? "Verificação completa da página" : "Auditoria Técnica Completa";
        }
        const exportText = document.getElementById("btm-audit-export-text");
        if (exportText) {
            exportText.textContent = s ? "Salvar relatório técnico" : "Exportar JSON Técnico";
        }
        const publishText = document.getElementById("btm-audit-publish-text");
        if (publishText) {
            publishText.textContent = s ? "Publicar relatório no portal" : "Publicar Relatório no Portal Betímetro";
        }
    }

    // =========================================================================
    // CONTA GOOGLE SIMULADA NA EXTENSÃO
    // =========================================================================
    function renderAuthBar() {
        if (!dom.authBar) return;
        if (state.auth) {
            dom.authBar.innerHTML = `
                <div class="btm-auth-user" title="Sessão Google simulada">
                    <span style="color:var(--btm-lo);font-weight:800;" aria-hidden="true">●</span>
                    <span><strong>${escapeHtml(state.auth.name)}</strong> (${escapeHtml(state.auth.email)})</span>
                </div>
                <button class="btm-a11y-btn" id="btm-logout-btn" type="button" aria-label="Sair da conta Google">Sair</button>
            `;
            const outBtn = document.getElementById("btm-logout-btn");
            if (outBtn) {
                outBtn.addEventListener("click", () => {
                    saveAuth(null);
                    announceLive("Você saiu da sua conta Google.");
                    showToast("Você saiu da sua conta Google.");
                    if (state.auditViewRendered && dom.auditModal && !dom.auditModal.hasAttribute("hidden")) {
                        renderAuditReportView();
                    }
                });
            }
        } else {
            dom.authBar.innerHTML = `
                <span class="btm-toggle-subtext">Conta Google (opcional, só para publicar)</span>
                <button class="btm-google-btn" id="btm-open-google-login" type="button">
                    ${GOOGLE_SVG}
                    <span>Entrar</span>
                </button>
            `;
            const inBtn = document.getElementById("btm-open-google-login");
            if (inBtn) {
                inBtn.addEventListener("click", () => openGoogleLoginModal(false));
            }
        }
    }

    function ensureGoogleLoginModal() {
        let modal = document.getElementById("btm-google-modal");
        if (!modal) {
            modal = document.createElement("div");
            modal.className = "btm-modal-backdrop";
            modal.id = "btm-google-modal";
            modal.setAttribute("hidden", "");
            modal.setAttribute("role", "dialog");
            modal.setAttribute("aria-modal", "true");
            modal.setAttribute("aria-labelledby", "btm-google-modal-title");

            modal.innerHTML = `
                <div class="btm-modal">
                    <div class="btm-modal-header">
                        <h3 class="btm-modal-title" id="btm-google-modal-title">
                            ${GOOGLE_SVG}
                            <span>Entrar com Google</span>
                        </h3>
                        <button class="btm-icon-btn" id="btm-close-google-modal" type="button" aria-label="Fechar janela de login">✕</button>
                    </div>
                    <form id="btm-google-login-form" novalidate>
                        <div class="btm-modal-body">
                            <p>A análise local na extensão é sempre livre sem conta. Pedimos <strong>Login com Google</strong> apenas ao publicar relatórios no Portal Betímetro para evitar spam e abusos.</p>
                            <p class="btm-toggle-subtext">Coletamos apenas nome e e-mail Google (simulado localmente neste protótipo).</p>
                            <button class="btm-google-btn" id="btm-quick-google-btn" type="button" style="width:100%;justify-content:flex-start;padding:10px 12px;min-height:48px;">
                                ${GOOGLE_SVG}
                                <span style="text-align:left;"><strong>Continuar como Estudante IHC (Demonstração)</strong><br><span class="btm-toggle-subtext">estudante.ihc@gmail.com</span></span>
                            </button>
                            <label for="btm-google-email" style="font-size:0.9em;font-weight:600;">Ou informe seu e-mail Google (simulado): <span class="btm-req">(Obrigatório)</span></label>
                            <input class="btm-input" id="btm-google-email" type="email" placeholder="seu.nome@gmail.com" autocomplete="email" required aria-required="true" aria-describedby="btm-google-err" />
                            <label for="btm-google-name" style="font-size:0.9em;font-weight:600;">Nome de exibição (opcional):</label>
                            <input class="btm-input" id="btm-google-name" type="text" maxlength="40" placeholder="Ex.: Maria Silva" autocomplete="name" />
                            <p id="btm-google-err" role="alert" style="color:var(--btm-hi);font-weight:700;font-size:0.9em;min-height:1em;"></p>
                        </div>
                        <div class="btm-modal-footer">
                            <button class="btm-btn-sm" type="button" id="btm-cancel-google-modal">Cancelar</button>
                            <button class="btm-btn-sm primary" type="submit">Continuar com Google</button>
                        </div>
                    </form>
                </div>
            `;
            document.body.appendChild(modal);

            const completeLogin = (email, name) => {
                const cleanEmail = email.trim().toLowerCase();
                const cleanName = (name || "").trim() ||
                    cleanEmail.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
                saveAuth({
                    name: cleanName,
                    email: cleanEmail,
                    provider: "google",
                    loggedAt: new Date().toISOString()
                });
                const shouldPublish = state.pendingPublishAfterLogin;
                state.pendingPublishAfterLogin = false;
                closeGoogleLoginModal();
                announceLive(`Login com Google concluído como ${cleanName}.`);
                if (state.auditViewRendered && dom.auditModal && !dom.auditModal.hasAttribute("hidden")) {
                    renderAuditReportView();
                }
                if (shouldPublish) {
                    publishAuditReport();
                } else {
                    showToast(`Conectado com Google como ${cleanName}.`);
                }
            };

            document.getElementById("btm-close-google-modal").addEventListener("click", closeGoogleLoginModal);
            document.getElementById("btm-cancel-google-modal").addEventListener("click", closeGoogleLoginModal);
            document.getElementById("btm-quick-google-btn").addEventListener("click", () => {
                completeLogin("estudante.ihc@gmail.com", "Estudante IHC");
            });
            document.getElementById("btm-google-login-form").addEventListener("submit", (e) => {
                e.preventDefault();
                const emailEl = document.getElementById("btm-google-email");
                const nameEl = document.getElementById("btm-google-name");
                const errEl = document.getElementById("btm-google-err");
                const email = emailEl.value.trim();
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    errEl.textContent = "Informe um endereço de e-mail válido (ex.: nome@gmail.com).";
                    emailEl.setAttribute("aria-invalid", "true");
                    emailEl.focus();
                    return;
                }
                emailEl.removeAttribute("aria-invalid");
                errEl.textContent = "";
                completeLogin(email, nameEl.value);
            });
        }
        dom.googleModal = modal;
    }

    function openGoogleLoginModal(publishAfter) {
        ensureGoogleLoginModal();
        state.pendingPublishAfterLogin = !!publishAfter;
        const errEl = document.getElementById("btm-google-err");
        if (errEl) errEl.textContent = "";
        dom.googleModal.removeAttribute("hidden");
        const quickBtn = document.getElementById("btm-quick-google-btn");
        if (quickBtn) quickBtn.focus();
        announceLive("Janela de Login com Google aberta.");
    }

    function closeGoogleLoginModal() {
        if (!dom.googleModal) return;
        dom.googleModal.setAttribute("hidden", "");
        state.pendingPublishAfterLogin = false;
        announceLive("Janela de Login com Google fechada.");
    }

    // =========================================================================
    // INICIALIZAÇÃO
    // =========================================================================
    function init() {
        cacheDom();
        loadSyncedPreferences();
        ensureAuditModal();
        ensureGoogleLoginModal();
        bindEvents();
        renderAuthBar();
        applyAllPreferences();
        setupInPageHighlights();
        const startOff = dom.popup && dom.popup.getAttribute("data-btm-start-off") === "true";
        if (startOff) {
            toggleExtensionPower(false, true);
            announceLive("Extensão Betímetro iniciada desligada. Abra o menu para ativar a análise local.");
        } else {
            announceLive(
                `Extensão Betímetro ativa com análise 100% local. ${CURRENT_AUDIT.patternsCount} sinais identificados nesta página. Índice Ético ${CURRENT_AUDIT.ethicalIndex} de 100.`
            );
        }
    }

    function cacheDom() {
        dom.popup = document.getElementById("btm-extension-popup");
        dom.triggerBtn = document.getElementById("btm-ext-trigger");
        dom.triggerBadge = document.querySelector(".btm-ext-trigger-badge");
        dom.closePopupBtn = document.getElementById("btm-close-popup");
        dom.powerBtn = document.getElementById("btm-power-btn");
        dom.reactivateBtn = document.getElementById("btm-reactivate-btn");
        dom.scrollContent = document.querySelector(".btm-scroll-content");
        dom.disabledPanel = document.getElementById("btm-disabled-panel");
        dom.gaugeSvg = document.getElementById("btm-gauge-circle");
        dom.scoreNumber = document.getElementById("btm-score-val");
        dom.scoreBadge = document.getElementById("btm-score-pill");
        dom.patternsList = document.getElementById("btm-patterns-list");
        dom.liveRegion = document.getElementById("btm-live-announcer");
        dom.modalContest = document.getElementById("btm-contest-modal");
        dom.closeContestBtn = document.getElementById("btm-close-contest");
        dom.contestForm = document.getElementById("btm-contest-form");
        dom.floatingPill = document.getElementById("btm-floating-badge");
        dom.floatingPillTitle = document.querySelector(".btm-pill-title");
        dom.floatingPillBadge = document.querySelector(".btm-pill-badge");
        dom.runAuditBtn = document.getElementById("btm-run-audit");
        dom.advancedSection = document.getElementById("btm-advanced-section");
        dom.authBar = document.getElementById("btm-auth-bar");

        // Toggles
        dom.toggleHighlights = document.getElementById("btm-toggle-highlights");
        dom.toggleAlerts = document.getElementById("btm-toggle-alerts");
        dom.toggleSenior = document.getElementById("btm-toggle-senior");
        dom.toggleAdvanced = document.getElementById("btm-toggle-advanced");

        // Acessibilidade
        dom.btnA11yNormal = document.getElementById("btm-fs-100");
        dom.btnA11yLarge = document.getElementById("btm-fs-115");
        dom.btnA11yXLarge = document.getElementById("btm-fs-130");
        dom.btnThemeToggle = document.getElementById("btm-theme-toggle");
        dom.btnContrastToggle = document.getElementById("btm-contrast-toggle");
        dom.btnVlibrasToggle = document.getElementById("btm-vlibras-toggle");
    }

    function bindEvents() {
        if (dom.triggerBtn) {
            dom.triggerBtn.addEventListener("click", () => togglePopup());
        }

        if (dom.closePopupBtn) {
            dom.closePopupBtn.addEventListener("click", () => togglePopup(false));
        }

        if (dom.floatingPill) {
            dom.floatingPill.addEventListener("click", () => togglePopup(true));
            dom.floatingPill.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    togglePopup(true);
                }
            });
        }

        if (dom.powerBtn) {
            dom.powerBtn.addEventListener("click", () => toggleExtensionPower());
        }
        if (dom.reactivateBtn) {
            dom.reactivateBtn.addEventListener("click", () => toggleExtensionPower(true));
        }

        if (dom.runAuditBtn) {
            dom.runAuditBtn.addEventListener("click", () => openTechnicalAudit());
        }

        // Fechar modais ou popup com ESC
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                if (dom.googleModal && !dom.googleModal.hasAttribute("hidden")) {
                    closeGoogleLoginModal();
                } else if (dom.auditModal && !dom.auditModal.hasAttribute("hidden")) {
                    closeAuditModal();
                } else if (dom.modalContest && !dom.modalContest.hasAttribute("hidden")) {
                    closeContestModal();
                } else if (dom.popup && !dom.popup.hasAttribute("hidden") && dom.closePopupBtn) {
                    togglePopup(false);
                } else {
                    closeInPageInspectors();
                }
            }
            if (e.altKey && (e.key === "b" || e.key === "B")) {
                e.preventDefault();
                togglePopup();
            }
        });

        // Alternadores de Preferências
        if (dom.toggleHighlights) {
            dom.toggleHighlights.addEventListener("change", (e) => {
                state.highlightsActive = e.target.checked;
                if (state.extensionEnabled) {
                    updateInPageHighlightsVisibility(state.highlightsActive);
                }
                announceLive(state.highlightsActive ? "Destaques visuais ativados na página." : "Destaques visuais ocultados da página.");
            });
        }

        if (dom.toggleAlerts) {
            dom.toggleAlerts.addEventListener("change", (e) => {
                state.realtimeAlerts = e.target.checked;
                announceLive(state.realtimeAlerts ? "Alertas em tempo real ativados." : "Alertas em tempo real pausados.");
            });
        }

        if (dom.toggleSenior) {
            dom.toggleSenior.addEventListener("change", (e) => {
                const enabling = e.target.checked;
                if (enabling) {
                    // Salva o tamanho de fonte escolhido previamente pelo usuário
                    state.prevFontSize = state.fontSize;
                    state.seniorMode = true;
                    if (state.fontSize < 115) {
                        state.fontSize = 115;
                    }
                    saveSyncedPreferences();
                    applyAllPreferences();
                    announceLive("Modo simplificado ativado: linguagem simples sem jargões e alvos maiores.");
                } else {
                    state.seniorMode = false;
                    // Restaura exatamente o tamanho de fonte anterior do usuário
                    state.fontSize = state.prevFontSize || 100;
                    saveSyncedPreferences();
                    applyAllPreferences();
                    announceLive(`Modo simplificado desativado. Tamanho do texto restaurado para ${state.fontSize}%.`);
                }
            });
        }

        // Toggle "Mostrar opções avançadas" (oculta Auditoria Técnica por padrão)
        if (dom.toggleAdvanced) {
            dom.toggleAdvanced.addEventListener("change", (e) => {
                state.advancedVisible = e.target.checked;
                dom.toggleAdvanced.setAttribute("aria-expanded", state.advancedVisible ? "true" : "false");
                if (dom.advancedSection) {
                    if (state.advancedVisible) {
                        dom.advancedSection.removeAttribute("hidden");
                    } else {
                        dom.advancedSection.setAttribute("hidden", "");
                    }
                }
                announceLive(
                    state.advancedVisible
                        ? "Opções avançadas exibidas: Auditoria Técnica Completa disponível."
                        : "Opções avançadas ocultadas."
                );
            });
        }

        // Botões de tamanho de fonte (A, A+, A++)
        if (dom.btnA11yNormal) dom.btnA11yNormal.addEventListener("click", () => setFontSize(100));
        if (dom.btnA11yLarge) dom.btnA11yLarge.addEventListener("click", () => setFontSize(115));
        if (dom.btnA11yXLarge) dom.btnA11yXLarge.addEventListener("click", () => setFontSize(130));

        // Botão de Contraste
        if (dom.btnContrastToggle) {
            dom.btnContrastToggle.addEventListener("click", () => {
                state.highContrast = !state.highContrast;
                saveSyncedPreferences();
                applyAllPreferences();
                announceLive(state.highContrast ? "Alto contraste ativado." : "Alto contraste desativado.");
            });
        }

        // Botão de Tema
        if (dom.btnThemeToggle) {
            dom.btnThemeToggle.addEventListener("click", () => {
                const current = resolveEffectiveTheme(state.themePref);
                state.themePref = current === "dark" ? "light" : "dark";
                saveSyncedPreferences();
                applyAllPreferences();
                announceLive(state.themePref === "dark" ? "Tema escuro ativado." : "Tema claro ativado.");
            });
        }

        // Botão VLibras
        if (dom.btnVlibrasToggle) {
            dom.btnVlibrasToggle.addEventListener("click", () => {
                state.vlibrasActive = !state.vlibrasActive;
                saveSyncedPreferences();
                applyVlibras(state.vlibrasActive, true);
            });
        }

        // Modal de Contestação
        if (dom.closeContestBtn) {
            dom.closeContestBtn.addEventListener("click", closeContestModal);
        }

        if (dom.contestForm) {
            dom.contestForm.addEventListener("submit", handleContestSubmit);
        }

        // Sincronização em tempo real se alterado em outra aba (Portal <-> Extensão)
        window.addEventListener("storage", (e) => {
            if (e.key === "bm-pf") {
                loadSyncedPreferences();
                applyAllPreferences();
            } else if (e.key === "bm-auth") {
                loadSyncedPreferences();
                renderAuthBar();
                if (state.auditViewRendered && dom.auditModal && !dom.auditModal.hasAttribute("hidden")) {
                    renderAuditReportView();
                }
            }
        });
    }

    // =========================================================================
    // LIGAR / DESLIGAR A EXTENSÃO
    // =========================================================================
    function toggleExtensionPower(forceState, silent) {
        state.extensionEnabled = forceState !== undefined ? forceState : !state.extensionEnabled;

        if (dom.powerBtn) {
            dom.powerBtn.setAttribute("aria-pressed", state.extensionEnabled ? "true" : "false");
            dom.powerBtn.innerHTML = state.extensionEnabled
                ? `<span class="btm-site-status-dot" style="display:inline-block;width:7px;height:7px;background:currentColor;border-radius:50%;"></span>
                   <span>Ativa · Desligar</span>`
                : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                       <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>
                   </svg>
                   <span>Desligada · Ligar</span>`;
        }

        if (dom.scrollContent && dom.disabledPanel) {
            if (state.extensionEnabled) {
                dom.scrollContent.removeAttribute("hidden");
                dom.disabledPanel.setAttribute("hidden", "");
            } else {
                dom.scrollContent.setAttribute("hidden", "");
                dom.disabledPanel.removeAttribute("hidden");
            }
        }

        if (dom.triggerBadge) {
            dom.triggerBadge.textContent = state.extensionEnabled ? String(CURRENT_AUDIT.patternsCount) : "OFF";
            dom.triggerBadge.classList.toggle("off", !state.extensionEnabled);
            dom.triggerBadge.setAttribute(
                "title",
                state.extensionEnabled
                    ? `${CURRENT_AUDIT.patternsCount} sinais detectados nesta página`
                    : "Extensão desligada nesta página"
            );
        }
        if (dom.floatingPillTitle) {
            dom.floatingPillTitle.textContent = state.extensionEnabled
                ? `Betímetro · ${CURRENT_AUDIT.ethicalIndex}/100`
                : "Betímetro";
        }
        if (dom.floatingPillBadge) {
            dom.floatingPillBadge.textContent = state.extensionEnabled ? `${CURRENT_AUDIT.patternsCount} alertas` : "Desligada";
            dom.floatingPillBadge.classList.toggle("off", !state.extensionEnabled);
        }
        if (dom.floatingPill) {
            dom.floatingPill.setAttribute(
                "aria-label",
                state.extensionEnabled
                    ? `Betímetro ativo: Índice Ético ${CURRENT_AUDIT.ethicalIndex} de 100, ${CURRENT_AUDIT.patternsCount} alertas detectados. Clique para abrir o menu da extensão.`
                    : "Extensão Betímetro desligada. Clique para abrir o menu e ativar."
            );
        }

        updateInPageHighlightsVisibility(state.extensionEnabled && state.highlightsActive);

        if (!silent) {
            announceLive(
                state.extensionEnabled
                    ? "Extensão Betímetro ligada. Análise local ativada nesta página."
                    : "Extensão Betímetro desligada. Nenhum elemento da página está sendo analisado ou destacado."
            );
        }
    }

    function togglePopup(forceState) {
        if (!dom.popup) return;
        const isHidden = dom.popup.hasAttribute("hidden");
        const nextState = forceState !== undefined ? forceState : isHidden;

        if (nextState) {
            dom.popup.removeAttribute("hidden");
            if (dom.triggerBtn) dom.triggerBtn.setAttribute("aria-expanded", "true");
            announceLive("Menu da extensão Betímetro aberto.");
            if (dom.closePopupBtn) dom.closePopupBtn.focus();
        } else {
            dom.popup.setAttribute("hidden", "");
            if (dom.triggerBtn) {
                dom.triggerBtn.setAttribute("aria-expanded", "false");
                dom.triggerBtn.focus();
            }
            announceLive("Menu da extensão fechado.");
        }
    }

    // =========================================================================
    // ESCALA DE FONTE ACESSÍVEL (A = 100%, A+ = 115%, A++ = 130%)
    // =========================================================================
    function setFontSize(size) {
        state.fontSize = size;
        if (!state.seniorMode) {
            state.prevFontSize = size;
        }
        saveSyncedPreferences();
        applyAllPreferences();
        announceLive(`Tamanho do texto ajustado para ${size}%.`);
    }

    function renderGauge(score) {
        if (dom.gaugeSvg) {
            const circumference = 238.76;
            const offset = circumference - (score / 100) * circumference;

            dom.gaugeSvg.style.strokeDasharray = `${circumference}`;
            dom.gaugeSvg.style.strokeDashoffset = `${offset}`;
            dom.gaugeSvg.setAttribute("class", `btm-gauge-val ${CURRENT_AUDIT.scoreLevel}`);
        }

        if (dom.scoreNumber) dom.scoreNumber.textContent = score;
        if (dom.scoreBadge) {
            const lbl = state.seniorMode ? CURRENT_AUDIT.simpleScoreLabel : CURRENT_AUDIT.scoreLabel;
            dom.scoreBadge.className = `btm-score-badge ${CURRENT_AUDIT.scoreLevel}`;
            dom.scoreBadge.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <span>${lbl}</span>
            `;
        }
    }

    function renderMenuContent() {
        if (!dom.patternsList) return;
        dom.patternsList.innerHTML = "";

        const s = state.seniorMode;

        CURRENT_AUDIT.patterns.forEach((pat) => {
            const isExpanded = state.expandedCards.has(pat.id);
            const card = document.createElement("div");
            card.className = "btm-pattern-card";
            card.id = `card-${pat.id}`;
            card.setAttribute("aria-expanded", isExpanded ? "true" : "false");

            const titleText = s ? pat.simpleTitle : pat.title;
            const catText = s ? pat.simpleCategory : pat.category;
            const locText = s ? pat.simpleLocation : pat.location;
            const justHeading = s ? "Por que isso pode confundir você?" : "Por que isso é um dark pattern?";
            const justText = s ? pat.simpleJustification : pat.justification;
            const honestHeading = s ? "O que fazer com segurança:" : "Caminho Honesto Recomendado:";
            const honestText = s ? pat.simpleHonestPath : pat.honestPath;
            const locateLabel = s ? "Mostrar na página" : "Localizar na página";
            const contestLabel = s ? "Avisar erro" : "Contestar";

            card.innerHTML = `
                <button class="btm-pattern-header" type="button" aria-controls="body-${pat.id}" aria-expanded="${isExpanded ? "true" : "false"}">
                    <div class="btm-pattern-title-area">
                        <span class="btm-pattern-tag ${pat.severityClass}">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="12" y1="8" x2="12" y2="12"/>
                                <line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                            ${catText} · ${pat.severity} (−${pat.penaltyPts} pts)
                        </span>
                        <span class="btm-pattern-name">${titleText}</span>
                        <span class="btm-pattern-location">📍 ${locText}</span>
                    </div>
                    <svg class="btm-chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="btm-pattern-body" id="body-${pat.id}">
                    <div class="btm-justification">
                        <div class="btm-justification-title">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="12" y1="16" x2="12" y2="12"/>
                                <line x1="12" y1="8" x2="12.01" y2="8"/>
                            </svg>
                            ${justHeading}
                        </div>
                        <p>${justText}</p>
                    </div>

                    <div class="btm-honest-path">
                        <div class="btm-honest-title">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                            ${honestHeading}
                        </div>
                        <p>${honestText}</p>
                    </div>

                    <div class="btm-card-actions">
                        <button class="btm-btn-sm primary btm-btn-locate" type="button" data-target="${pat.id}">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            ${locateLabel}
                        </button>
                        <button class="btm-btn-sm btm-btn-contest" type="button" data-target="${pat.id}">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M3 12h18M3 6h18M3 18h18"/>
                            </svg>
                            ${contestLabel}
                        </button>
                    </div>
                </div>
            `;

            const headerBtn = card.querySelector(".btm-pattern-header");
            headerBtn.addEventListener("click", () => {
                const currentlyExpanded = state.expandedCards.has(pat.id);
                if (currentlyExpanded) {
                    state.expandedCards.delete(pat.id);
                    card.setAttribute("aria-expanded", "false");
                    headerBtn.setAttribute("aria-expanded", "false");
                } else {
                    state.expandedCards.add(pat.id);
                    card.setAttribute("aria-expanded", "true");
                    headerBtn.setAttribute("aria-expanded", "true");
                }
            });

            const locateBtn = card.querySelector(".btm-btn-locate");
            locateBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                scrollToAndHighlight(pat.id);
            });

            const contestBtn = card.querySelector(".btm-btn-contest");
            contestBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                openContestModal(pat);
            });

            dom.patternsList.appendChild(card);
        });
    }

    // =========================================================================
    // AUDITORIA TÉCNICA COMPLETA (100% Local -> Publicação opcional c/ Google)
    // =========================================================================
    function ensureAuditModal() {
        let modal = document.getElementById("btm-audit-modal");
        if (!modal) {
            modal = document.createElement("div");
            modal.className = "btm-modal-backdrop";
            modal.id = "btm-audit-modal";
            modal.setAttribute("hidden", "");
            modal.setAttribute("role", "dialog");
            modal.setAttribute("aria-modal", "true");
            modal.setAttribute("aria-labelledby", "btm-audit-modal-title");

            const portalPath = "../index.html#site-amazon";

            modal.innerHTML = `
                <div class="btm-modal btm-audit-modal">
                    <div class="btm-modal-header">
                        <h3 class="btm-modal-title" id="btm-audit-modal-title">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                            </svg>
                            <span id="btm-audit-modal-title-text">Auditoria Técnica Completa</span>
                        </h3>
                        <button class="btm-icon-btn" id="btm-close-audit" type="button" aria-label="Fechar auditoria técnica completa">✕</button>
                    </div>
                    <div class="btm-modal-body" id="btm-audit-body"></div>
                    <div class="btm-modal-footer" id="btm-audit-footer">
                        <button class="btm-btn-sm" type="button" id="btm-audit-cancel">Fechar</button>
                        <button class="btm-btn-sm" type="button" id="btm-audit-export" hidden>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            <span id="btm-audit-export-text">Exportar JSON Técnico</span>
                        </button>
                        <button class="btm-btn-sm primary" type="button" id="btm-audit-publish" hidden data-portal-url="${portalPath}">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                                <path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                            </svg>
                            <span id="btm-audit-publish-text">Publicar Relatório no Portal Betímetro</span>
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById("btm-close-audit").addEventListener("click", closeAuditModal);
            document.getElementById("btm-audit-cancel").addEventListener("click", closeAuditModal);
            document.getElementById("btm-audit-export").addEventListener("click", exportAuditJson);
            document.getElementById("btm-audit-publish").addEventListener("click", publishAuditReport);
        }

        dom.auditModal = modal;
        dom.auditBody = document.getElementById("btm-audit-body");
        dom.auditExportBtn = document.getElementById("btm-audit-export");
        dom.auditPublishBtn = document.getElementById("btm-audit-publish");
    }

    function openTechnicalAudit() {
        if (!dom.auditModal) ensureAuditModal();
        state.auditViewRendered = false;
        dom.auditModal.removeAttribute("hidden");
        if (dom.auditExportBtn) dom.auditExportBtn.setAttribute("hidden", "");
        if (dom.auditPublishBtn) dom.auditPublishBtn.setAttribute("hidden", "");

        const s = state.seniorMode;
        const headingMsg = s
            ? `Fazendo verificação completa no seu computador em <strong>${CURRENT_AUDIT.domain}</strong>...`
            : `Executando varredura local de IHC e estrutura da página em <code>${CURRENT_AUDIT.domain}</code>...`;

        const step1 = s
            ? `1. Conferindo a estrutura da página: ${CURRENT_AUDIT.totalDomNodes} partes e ${CURRENT_AUDIT.totalElementsScanned} botões...`
            : `1. Inspecionando estrutura local: ${CURRENT_AUDIT.totalDomNodes} nós DOM e ${CURRENT_AUDIT.totalElementsScanned} controles interativos...`;
        const step2 = s
            ? "2. Verificando cores, legibilidade e equilíbrio dos botões..."
            : "2. Avaliando simetria visual, pesos de escolha e contraste WCAG 2.2 AA/AAA...";
        const step3 = s
            ? "3. Verificando botões de compra, assinatura mensal e preços..."
            : "3. Auditando funil de compra, recorrência Prime e transparência de preços...";
        const step4 = s
            ? `4. Calculando a nota final: ${CURRENT_AUDIT.ethicalIndex}/100, quanto maior melhor...`
            : `4. Compilando Índice Ético de ${CURRENT_AUDIT.ethicalIndex}/100 — quanto maior, melhor...`;

        dom.auditBody.innerHTML = `
            <div class="btm-audit-progress-box" role="status" aria-live="polite">
                <strong>${headingMsg}</strong>
                <div class="btm-audit-progress-bar-track">
                    <div class="btm-audit-progress-bar-fill" id="btm-audit-bar"></div>
                </div>
                <ul class="btm-audit-steps-list" id="btm-audit-steps">
                    <li class="btm-audit-step active" id="audit-step-1">⏳ ${step1}</li>
                    <li class="btm-audit-step" id="audit-step-2">○ ${step2}</li>
                    <li class="btm-audit-step" id="audit-step-3">○ ${step3}</li>
                    <li class="btm-audit-step" id="audit-step-4">○ ${step4}</li>
                </ul>
            </div>
        `;

        announceLive("Iniciando auditoria técnica completa localmente no seu computador. Aguarde a conclusão das 4 etapas.");

        const bar = document.getElementById("btm-audit-bar");
        const s1 = document.getElementById("audit-step-1");
        const s2 = document.getElementById("audit-step-2");
        const s3 = document.getElementById("audit-step-3");
        const s4 = document.getElementById("audit-step-4");

        setTimeout(() => {
            if (bar) bar.style.width = "28%";
            if (s1) {
                s1.className = "btm-audit-step done";
                s1.textContent = s
                    ? `✓ 1. Estrutura da página conferida: ${CURRENT_AUDIT.totalElementsScanned} botões e avisos verificados.`
                    : `✓ 1. Estrutura da página mapeada localmente: ${CURRENT_AUDIT.totalDomNodes} nós e ${CURRENT_AUDIT.totalElementsScanned} controles.`;
            }
            if (s2) {
                s2.className = "btm-audit-step active";
                s2.textContent = `⏳ ${step2}`;
            }
        }, 300);

        setTimeout(() => {
            if (bar) bar.style.width = "62%";
            if (s2) {
                s2.className = "btm-audit-step done";
                s2.textContent = s
                    ? "✓ 2. Cores e equilíbrio dos botões verificados — 2 problemas fortes encontrados."
                    : "✓ 2. Simetria visual e contraste auditados — 2 desvios severos detectados.";
            }
            if (s3) {
                s3.className = "btm-audit-step active";
                s3.textContent = `⏳ ${step3}`;
            }
        }, 700);

        setTimeout(() => {
            if (bar) bar.style.width = "90%";
            if (s3) {
                s3.className = "btm-audit-step done";
                s3.textContent = s
                    ? "✓ 3. Etapas de compra e anúncios pagos verificados."
                    : "✓ 3. Funil de compra e anúncios patrocinados inspecionados.";
            }
            if (s4) {
                s4.className = "btm-audit-step active";
                s4.textContent = `⏳ ${step4}`;
            }
        }, 1100);

        setTimeout(() => {
            renderAuditReportView();
        }, 1450);
    }

    function renderAuditReportView() {
        if (!dom.auditBody) return;
        state.auditViewRendered = true;
        if (dom.auditExportBtn) dom.auditExportBtn.removeAttribute("hidden");
        if (dom.auditPublishBtn) dom.auditPublishBtn.removeAttribute("hidden");
        applySimplifiedTexts();

        const s = state.seniorMode;
        const introText = s
            ? `Verificação concluída <strong>100% no seu computador</strong>. A nota final desta página é <strong>${CURRENT_AUDIT.ethicalIndex}/100 (quanto maior, melhor)</strong> — a mesma nota mostrada no menu da extensão e no Portal Betímetro. Nenhum dado foi enviado para fora do seu dispositivo.`
            : `Relatório gerado localmente pelo <strong>${CURRENT_AUDIT.engineVersion}</strong>. Tanto o medidor da extensão quanto este relatório e o Portal Web utilizam a escala unificada: <strong>Índice Ético ${CURRENT_AUDIT.ethicalIndex}/100 (100 − ${CURRENT_AUDIT.totalPenalty} pts de deduções · quanto maior, melhor)</strong>. Nenhum conteúdo da página foi enviado a servidores externos.`;

        const authNotice = state.auth
            ? `<p class="btm-toggle-subtext">Conectado com Google como <strong>${escapeHtml(state.auth.email)}</strong>. Você pode publicar o resumo técnico no Portal Betímetro.</p>`
            : `<div class="btm-auth-gate" id="btm-audit-auth-gate">
                   <strong>Login com Google necessário para publicar no portal</strong>
                   <p class="btm-toggle-subtext">A análise permanece 100% local e livre. Para enviar este resumo ao Portal Betímetro e evitar spam, entre com sua conta Google.</p>
                   <div>
                       <button class="btm-google-btn" type="button" id="btm-audit-login-btn">
                           ${GOOGLE_SVG}
                           <span>Entrar com Google para continuar</span>
                       </button>
                   </div>
               </div>`;

        dom.auditBody.innerHTML = `
            <p class="btm-toggle-subtext">${introText}</p>

            <!-- 4 Métricas Circulares (0-100 · Quanto maior, melhor) -->
            <div class="btm-audit-gauges-grid" role="region" aria-label="Métricas da auditoria técnica (0 a 100, quanto maior melhor)">
                ${CURRENT_AUDIT.auditScores.map((g) => `
                    <div class="btm-audit-gauge-item">
                        <div class="btm-audit-circle ${g.cls}">${g.score}</div>
                        <span class="btm-audit-gauge-label">${s ? g.simpleLabel : g.label}</span>
                    </div>
                `).join("")}
            </div>

            <!-- Metadados Técnicos -->
            <div class="btm-audit-meta-grid">
                <div><strong>Site:</strong> ${CURRENT_AUDIT.domain} (${CURRENT_AUDIT.category})</div>
                <div><strong>${s ? "Tempo de verificação" : "Tempo de varredura"}:</strong> ${CURRENT_AUDIT.scanDurationSec}s (${CURRENT_AUDIT.totalDomNodes} ${s ? "partes da página" : "nós inspecionados"})</div>
                <div><strong>Processamento:</strong> 100% local no navegador</div>
                <div><strong>${s ? "Código do relatório" : "Identificador da coleta"}:</strong> <span class="btm-audit-code">${CURRENT_AUDIT.auditHash}</span></div>
            </div>

            <!-- Tabela de Evidências -->
            <div class="btm-audit-table-wrap">
                <table class="btm-audit-table">
                    <thead>
                        <tr>
                            <th>${s ? "Alerta encontrado" : "Sinal Detectado"}</th>
                            <th>${s ? "Parte verificada" : "Elemento Auditado"}</th>
                            <th>${s ? "Como foi achado" : "Método & Confiança"}</th>
                            <th>${s ? "Desconto na nota" : "Impacto no Índice"}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${CURRENT_AUDIT.patterns.map((p) => `
                            <tr>
                                <td><strong>${s ? p.simpleTitle : p.title}</strong><br><span class="btm-toggle-subtext">${s ? p.simpleCategory : p.category}</span></td>
                                <td><code class="btm-audit-code">${s ? p.simpleLocation : p.targetSelector}</code></td>
                                <td>${s ? p.simpleMethod : p.method}<br><span class="btm-toggle-subtext">${s ? "Confiança" : "Certeza"}: ${p.confidence}%</span></td>
                                <td><strong style="color:var(--btm-hi);">−${p.penaltyPts} pts</strong></td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>

            ${authNotice}
            <div id="btm-audit-publish-status"></div>
        `;

        const loginBtn = document.getElementById("btm-audit-login-btn");
        if (loginBtn) {
            loginBtn.addEventListener("click", () => openGoogleLoginModal(false));
        }

        announceLive(`Auditoria técnica local concluída. Índice Ético calculado: ${CURRENT_AUDIT.ethicalIndex} de 100 (quanto maior, melhor). 4 evidências catalogadas.`);
    }

    function publishAuditReport() {
        if (!state.auth) {
            announceLive("Entre com sua conta Google para publicar o relatório no Portal Betímetro.");
            openGoogleLoginModal(true);
            return;
        }

        const payload = {
            domain: CURRENT_AUDIT.domain,
            category: CURRENT_AUDIT.category,
            ethicalIndex: CURRENT_AUDIT.ethicalIndex,
            totalPenalty: CURRENT_AUDIT.totalPenalty,
            publishedAt: new Date().toISOString().slice(0, 10),
            publishedBy: state.auth.email,
            patternsCount: CURRENT_AUDIT.patternsCount,
            auditHash: CURRENT_AUDIT.auditHash,
            auditScores: CURRENT_AUDIT.auditScores
        };

        if (!isNoSave()) {
            try {
                localStorage.setItem("bm-published-amazon", JSON.stringify(payload));
            } catch {}
        }

        const statusContainer = document.getElementById("btm-audit-publish-status");
        const portalUrl = dom.auditPublishBtn
            ? dom.auditPublishBtn.getAttribute("data-portal-url")
            : "../index.html#site-amazon";

        if (statusContainer) {
            statusContainer.innerHTML = `
                <div class="btm-audit-published-banner" role="alert">
                    <div>
                        <strong style="color:var(--btm-lo);">✓ Relatório Técnico Publicado com Sucesso!</strong>
                        <p class="btm-toggle-subtext" style="margin-top:2px;">Resumo da auditoria (Índice Ético ${CURRENT_AUDIT.ethicalIndex}/100 e 4 evidências) publicado por <strong>${escapeHtml(state.auth.email)}</strong> no Portal Betímetro.</p>
                    </div>
                    <a class="btm-btn-sm primary" href="${portalUrl}">
                        Abrir Relatório no Portal →
                    </a>
                </div>
            `;
        }

        showToast("Relatório técnico publicado no Portal Betímetro com sucesso!");
        announceLive("Relatório técnico publicado com sucesso no Portal Betímetro.");
    }

    function exportAuditJson() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(CURRENT_AUDIT, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "relatorio-tecnico-amazon-br.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast(state.seniorMode ? "Relatório técnico salvo no seu computador." : "Relatório técnico JSON exportado com sucesso.");
    }

    function closeAuditModal() {
        if (!dom.auditModal) return;
        dom.auditModal.setAttribute("hidden", "");
        state.auditViewRendered = false;
        announceLive("Janela de auditoria técnica fechada.");
    }

    // =========================================================================
    // ANÁLISE LOCAL EM TEMPO REAL NA PÁGINA (RF06 - Overlays nos elementos)
    // =========================================================================
    const inPageBadges = [];

    function getPatternTargetElement(pat) {
        const primary = document.querySelector(pat.targetSelector);
        if (primary && primary.tagName !== "INPUT") return primary;
        const container = pat.containerSelector ? document.querySelector(pat.containerSelector) : null;
        return container || primary;
    }

    function positionInPageBadges() {
        inPageBadges.forEach(({ badge, targetEl }) => {
            if (!targetEl || !badge) return;
            const rect = targetEl.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) return;
            const top = Math.max(4, rect.top + window.scrollY - 22);
            const left = Math.max(8, Math.min(rect.left + window.scrollX + 6, document.documentElement.scrollWidth - badge.offsetWidth - 12));
            badge.style.top = `${top}px`;
            badge.style.left = `${left}px`;
        });
    }

    function setupInPageHighlights() {
        CURRENT_AUDIT.patterns.forEach((pat) => {
            const targetEl = getPatternTargetElement(pat);
            if (!targetEl) return;

            targetEl.classList.add("btm-highlight-target");
            targetEl.setAttribute("data-btm-id", pat.id);

            if (document.getElementById(`badge-${pat.id}`)) return;

            const badge = document.createElement("div");
            badge.className = "btm-element-badge";
            badge.id = `badge-${pat.id}`;
            badge.setAttribute("tabindex", "0");
            badge.setAttribute("role", "button");
            badge.setAttribute("aria-label", `Alerta Betímetro: ${pat.title}. Clique para ver o caminho honesto.`);
            badge.innerHTML = `
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M12 24a13 13 0 0 1 26 0" />
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
                <span>Betímetro: ${pat.category}</span>
            `;

            badge.addEventListener("click", (e) => {
                e.stopPropagation();
                showInspectorTooltip(pat, targetEl);
            });

            badge.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    showInspectorTooltip(pat, targetEl);
                }
            });

            document.body.appendChild(badge);
            inPageBadges.push({ badge, targetEl, pat });
        });

        if (inPageBadges.length) {
            positionInPageBadges();
            requestAnimationFrame(positionInPageBadges);
            setTimeout(positionInPageBadges, 350);
            window.addEventListener("resize", positionInPageBadges);
            window.addEventListener("load", positionInPageBadges);
        }
    }

    function updateInPageHighlightsVisibility(visible) {
        document.querySelectorAll(".btm-highlight-target").forEach((el) => {
            el.classList.toggle("btm-highlight-hidden", !visible);
            if (!visible) el.classList.remove("btm-pulse");
        });
        document.querySelectorAll(".btm-element-badge").forEach((badge) => {
            badge.style.display = visible ? "inline-flex" : "none";
        });
        if (visible) {
            positionInPageBadges();
        } else {
            closeInPageInspectors();
        }
    }

    function scrollToAndHighlight(patternId) {
        const pat = CURRENT_AUDIT.patterns.find((p) => p.id === patternId);
        if (!pat) return;

        const targetEl = getPatternTargetElement(pat);
        if (!targetEl) return;

        if (window.innerWidth < 800) {
            togglePopup(false);
        }

        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });

        document.querySelectorAll(".btm-highlight-target").forEach((el) => el.classList.remove("btm-pulse"));
        targetEl.classList.add("btm-pulse");

        setTimeout(() => {
            showInspectorTooltip(pat, targetEl);
        }, 450);

        const msg = state.seniorMode ? pat.simpleHonestPath : pat.honestPath;
        announceLive(`Elemento localizado: ${state.seniorMode ? pat.simpleTitle : pat.title}. Caminho seguro: ${msg}`);
    }

    // Tooltip conciso sobre a página: destaque principal para o Caminho Honesto / Seguro
    // (explicação técnica detalhada mantida exclusivamente no menu da extensão)
    function showInspectorTooltip(pat, targetEl, preserveFocus) {
        closeInPageInspectors();

        const s = state.seniorMode;
        const card = document.createElement("div");
        card.className = "btm-inspector-card";
        card.id = `inspector-${pat.id}`;
        card.setAttribute("role", "dialog");
        card.setAttribute("aria-label", `Orientação Betímetro: ${s ? pat.simpleTitle : pat.title}`);

        card.innerHTML = `
            <div class="btm-inspector-header">
                <h4 class="btm-inspector-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    ${s ? pat.simpleCategory : pat.category}
                </h4>
                <button class="btm-inspector-close" type="button" aria-label="Fechar orientação do alerta">✕</button>
            </div>
            <div class="btm-honest-path" style="margin: 0;">
                <div class="btm-honest-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    ${s ? "O que fazer agora:" : "Caminho Honesto / Seguro:"}
                </div>
                <p>${s ? pat.simpleHonestPath : pat.honestPath}</p>
            </div>
            <p class="btm-inspector-summary">${s ? pat.simpleShortReason : pat.shortReason}</p>
            <div class="btm-card-actions" style="justify-content: space-between; margin-top: 2px;">
                <button class="btm-btn-sm btm-inspector-contest" type="button">
                    ${s ? "Avisar erro" : "Contestar"}
                </button>
                <button class="btm-btn-sm primary btm-inspector-menu" type="button">
                    Ver detalhes no menu
                </button>
            </div>
        `;

        const rect = targetEl.getBoundingClientRect();
        card.style.top = `${window.scrollY + rect.top + 28}px`;
        card.style.left = `${Math.max(16, Math.min(window.innerWidth - 346, window.scrollX + rect.left))}px`;

        card.querySelector(".btm-inspector-close").addEventListener("click", closeInPageInspectors);
        card.querySelector(".btm-inspector-contest").addEventListener("click", () => {
            closeInPageInspectors();
            openContestModal(pat);
        });
        card.querySelector(".btm-inspector-menu").addEventListener("click", () => {
            state.expandedCards.add(pat.id);
            renderMenuContent();
            togglePopup(true);
            const cardEl = document.getElementById(`card-${pat.id}`);
            if (cardEl) {
                cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
                cardEl.classList.add("active-target");
                setTimeout(() => cardEl.classList.remove("active-target"), 2000);
            }
        });

        document.body.appendChild(card);
        state.activeInspectorId = card.id;
        state.activeInspectorPat = pat;
        state.activeInspectorTarget = targetEl;

        if (!preserveFocus) {
            const closeBtn = card.querySelector(".btm-inspector-close");
            if (closeBtn) closeBtn.focus();
        }
    }

    function closeInPageInspectors() {
        if (state.activeInspectorId) {
            const el = document.getElementById(state.activeInspectorId);
            if (el) el.remove();
            state.activeInspectorId = null;
            state.activeInspectorPat = null;
            state.activeInspectorTarget = null;
        }
        document.querySelectorAll(".btm-highlight-target").forEach((el) => el.classList.remove("btm-pulse"));
    }

    // =========================================================================
    // MODAL DE CONTESTAÇÃO (RF03)
    // =========================================================================
    function openContestModal(pat) {
        state.activeContestTarget = pat;
        if (!dom.modalContest) return;

        const titleEl = document.getElementById("btm-contest-target-name");
        if (titleEl) titleEl.textContent = state.seniorMode ? pat.simpleTitle : pat.title;

        dom.modalContest.removeAttribute("hidden");
        const firstRadio = dom.modalContest.querySelector('input[type="radio"]');
        if (firstRadio) firstRadio.focus();

        announceLive(`Modal de contestação aberto para: ${state.seniorMode ? pat.simpleTitle : pat.title}. Selecione o motivo.`);
    }

    function closeContestModal() {
        if (!dom.modalContest) return;
        dom.modalContest.setAttribute("hidden", "");
        state.activeContestTarget = null;
        announceLive("Modal de contestação fechado.");
    }

    function handleContestSubmit(e) {
        e.preventDefault();
        closeContestModal();
        showToast(
            state.seniorMode
                ? "Aviso enviado com sucesso! Obrigado por ajudar a melhorar o Betímetro."
                : "Contestação registrada com sucesso! Seu feedback ajuda a aprimorar as regras do Betímetro."
        );
        announceLive("Contestação registrada com sucesso! Obrigado pela colaboração.");
    }

    // =========================================================================
    // TOAST PERSISTENTE COM BOTÃO FECHAR EXPLÍCITO (SEM AUTO-FECHAMENTO)
    // =========================================================================
    function showToast(message) {
        document.querySelectorAll(".btm-alert-toast").forEach((el) => el.remove());

        const toast = document.createElement("div");
        toast.className = "btm-alert-toast";
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");
        toast.innerHTML = `
            <div style="display:flex;align-items:center;gap:8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#69f0ae" stroke-width="2.5" aria-hidden="true" style="flex-shrink:0;">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>${escapeHtml(message)}</span>
            </div>
            <button class="btm-toast-close" type="button" aria-label="Fechar aviso" title="Fechar aviso">✕</button>
        `;

        toast.querySelector(".btm-toast-close").addEventListener("click", () => {
            toast.remove();
            announceLive("Aviso fechado.");
        });

        document.body.appendChild(toast);
    }

    function announceLive(message) {
        if (dom.liveRegion) {
            dom.liveRegion.textContent = "";
            setTimeout(() => {
                dom.liveRegion.textContent = message;
            }, 50);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.BetimetroExt = {
        state,
        CURRENT_AUDIT,
        togglePopup,
        toggleExtensionPower,
        openTechnicalAudit,
        closeAuditModal,
        openGoogleLoginModal,
        closeGoogleLoginModal,
        scrollToAndHighlight,
        openContestModal,
        closeContestModal,
        setFontSize
    };
})();
