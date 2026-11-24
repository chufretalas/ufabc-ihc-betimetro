(() => {
    const CAT = {
        urg: [
            "Urgência artificial",
            12,
            "Prazo ou contador que pressiona a decisão sem motivo comprovado.",
            "Ignore o relógio e compare o preço em outro momento.",
        ],
        esc: [
            "Escassez artificial",
            10,
            "Aviso de poucas unidades que pode não refletir o estoque real.",
            "Confira a disponibilidade antes de decidir com pressa.",
        ],
        pre: [
            "Opção pré-selecionada",
            12,
            "Item extra já marcado, recusado só se você perceber.",
            "Desmarque a caixa antes de continuar.",
        ],
        obs: [
            "Cancelamento dificultado",
            18,
            "Cancelar exige mais passos ou canais do que assinar.",
            "Procure cancelar pelo mesmo canal usado na contratação.",
        ],
        cus: [
            "Custos adicionados no fim",
            10,
            "Valores que só aparecem perto do pagamento.",
            "Some taxas e frete antes de decidir e compare o total.",
        ],
        ins: [
            "Insistência na assinatura",
            8,
            "Pedidos repetidos ou culpa na recusa para você aceitar.",
            "Recuse com calma: a escolha é sua.",
        ],
        soc: [
            "Prova social duvidosa",
            6,
            "Afirmação de que muita gente compra, sem fonte.",
            "Procure avaliações independentes.",
        ],
        tax: [
            "Taxas pouco visíveis",
            10,
            "Taxas em letra miúda ou em etapas tardias.",
            "Leia o resumo do pedido linha por linha.",
        ],
    };

    const S = [
        {
            n: "Amazon Brasil",
            u: "amazon.com.br",
            c: "Compras",
            s: 36,
            d: -6,
            k: 4,
            dt: "2026-11-04",
            a: 14,
            h: [52, 46, 42, 36],
            audit: [
                ["Índice Ético Geral", 36, "hi"],
                ["Autonomia de Escolha", 32, "hi"],
                ["Transparência de Custos", 54, "mi"],
                ["Acessibilidade & Clareza", 82, "lo"],
            ],
            f: [
                [
                    "ins",
                    "Destaque desproporcional à assinatura Prime com frete grátis",
                    "Página do produto · Caixa de compra",
                    96,
                    "Regra",
                ],
                [
                    "urg",
                    "Botão 'Compre agora com 1 clique' pulando revisão de frete e custos",
                    "Página do produto",
                    88,
                    "Regra",
                ],
                [
                    "soc",
                    "Carrossel patrocinado disfarçado de recomendação orgânica",
                    "Página do produto",
                    91,
                    "IA local simulada",
                ],
                [
                    "tax",
                    "Ênfase no parcelamento em detrimento do custo total à vista",
                    "Página do produto",
                    78,
                    "Regra",
                ],
            ],
            o: [
                [
                    "Lucas M.",
                    "neg",
                    "Quase assinei o Prime sem querer só para ter o frete grátis prometido no botão.",
                ],
                [
                    "Camila R.",
                    "neg",
                    "O botão Compre Agora não mostra o valor final com frete antes de cobrar no cartão.",
                ],
                [
                    "Felipe T.",
                    "pos",
                    "A entrega é ágil, mas os anúncios patrocinados se misturam aos produtos comuns.",
                ],
            ],
        },
        {
            n: "Lume Compras",
            u: "lumecompras.example",
            c: "Compras",
            s: 82,
            d: 8,
            k: 3,
            dt: "2026-10-07",
            a: 8,
            h: [62, 68, 74, 82],
            f: [
                [
                    "urg",
                    "Oferta termina em 00:14:59",
                    "Página do produto",
                    92,
                    "Regra",
                ],
                [
                    "urg",
                    "Restam 2 unidades, corra!",
                    "Carrinho",
                    74,
                    "IA local simulada",
                ],
                [
                    "pre",
                    "Seguro de entrega já marcado",
                    "Pagamento",
                    95,
                    "Regra",
                ],
            ],
            o: [
                [
                    "Marina C.",
                    "pos",
                    "O preço final apareceu antes do pagamento e consegui recusar os extras.",
                ],
                [
                    "Rafael L.",
                    "neg",
                    "O contador de oferta me apressou, e no dia seguinte a promoção continuava.",
                ],
            ],
        },
        {
            n: "Nuvem Livros",
            u: "nuvemlivros.example",
            c: "Compras",
            s: 91,
            d: 2,
            k: 1,
            dt: "2026-10-07",
            a: 5,
            h: [86, 88, 90, 91],
            f: [
                [
                    "pre",
                    "Receber ofertas por e-mail já marcado",
                    "Cadastro",
                    94,
                    "Regra",
                ],
            ],
            o: [
                [
                    "Paulo S.",
                    "pos",
                    "Compra simples, sem surpresas no valor.",
                ],
            ],
        },
        {
            n: "ViajaLeve",
            u: "viajaleve.example",
            c: "Viagens",
            s: 67,
            d: -5,
            k: 7,
            dt: "2026-10-06",
            a: 12,
            h: [78, 74, 72, 67],
            f: [
                [
                    "cus",
                    "Taxa de serviço de R$ 49 somada no último passo",
                    "Pagamento",
                    88,
                    "Regra",
                ],
                [
                    "esc",
                    "Só 3 vagas neste voo",
                    "Resultados",
                    80,
                    "Regra",
                ],
            ],
            o: [
                [
                    "Helena T.",
                    "neg",
                    "A taxa só apareceu na última tela.",
                ],
            ],
        },
        {
            n: "Clube Aurora",
            u: "clubeaurora.example",
            c: "Assinaturas",
            s: 38,
            d: -3,
            k: 12,
            dt: "2026-10-05",
            a: 6,
            h: [46, 44, 41, 38],
            f: [
                [
                    "obs",
                    "Para cancelar, ligue para a central de atendimento",
                    "Conta",
                    91,
                    "Regra",
                ],
                [
                    "ins",
                    "Tem certeza? Você vai perder seus benefícios",
                    "Cancelamento",
                    72,
                    "IA local simulada",
                ],
            ],
            o: [
                [
                    "Dona Cida",
                    "neg",
                    "Não achei o botão de cancelar e precisei pedir ajuda ao meu neto.",
                ],
            ],
        },
        {
            n: "Ponto Play",
            u: "pontoplay.example",
            c: "Entretenimento",
            s: 74,
            d: 6,
            k: 5,
            dt: "2026-10-04",
            a: 4,
            h: [60, 64, 68, 74],
            f: [
                [
                    "ins",
                    "Não, obrigado, prefiro perder o desconto",
                    "Oferta de assinatura",
                    74,
                    "IA local simulada",
                ],
            ],
            o: [
                [
                    "Davi M.",
                    "pos",
                    "Melhorou: agora o botão de recusar aparece.",
                ],
            ],
        },
        {
            n: "Cesta da Vila",
            u: "cestadavila.example",
            c: "Compras",
            s: 55,
            d: 1,
            k: 9,
            dt: "2026-10-03",
            a: 7,
            h: [52, 53, 54, 55],
            f: [
                [
                    "tax",
                    "Taxa de conveniência em letra miúda",
                    "Carrinho",
                    85,
                    "Regra",
                ],
            ],
            o: [
                [
                    "Lúcia F.",
                    "neg",
                    "Só percebi a taxa depois de pagar.",
                ],
            ],
        },
    ];

    const FT = {
        urg: "texto e visual · contador",
        pre: "visual · caixa marcada",
        obs: "fluxo de navegação",
        tax: "visual · letra miúda",
        cus: "texto e valores",
    };

    const MS = [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez",
    ];
    const MH = ["jul", "ago", "set", "out"];

    const fd = (i) => {
        const [y, m, d] = i.split("-");
        return d + " " + MS[+m - 1] + " " + y;
    };
    const fx = (s) =>
        s < 50
            ? ["hi", "mais sinais de atenção"]
            : s < 80
              ? ["mi", "atenção moderada"]
              : ["lo", "menor incidência de sinais"];
    const E = (t) =>
        String(t).replace(
            /[&<>"]/g,
            (c) =>
                ({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                })[c],
        );
    const N = (t) =>
        t
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    const $ = (s) => document.querySelector(s);

    const GOOGLE_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.08 3.56-5.15 3.56-8.65z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3a7.17 7.17 0 0 1-10.67-3.77H1.4v3.09A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.39 14.32a7.2 7.2 0 0 1 0-4.64V6.59H1.4a12 12 0 0 0 0 10.82l3.99-3.09z"/><path fill="#EA4335" d="M12 4.75c1.76 0 3.34.61 4.58 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.4 6.59l3.99 3.09A7.17 7.17 0 0 1 12 4.75z"/></svg>`;

    const st = {
        q: "",
        cat: "todos",
        o: "recentes",
        sel: [],
        ct: new Set(),
        my: {},
        rp: new Set(),
        f: "todas",
        oo: "novas",
        cur: 0,
        ns: false,
        auth: null,
        lastDeleted: null,
        pendingModalReturn: null,
    };

    try {
        if (sessionStorage.getItem("bm-ns") === "1") st.ns = true;
    } catch {}
    try {
        st.my = JSON.parse(localStorage.getItem("bm-my") || "{}");
    } catch {}
    try {
        const rawAuth = localStorage.getItem("bm-auth");
        if (rawAuth) st.auth = JSON.parse(rawAuth);
    } catch {}

    // Sincroniza relatório publicado recentemente pela extensão (se houver)
    function syncPublishedAmazon() {
        try {
            const raw = localStorage.getItem("bm-published-amazon");
            if (!raw) return;
            const pub = JSON.parse(raw);
            if (pub && typeof pub.ethicalIndex === "number") {
                S[0].s = pub.ethicalIndex;
                if (pub.publishedAt) S[0].dt = pub.publishedAt;
                if (Array.isArray(pub.auditScores) && pub.auditScores.length) {
                    S[0].audit = pub.auditScores.map((g) => [
                        g.label,
                        g.score,
                        g.cls,
                    ]);
                }
                S[0].publishedBy = pub.publishedBy || "";
            }
        } catch {}
    }
    syncPublishedAmazon();

    const live = (t) => {
        const el = $("#live");
        if (!el) return;
        el.textContent = "";
        setTimeout(() => (el.textContent = t), 50);
    };
    const app = $("#app");
    const sv = (k, v) => {
        if (st.ns) return;
        try {
            localStorage.setItem(k, v);
        } catch {}
    };
    const rm = (k) => {
        try {
            localStorage.removeItem(k);
        } catch {}
    };

    /* =========================================================================
       AUTENTICAÇÃO SIMULADA COM GOOGLE (obrigatória para criação de conteúdo)
       ========================================================================= */
    function renderAuthSlot() {
        const slot = $("#auth-slot");
        if (!slot) return;
        if (st.auth) {
            slot.innerHTML = `<span class="auth-pill" title="Sessão Google simulada"><span aria-hidden="true">●</span> <strong>${E(st.auth.name)}</strong> <span class="note">(${E(st.auth.email)})</span></span><button class="btn2" id="btn-logout-google" type="button">Sair</button>`;
        } else {
            slot.innerHTML = `<button class="google-btn" id="btn-login-google" type="button">${GOOGLE_SVG}<span>Entrar com Google</span></button>`;
        }
    }

    function setAuth(user) {
        st.auth = user;
        if (user) {
            sv("bm-auth", JSON.stringify(user));
        } else {
            rm("bm-auth");
        }
        renderAuthSlot();
    }

    function openLoginModal(reason, triggerEl) {
        closeActiveModal();
        st.pendingModalReturn = triggerEl || document.activeElement;

        const reasonText =
            reason === "opinioes"
                ? "para publicar relatos na comunidade"
                : reason === "sugestoes"
                  ? "para enviar sugestões de novas categorias"
                  : "para publicar conteúdo no portal";

        const backdrop = document.createElement("div");
        backdrop.className = "pm-backdrop";
        backdrop.id = "bm-active-modal";
        backdrop.setAttribute("role", "dialog");
        backdrop.setAttribute("aria-modal", "true");
        backdrop.setAttribute("aria-labelledby", "pm-login-title");

        backdrop.innerHTML = `
            <div class="pm-dialog">
                <div class="pm-header">
                    <h2 id="pm-login-title">${GOOGLE_SVG} Entrar com Google</h2>
                    <button class="btn2" type="button" id="pm-close" aria-label="Fechar janela de login">✕</button>
                </div>
                <p>É necessário entrar com sua conta Google <strong>${reasonText}</strong>. A consulta ao portal e o uso local da extensão continuam livres sem login.</p>
                <p class="note"><strong>Por que pedimos login?</strong> Coletamos apenas seu nome e e-mail Google (nesta demonstração, simulado localmente) exclusivamente para evitar spam e abusos nas contribuições públicas.</p>
                <button class="btn2 pm-acct-btn" type="button" id="pm-quick-google">
                    ${GOOGLE_SVG}
                    <span><strong>Continuar como Estudante IHC (Demonstração)</strong><br><span class="note">estudante.ihc@gmail.com</span></span>
                </button>
                <form id="pm-google-form" style="display:grid;gap:10px" novalidate>
                    <label class="fld"><span>Ou informe um e-mail Google (simulado) <span class="req">(Obrigatório)</span></span>
                        <input id="pm-google-email" name="email" type="email" placeholder="seu.nome@gmail.com" autocomplete="email" required aria-required="true" aria-describedby="pm-login-err" />
                    </label>
                    <label class="fld">Nome de exibição (opcional)
                        <input id="pm-google-name" name="name" type="text" maxlength="40" placeholder="Ex.: Maria Silva" autocomplete="name" />
                    </label>
                    <p class="er" id="pm-login-err" role="alert"></p>
                    <div class="pm-actions">
                        <button class="btn2" type="button" id="pm-cancel">Cancelar</button>
                        <button class="btn" type="submit">Continuar com Google</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(backdrop);

        const completeLogin = (email, name) => {
            const cleanEmail = email.trim().toLowerCase();
            const cleanName =
                (name || "").trim() ||
                cleanEmail
                    .split("@")[0]
                    .replace(/[._-]+/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase());
            setAuth({
                name: cleanName,
                email: cleanEmail,
                provider: "google",
                loggedAt: new Date().toISOString(),
            });
            closeActiveModal(true);
            live(`Login com Google concluído como ${cleanName}.`);
            // Atualiza a tela atual caso seja uma página com bloqueio de criação de conteúdo
            const h = location.hash.slice(1) || "inicio";
            if (h.startsWith("opinioes-") || h === "sugestoes") {
                route();
            }
        };

        backdrop.addEventListener("click", (ev) => {
            if (ev.target === backdrop) closeActiveModal();
        });
        $("#pm-close").addEventListener("click", () => closeActiveModal());
        $("#pm-cancel").addEventListener("click", () => closeActiveModal());
        $("#pm-quick-google").addEventListener("click", () => {
            completeLogin("estudante.ihc@gmail.com", "Estudante IHC");
        });
        $("#pm-google-form").addEventListener("submit", (ev) => {
            ev.preventDefault();
            const email = $("#pm-google-email").value.trim();
            const name = $("#pm-google-name").value.trim();
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                $("#pm-login-err").textContent =
                    "Informe um endereço de e-mail válido (ex.: nome@gmail.com).";
                $("#pm-google-email").setAttribute("aria-invalid", "true");
                $("#pm-google-email").focus();
                return;
            }
            $("#pm-google-email").removeAttribute("aria-invalid");
            completeLogin(email, name);
        });

        $("#pm-quick-google").focus();
    }

    function openDeleteConfirmModal(delIndex, triggerEl) {
        closeActiveModal();
        st.pendingModalReturn = triggerEl || document.activeElement;

        const item = st.my[st.cur] && st.my[st.cur][delIndex];
        if (!item) return;

        const backdrop = document.createElement("div");
        backdrop.className = "pm-backdrop";
        backdrop.id = "bm-active-modal";
        backdrop.setAttribute("role", "alertdialog");
        backdrop.setAttribute("aria-modal", "true");
        backdrop.setAttribute("aria-labelledby", "pm-del-title");
        backdrop.setAttribute("aria-describedby", "pm-del-desc");

        backdrop.innerHTML = `
            <div class="pm-dialog">
                <div class="pm-header">
                    <h2 id="pm-del-title">Excluir seu relato?</h2>
                    <button class="btn2" type="button" id="pm-close" aria-label="Cancelar exclusão">✕</button>
                </div>
                <p id="pm-del-desc">Você está prestes a remover o seguinte relato publicado por <strong>${E(item[0])}</strong>:</p>
                <blockquote style="margin:0;padding-left:12px;border-left:3px solid var(--hi)">“${E(item[2])}”</blockquote>
                <p class="note">Após confirmar, um aviso com a opção <strong>Desfazer</strong> ainda ficará visível caso você mude de ideia.</p>
                <div class="pm-actions">
                    <button class="btn2" type="button" id="pm-cancel">Cancelar</button>
                    <button class="btn btn-danger" type="button" id="pm-confirm-del">Sim, excluir relato</button>
                </div>
            </div>
        `;

        document.body.appendChild(backdrop);

        backdrop.addEventListener("click", (ev) => {
            if (ev.target === backdrop) closeActiveModal();
        });
        $("#pm-close").addEventListener("click", () => closeActiveModal());
        $("#pm-cancel").addEventListener("click", () => closeActiveModal());
        $("#pm-confirm-del").addEventListener("click", () => {
            const removed = st.my[st.cur].splice(delIndex, 1)[0];
            st.lastDeleted = {
                siteIdx: st.cur,
                index: delIndex,
                item: removed,
            };
            sv("bm-my", JSON.stringify(st.my));
            closeActiveModal(true);
            olist();
            live("Seu relato foi excluído. Use o botão Desfazer se quiser restaurá-lo.");
            const undoBtn = $("#btn-undo-del");
            if (undoBtn) undoBtn.focus();
            else if ($("#oc")) $("#oc").focus();
        });

        $("#pm-cancel").focus();
    }

    function closeActiveModal(skipFocusReturn) {
        const modal = $("#bm-active-modal");
        if (modal) modal.remove();
        if (!skipFocusReturn && st.pendingModalReturn && st.pendingModalReturn.focus) {
            try {
                st.pendingModalReturn.focus();
            } catch {}
        }
        st.pendingModalReturn = null;
    }

    /* =========================================================================
       VLIBRAS (WIDGET OFICIAL + FALLBACK SEGURO OFFLINE/BLOQUEADO)
       ========================================================================= */
    let vlibrasScriptLoaded = false;
    let vlibrasWidgetInitialized = false;
    let vlibrasFailed = false;

    function updateVlibrasFallback(show, message) {
        let box = $("#bm-vlibras-fallback");
        if (!show) {
            if (box) box.remove();
            return;
        }
        if (!box) {
            box = document.createElement("div");
            box.id = "bm-vlibras-fallback";
            box.className = "vlibras-fallback";
            box.setAttribute("role", "status");
            box.setAttribute("aria-live", "polite");
            document.body.appendChild(box);
        }
        box.innerHTML = `
            <div>
                <strong>🤟 VLibras ativado</strong>
                <p class="note" style="margin-top:2px">${E(message)}</p>
            </div>
            <button class="btn2" type="button" id="bm-vlibras-off" aria-label="Desativar VLibras" style="min-height:36px;padding:0 10px">Desativar</button>
        `;
    }

    function applyVlibras(enabled, announce) {
        const btn = $("#pvl");
        if (btn) {
            btn.setAttribute("aria-pressed", String(!!enabled));
            btn.setAttribute(
                "aria-label",
                enabled
                    ? "Desativar tradutor VLibras para Libras"
                    : "Ativar tradutor VLibras para Libras",
            );
        }

        let vwRoot = $("#bm-vlibras-root");
        if (!enabled) {
            if (vwRoot) vwRoot.style.display = "none";
            updateVlibrasFallback(false);
            if (announce) live("Tradutor VLibras para Libras desativado.");
            return;
        }

        if (!vwRoot) {
            vwRoot = document.createElement("div");
            vwRoot.id = "bm-vlibras-root";
            vwRoot.setAttribute("vw", "");
            vwRoot.className = "enabled";
            vwRoot.innerHTML = `<div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>`;
            document.body.appendChild(vwRoot);
        } else {
            vwRoot.style.display = "";
        }

        if (announce) live("Tradutor VLibras para Libras ativado.");

        if (vlibrasFailed) {
            updateVlibrasFallback(
                true,
                "Widget externo indisponível por falta de conexão ou bloqueio. Indicador de Libras ativo.",
            );
            return;
        }

        if (window.VLibras && window.VLibras.Widget) {
            if (!vlibrasWidgetInitialized) {
                try {
                    new window.VLibras.Widget("https://vlibras.gov.br/app");
                    vlibrasWidgetInitialized = true;
                } catch {
                    vlibrasFailed = true;
                    updateVlibrasFallback(
                        true,
                        "Widget externo indisponível. Indicador de Libras ativo.",
                    );
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
                if (!vlibrasWidgetInitialized && pf.vl) {
                    updateVlibrasFallback(
                        true,
                        "Carregando tradutor VLibras. Se estiver offline, este indicador permanece ativo.",
                    );
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
                    if (pf.vl) {
                        updateVlibrasFallback(
                            true,
                            "Widget externo indisponível. Indicador de Libras ativo.",
                        );
                    }
                }
            };
            script.onerror = () => {
                clearTimeout(fallbackTimer);
                vlibrasFailed = true;
                if (pf.vl) {
                    updateVlibrasFallback(
                        true,
                        "Widget oficial indisponível offline ou bloqueado. Indicador de Libras ativo.",
                    );
                }
            };
            document.head.appendChild(script);
        }
    }

    /* Itens de achado (RF04, RF05, RF07, RF11, RF03) */
    function finding(f, key, n) {
        const [cat, tr, pg, cf, m] = f,
            c = CAT[cat],
            on = st.ct.has(key);
        return `<li><div class="m"><span class="tag w2">${n ? n + ". " : ""}${c[0]}</span><span class="tag v">${E(m)} · certeza ${cf}%</span>${pg ? `<span class="sub" style="margin:0">${E(pg)}</span>` : ""}</div>
<blockquote>“${E(tr)}”</blockquote><p><b>Por que é um sinal:</b> ${c[2]}</p><p><b>Caminho honesto:</b> ${c[3]}</p>
<p class="note">Fator: ${FT[cat] || "Texto"} · Analista local dedicado: ${c[0]}</p><div class="m"><button class="btn2" data-ct="${key}" aria-pressed="${on}">${on ? "Contestação enviada · desfazer" : "Contestar este sinal"}</button><span class="note">Sugestão automática, sujeita a erro.</span></div></li>`;
    }

    function spark(h) {
        const p = h.map((v, i) => [24 + i * 84, 84 - v * 0.72]);
        return `<svg viewBox="0 0 300 110" width="100%" role="img" aria-label="Índice Ético por mês (0 a 100, quanto maior melhor): ${h.map((v, i) => MH[i] + " " + v).join(", ")}"><path d="M20 12H290M20 84H290" stroke="var(--bd)"/><polyline fill="none" stroke="var(--brand)" stroke-width="2.5" points="${p.map((x) => x.join(",")).join(" ")}"/>${p.map((x, i) => `<circle cx="${x[0]}" cy="${x[1]}" r="4" fill="var(--sf)" stroke="var(--brand)" stroke-width="2"/><text x="${x[0]}" y="${x[1] - 9}" text-anchor="middle" font-size="11" fill="var(--brand)">${h[i]}</text><text x="${x[0]}" y="104" text-anchor="middle" font-size="10" fill="var(--mu)">${MH[i]}</text>`).join("")}</svg>`;
    }

    /* Views */
    const V = {
        inicio() {
            app.innerHTML = `<section class="hero"><div class="w"><p class="demo"><span class="badge">DADOS DEMONSTRATIVOS</span>Todos os sites, resultados e relatos são fictícios.</p>
<div class="hg"><div><h1 id="h1" tabindex="-1">Antes de usar um site, consulte o Betímetro.</h1><p class="lead">Compare sinais de interfaces que induzem suas escolhas, os <i lang="en">dark patterns</i>. Veja o Índice Ético de 0 a 100 — quanto maior, melhor —, o histórico de auditorias e as experiências de quem usou.</p>
<form class="search" role="search" id="fb" novalidate><label for="q" class="sr">Pesquisar site pelo nome ou endereço</label><input id="q" type="search" autocomplete="off" placeholder="Pesquise pelo nome ou endereço do site" value="${E(st.q)}"><button class="btn" type="submit">Buscar site</button></form>
<p class="sug"><span>Exemplos:</span>${["Amazon Brasil", "Lume Compras", "ViajaLeve", "Clube Aurora"].map((x) => `<button class="lk" type="button" data-sg="${x}">${x}</button>`).join("")}</p></div>
<aside class="ic" aria-label="Sobre o Índice Ético"><b>Índice Ético Betímetro</b><p class="big">0–100</p><p><b>Quanto maior, melhor</b> — menos sinais de <i lang="en">dark patterns</i> detectados.</p><ul class="bands" aria-label="Faixas: 0 a 49 mais sinais de atenção; 50 a 79 atenção moderada; 80 a 100 menor incidência"><li style="background:var(--hi)"></li><li style="background:var(--mi)"></li><li style="background:var(--lo)"></li></ul><p class="note">Mesma escala no Portal e na Extensão. Descreve a amostra auditada; não é selo de segurança ou confiabilidade.</p></aside></div></div></section>
<div class="w"><section class="s" aria-labelledby="hr"><h2 id="hr" tabindex="-1">Consulte os resultados públicos</h2><span class="sub">Escolha de 2 a 3 sites para comparar o Índice Ético entre eles.</span>
<div class="bar"><ul class="fl" aria-label="Filtrar por categoria">${["todos", "Compras", "Viagens", "Assinaturas", "Entretenimento"].map((c) => `<li><button class="fb" type="button" data-cat="${c}" aria-pressed="${st.cat === c}">${c === "todos" ? "Todos os sites" : c}</button></li>`).join("")}</ul>
<label class="note">Ordenar por <select id="od"><option value="recentes">Mais recentes</option><option value="maior">Maior Índice Ético</option><option value="menor">Menor Índice Ético</option><option value="nome">Nome (A–Z)</option></select></label></div>
<div class="card"><table><caption class="sr">Resultados públicos. Índice Ético de 0 a 100: quanto maior, melhor.</caption><thead><tr><th>Comparar</th><th>Site</th><th>Categoria</th><th>Índice Ético</th><th>Achados</th><th>Última auditoria</th><th>Comunidade</th></tr></thead><tbody id="tb"></tbody></table><p id="vz" class="note" style="padding:24px;text-align:center" hidden>Nenhum site encontrado. Tente outro nome ou limpe os filtros.</p><div class="foot"><p id="ct"></p><p>Índice Ético de 0 a 100 — quanto maior, melhor. Opiniões não compõem o índice.</p></div></div>
<div class="cmp" id="cb" hidden><span id="ctx"></span><div class="cmp-actions"><button class="btn2" id="clr-sel" type="button">Limpar seleção</button><button class="btn" id="go" type="button">Comparar sites</button></div></div></section></div>`;
            $("#od").value = st.o;
            rows();
        },
        site(i) {
            syncPublishedAmazon();
            const s = S[i],
                [cl, tx] = fx(s.s),
                tot = {};
            s.f.forEach((f) => (tot[f[0]] = (tot[f[0]] || 0) + 1));
            app.innerHTML = `<div class="w"><section class="s"><button class="back" type="button" data-go="inicio">← Voltar aos resultados</button>
<h1 id="h1" tabindex="-1" style="margin-top:8px">${s.n}</h1><span class="sub">${s.u} · <span class="tag v">${E(s.c)}</span> · <span class="badge">DADO FICTÍCIO</span></span>
<div class="panel"><div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap"><span class="sc ${cl}" style="font-size:2.6rem"><b style="font-weight:400">${s.s}</b><small>/100</small></span><div><b>Índice Ético: ${tx[0].toUpperCase() + tx.slice(1)}</b><p class="note">Escala 0–100 (quanto maior, melhor) · ${s.d >= 0 ? "Subiu " + s.d : "Caiu " + Math.abs(s.d)} pontos desde a auditoria anterior · ${s.k} sinais · última auditoria em ${fd(s.dt)}${s.publishedBy ? " · publicado por " + E(s.publishedBy) : ""}</p></div></div>
<p class="note">Sinais detectados localmente pelo motor do Betímetro, sujeitos a erro. O Índice Ético descreve a amostra auditada, não a segurança do site.</p>
<div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn2" type="button" data-cp="${i}">Copiar relatório</button><button class="btn2" type="button" data-add="${i}">Adicionar à comparação</button>${i === 0 ? `<a class="btn" href="./pages/demo-amazon.html">Inspecionar ao vivo na Extensão →</a>` : ""}</div></div>
${s.audit ? `<div class="panel"><h2>Relatório Técnico Completo · Extensão</h2><p class="note">Análise executada 100% localmente no navegador do usuário · 1.842 nós inspecionados · Motor de Auditoria Betímetro v1.4 · Hash <code>sha256:8f4b2c9e71d04a3b</code>. Escala unificada de 0 a 100 — quanto maior, melhor.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-top:8px">${s.audit.map(([lbl, val, c]) => `<div class="card" style="padding:14px;text-align:center;margin-top:0"><span class="sc ${c}" style="font-size:1.8rem"><b style="font-weight:700">${val}</b><small>/100</small></span><p style="margin:6px 0 0;font-weight:600;font-size:.9rem">${lbl}</p></div>`).join("")}</div></div>` : ""}
<div class="g2"><div class="panel"><h2>Histórico de auditorias</h2>${spark(s.h)}<a class="btn2" style="justify-self:start" href="#historico-${i}">Ver as ${s.a} auditorias e suas evidências</a><details><summary>Ver dados em tabela</summary><table><tbody>${s.h.map((v, j) => `<tr><td>${MH[j]} 2026</td><td>${v}/100</td></tr>`).join("")}</tbody></table></details></div>
<div class="panel"><h2>Sinais por categoria</h2>${Object.keys(tot)
                .map(
                    (k) =>
                        `<div class="row"><span>${CAT[k][0]}</span><i style="width:${tot[k] * 60}px;max-width:100%"></i><b>${tot[k]}</b></div>`,
                )
                .join(
                    "",
                )}<p class="note">Mostrando as evidências principais de ${s.k} sinais.</p></div></div>
<div class="panel"><h2>Evidências e justificativas</h2><ul class="fi">${s.f.map((f, j) => finding(f, i + "-" + j, j + 1)).join("")}</ul></div>
<div class="panel"><h2>Voz da comunidade</h2><p class="note">${ops(i).length} relatos · ${ops(i).filter((o) => o[1] === "pos").length} positivos · ${ops(i).filter((o) => o[1] !== "pos").length} com dificuldades. Opiniões são percepções individuais e não alteram o Índice Ético.</p>${ops(
                i,
            )
                .slice(0, 2)
                .map(
                    (o) =>
                        `<blockquote style="margin:0"><b>${E(o[0])}</b> <span class="tag v">${o[1] === "pos" ? "Experiência positiva" : "Dificuldade relatada"}</span><p>“${E(o[2])}”</p></blockquote>`,
                )
                .join(
                    "",
                )}<a class="btn2" style="justify-self:start" href="#opinioes-${i}">Ler todas as opiniões e contar a sua</a></div></section></div>`;
        },
        comparar() {
            const L = st.sel.map((i) => S[i]);
            const distinctCats = [...new Set(L.map((s) => s.c))];
            const mixedWarning =
                L.length >= 2 && distinctCats.length > 1
                    ? `<div class="cmp-warn" role="note"><span aria-hidden="true">⚠</span><div><strong>Categorias distintas:</strong> os sites selecionados pertencem a categorias diferentes (${distinctCats.map(E).join(", ")}). Leve em conta o contexto de cada setor ao comparar o Índice Ético.</div></div>`
                    : "";

            app.innerHTML = `<div class="w"><section class="s"><div class="m" style="justify-content:space-between"><button class="back" type="button" data-go="inicio">← Voltar aos resultados</button>${L.length ? `<button class="btn2" id="clr-sel" type="button">Limpar seleção (${L.length})</button>` : ""}</div><h1 id="h1" tabindex="-1" style="margin-top:8px">Comparar sites</h1>
${
    L.length < 2
        ? `<p class="lead">Escolha pelo menos 2 sites na lista de resultados para compará-los.</p>`
        : `<p class="note" style="margin-top:6px">Escala unificada: <strong>Índice Ético de 0 a 100 — quanto maior, melhor</strong>.</p>${mixedWarning}<div class="card"><table><caption class="sr">Comparação entre sites por Índice Ético (0 a 100, quanto maior melhor)</caption><thead><tr><th>Critério</th>${L.map((s) => `<th>${E(s.n)}<div style="margin-top:4px"><span class="tag v">${E(s.c)}</span></div></th>`).join("")}</tr></thead><tbody>
<tr><td data-l="Critério"><b>Categoria</b></td>${L.map((s) => `<td data-l="${E(s.n)}"><span class="tag v">${E(s.c)}</span></td>`).join("")}</tr>
<tr><td data-l="Critério"><b>Índice Ético</b></td>${L.map((s) => `<td data-l="${E(s.n)}"><span class="sc ${fx(s.s)[0]}"><b style="font-weight:400">${s.s}</b><small>/100</small></span> ${fx(s.s)[1]}</td>`).join("")}</tr>
<tr><td data-l="Critério"><b>Sinais detectados</b></td>${L.map((s) => `<td data-l="${E(s.n)}">${s.k}</td>`).join("")}</tr>
<tr><td data-l="Critério"><b>Principais padrões</b></td>${L.map((s) => `<td data-l="${E(s.n)}">${[...new Set(s.f.map((f) => CAT[f[0]][0]))].join(", ")}</td>`).join("")}</tr>
<tr><td data-l="Critério"><b>Evolução (jul → out)</b></td>${L.map((s) => `<td data-l="${E(s.n)}">${s.h[0]} → ${s.h[3]}</td>`).join("")}</tr>
<tr><td data-l="Critério"><b>Auditorias no histórico</b></td>${L.map((s) => `<td data-l="${E(s.n)}">${s.a}</td>`).join("")}</tr>
<tr><td data-l="Critério"><b>Relatório</b></td>${L.map((s) => `<td data-l="${E(s.n)}"><a href="#site-${S.indexOf(s)}">Abrir relatório</a></td>`).join("")}</tr></tbody></table></div><p class="note" style="margin-top:12px">Compare auditorias com o mesmo método e escopo. Quanto maior o Índice Ético, menor a incidência de padrões manipulativos.</p>`
}</section></div>`;
        },
    };

    const X = {
        0: [
            [
                "Beatriz A.",
                "pos",
                "Consegui cancelar o pedido em dois cliques e o reembolso saiu no prazo.",
                "2026-10-04",
                "Pós-compra",
            ],
            [
                "Caio R.",
                "neg",
                "Havia uma caixa de seguro já marcada, que só vi na revisão do pedido.",
                "2026-10-03",
                "Pagamento",
                "Obrigada pelo relato. A caixa pré-marcada será removida na próxima versão do checkout.",
            ],
            [
                "Sônia P.",
                "pos",
                "Entendi o valor total antes de pagar.",
                "2026-10-02",
                "Pagamento",
            ],
        ],
        2: [
            [
                "Tiago N.",
                "pos",
                "As taxas foram mostradas desde a busca.",
                "2026-10-01",
                "Resultados",
            ],
        ],
        3: [
            [
                "Seu Jorge",
                "neg",
                "Tentei cancelar pelo site e fui mandado para um telefone que só atende em horário comercial.",
                "2026-10-04",
                "Cancelamento",
            ],
            [
                "Ana K.",
                "neg",
                "Cada tela perguntava “tem certeza?” e deixava o botão de confirmar escondido.",
                "2026-10-02",
                "Cancelamento",
            ],
        ],
    };

    const ops = (i) =>
        S[i].o
            .concat(X[i] || [], st.my[i] || [])
            .map((o) => [
                o[0],
                o[1],
                o[2],
                o[3] || "2026-10-06",
                o[4] || "Navegação geral",
                o[5] || "",
                o[6],
            ]);

    V.opinioes = (i) => {
        st.cur = i;
        const s = S[i],
            a = ops(i),
            np = a.filter((o) => o[1] === "pos").length;

        const formContent = st.auth
            ? `<h2>Conte a sua experiência</h2>
<p class="note">Conectado com Google como <strong>${E(st.auth.email)}</strong>.</p>
<fieldset id="of-k-group" aria-required="true" aria-describedby="oe"><legend>Como foi? <span class="req">(Obrigatório)</span></legend><label class="ck"><input type="radio" name="k" value="pos" required aria-required="true"> Experiência positiva</label><label class="ck"><input type="radio" name="k" value="neg" required aria-required="true"> Tive dificuldade</label></fieldset>
<label class="fld"><span>Onde aconteceu? <span class="req" id="of-e-req" hidden>(Obrigatório)</span></span><input name="e" maxlength="60" placeholder="Página ou etapa — ex.: pagamento, cancelamento" aria-describedby="oe"></label>
<label class="fld"><span>O que aconteceu? <span class="req">(Obrigatório)</span></span><textarea name="t" maxlength="500" rows="4" minlength="15" required aria-required="true" aria-describedby="oe" placeholder="Descreva sem incluir dados pessoais"></textarea></label>
<label class="fld">Como quer aparecer?<input name="n" maxlength="30" placeholder="${E(st.auth.name)} ou Anônimo" value="${E(st.auth.name)}" autocomplete="off"></label>
<label class="ck"><input type="checkbox" name="c" required aria-required="true" aria-describedby="oe"> <span>Entendo que meu relato será público e que não incluí dados pessoais. <span class="req">(Obrigatório)</span></span></label>
<p class="er" id="oe" role="alert"></p><div><button class="btn" type="submit">Publicar relato</button></div>
<p class="note">Login com Google obrigatório para publicar e evitar spam ou abusos. Você pode excluir seu relato depois. Relatos de dificuldade precisam informar a etapa para evitar ataques injustos à empresa.</p>`
            : `<h2>Conte a sua experiência</h2>
<div class="auth-gate">
    <p><strong>Entre com Google para publicar um relato</strong></p>
    <p class="note">A leitura de relatos e consultas ao portal são livres, mas pedimos Login com Google para criar conteúdo público e evitar spam ou abusos.</p>
    <div><button class="google-btn" type="button" data-open-login="opinioes">${GOOGLE_SVG}<span>Entrar com Google para continuar</span></button></div>
</div>
<p class="note">Depois de entrar, você poderá escolher seu nome de exibição e excluir seu relato a qualquer momento.</p>`;

        app.innerHTML = `<div class="w"><section class="s"><button class="back" type="button" data-go="site-${i}">← Voltar ao relatório de ${s.n}</button><h1 id="h1" tabindex="-1" style="margin-top:8px">Opiniões sobre ${s.n}</h1>
<span class="sub">${a.length} relatos · ${np} positivos · ${a.length - np} com dificuldades · <span class="tag v">${E(s.c)}</span> · <span class="badge">RELATOS FICTÍCIOS</span></span>
<p class="note" style="margin-top:8px">Opiniões são experiências individuais, não achados técnicos, e não alteram o Índice Ético. Empresas têm direito de resposta.</p>
<div id="op-undo-slot"></div>
<div class="g2" style="align-items:start;margin-top:8px"><div><div class="bar" style="margin-top:8px"><ul class="fl" aria-label="Filtrar relatos">${[
            ["todas", "Todos"],
            ["pos", "Positivos"],
            ["neg", "Dificuldades"],
        ]
            .map(
                ([k, l]) =>
                    `<li><button class="fb" type="button" data-of="${k}" aria-pressed="${st.f === k}">${l}</button></li>`,
            )
            .join("")}</ul>
<label class="note">Ordenar <select id="oo"><option value="novas">Mais recentes</option><option value="antigas">Mais antigos</option></select></label></div><p class="note" id="oc" tabindex="-1" style="margin-top:10px"></p><ul id="ol" style="list-style:none;padding:0;margin:0"></ul></div>
<form id="of" class="panel" novalidate style="margin-top:0">${formContent}</form></div></section></div>`;
        $("#oo").value = st.oo;
        olist();
    };

    function renderUndoBar() {
        const slot = $("#op-undo-slot");
        if (!slot) return;
        if (st.lastDeleted && st.lastDeleted.siteIdx === st.cur) {
            slot.innerHTML = `<div class="undo-bar" id="op-undo-bar" role="status"><span>Seu relato foi excluído.</span><div class="m"><button class="btn2" type="button" id="btn-undo-del">Desfazer exclusão</button><button class="btn2" type="button" id="btn-dismiss-undo" aria-label="Fechar aviso de exclusão">Fechar</button></div></div>`;
        } else {
            slot.innerHTML = "";
        }
    }

    function olist() {
        const i = st.cur,
            a = ops(i);
        renderUndoBar();
        document
            .querySelectorAll("[data-of]")
            .forEach((b) =>
                b.setAttribute("aria-pressed", String(b.dataset.of === st.f)),
            );
        const L = a
            .filter(
                (o) =>
                    st.f === "todas" || (st.f === "pos") === (o[1] === "pos"),
            )
            .sort((x, y) =>
                st.oo === "novas"
                    ? y[3].localeCompare(x[3])
                    : x[3].localeCompare(y[3]),
            );
        $("#oc").textContent = L.length + " de " + a.length + " relatos";
        $("#ol").innerHTML = L.length
            ? L.map((o) => {
                  const p = o[1] === "pos",
                      k = i + "-" + o[2].slice(0, 14),
                      myIdx = o[6]
                          ? (st.my[i] || []).findIndex((x) => x[2] === o[2])
                          : -1;
                  return `<li class="op"><div class="who"><span class="av" aria-hidden="true">${E(
                      o[0]
                          .split(" ")
                          .map((x) => x[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase(),
                  )}</span><div style="flex:1"><b>${E(o[0])}</b><span class="sub" style="margin:0"><time datetime="${o[3]}">${fd(o[3])}</time> · ${E(o[4])}</span></div><span class="tag ${p ? "" : "w2"}">${p ? "✓ Experiência positiva" : "! Dificuldade relatada"}</span></div><blockquote>“${E(o[2])}”</blockquote>${o[5] ? `<div class="rs"><b>Resposta da empresa</b><p>${E(o[5])}</p></div>` : ""}<div class="m"><button class="btn2" type="button" data-rp="${E(k)}" aria-pressed="${st.rp.has(k)}">${st.rp.has(k) ? "Denúncia enviada · desfazer" : "Denunciar este relato"}</button>${myIdx >= 0 ? `<button class="btn2 btn-danger" type="button" data-del="${myIdx}">Excluir meu relato</button>` : ""}</div></li>`;
              }).join("")
            : `<li class="note" style="padding:20px 0">Nenhum relato neste filtro.</li>`;
    }

    function sendOp(f) {
        if (!st.auth) {
            openLoginModal("opinioes", f.querySelector("button"));
            return;
        }
        const d = new FormData(f),
            k = d.get("k"),
            tx = (d.get("t") || "").trim(),
            et = (d.get("e") || "").trim();
        f.querySelectorAll("[aria-invalid]").forEach((el) =>
            el.removeAttribute("aria-invalid"),
        );
        let m = "";
        let bad = null;
        if (!k) {
            m = "Escolha se a experiência foi positiva ou com dificuldade.";
            bad = f.querySelector('input[name="k"]');
        } else if (tx.length < 15) {
            m = "Conte um pouco mais — mínimo de 15 caracteres.";
            bad = f.querySelector('textarea[name="t"]');
        } else if (k === "neg" && !et) {
            m =
                "Para relatos de dificuldade, informe a página ou etapa onde ocorreu.";
            bad = f.querySelector('input[name="e"]');
        } else if (!d.get("c")) {
            m = "Confirme o aviso de privacidade para publicar.";
            bad = f.querySelector('input[name="c"]');
        }
        $("#oe").textContent = m;
        if (m) {
            if (bad) {
                bad.setAttribute("aria-invalid", "true");
                bad.focus();
            }
            return;
        }
        const i = st.cur;
        (st.my[i] = st.my[i] || []).unshift([
            (d.get("n") || "").trim() || st.auth.name || "Anônimo",
            k,
            tx,
            new Date().toISOString().slice(0, 10),
            et || "Navegação geral",
            "",
            1,
        ]);
        st.lastDeleted = null;
        sv("bm-my", JSON.stringify(st.my));
        f.reset();
        const eReq = $("#of-e-req");
        const eInp = f.querySelector('input[name="e"]');
        if (eReq) eReq.hidden = true;
        if (eInp) {
            eInp.removeAttribute("required");
            eInp.removeAttribute("aria-required");
        }
        const nameInput = f.querySelector('input[name="n"]');
        if (nameInput && st.auth) nameInput.value = st.auth.name;
        st.f = "todas";
        olist();
        live("Relato publicado nesta demonstração.");
    }

    function sim() {
        let t = 0;
        document
            .querySelectorAll("[data-sim]")
            .forEach(
                (x) =>
                    (t +=
                        CAT[x.dataset.sim][1] *
                        Math.max(0, Math.min(9, +x.value || 0))),
            );
        const sc = Math.max(0, 100 - t),
            [c, tx] = fx(sc);
        $("#so").innerHTML =
            `<span class="sc ${c}"><b style="font-weight:400">${sc}</b><small>/100</small></span> Índice Ético: ${tx} (quanto maior, melhor)`;
    }

    V.como = () => {
        app.innerHTML = `<div class="w"><section class="s"><h1 id="h1" tabindex="-1">Como funciona</h1><p class="lead">O Betímetro executa seu motor de análise <strong>100% localmente no seu computador e navegador</strong>, combinando regras objetivas com análise contextual para gerar o <strong>Índice Ético de 0 a 100 (quanto maior, melhor)</strong>. Cada sinal traz evidência, justificativa e caminho honesto.</p>
<div class="panel bd3"><div style="--c:var(--hi)"><strong>0–49</strong><h3>Mais sinais de atenção</h3><p class="note">Leia os achados com cuidado antes de decidir.</p></div><div style="--c:var(--mi)"><strong>50–79</strong><h3>Atenção moderada</h3><p class="note">Veja onde os sinais aparecem e se afetam o que você quer fazer.</p></div><div style="--c:var(--lo)"><strong>80–100</strong><h3>Menor incidência</h3><p class="note">Nota alta não garante ausência de problemas.</p></div></div>
<div class="panel"><h2>Análise 100% local e transparente</h2><p>A análise combina fatores textuais (o que a página diz) e fatores visuais e de estrutura (o que ela mostra e como se navega), como caixas já marcadas, letra miúda e fluxos de cancelamento. <strong>Todo esse processamento ocorre localmente no seu dispositivo</strong>: nenhum conteúdo das páginas visitadas é enviado a servidores externos durante a inspeção.</p><p class="note">Somente se você decidir explicitamente publicar um relatório técnico no portal (autenticado com Google) é que o resumo desse relatório é enviado.</p></div>
<div class="panel"><h2>O que pesa no Índice Ético</h2><p>Índice Ético = 100 menos a soma dos pesos dos sinais encontrados (mínimo 0). Quanto maior o índice, melhor. Os pesos desta demonstração são ilustrativos.</p><div class="card" style="margin:0"><table><thead><tr><th>Categoria</th><th>Peso por sinal</th><th>O que é</th><th>Caminho honesto</th></tr></thead><tbody>${Object.keys(
            CAT,
        )
            .map(
                (k) =>
                    `<tr><td data-l="Categoria" class="f"><b>${CAT[k][0]}</b></td><td data-l="Peso">−${CAT[k][1]}</td><td data-l="O que é">${CAT[k][2]}</td><td data-l="Caminho honesto">${CAT[k][3]}</td></tr>`,
            )
            .join("")}</tbody></table></div></div>
<div class="panel"><h2>Simule um Índice Ético</h2><p class="note">Informe quantos sinais de cada tipo foram encontrados.</p><div class="g2">${Object.keys(
            CAT,
        )
            .map(
                (k) =>
                    `<label class="fld">${CAT[k][0]} (−${CAT[k][1]} cada)<input type="number" min="0" max="9" value="0" data-sim="${k}"></label>`,
            )
            .join("")}</div><output id="so" aria-live="polite"></output></div>
<div class="panel"><h2>Mais dúvidas?</h2><p>Veja as <a href="#faq">perguntas frequentes</a> ou <a href="#contato">fale com a equipe</a>, inclusive para direito de resposta e correções.</p></div>
<div class="panel"><h2>Base de referência</h2><p class="note">Categorias inspiradas nas taxonomias de Brignull (deceptive.design), Gray et al. (2018) e Mathur et al. (2019). Contexto legal: LGPD, Código de Defesa do Consumidor e Digital Services Act (UE).</p></div></section></div>`;
        sim();
    };

    V.faq = () => {
        const Q = [
            [
                "O que são dark patterns?",
                "Padrões de design que empurram você para escolhas que beneficiam a empresa, como contadores falsos, caixas já marcadas e cancelamentos difíceis.",
            ],
            [
                "O que é um sinal?",
                "Um trecho ou elemento da página que combina com uma categoria de dark pattern. Ele indica um ponto de atenção, mas não prova intenção.",
            ],
            [
                "Como funciona a pontuação do Betímetro?",
                "Tanto a extensão quanto o portal usam a mesma escala unificada: Índice Ético de 0 a 100, em que quanto maior, melhor. A pontuação parte de 100 e sofre deduções conforme os sinais encontrados.",
            ],
            [
                "A nota é um selo de confiança?",
                "Não. Ela descreve só a amostra auditada e não avalia segurança, qualidade do serviço nem legalidade.",
            ],
            [
                "Como o Betímetro analisa uma página?",
                "Combinando fatores textuais e visuais diretamente no seu navegador, com regras objetivas e análise contextual local. Todo sinal mostra evidência, justificativa e caminho honesto, e é uma sugestão automática que pode errar.",
            ],
            [
                "Como discordo de um sinal?",
                "Em cada relatório use “Contestar este sinal”. Contestações e sugestões recebem resposta da equipe em até 7 dias.",
            ],
            [
                "Os relatos da comunidade mudam a nota?",
                "Não. Relatos são experiências individuais e ficam separados do Índice Ético.",
            ],
            [
                "A extensão envia o conteúdo das páginas que eu visito?",
                "Não. Todo o motor de análise da extensão executa 100% localmente no seu computador e navegador. Nenhum conteúdo das páginas que você visita é enviado a servidores externos durante a análise. Apenas se você decidir explicitamente publicar um relatório técnico no portal, com conta Google autenticada, é que o resumo desse relatório é enviado.",
            ],
            [
                "Sou uma empresa avaliada. Posso responder?",
                "Sim. Use a página de contato para pedir correção ou enviar sua resposta, que aparece junto ao relato.",
            ],
            [
                "Preciso de conta? Quais dados vocês guardam?",
                "Para consultar o portal e usar a extensão no seu navegador, não é necessário criar conta. Porém, para publicar relatos, enviar sugestões da comunidade ou publicar relatórios técnicos da extensão no portal, é obrigatório entrar com sua conta Google — coletando apenas nome e e-mail para evitar spam e abusos. Você pode excluir seus relatos ou sair da conta a qualquer momento.",
            ],
        ];
        app.innerHTML = `<div class="w"><section class="s"><h1 id="h1" tabindex="-1">Perguntas frequentes</h1><p class="lead">Respostas curtas sobre o Índice Ético, a análise local e seus dados. Não achou o que procurava? <a href="#contato">Fale com a equipe</a>.</p><div class="panel">${Q.map((q) => `<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join("")}</div></section></div>`;
    };

    V.contato = () => {
        app.innerHTML = `<div class="w"><section class="s"><h1 id="h1" tabindex="-1">Contato e correções</h1><p class="lead">Use este formulário para dúvidas, sugestões, pedido de correção ou direito de resposta de empresas avaliadas. A equipe responde em até 7 dias.</p>
<div class="g2" style="align-items:start"><form id="rf" class="panel" style="margin-top:20px"><label class="fld"><span>Assunto <span class="req">(Obrigatório)</span></span><select required aria-required="true"><option>Dúvida</option><option>Sugestão</option><option>Pedido de correção</option><option>Direito de resposta (empresa)</option><option>Barreira de acessibilidade</option></select></label>
<label class="fld">Site (se for o caso)<select><option value="">Nenhum</option>${S.map((s) => `<option>${s.n}</option>`).join("")}</select></label>
<label class="fld"><span>E-mail para resposta <span class="req">(Obrigatório)</span></span><input type="email" required aria-required="true" autocomplete="email"></label><label class="fld"><span>Mensagem <span class="req">(Obrigatório)</span></span><textarea rows="4" required aria-required="true"></textarea></label>
<label class="ck"><input type="checkbox" required aria-required="true"> <span>Concordo em usar meu e-mail só para esta resposta (LGPD). <span class="req">(Obrigatório)</span></span></label><div><button class="btn" type="submit">Enviar mensagem</button></div><p class="note" id="rr" role="status"></p></form>
<div class="panel"><h2>Outros canais</h2><p class="demo" style="margin-bottom:4px"><span class="badge">E-MAIL FICTÍCIO</span>Endereço ilustrativo deste protótipo; não recebe mensagens reais.</p><p>Equipe do projeto (IHC, UFABC): <a href="mailto:contato.betimetro@ufabc.edu.br">contato.betimetro@ufabc.edu.br</a></p><p class="note">Se não conseguir usar o formulário, escreva ou peça que alguém da equipe converse com você por áudio ou videochamada.</p></div></div></section></div>`;
    };

    V.acessibilidade = () => {
        app.innerHTML = `<div class="w"><section class="s"><h1 id="h1" tabindex="-1">Declaração de acessibilidade</h1><p class="lead">O Betímetro busca ser utilizável por pessoas com deficiência, idosas e com baixo letramento digital. A meta é seguir as WCAG 2.2, níveis AA e AAA.</p>
<div class="panel"><h2>O que já existe neste protótipo</h2><ul><li>Link para pular ao conteúdo e navegação completa por teclado, com foco visível.</li><li>Sinais, notas e estados identificados por texto e símbolo, não só por cor.</li><li>Gráfico com descrição e tabela equivalente.</li><li>Avisos de resultado, filtros e erros anunciados a leitores de tela via <code>aria-live</code>.</li><li>Alvos de toque de pelo menos 44 pixels, ampliados para 48 pixels ou mais no Modo Simplificado, com layout responsivo.</li><li>Tema claro, tema escuro e Alto Contraste claro e escuro no padrão WCAG AAA, com sincronização automática entre Portal e Extensão.</li><li>Botão VLibras para tradução em Libras no portal e na extensão, com indicador acessível de contingência offline.</li><li>Modo simplificado com linguagem sem jargões e mensagens de erro orientativas.</li></ul></div>
<div class="panel"><h2>Encontrou uma barreira?</h2><p>Conte pelo <a href="#contato">formulário de contato</a>, escolhendo o assunto “Barreira de acessibilidade”, ou por e-mail. Respondemos em até 7 dias.</p><p class="note">Última revisão: ${fd("2026-11-24")}. Protótipo demonstrativo.</p></div></section></div>`;
    };

    /* =========================================================================
       PREFERÊNCIAS DE ACESSIBILIDADE SINCRONIZADAS (bm-pf)
       ========================================================================= */
    let pf = { fs: 100, th: "auto", hc: 0, sp: 0, vl: 0, pfs: 100 };
    function loadPf() {
        try {
            const raw = localStorage.getItem("bm-pf");
            if (raw) {
                const parsed = JSON.parse(raw);
                pf.fs = [100, 115, 130].includes(+parsed.fs) ? +parsed.fs : 100;
                pf.th = ["auto", "light", "dark"].includes(parsed.th)
                    ? parsed.th
                    : "auto";
                pf.hc = parsed.hc ? 1 : 0;
                pf.sp = parsed.sp ? 1 : 0;
                pf.vl = parsed.vl ? 1 : 0;
                pf.pfs = [100, 115, 130].includes(+parsed.pfs)
                    ? +parsed.pfs
                    : 100;
            }
        } catch {}
    }
    loadPf();

    function applyPf(options = {}) {
        const r = document.documentElement;
        r.style.fontSize = pf.fs + "%";
        pf.th === "auto"
            ? r.removeAttribute("data-theme")
            : r.setAttribute("data-theme", pf.th);
        pf.hc
            ? r.setAttribute("data-hc", "")
            : r.removeAttribute("data-hc");
        document.body.classList.toggle("portal-senior-mode", !!pf.sp);

        document
            .querySelectorAll("[data-fs]")
            .forEach((b) =>
                b.setAttribute("aria-pressed", String(+b.dataset.fs === pf.fs)),
            );
        if ($("#pt")) $("#pt").value = pf.th;
        if ($("#phc")) $("#phc").checked = !!pf.hc;
        if ($("#psp")) $("#psp").checked = !!pf.sp;
        applyVlibras(!!pf.vl, !!options.announceVlibras);
    }

    function savePf(options = {}) {
        sv("bm-pf", JSON.stringify(pf));
        applyPf(options);
    }

    const SM = [
        [/dark patterns/gi, "armadilhas visuais"],
        [/Índice Ético Betímetro/g, "Nota de respeito do Betímetro"],
        [/Índice Ético/g, "Nota de respeito"],
        [/Índice Betímetro/g, "Nota do Betímetro"],
        [/índice/g, "nota"],
        [/Índice/g, "Nota"],
        [/sinais/g, "alertas"],
        [/sinal/g, "alerta"],
        [/Sinais/g, "Alertas"],
        [/Sinal/g, "Alerta"],
        [/auditorias/g, "verificações"],
        [/auditoria/g, "verificação"],
        [/Auditorias/g, "Verificações"],
        [/Auditoria/g, "Verificação"],
        [/evidências/g, "provas"],
        [/Evidências/g, "Provas"],
        [/Contestar/g, "Discordar"],
        [/contestação/gi, "discordância"],
        [/certeza/g, "confiança"],
        [/\bDOM\b/g, "estrutura da página"],
        [/\bJSON\b/g, "arquivo técnico"],
    ];

    function simp(r) {
        const w = document.createTreeWalker(r, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = w.nextNode())) {
            if (/TEXTAREA|SCRIPT|STYLE|CODE/.test(n.parentNode.nodeName))
                continue;
            let t = n.nodeValue;
            SM.forEach(([a, b]) => (t = t.replace(a, b)));
            if (t !== n.nodeValue) n.nodeValue = t;
        }
    }

    new MutationObserver(() => {
        if (pf.sp) simp(app);
    }).observe(app, { childList: true, subtree: true });

    /* Acesso à Extensão de Alta Fidelidade */
    V.extensao = () => {
        app.innerHTML = `<div class="w"><section class="s"><h1 id="h1" tabindex="-1">Extensão Betímetro · Proteção Ativa e Auditoria Técnica Completa</h1>
<p class="lead">Todo o motor de análise da extensão executa <strong>100% localmente no seu navegador</strong>, exibindo o Índice Ético unificado (0–100 · quanto maior, melhor) sem enviar o conteúdo das páginas visitadas para servidores externos.</p>
<div class="g2" style="margin-top:20px;align-items:stretch">
    <div class="panel" style="display:flex;flex-direction:column;justify-content:space-between">
        <div>
            <span class="tag v">DEMONSTRAÇÃO REAL EM PÁGINA</span>
            <h2 style="margin-top:8px">1. Extensão em Execução na Amazon</h2>
            <p style="margin-top:8px">Experimente a extensão operando localmente sobre a página de produto da Amazon Brasil: ligue/desligue a proteção, ajuste o tamanho da fonte, ative o VLibras, inspecione os 4 alertas destacados na página e abra as opções avançadas para executar a <b>Auditoria Técnica Completa</b> e publicar o relatório no portal (com Login com Google).</p>
        </div>
        <div style="margin-top:16px">
            <a class="btn" href="./pages/demo-amazon.html">
                Abrir Página da Amazon com Extensão →
            </a>
        </div>
    </div>
    <div class="panel" style="display:flex;flex-direction:column;justify-content:space-between">
        <div>
            <span class="tag w2">INTERFACE DO POP-UP</span>
            <h2 style="margin-top:8px">2. Menu Isolado da Extensão</h2>
            <p style="margin-top:8px">Visualize o menu da extensão de forma dedicada, com medidor do Índice Ético (0–100 · quanto maior, melhor), controle de energia (ligar/desligar), justificativas, caminho honesto, contestação e gerador de Relatório Técnico.</p>
        </div>
        <div style="margin-top:16px">
            <a class="btn2" href="./pages/extensao-menu.html">
                Abrir Menu Isolado da Extensão →
            </a>
        </div>
    </div>
</div>
</section></div>`;
    };

    /* Sugestões da comunidade */
    const SG0 = [
        [
            "Falsa escassez de estoque",
            "Avisos de “últimas unidades” que não refletem o estoque real.",
            14,
        ],
        [
            "Rolagem infinita sem pausa",
            "Feeds que nunca terminam e escondem o ponto de parar.",
            21,
        ],
        [
            "Avaliações compradas ou falsas",
            "Notas e comentários publicados para enganar quem compra.",
            17,
        ],
        [
            "Preço que muda ao voltar",
            "O valor sobe quando você sai e volta à página.",
            9,
        ],
    ];
    let sg = { v: {}, m: [] };
    try {
        Object.assign(sg, JSON.parse(localStorage.getItem("bm-sg") || "{}"));
    } catch {}
    const sgl = () =>
        SG0.map((x, i) => ({
            id: "s" + i,
            n: x[0],
            d: x[1],
            c: x[2],
        }))
            .concat(
                sg.m.map((x, i) => ({
                    id: "m" + i,
                    n: x[0],
                    d: x[1],
                    c: 0,
                    mine: 1,
                })),
            )
            .map((x) => ({ ...x, t: x.c + (sg.v[x.id] ? 1 : 0) }))
            .sort((a, b) => b.t - a.t);

    V.sugestoes = () => {
        const sgForm = st.auth
            ? `<h2>Proponha uma categoria</h2>
<p class="note">Conectado com Google como <strong>${E(st.auth.email)}</strong>.</p>
<label class="fld"><span>Nome <span class="req">(Obrigatório)</span></span><input name="n" maxlength="50" minlength="4" required aria-required="true" aria-describedby="se"></label>
<label class="fld"><span>Como ela engana as pessoas? <span class="req">(Obrigatório)</span></span><textarea name="d" rows="3" maxlength="200" minlength="15" required aria-required="true" aria-describedby="se"></textarea></label>
<p class="er" id="se" role="alert"></p>
<div><button class="btn" type="submit">Enviar sugestão</button></div>
<p class="note">Login com Google obrigatório para enviar sugestões e evitar spam ou abusos. A equipe responde em até 7 dias.</p>`
            : `<h2>Proponha uma categoria</h2>
<div class="auth-gate">
    <p><strong>Entre com Google para enviar uma sugestão</strong></p>
    <p class="note">Para evitar spam e abusos, pedimos autenticação com Google ao propor novas categorias à comunidade.</p>
    <div><button class="google-btn" type="button" data-open-login="sugestoes">${GOOGLE_SVG}<span>Entrar com Google para continuar</span></button></div>
</div>
<p class="note">A consulta às sugestões continua livre sem login. A equipe responde em até 7 dias.</p>`;

        app.innerHTML = `<div class="w"><section class="s"><h1 id="h1" tabindex="-1">Sugestões da comunidade</h1><p class="lead">Novas categorias de dark patterns e métricas são definidas pelas ideias mais apoiadas. Apoie uma sugestão ou proponha a sua. <span class="badge">DADOS FICTÍCIOS</span></p>
<div class="g2" style="align-items:start"><ul id="sl" style="list-style:none;padding:0;margin:0"></ul><form id="sf" class="panel" novalidate style="margin-top:0">${sgForm}</form></div></section></div>`;
        sglist();
    };

    function sglist(f) {
        $("#sl").innerHTML = sgl()
            .map(
                (x) =>
                    `<li class="op"><div class="m" style="justify-content:space-between"><b>${E(x.n)}</b><span class="tag v">${x.t} apoios</span></div><p>${E(x.d)}</p><div class="m"><button class="btn2" type="button" data-v="${x.id}" aria-pressed="${!!sg.v[x.id]}">${sg.v[x.id] ? "Apoio registrado · remover" : "Apoiar esta ideia"}</button>${x.mine ? '<span class="tag">Sua sugestão</span>' : ""}</div></li>`,
            )
            .join("");
        if (f) {
            const b = document.querySelector(`[data-v="${f}"]`);
            b && b.focus();
        }
    }

    function addSg(f) {
        if (!st.auth) {
            openLoginModal("sugestoes", f.querySelector("button"));
            return;
        }
        const d = new FormData(f),
            n = (d.get("n") || "").trim(),
            t = (d.get("d") || "").trim();
        f.querySelectorAll("[aria-invalid]").forEach((el) =>
            el.removeAttribute("aria-invalid"),
        );
        let m = "";
        let bad = null;
        if (n.length < 4) {
            m = "Dê um nome com pelo menos 4 letras.";
            bad = f.querySelector('input[name="n"]');
        } else if (t.length < 15) {
            m = "Explique em pelo menos 15 caracteres como ela engana as pessoas.";
            bad = f.querySelector('textarea[name="d"]');
        }
        $("#se").textContent = m;
        if (m) {
            if (bad) {
                bad.setAttribute("aria-invalid", "true");
                bad.focus();
            }
            return;
        }
        sg.m.push([n, t]);
        sv("bm-sg", JSON.stringify(sg));
        f.reset();
        sglist();
        live("Sugestão enviada nesta demonstração.");
    }

    /* Histórico completo (RF01) */
    const AU = (i) => {
        const s = S[i],
            n = s.a,
            t0 = Date.UTC(2026, 6, 3),
            t1 = Date.parse(s.dt),
            cats = s.f.map((f) => f[0]),
            L = [];
        for (let j = 0; j < n; j++) {
            const t = n > 1 ? j / (n - 1) : 1,
                p = t * 3,
                k = Math.min(2, Math.floor(p)),
                idx = Math.round(s.h[k] + (s.h[k + 1] - s.h[k]) * (p - k)),
                dt = new Date(t0 + t * (t1 - t0)).toISOString().slice(0, 10),
                sgCount = j === n - 1 ? s.k : Math.round((100 - idx) / 6),
                dist = {};
            for (let q = 0; q < sgCount; q++) {
                const c = cats[q % cats.length];
                dist[c] = (dist[c] || 0) + 1;
            }
            L.push({
                id: j + 1,
                dt,
                idx,
                sg: sgCount,
                dist,
                d: j ? idx - L[j - 1].idx : null,
            });
        }
        return L.reverse();
    };

    V.historico = (i) => {
        st.cur = i;
        const s = S[i],
            A = AU(i),
            o = A.map(
                (a) => `<option value="${a.id}">#${a.id} · ${fd(a.dt)}</option>`,
            ).join("");
        app.innerHTML = `<div class="w"><section class="s"><button class="back" type="button" data-go="site-${i}">← Voltar ao relatório de ${s.n}</button><h1 id="h1" tabindex="-1" style="margin-top:8px">Histórico de auditorias: ${s.n}</h1><span class="sub">${A.length} auditorias · Motor de Auditoria Betímetro v1.4 · <span class="tag v">${E(s.c)}</span> · <span class="badge">DADO FICTÍCIO</span></span>
<div class="panel"><h2>Compare duas auditorias</h2><div class="g2"><label class="fld">Auditoria A<select id="ha">${o}</select></label><label class="fld">Auditoria B<select id="hb">${o}</select></label></div><p id="hc" role="status"></p><p class="note">Escala unificada: Índice Ético de 0 a 100 (quanto maior, melhor). Compare auditorias com o mesmo método e escopo.</p></div>
<div class="panel"><h2>Todas as auditorias</h2>${A.map((a, j) => {
            const [c, t] = fx(a.idx);
            return `<details${j === 0 ? " open" : ""}><summary>#${a.id} · ${fd(a.dt)} · Índice Ético ${a.idx}/100${a.d === null ? "" : " (" + (a.d >= 0 ? "+" : "−") + Math.abs(a.d) + ")"} · ${a.sg} sinais</summary><div style="display:grid;gap:10px;padding:10px 0"><p><span class="tag ${c === "lo" ? "" : "w2"}">${t}</span></p><ul class="tags" style="list-style:none;padding:0;margin:0;display:flex;gap:8px;flex-wrap:wrap">${
                Object.keys(a.dist)
                    .map(
                        (k) =>
                            `<li class="tag v">${CAT[k][0]} · ${a.dist[k]}</li>`,
                    )
                    .join("") || "<li class=note>Nenhum sinal.</li>"
            }</ul>${j === 0 ? `<ul class="fi">${s.f.map((f, q) => finding(f, "h-" + i + "-" + q, q + 1)).join("")}</ul>` : `<p class="note">Evidências desta auditoria arquivadas. Aqui aparece só a composição dos sinais.</p>`}</div></details>`;
        }).join("")}</div></section></div>`;
        $("#ha").value = A[A.length - 1].id;
        $("#hb").value = A[0].id;
        hcmp();
    };

    function hcmp() {
        const A = AU(st.cur),
            a = A.find((x) => x.id == $("#ha").value),
            b = A.find((x) => x.id == $("#hb").value),
            d = b.idx - a.idx;
        $("#hc").textContent =
            `Índice Ético ${a.idx} → ${b.idx} (${d >= 0 ? "+" : "−"}${Math.abs(d)} pontos) · sinais ${a.sg} → ${b.sg}.`;
    }

    /* Páginas de texto */
    V.privacidade = () => {
        app.innerHTML = `<div class="w"><section class="s"><h1 id="h1" tabindex="-1">Privacidade</h1><div class="panel">
<h2>O que guardamos</h2>
<p>Neste protótipo, os dados ficam armazenados apenas no seu navegador: preferências de acessibilidade sincronizadas entre portal e extensão, sessão simulada de Login com Google, seus apoios, sugestões e relatos. Não há rastreamento nem anúncios.</p>
<h2>Login com Google para contribuições</h2>
<p>Consultar notas no portal e usar a extensão para inspecionar páginas são atividades 100% livres sem conta. Porém, para publicar relatos, enviar sugestões da comunidade ou publicar relatórios técnicos da extensão no portal, pedimos Login com Google — coletando apenas nome e e-mail exclusivamente para prevenir spam e abusos.</p>
<h2>Processamento 100% local na extensão</h2>
<p>Todo o motor de análise da extensão executa <strong>100% localmente no computador e navegador do usuário</strong>. Nenhum conteúdo das páginas visitadas é enviado a servidores externos durante a análise. Apenas quando você decide explicitamente publicar um relatório no portal, com conta Google autenticada, é que o resumo técnico desse relatório é enviado — nunca campos de formulário, senhas ou dados pessoais, em conformidade com a LGPD.</p>
<h2>Seus controles</h2>
<p>Você pode excluir qualquer relato seu, com confirmação e opção de desfazer, encerrar sua sessão Google com um clique, escolher “Não guardar nada” no aviso inicial e limpar os dados do site no navegador.</p>
<p class="note">Dúvidas: <a href="#contato">fale com a equipe</a>.</p></div></section></div>`;
    };

    V.termos = () => {
        app.innerHTML = `<div class="w"><section class="s"><h1 id="h1" tabindex="-1">Termos de uso</h1><div class="panel"><p>O Betímetro é um protótipo acadêmico da disciplina de Interação Humano-Computador da UFABC. Sites, pontuações e relatos são fictícios.</p><p>O Índice Ético de 0 a 100 — quanto maior, melhor — descreve a amostra auditada localmente e não avalia segurança, qualidade do serviço nem legalidade. Os sinais são sugestões automáticas e podem estar errados.</p><p>A criação de conteúdo público, incluindo relatos, sugestões e publicação de relatórios técnicos, requer Login com Google para prevenir spam e abusos. Relatos são de responsabilidade de quem os escreve, não devem conter dados pessoais e podem ser denunciados. Empresas avaliadas têm direito de resposta pela <a href="#contato">página de contato</a>.</p></div></section></div>`;
    };

    function rows() {
        let r = S.map((s, i) => [s, i]).filter(
            ([s]) =>
                (st.cat === "todos" || s.c === st.cat) &&
                (!st.q || N(s.n + " " + s.u + " " + s.c).includes(N(st.q))),
        );
        const o = {
            recentes: (a, b) => b[0].dt.localeCompare(a[0].dt),
            maior: (a, b) => b[0].s - a[0].s,
            menor: (a, b) => a[0].s - b[0].s,
            nome: (a, b) => a[0].n.localeCompare(b[0].n, "pt-BR"),
        };
        r.sort(o[st.o]);
        $("#tb").innerHTML = r
            .map(([s, i]) => {
                const [c, t] = fx(s.s);
                return `<tr><td data-l="Comparar" class="f"><label class="ck"><input type="checkbox" data-sel="${i}" ${st.sel.includes(i) ? "checked" : ""}> Comparar<span class="sr"> ${s.n}</span></label></td>
<td class="f"><a class="sn" href="#site-${i}">${s.n}<span class="sr">, abrir relatório</span></a><span class="sub">${s.u}</span></td>
<td data-l="Categoria"><span class="tag v">${E(s.c)}</span></td>
<td data-l="Índice Ético"><span class="sc ${c}"><b style="font-weight:400">${s.s}</b><small>/100</small></span><span class="sr"> ${t}</span><span class="sub">${s.d >= 0 ? "+" : "−"}${Math.abs(s.d)} pts</span></td>
<td data-l="Achados">${s.k} sinais<span class="sub">${CAT[s.f[0][0]][0]}</span></td><td data-l="Última auditoria"><time datetime="${s.dt}">${fd(s.dt)}</time><span class="sub">${s.a} auditorias</span></td><td data-l="Comunidade">${ops(i).length} opiniões<span class="sub">${ops(i).filter((o) => o[1] === "pos").length} positivas</span></td></tr>`;
            })
            .join("");
        $("#vz").hidden = r.length > 0;
        $("#ct").textContent =
            r.length + (r.length === 1 ? " site fictício" : " sites fictícios");
        cbar();
    }

    function cbar() {
        const b = $("#cb");
        if (!b) return;
        b.hidden = !st.sel.length;
        $("#ctx").textContent =
            st.sel.length +
            " selecionado(s): " +
            st.sel.map((i) => `${S[i].n} (${S[i].c})`).join(", ");
        $("#go").disabled = st.sel.length < 2;
    }

    /* Navegação por hash simples */
    function route() {
        let h = location.hash.slice(1) || "inicio";
        if (h === "site-amazon") h = "site-0";
        const m = h.match(/^(site|opinioes|historico)-(\d+)$/),
            v = m ? m[1] : V[h] ? h : "inicio";
        if (m && !S[+m[2]]) {
            location.hash = "inicio";
            return;
        }
        V[v](m ? +m[2] : undefined);
        $("#nav").innerHTML =
            [
                ["inicio", "Resultados públicos"],
                ["comparar", "Comparar"],
                ["como", "Como funciona"],
                ["sugestoes", "Sugestões"],
                ["faq", "Perguntas frequentes"],
                ["contato", "Contato"],
            ]
                .map(
                    ([k, l]) =>
                        `<li><a href="#${k}" ${v === k || ((v === "site" || v === "opinioes" || v === "historico") && k === "inicio") ? 'aria-current="page"' : ""}>${l}</a></li>`,
                )
                .join("") +
            `<li><a href="./pages/demo-amazon.html" style="font-weight:700;color:var(--brand)">Extensão (Amazon) ↗</a></li>`;
        document.title =
            (m ? S[+m[2]].n : "Betímetro") +
            " · Observatório de escolhas digitais";
        window.scrollTo(0, 0);
        const t = $("#h1");
        t && t.focus({ preventScroll: true });
    }
    addEventListener("hashchange", route);

    /* Eventos */
    document.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        if (b.id === "ab") {
            const o = b.getAttribute("aria-expanded") !== "true";
            b.setAttribute("aria-expanded", o);
            $("#ap").hidden = !o;
        } else if (b.id === "btn-login-google") {
            openLoginModal("geral", b);
        } else if (b.dataset.openLogin) {
            openLoginModal(b.dataset.openLogin, b);
        } else if (b.id === "btn-logout-google") {
            setAuth(null);
            live("Você saiu da sua conta Google.");
            const h = location.hash.slice(1) || "inicio";
            if (h.startsWith("opinioes-") || h === "sugestoes") {
                route();
            }
        } else if (b.id === "pvl") {
            pf.vl = pf.vl ? 0 : 1;
            savePf({ announceVlibras: true });
        } else if (b.id === "bm-vlibras-off") {
            pf.vl = 0;
            savePf({ announceVlibras: true });
        } else if (b.dataset.fs) {
            pf.fs = +b.dataset.fs;
            savePf();
            live(`Tamanho do texto ajustado para ${pf.fs}%.`);
        } else if (b.id === "clr-sel") {
            st.sel = [];
            if ($("#tb")) rows();
            else if ((location.hash.slice(1) || "inicio") === "comparar")
                route();
            else cbar();
            live("Todas as seleções de comparação foram removidas.");
        } else if (b.id === "btn-undo-del") {
            if (st.lastDeleted && st.lastDeleted.siteIdx === st.cur) {
                const { siteIdx, index, item } = st.lastDeleted;
                st.my[siteIdx] = st.my[siteIdx] || [];
                st.my[siteIdx].splice(index, 0, item);
                st.lastDeleted = null;
                sv("bm-my", JSON.stringify(st.my));
                olist();
                live("Exclusão desfeita. Seu relato foi restaurado.");
                if ($("#oc")) $("#oc").focus();
            }
        } else if (b.id === "btn-dismiss-undo") {
            st.lastDeleted = null;
            renderUndoBar();
            live("Aviso de exclusão fechado.");
        } else if (b.dataset.v) {
            const k = b.dataset.v;
            sg.v[k] ? delete sg.v[k] : (sg.v[k] = 1);
            sv("bm-sg", JSON.stringify(sg));
            sglist(k);
            live(sg.v[k] ? "Apoio registrado." : "Apoio removido.");
        } else if (b.id === "ok") {
            st.ns = false;
            try {
                sessionStorage.removeItem("bm-ns");
            } catch {}
            sv("bm-ok", "1");
            sv("bm-pf", JSON.stringify(pf));
            $("#cn").hidden = true;
        } else if (b.id === "no") {
            st.ns = true;
            try {
                sessionStorage.setItem("bm-ns", "1");
            } catch {}
            ["bm-my", "bm-sg", "bm-pf", "bm-auth"].forEach(rm);
            $("#cn").hidden = true;
            live("Nada será guardado neste navegador.");
        } else if (b.dataset.go) {
            location.hash = b.dataset.go;
        } else if (b.dataset.sg) {
            st.q = b.dataset.sg;
            $("#q").value = st.q;
            rows();
            live(rowsN());
        } else if (b.dataset.cat) {
            st.cat = b.dataset.cat;
            document
                .querySelectorAll(".fb")
                .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
            rows();
            live(rowsN());
        } else if (b.id === "go") {
            location.hash = "comparar";
        } else if (b.dataset.ct) {
            const k = b.dataset.ct;
            st.ct.has(k) ? st.ct.delete(k) : st.ct.add(k);
            const on = st.ct.has(k);
            b.setAttribute("aria-pressed", on);
            b.textContent = on
                ? "Contestação enviada · desfazer"
                : "Contestar este sinal";
            live(
                on
                    ? "Contestação registrada nesta demonstração. Obrigado por ajudar a corrigir o motor de avaliação."
                    : "Contestação desfeita.",
            );
        } else if (b.dataset.of) {
            st.f = b.dataset.of;
            olist();
        } else if (b.dataset.rp) {
            const k = b.dataset.rp;
            st.rp.has(k) ? st.rp.delete(k) : st.rp.add(k);
            const on = st.rp.has(k);
            b.setAttribute("aria-pressed", on);
            b.textContent = on
                ? "Denúncia enviada · desfazer"
                : "Denunciar este relato";
            live(
                on
                    ? "Denúncia registrada nesta demonstração. A equipe analisa em até 7 dias."
                    : "Denúncia desfeita.",
            );
        } else if (b.dataset.del !== undefined) {
            openDeleteConfirmModal(+b.dataset.del, b);
        } else if (b.dataset.add !== undefined) {
            addSel(+b.dataset.add);
        } else if (b.dataset.cp !== undefined) {
            const s = S[+b.dataset.cp],
                t =
                    s.n +
                    " (" +
                    s.u +
                    " · " +
                    s.c +
                    ")\nÍndice Ético " +
                    s.s +
                    "/100 (quanto maior, melhor), " +
                    fx(s.s)[1] +
                    "\n" +
                    s.f
                        .map(
                            (f, i) =>
                                i +
                                1 +
                                ". " +
                                CAT[f[0]][0] +
                                ": “" +
                                f[1] +
                                "” (" +
                                f[4] +
                                ", certeza " +
                                f[3] +
                                "%)",
                        )
                        .join("\n") +
                    "\nSinais automáticos locais, sujeitos a erro.";
            (async () => {
                try {
                    await navigator.clipboard.writeText(t);
                    live("Relatório copiado.");
                } catch {
                    live(
                        "Não foi possível copiar. Selecione o texto manualmente.",
                    );
                }
            })();
        }
    });

    const rowsN = () => $("#tb").rows.length + " sites encontrados.";

    function addSel(i) {
        if (st.sel.includes(i)) {
            live("Site já está na comparação.");
            return;
        }
        if (st.sel.length >= 3) {
            live("Máximo de 3 sites. Remova um na lista de resultados.");
            return;
        }
        st.sel.push(i);
        live(S[i].n + " adicionado. Abra Comparar para ver.");
    }

    document.addEventListener("change", (e) => {
        const t = e.target;
        if (t.id === "pt") {
            pf.th = t.value;
            savePf();
            live("Tema atualizado.");
        } else if (t.id === "phc") {
            pf.hc = t.checked ? 1 : 0;
            savePf();
            live(pf.hc ? "Alto contraste ativado." : "Alto contraste desativado.");
        } else if (t.id === "psp") {
            const enabling = t.checked;
            if (enabling) {
                pf.pfs = pf.fs;
                if (pf.fs < 115) pf.fs = 115;
                pf.sp = 1;
            } else {
                pf.sp = 0;
                pf.fs = pf.pfs || 100;
            }
            savePf();
            route();
            live(
                pf.sp
                    ? "Modo simplificado ativado: linguagem simples e alvos maiores."
                    : "Modo simplificado desativado e tamanho de texto anterior restaurado.",
            );
        } else if (t.name === "k" && t.form && t.form.id === "of") {
            const isNeg = t.value === "neg";
            const eReq = $("#of-e-req");
            const eInp = t.form.querySelector('input[name="e"]');
            if (eReq) eReq.hidden = !isNeg;
            if (eInp) {
                if (isNeg) {
                    eInp.setAttribute("required", "");
                    eInp.setAttribute("aria-required", "true");
                } else {
                    eInp.removeAttribute("required");
                    eInp.removeAttribute("aria-required");
                    eInp.removeAttribute("aria-invalid");
                }
            }
        } else if (t.id === "ha" || t.id === "hb") hcmp();
        else if (t.id === "oo") {
            st.oo = t.value;
            olist();
        } else if (t.id === "od") {
            st.o = t.value;
            rows();
            live(rowsN());
        } else if (t.dataset.sel !== undefined) {
            const i = +t.dataset.sel;
            if (t.checked) {
                if (st.sel.length >= 3) {
                    t.checked = false;
                    live("Máximo de 3 sites na comparação.");
                    return;
                }
                st.sel.push(i);
            } else st.sel = st.sel.filter((x) => x !== i);
            cbar();
        }
    });

    document.addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.target.id === "fb") {
            st.q = $("#q").value.trim();
            rows();
            live(rowsN());
            $("#hr").focus();
        } else if (e.target.id === "of") sendOp(e.target);
        else if (e.target.id === "sf") {
            addSg(e.target);
        } else if (e.target.id === "rf") {
            $("#rr").textContent =
                "Pedido registrado nesta demonstração. A equipe responde em até 7 dias.";
            e.target.reset();
        }
    });

    document.addEventListener("input", (e) => {
        if (e.target.getAttribute && e.target.getAttribute("aria-invalid") === "true") {
            e.target.removeAttribute("aria-invalid");
        }
        if (e.target.dataset.sim) sim();
        if (e.target.id === "q" && !e.target.value && st.q) {
            st.q = "";
            rows();
        }
    });

    // Sincronização em tempo real entre abas (Portal <-> Extensão)
    window.addEventListener("storage", (e) => {
        if (e.key === "bm-pf") {
            const prevSp = pf.sp;
            loadPf();
            applyPf();
            if (prevSp !== pf.sp) route();
        } else if (e.key === "bm-auth") {
            try {
                st.auth = e.newValue ? JSON.parse(e.newValue) : null;
            } catch {
                st.auth = null;
            }
            renderAuthSlot();
            const h = location.hash.slice(1) || "inicio";
            if (h.startsWith("opinioes-") || h === "sugestoes") route();
        } else if (e.key === "bm-published-amazon") {
            syncPublishedAmazon();
        }
    });

    applyPf();
    renderAuthSlot();
    try {
        if (!localStorage.getItem("bm-ok") && !st.ns) $("#cn").hidden = false;
    } catch {
        $("#cn").hidden = false;
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if ($("#bm-active-modal")) {
                closeActiveModal();
            } else if (!$("#ap").hidden) {
                $("#ap").hidden = true;
                $("#ab").setAttribute("aria-expanded", "false");
                $("#ab").focus();
            }
        }
    });
    route();
})();
