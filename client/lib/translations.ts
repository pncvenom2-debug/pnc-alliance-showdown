export type Language = "en" | "it" | "pt" | "de" | "ru" | "uk" | "fr" | "id";

export interface Translations {
  header: {
    title: string;
    subtitle: string;
    dashboard: string;
  };
  welcome: {
    badge: string;
    title: string;
    subtitle: string;
  };
  filters: {
    search: string;
    all: string;
    personal: string;
    sort: string;
    quest: string;
    type: string;
    points: string;
    time: string;
  };
  stats: {
    showing: string;
    sorting: string;
    asc: string;
    desc: string;
  };
  card: {
    requirement: string;
    points: string;
    time: string;
    noTime: string;
  };
  modal: {
    reward: string;
    timeLimit: string;
    tip: string;
    close: string;
    noTip: string;
  };
  empty: {
    title: string;
    subtitle: string;
  };
  recommendation: {
    recommended: string;
    not_recommended: string;
    neutral: string;
  };
  tips: {
    gatherQuest: string;
    heroShard: string;
    rallyMonsterDens: string;
    gearMaterials: string;
    helpAllies: string;
    speedups: string;
    improveTroopPower: string;
    transport: string;
  };
  notes: Record<string, string>;
  info: {
    button: string;
    slides: {
      slide1: string;
      slide2: string;
      slide3: string;
    };
  };
  types: Record<string, string>;
  questNames: Record<string, string>;
  times: Record<string, string>;
}

export const translations: Record<Language, Translations> = {
  en: {
    header: { title: "Alliance Showdown", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Quest Optimization Engine v1.0", title: "Quest Data Dashboard", subtitle: "Visualize, sort, and filter every alliance showdown quest with ease. Maximize your rewards and efficiency with real-time data analysis." },
    filters: { search: "Search quests...", all: "All Types", personal: "Personal (240)", sort: "Sort By", quest: "Quest Name", type: "Quest Type", points: "Points", time: "Time", recommended: "Recommended", not_recommended: "Not Recommended" },
    stats: { showing: "Showing {count} Quests", sorting: "Sorting by {sortBy} ({order})", asc: "asc", desc: "desc" },
    card: { requirement: "Requirement", points: "Points", time: "Time", noTime: "No time limit" },
    modal: { reward: "Reward", timeLimit: "Time Limit", tip: "Helpful Tip", close: "Got it", noTip: "No specific tips available for this quest." },
    empty: { title: "No quests found", subtitle: "Try adjusting your filters or search query." },
    recommendation: { recommended: "✨ Recommended", not_recommended: "⚠️ Not Recommended", neutral: "Standard" },
    tips: {
      gatherQuest: "Before you send out your troops to gather:\nUse a resource gather speedup item\nSwitch to your economy page",
      heroShard: "Before picking the quest, calculate the points from the cards (red, purple, blue) you already have. You can also exchange shards to help reach the requirement — 10 Gina shards from Trial Turret, Fiona shards from the Sapphire Shop, Gerolin shards from the Arena Shop and Arena chests, and Odell/Tutanhet shards from monsters.",
      rallyMonsterDens: "Perform rallies on a Level 7 Monster Den. This saves stamina compared to higher level dens.",
      gearMaterials: "Calculate the points by checking the items in your bag before picking the quest. You can exchange totem items from the Sapphire Shop, rune items from Trial Turret and Apex Arena, and holystone items from the Oblivion War shop.",
      helpAllies: "Just say you have this quest in alliance chat.",
      speedups: "Ensure you have speedups. You can get more (99) from the Trial Turret exchange. Try to complete this quest by healing troops during Oblivion War or Realm Expedition—it saves a lot of resources.",
      improveTroopPower: "Attempt this if and only if you have a healthy post-conflict recovery from Conquest of Lords.",
      transport: "Select this quest only if both you and the person you're sending resources to have a good-level Posthouse. Otherwise, the taxes will cause huge losses."
    },
    info: {
      button: "Open information",
      slides: {
        slide1: "This is how the quests board looks for everyone (minus signs aren't visible). New quests appear every 30 minutes when refreshed, but bad quests get refreshed almost instantly, so please be patient.",
        slide2: "These are personal quests, only available to you. If you don't like them, you get a chance to refresh them every 10 minutes.",
        slide3: "Avoid quests with a \"?\" sign. Like bad quests, they get refreshed almost instantly, so there's no need to attempt them."
      }
    },
    types: { arena: "Arena", market: "Black Market", alliance: "Alliance", ap: "Consume AP", diamond: "Diamond", stamina: "Stamina", gather: "Gathering", gear: "Gear/Runes/Totems/Holystones", hero: "Hero Shards", heal: "Healing", help: "Help Allies", building: "Building Power", research: "Research Power", troop: "Troop Power", rally: "Monster Dens", speedup: "Speedups", transport: "Transport", packs: "Buy Packs", other: "Other" },
    questNames: {
      "Arena Challenge": "Arena Challenge",
      "Black Market": "Black Market",
      "Consume Alliance Coins": "Consume Alliance Coins",
      "Consume AP": "Consume AP",
      "Consume Diamond": "Consume Diamond",
      "Consume Stamina": "Consume Stamina",
      "Gather Food": "Gather Food",
      "Gather Iron": "Gather Iron",
      "Gather Stone": "Gather Stone",
      "Gather Wood": "Gather Wood",
      "Get Gear Materials": "Get Gear/Runes/Totems/Holystones Materials",
      "Get Hero Shard": "Get Hero Shard",
      "Heal Units": "Heal Units",
      "Help Allies": "Help Allies",
      "Improve Building Power": "Improve Building Power",
      "Improve Research Power": "Improve Research Power",
      "Improve Troop Power": "Improve Troop Power",
      "Rally on Monster Dens": "Rally on Monster Dens",
      "Research": "Research",
      "Speedups (Build/Tech/Training/Healing)": "Speedups (Build/Tech/Training/Healing)",
      "Speedup (Build/Tech/Training/Healing)": "Speedup (Build/Tech/Training/Healing)",
      "Transport Any Resources to Allies": "Transport Any Resources to Allies",
      "Transport Food among allies": "Transport Food among allies",
      "Transport Iron among allies": "Transport Iron among allies",
      "Transport Stone among allies": "Transport Stone among allies",
      "Transport Wood among allies": "Transport Wood among allies",
      "Buy Packs": "Buy Packs",
      "Gain Diamonds via Packs": "Gain Diamonds via Packs"
    },
    times: {
      "12 hours": "12 hours",
      "1 day": "1 day",
      "2 days": "2 days",
      "3 days": "3 days",
      "4 days": "4 days",
      "33 hours": "33 hours"
    },
    notes: {
      "Challenge other players in the Arena. Winning is not required, only completion.": "Challenge other players in the Arena. Winning is not required, only completion.",
      "Best performed during the Arena event for double rewards.": "Best performed during the Arena event for double rewards.",
      "Purchase items from the Black Market. Focus on resources or speedups you need.": "Purchase items from the Black Market. Focus on resources or speedups you need.",
      "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.": "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.",
      "Consider using AP potions if you're close to completion but running out of natural recovery.": "Consider using AP potions if you're close to completion but running out of natural recovery.",
      "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.": "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.",
      "High-value quest. This is a personal quest that requires actual purchases in the game store.": "High-value quest. This is a personal quest that requires actual purchases in the game store.",
      "Perfect for large upgrades or during diamond spending events.": "Perfect for large upgrades or during diamond spending events.",
      "One of the most efficient high-point quests. Save your troop training speedups for this specific quest.": "One of the most efficient high-point quests. Save your troop training speedups for this specific quest."
    }
  },
  it: {
    header: { title: "Sfida tra Alleanze", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Motore di Ottimizzazione Missioni v1.0", title: "Dashboard Dati Missioni", subtitle: "Visualizza, ordina e filtra ogni missione della sfida tra alleanze con facilità." },
    filters: { search: "Cerca missioni...", all: "Tutti i Tipi", personal: "Personali (240)", sort: "Ordina per", quest: "Nome Missione", type: "Tipo Missione", points: "Punti", time: "Tempo", recommended: "Consigliate", not_recommended: "Non Consigliate" },
    stats: { showing: "Mostrando {count} Missioni", sorting: "Ordinamento per {sortBy} ({order})", asc: "cresc", desc: "decresc" },
    card: { requirement: "Requisito", points: "Punti", time: "Tempo", noTime: "Nessun limite" },
    modal: { reward: "Ricompensa", timeLimit: "Limite di Tempo", tip: "Consiglio Utile", close: "Capito", noTip: "Nessun consiglio specifico disponibile." },
    empty: { title: "Nessuna missione trovata", subtitle: "Prova a modificare i filtri o la ricerca." },
    recommendation: { recommended: "✨ Consigliata", not_recommended: "⚠️ Non Consigliata", neutral: "Standard" },
    tips: {
      gatherQuest: "Prima di inviare le tue truppe a raccogliere:\nUsa un oggetto di velocità di raccolta risorse\nCambia sulla pagina economia",
      heroShard: "Prima di scegliere la missione, calcola i punti dalle carte (rosso, viola, blu) che hai già. Puoi anche scambiare frammenti per raggiungere il requisito — 10 frammenti di Gina dalla Trial Turret, frammenti di Fiona dal Sapphire Shop, frammenti di Gerolin dall'Arena Shop e forzieri dell'Arena, e frammenti di Odell/Tutanhet dai mostri.",
      rallyMonsterDens: "Esegui rally su una Covile di Mostri di Livello 7. Questo risparmia energia rispetto a covili di livello superiore.",
      gearMaterials: "Calcola i punti controllando gli oggetti nella tua borsa prima di scegliere la missione. Puoi scambiare oggetti totem dal Sapphire Shop, oggetti rune da Trial Turret e Apex Arena, e oggetti pietra sacra dal negozio Oblivion War.",
      helpAllies: "Basta dire che hai questa missione nella chat dell'alleanza.",
      speedups: "Assicurati di avere accelerazioni. Puoi ottenere più (99) dallo scambio Trial Turret. Prova a completare questa missione curando le truppe durante Oblivion War o Realm Expedition, così risparmi molte risorse.",
      improveTroopPower: "Tenta questa missione se e solo se hai un buon recupero post-conflitto dalla Conquista dei Signori.",
      transport: "Scegli questa missione solo se sia tu che la persona a cui stai inviando risorse avete una Posta di buon livello. Altrimenti, le tasse causeranno enormi perdite."
    },
    info: {
      button: "Apri informazioni",
      slides: {
        slide1: "Ecco come appare la bacheca delle missioni per tutti (i segni meno non sono visibili). Le nuove missioni compaiono ogni 30 minuti quando aggiornate, ma le cattive missioni si aggiornano quasi istantaneamente, quindi per favore sii paziente.",
        slide2: "Queste sono missioni personali, disponibili solo per te. Se non ti piacciono, hai la possibilità di aggiornarle ogni 10 minuti.",
        slide3: "Evita le missioni con un segno \"?\". Come le cattive missioni, si aggiornano quasi istantaneamente, quindi non c'è bisogno di tentarle."
      }
    },
    types: { arena: "Arena", market: "Mercato Nero", alliance: "Alleanza", ap: "Consuma PA", diamond: "Diamante", stamina: "Energia", gather: "Raccolta", gear: "Equipaggiamento/Rune/Totem/Pietre Sacre", hero: "Frammenti Eroe", heal: "Cura", help: "Aiuto Alleati", building: "Potere Edifici", research: "Potere Ricerca", troop: "Potere Truppe", rally: "Covi di Mostri", speedup: "Accelerazioni", transport: "Trasporto", packs: "Pacchetti", other: "Altro" },
    questNames: {
      "Arena Challenge": "Sfida in Arena",
      "Black Market": "Mercato Nero",
      "Consume Alliance Coins": "Consuma Monete Alleanza",
      "Consume AP": "Consuma PA",
      "Consume Diamond": "Consuma Diamanti",
      "Consume Stamina": "Consuma Energia",
      "Gather Food": "Raccogli Cibo",
      "Gather Iron": "Raccogli Ferro",
      "Gather Stone": "Raccogli Pietra",
      "Gather Wood": "Raccogli Legno",
      "Get Gear Materials": "Ottieni Materiali Equip./Rune/Totem/Pietre",
      "Get Hero Shard": "Ottieni Frammenti Eroe",
      "Heal Units": "Cura Unità",
      "Help Allies": "Aiuta Alleati",
      "Improve Building Power": "Migliora Potere Edifici",
      "Improve Research Power": "Migliora Potere Ricerca",
      "Improve Troop Power": "Migliora Potere Truppe",
      "Rally on Monster Dens": "Rally su Covi di Mostri",
      "Research": "Ricerca",
      "Speedups (Build/Tech/Training/Healing)": "Accelerazioni (Costr./Tecn./Addest./Cura)",
      "Speedup (Build/Tech/Training/Healing)": "Accelerazione (Costr./Tecn./Addest./Cura)",
      "Transport Any Resources to Allies": "Trasporta Qualsiasi Risorsa agli Alleati",
      "Transport Food among allies": "Trasporta Cibo tra gli Alleati",
      "Transport Iron among allies": "Trasporta Ferro tra gli Alleati",
      "Transport Stone among allies": "Trasporta Pietra tra gli Alleati",
      "Transport Wood among allies": "Trasporta Legno tra gli Alleati",
      "Buy Packs": "Acquista Pacchetti",
      "Gain Diamonds via Packs": "Ottieni Diamanti dai Pacchetti"
    },
    times: {
      "12 hours": "12 ore",
      "1 day": "1 giorno",
      "2 days": "2 giorni",
      "3 days": "3 giorni",
      "4 days": "4 giorni",
      "33 hours": "33 ore"
    },
    notes: {
      "Challenge other players in the Arena. Winning is not required, only completion.": "Sfida altri giocatori nell'Arena. Non è necessario vincere, solo completare.",
      "Best performed during the Arena event for double rewards.": "Meglio eseguito durante l'evento Arena per il doppio delle ricompense.",
      "Purchase items from the Black Market. Focus on resources or speedups you need.": "Acquista articoli dal Mercato Nero. Concentrati su risorse o accelerazioni di cui hai bisogno.",
      "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.": "Usa PA per attaccare mostri sulla mappa. È meglio cacciare mostri che forniscono materiali di cui hai bisogno per la progressione.",
      "Consider using AP potions if you're close to completion but running out of natural recovery.": "Considera l'utilizzo di pozioni PA se sei vicino al completamento ma stai esaurendo la guarigione naturale.",
      "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.": "Cura le truppe ferite nell'infermeria. Puoi combattere mostri di basso livello per creare intenzionalmente piccole perdite se necessario.",
      "High-value quest. This is a personal quest that requires actual purchases in the game store.": "Missione di alto valore. Questa è una missione personale che richiede acquisti effettivi nel negozio del gioco.",
      "Perfect for large upgrades or during diamond spending events.": "Perfetto per grandi upgrade o durante gli eventi di spesa di diamanti.",
      "One of the most efficient high-point quests. Save your troop training speedups for this specific quest.": "Una delle missioni ad alto punteggio più efficienti. Salva i tuoi acceleratori di addestramento truppe per questa missione specifica."
    }
  },
  pt: {
    header: { title: "Confronto de Alianças", subtitle: "Puzzles & Chaos", dashboard: "Painel" },
    welcome: { badge: "Motor de Otimização de Missões v1.0", title: "Painel de Dados de Missões", subtitle: "Visualize, ordene e filtre todas as missões do confronto de alianças com facilitade." },
    filters: { search: "Pesquisar missões...", all: "Todos os Tipos", personal: "Pessoais (240)", sort: "Ordenar por", quest: "Nome da Missão", type: "Tipo de Missão", points: "Pontos", time: "Tempo", recommended: "Recomendadas", not_recommended: "Não Recomendadas" },
    stats: { showing: "Mostrando {count} Missões", sorting: "Ordenando por {sortBy} ({order})", asc: "asc", desc: "desc" },
    card: { requirement: "Requisito", points: "Pontos", time: "Tempo", noTime: "Sem limite" },
    modal: { reward: "Recompensa", timeLimit: "Limite de Tempo", tip: "Dica Útil", close: "Entendido", noTip: "Nenhuma dica específica disponível." },
    empty: { title: "Nenhuma missão encontrada", subtitle: "Tente ajustar seus filtros ou pesquisa." },
    recommendation: { recommended: "✨ Recomendada", not_recommended: "⚠️ Não Recomendada", neutral: "Padrão" },
    tips: {
      gatherQuest: "Antes de enviar suas tropas para coletar:\nUse um item de velocidade de coleta de recursos\nMude para a página de economia",
      heroShard: "Antes de escolher a missão, calcule os pontos dos cartões (vermelho, roxo, azul) que você já tem. Você também pode trocar fragmentos para ajudar a atingir o requisito — 10 fragmentos de Gina da Trial Turret, fragmentos de Fiona da Sapphire Shop, fragmentos de Gerolin da Arena Shop e baús da Arena, e fragmentos de Odell/Tutanhet dos monstros.",
      rallyMonsterDens: "Realize ralis em uma Cova de Monstros Nível 7. Isso economiza estamina em comparação com covas de nível superior.",
      gearMaterials: "Calcule os pontos verificando os itens em sua mochila antes de escolher a missão. Você pode trocar itens totem da Sapphire Shop, itens de runa do Trial Turret e Apex Arena, e itens de pedra sagrada da loja Oblivion War.",
      helpAllies: "Basta dizer que você tem esta missão no bate-papo da aliança.",
      speedups: "Certifique-se de que você tem acelerações. Você pode obter mais (99) da troca Trial Turret. Tente completar esta missão curando tropas durante Oblivion War ou Realm Expedition — isso economiza muitos recursos.",
      improveTroopPower: "Tente isso se e somente se você tiver uma recuperação pós-conflito saudável da Conquista dos Lordes.",
      transport: "Escolha esta missão apenas se você e a pessoa para quem está enviando recursos tiverem uma Agência de Correios de bom nível. Caso contrário, os impostos causarão enormes perdas."
    },
    info: {
      button: "Abrir informações",
      slides: {
        slide1: "Assim é como o quadro de missões parece para todos (os sinais de menos não são visíveis). Novas missões aparecem a cada 30 minutos quando atualizadas, mas as missões ruins se atualizam quase instantaneamente, então por favor tenha paciência.",
        slide2: "Estas são missões pessoais, disponíveis apenas para você. Se você não gostar delas, terá uma chance de atualizá-las a cada 10 minutos.",
        slide3: "Evite missões com um sinal \"?\". Como as missões ruins, elas se atualizam quase instantaneamente, então não há necessidade de tentá-las."
      }
    },
    types: { arena: "Arena", market: "Mercado Negro", alliance: "Aliança", ap: "Consumir PA", diamond: "Diamante", stamina: "Estamina", gather: "Coleta", gear: "Equipamento/Runas/Totens/Pedras Sagradas", hero: "Fragmentos de Herói", heal: "Cura", help: "Ajuda de Aliados", building: "Poder de Construção", research: "Poder de Pesquisa", troop: "Poder de Tropas", rally: "Covis de Monstros", speedup: "Acelerações", transport: "Transporte", packs: "Pacotes", other: "Outro" },
    questNames: {
      "Arena Challenge": "Desafio de Arena",
      "Black Market": "Mercado Negro",
      "Consume Alliance Coins": "Consumir Moedas de Aliança",
      "Consume AP": "Consumir PA",
      "Consume Diamond": "Consumir Diamantes",
      "Consume Stamina": "Consumir Estamina",
      "Gather Food": "Coletar Comida",
      "Gather Iron": "Coletar Ferro",
      "Gather Stone": "Coletar Pedra",
      "Gather Wood": "Coletar Madeira",
      "Get Gear Materials": "Obter Materiais de Equip./Runas/Totens/Pedras",
      "Get Hero Shard": "Obter Fragmentos de Herói",
      "Heal Units": "Curar Unidades",
      "Help Allies": "Ajudar Aliados",
      "Improve Building Power": "Melhorar Poder de Const.",
      "Improve Research Power": "Melhorar Poder de Pesq.",
      "Improve Troop Power": "Melhorar Poder de Tropas",
      "Rally on Monster Dens": "Rally em Covis de Monstros",
      "Research": "Pesquisa",
      "Speedups (Build/Tech/Training/Healing)": "Acelerações (Const./Tec./Treino/Cura)",
      "Speedup (Build/Tech/Training/Healing)": "Aceleração (Const./Tec./Treino/Cura)",
      "Transport Any Resources to Allies": "Transportar Qualquer Recurso para Aliados",
      "Transport Food among allies": "Transportar Comida entre Aliados",
      "Transport Iron among allies": "Transportar Ferro entre Aliados",
      "Transport Stone among allies": "Transportar Pedra entre Aliados",
      "Transport Wood among allies": "Transportar Madeira entre Aliados",
      "Buy Packs": "Comprar Pacotes",
      "Gain Diamonds via Packs": "Ganhar Diamantes via Pacotes"
    },
    times: {
      "12 hours": "12 horas",
      "1 day": "1 dia",
      "2 days": "2 dias",
      "3 days": "3 dias",
      "4 days": "4 dias",
      "33 hours": "33 horas"
    },
    notes: {
      "Challenge other players in the Arena. Winning is not required, only completion.": "Desafie outros jogadores na Arena. Ganhar não é obrigatório, apenas completar.",
      "Best performed during the Arena event for double rewards.": "Melhor realizado durante o evento Arena para recompensas dobradas.",
      "Purchase items from the Black Market. Focus on resources or speedups you need.": "Compre itens do Mercado Negro. Concentre-se em recursos ou velocidades que você precisa.",
      "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.": "Use PA para atacar monstros no mapa. É melhor caçar monstros que fornecem materiais que você precisa para progredir.",
      "Consider using AP potions if you're close to completion but running out of natural recovery.": "Considere usar poções de PA se estiver próximo de terminar, mas sem recuperação natural.",
      "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.": "Cure tropas feridas na enfermaria. Você pode lutar contra monstros de baixo nível para criar pequenas perdas intencionalmente, se necessário.",
      "High-value quest. This is a personal quest that requires actual purchases in the game store.": "Missão de alto valor. Esta é uma missão pessoal que requer compras reais na loja do jogo.",
      "Perfect for large upgrades or during diamond spending events.": "Perfeito para grandes atualizações ou durante eventos de gasto de diamantes.",
      "One of the most efficient high-point quests. Save your troop training speedups for this specific quest.": "Uma das missões de alto valor mais eficientes. Salve seus aceleradores de treinamento de tropas para esta missão específica."
    }
  },
  de: {
    header: { title: "Allianz-Showdown", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Quest-Optimierungs-Engine v1.0", title: "Quest-Daten-Dashboard", subtitle: "Visualisieren, sortieren und filtern Sie jede Allianz-Showdown-Quest mit Leichtigkeit." },
    filters: { search: "Quests suchen...", all: "Alle Typen", personal: "Persönlich (240)", sort: "Sortieren nach", quest: "Quest-Name", type: "Quest-Typ", points: "Punkte", time: "Zeit", recommended: "Empfohlen", not_recommended: "Nicht Empfohlen" },
    stats: { showing: "Zeige {count} Quests", sorting: "Sortiert nach {sortBy} ({order})", asc: "aufst", desc: "abst" },
    card: { requirement: "Anforderung", points: "Punkte", time: "Zeit", noTime: "Kein Zeitlimit" },
    modal: { reward: "Belohnung", timeLimit: "Zeitlimit", tip: "Hilfreicher Tipp", close: "Verstanden", noTip: "Keine spezifischen Tipps verfügbar." },
    empty: { title: "Keine Quests gefunden", subtitle: "Versuchen Sie, Ihre Filter oder Suche anzupassen." },
    recommendation: { recommended: "✨ Empfohlen", not_recommended: "⚠️ Nicht Empfohlen", neutral: "Standard" },
    tips: {
      gatherQuest: "Bevor Sie Ihre Truppen zum Sammeln schicken:\nVerwenden Sie einen Ressourcen-Sammelverschnellerer\nWechseln Sie zur Wirtschaftsseite",
      heroShard: "Bevor Sie die Quest auswählen, berechnen Sie die Punkte aus den Karten (rot, lila, blau), die Sie bereits haben. Sie können auch Scherben austauschen, um die Anforderung zu erfüllen — 10 Gina-Scherben vom Trial Turret, Fiona-Scherben vom Sapphire Shop, Gerolin-Scherben vom Arena Shop und Arena-Schatztruhen, und Odell/Tutanhet-Scherben von Monstern.",
      rallyMonsterDens: "Führen Sie Angriffe auf eine Level-7-Monsterhöhle durch. Dies spart Ausdauer im Vergleich zu höherstufigen Höhlen.",
      gearMaterials: "Berechnen Sie die Punkte, indem Sie die Gegenstände in Ihrer Tasche überprüfen, bevor Sie die Quest auswählen. Sie können Totem-Gegenstände aus dem Sapphire Shop, Runen-Gegenstände aus Trial Turret und Apex Arena und Heiligtum-Gegenstände aus dem Oblivion War-Shop austauschen.",
      helpAllies: "Sagen Sie einfach, dass Sie diese Quest im Allianz-Chat haben.",
      speedups: "Stellen Sie sicher, dass Sie Beschleuniger haben. Sie können mehr (99) aus dem Trial Turret-Austausch erhalten. Versuchen Sie, diese Quest zu absolvieren, indem Sie Truppen während Oblivion War oder Realm Expedition heilen — das spart viele Ressourcen.",
      improveTroopPower: "Versuchen Sie dies nur, wenn Sie eine gute Erholung nach dem Konflikt durch die Eroberung der Herren haben.",
      transport: "Wählen Sie diese Quest nur, wenn Sie und die Person, an die Sie Ressourcen senden, ein gut ausgebautes Posthaus haben. Ansonsten verursachen die Steuern enorme Verluste."
    },
    info: {
      button: "Informationen öffnen",
      slides: {
        slide1: "So sieht das Quest-Board für alle aus (Minuszeichen sind nicht sichtbar). Neue Quests erscheinen alle 30 Minuten, wenn sie aktualisiert werden, aber schlechte Quests werden fast sofort aktualisiert. Bitte haben Sie Geduld.",
        slide2: "Dies sind persönliche Quests, die nur Ihnen zur Verfügung stehen. Wenn Sie sie nicht mögen, haben Sie die Möglichkeit, sie alle 10 Minuten zu aktualisieren.",
        slide3: "Vermeiden Sie Quests mit einem \"?\"-Zeichen. Wie schlechte Quests werden sie fast sofort aktualisiert, daher lohnt sich kein Versuch."
      }
    },
    types: { arena: "Arena", market: "Schwarzmarkt", alliance: "Allianz", ap: "AP verbrauchen", diamond: "Diamant", stamina: "Ausdauer", gather: "Sammeln", gear: "Ausrüstung/Runen/Totems/Heiligtümer", hero: "Heldenscherben", heal: "Heilung", help: "Allianz-Hilfe", building: "Gebäudekraft", research: "Forschungskraft", troop: "Truppenkraft", rally: "Monsterhöhlen", speedup: "Beschleuniger", transport: "Transport", packs: "Pakete", other: "Andere" },
    questNames: {
      "Arena Challenge": "Arena-Herausforderung",
      "Black Market": "Schwarzmarkt",
      "Consume Alliance Coins": "Allianz-Münzen verbrauchen",
      "Consume AP": "AP verbrauchen",
      "Consume Diamond": "Diamanten verbrauchen",
      "Consume Stamina": "Ausdauer verbrauchen",
      "Gather Food": "Nahrung sammeln",
      "Gather Iron": "Eisen sammeln",
      "Gather Stone": "Stein sammeln",
      "Gather Wood": "Holz sammeln",
      "Get Gear Materials": "Ausrüstung/Runen/Totems/Heiligtümer Material erhalten",
      "Get Hero Shard": "Heldenscherben erhalten",
      "Heal Units": "Einheiten heilen",
      "Help Allies": "Allianz-Hilfe leisten",
      "Improve Building Power": "Gebäudekraft verbessern",
      "Improve Research Power": "Forschungskraft verbessern",
      "Improve Troop Power": "Truppenkraft verbessern",
      "Rally on Monster Dens": "Rally auf Monsterhöhlen",
      "Research": "Forschung",
      "Speedups (Build/Tech/Training/Healing)": "Beschleuniger (Bau/Tech/Train./Heil.)",
      "Speedup (Build/Tech/Training/Healing)": "Beschleuniger (Bau/Tech/Train./Heil.)",
      "Transport Any Resources to Allies": "Beliebige Ressourcen an Verbündete transportieren",
      "Transport Food among allies": "Nahrung unter Verbündeten transportieren",
      "Transport Iron among allies": "Eisen unter Verbündeten transportieren",
      "Transport Stone among allies": "Stein unter Verbündeten transportieren",
      "Transport Wood among allies": "Holz unter Verbündeten transportieren",
      "Buy Packs": "Pakete kaufen",
      "Gain Diamonds via Packs": "Diamanten über Pakete erhalten"
    },
    times: {
      "12 hours": "12 Stunden",
      "1 day": "1 Tag",
      "2 days": "2 Tage",
      "3 days": "3 Tage",
      "4 days": "4 Tage",
      "33 hours": "33 Stunden"
    },
    notes: {
      "Challenge other players in the Arena. Winning is not required, only completion.": "Fordern Sie andere Spieler in der Arena heraus. Ein Sieg ist nicht erforderlich, nur die Fertigstellung.",
      "Best performed during the Arena event for double rewards.": "Beste Leistung während des Arena-Events für doppelte Belohnungen.",
      "Purchase items from the Black Market. Focus on resources or speedups you need.": "Kaufen Sie Artikel vom Schwarzmarkt. Konzentrieren Sie sich auf Ressourcen oder Beschleuniger, die Sie benötigen.",
      "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.": "Verwenden Sie AP, um Monster auf der Karte anzugreifen. Es ist am besten, Monster zu jagen, die die Materialien bereitstellen, die Sie zum Vorankommen benötigen.",
      "Consider using AP potions if you're close to completion but running out of natural recovery.": "Verwenden Sie AP-Tränke, wenn Sie der Fertigstellung nahe sind, aber keine natürliche Genesung mehr haben.",
      "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.": "Heilen Sie verwundete Truppen in der Krankenstation. Sie können gegen schwache Monster kämpfen, um bei Bedarf absichtlich kleine Verluste zu verursachen.",
      "High-value quest. This is a personal quest that requires actual purchases in the game store.": "Quest mit hohem Wert. Dies ist eine persönliche Quest, die echte Käufe im Spieleshop erfordert.",
      "Perfect for large upgrades or during diamond spending events.": "Perfekt für große Upgrades oder während Diamond-Ausgabenereignissen.",
      "One of the most efficient high-point quests. Save your troop training speedups for this specific quest.": "Eine der effizientesten High-Point-Quests. Speichern Sie Ihre Truppenschulung-Beschleuniger für diese spezifische Quest."
    }
  },
  ru: {
    header: { title: "Противостояние Альянсов", subtitle: "Puzzles & Chaos", dashboard: "Панель" },
    welcome: { badge: "Движок оптимизации квестов v1.0", title: "Панель данных квестов", subtitle: "Визуализируйте, сортируйте и фильтруйте квесты противостояния альянсов." },
    filters: { search: "Поиск квестов...", all: "Все типы", personal: "Личные (240)", sort: "Сортировка", quest: "Название", type: "Тип", points: "Очки", time: "Время", recommended: "Рекомендуется", not_recommended: "Не Рекомендуется" },
    stats: { showing: "Показано {count} квестов", sorting: "Сортировка по {sortBy} ({order})", asc: "возр", desc: "убыв" },
    card: { requirement: "Требование", points: "Очки", time: "Время", noTime: "Без лимита" },
    modal: { reward: "Награда", timeLimit: "Лимит времени", tip: "Полезный совет", close: "Понятно", noTip: "Специфических советов нет." },
    empty: { title: "Квесты не найдены", subtitle: "Попробуйте изменить фильтры." },
    recommendation: { recommended: "✨ Рекомендуется", not_recommended: "⚠️ Не рекомендуется", neutral: "Стандартно" },
    tips: {
      gatherQuest: "Перед отправкой войск на сбор:\nИспользуйте предмет ускорения сбора ресурсов\nПерейдите на страницу экономики",
      heroShard: "Перед выбором квеста рассчитайте очки карт (красная, фиолетовая, синяя), которые у вас уже есть. Вы также можете обменять осколки, чтобы достичь требования — 10 осколков Гины из Trial Turret, осколки Фионы из Sapphire Shop, осколки Геролина из Arena Shop и сундуков Arena, и осколки Одделла/Тутанхета у монстров.",
      rallyMonsterDens: "Проводите атаки на Логова Монстров уровня 7. Это экономит энергию по сравнению с логовами более высокого уровня.",
      gearMaterials: "Рассчитайте очки, проверив предметы в вашей сумке перед выбором квеста. Вы можете обменять тотемные предметы из Sapphire Shop, предметы рун из Trial Turret и Apex Arena, а также святилищные предметы из магазина Oblivion War.",
      helpAllies: "Просто скажите, что у вас есть эта миссия в чате альянса.",
      speedups: "Убедитесь, что у вас есть ускорители. Вы можете получить больше (99) из обмена Trial Turret. Попробуйте завершить эту миссию, исцеляя войска во время Oblivion War или Realm Expedition — это экономит много ресурсов.",
      improveTroopPower: "Попробуйте это только в том случае, если у вас есть здоровое восстановление после конфликта после Завоевания Лордов.",
      transport: "Выбирайте эту миссию только если у вас и у человека, которому вы отправляете ресурсы, есть хороший уровень почтовой станции. Иначе налоги приведут к огромным потерям."
    },
    info: {
      button: "Открыть информацию",
      slides: {
        slide1: "Так выглядит доска квестов для всех (знаки минус невидимы). Новые квесты появляются каждые 30 минут при обновлении, но плохие квесты обновляются почти мгновенно, поэтому пожалуйста, будьте терпеливы.",
        slide2: "Это личные квесты, доступные только вам. Если они вам не нравятся, у вас есть возможность обновлять их каждые 10 минут.",
        slide3: "Избегайте квестов со знаком \"?\". Как и плохие квесты, они обновляются почти мгновенно, поэтому нет смысла их пытаться."
      }
    },
    types: { arena: "Арена", market: "Рынок", alliance: "Альянс", ap: "Очки действия", diamond: "Алмазы", stamina: "Энергия", gather: "Сбор", gear: "Снаряжение/Руны/Тотемы/Святыни", hero: "Герои", heal: "Лечение", help: "Помощь", building: "Стройка", research: "Наука", troop: "Войска", rally: "Логова", speedup: "Ускорители", transport: "Транспорт", packs: "Наборы", other: "Другое" },
    questNames: {
      "Arena Challenge": "Вызов на арене",
      "Black Market": "Черный рынок",
      "Consume Alliance Coins": "Трата монет альянса",
      "Consume AP": "Трата ОД",
      "Consume Diamond": "Трата алмазов",
      "Consume Stamina": "Трата энергии",
      "Gather Food": "Сбор еды",
      "Gather Iron": "Сбор железа",
      "Gather Stone": "Сбор камня",
      "Gather Wood": "Сбор дерева",
      "Get Gear Materials": "Получение материалов снаряжения/рун/тотемов/святынь",
      "Get Hero Shard": "Получение фрагментов героев",
      "Heal Units": "Лечение юнитов",
      "Help Allies": "Помощь союзникам",
      "Improve Building Power": "Повышение мощи зданий",
      "Improve Research Power": "Повышение мощи науки",
      "Improve Troop Power": "Повышение мощи войск",
      "Rally on Monster Dens": "Атака на логова монстров",
      "Research": "Исследование",
      "Speedups (Build/Tech/Training/Healing)": "Ускорения (Стройка/Наука/Войска/Лечение)",
      "Speedup (Build/Tech/Training/Healing)": "Ускорение (Стройка/Наука/Войска/Лечение)",
      "Transport Any Resources to Allies": "Транспорт любых ресурсов союзникам",
      "Transport Food among allies": "Транспорт еды между союзниками",
      "Transport Iron among allies": "Транспорт железа между союзниками",
      "Transport Stone among allies": "Транспорт камня между союзниками",
      "Transport Wood among allies": "Транспорт дерева между союзниками",
      "Buy Packs": "Покупка наборов",
      "Gain Diamonds via Packs": "Получение алмазов из наборов"
    },
    times: {
      "12 hours": "12 часов",
      "1 day": "1 день",
      "2 days": "2 дня",
      "3 days": "3 дня",
      "4 days": "4 дня",
      "33 hours": "33 часа"
    },
    notes: {
      "Challenge other players in the Arena. Winning is not required, only completion.": "Вызовите других игроков на арене. Победа не требуется, только завершение.",
      "Best performed during the Arena event for double rewards.": "Лучше всего выполнить во время события Arena за двойные награды.",
      "Purchase items from the Black Market. Focus on resources or speedups you need.": "Покупайте предметы на Черном рынке. Сосредоточьтесь на ресурсах или ускорениях, которые вам нужны.",
      "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.": "Используйте ОД для атаки на монстров на карте. Лучше всего охотиться на монстров, которые дают материалы, необходимые для прогрессии.",
      "Consider using AP potions if you're close to completion but running out of natural recovery.": "Рассмотрите возможность использования зелий ОД, если вы близки к завершению, но заканчивается естественное восстановление.",
      "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.": "Лечите раненые войска в лазарете. Вы можете сражаться с монстрами низкого уровня, чтобы намеренно создавать небольшие потери, если необходимо.",
      "High-value quest. This is a personal quest that requires actual purchases in the game store.": "Высокоценный квест. Это личный квест, требующий реальных покупок в игровом магазине.",
      "Perfect for large upgrades or during diamond spending events.": "Идеально подходит для больших обновлений или во время событий траты алмазов.",
      "One of the most efficient high-point quests. Save your troop training speedups for this specific quest.": "Один из наиболее эффективных высокоточечных квестов. Сохраните ускорители обучения войск для этого конкретного квеста."
    }
  },
  uk: {
    header: { title: "Протистояння Альянсів", subtitle: "Puzzles & Chaos", dashboard: "Панель" },
    welcome: { badge: "Двигун оптимізації квестів v1.0", title: "Панель даних квестів", subtitle: "Візуалізуйте, сортуйте та фільтруйте квести протистояння альянсів." },
    filters: { search: "Пошук квестів...", all: "Всі типи", personal: "Особисті (240)", sort: "Сортування", quest: "Назва", type: "Тип", points: "Очки", time: "Час", recommended: "Рекомендовано", not_recommended: "Не Рекомендовано" },
    stats: { showing: "Показано {count} квестів", sorting: "Сортування за {sortBy} ({order})", asc: "зрост", desc: "спад" },
    card: { requirement: "Вимога", points: "Очки", time: "Час", noTime: "Без ліміту" },
    modal: { reward: "Нагорода", timeLimit: "Ліміт часу", tip: "Корисна порада", close: "Зрозуміло", noTip: "Специфічних порад немає." },
    empty: { title: "Квести не знайдено", subtitle: "Спробуйте змінити фільтри." },
    recommendation: { recommended: "✨ Рекомендовано", not_recommended: "⚠️ Не рекомендовано", neutral: "Стандартно" },
    tips: {
      gatherQuest: "Перед відправленням військ на збір:\nВикористовуйте предмет прискорення збору ресурсів\nПерейдіть на сторінку економіки",
      heroShard: "Перед вибором квесту розрахуйте очки карт (червона, фіолетова, синя), які у вас уже є. Ви також можете обміняти осколки, щоб досягти вимоги — 10 осколків Гіни з Trial Turret, осколки Фіони з Sapphire Shop, осколки Геролина з Arena Shop та сундуків Arena, і осколки Оддела/Тутанхета від монстрів.",
      rallyMonsterDens: "Проводьте атаки на Лігва Монстрів рівня 7. Це економить енергію порівняно з логовами вищого рівня.",
      gearMaterials: "Розрахуйте очки, перевіривши предмети у вашій сумці перед вибором квесту. Ви можете обміняти предмети тотемів із Sapphire Shop, предмети рун з Trial Turret та Apex Arena, а також предмети святилищ з магазину Oblivion War.",
      helpAllies: "Просто скажіть, що у вас є цей квест у чаті альянсу.",
      speedups: "Переконайтеся, що у вас є прискорювачі. Ви можете отримати більше (99) з обміну Trial Turret. Спробуйте завершити цей квест, зцілюючи військо під час Oblivion War або Realm Expedition — це економить багато ресурсів.",
      improveTroopPower: "Спробуйте це тільки якщо у вас є здорове відновлення після конфлікту від Завоювання Лордів.",
      transport: "Виберіть цей квест тільки якщо у вас і у людини, якій ви надсилаєте ресурси, є гарний рівень Поштового відділення. Інакше податки спричинять величезні втрати."
    },
    info: {
      button: "Відкрити інформацію",
      slides: {
        slide1: "Ось як виглядає дошка квестів для всіх (знаки мінус невидимі). Нові квести з'являються кожні 30 хвилин при оновленні, але погані квести оновлюються майже миттєво, тому будь ласка, будьте терпеливі.",
        slide2: "Це особисті квести, доступні тільки вам. Якщо вони вам не подобаються, у вас є можливість оновлювати їх кожні 10 хвилин.",
        slide3: "Уникайте квестів зі знаком \"?\". Як і погані квести, вони оновлюються майже миттєво, тому немає сенсу їх намагатися."
      }
    },
    types: { arena: "Арена", market: "Ринок", alliance: "Альянс", ap: "Очки дії", diamond: "Алмази", stamina: "Енергія", gather: "Збір", gear: "Спорядження/Руни/Тотеми/Святилища", hero: "Герої", heal: "Лікування", help: "Допомога", building: "Будівництво", research: "Наука", troop: "Війська", rally: "Лігва", speedup: "Прискорювачі", transport: "Транспорт", packs: "Набори", other: "Інше" },
    questNames: {
      "Arena Challenge": "Виклик на арені",
      "Black Market": "Чорний ринок",
      "Consume Alliance Coins": "Трата монет альянсу",
      "Consume AP": "Трата ОД",
      "Consume Diamond": "Трата алмазів",
      "Consume Stamina": "Трата енергії",
      "Gather Food": "Збір їжі",
      "Gather Iron": "Збір заліза",
      "Gather Stone": "Збір каменю",
      "Gather Wood": "Збір дерева",
      "Get Gear Materials": "Отримання матеріалів спорядження/рун/тотемів/святилищ",
      "Get Hero Shard": "Отримання фрагментів героїв",
      "Heal Units": "Лікування юнітів",
      "Help Allies": "Допомога союзникам",
      "Improve Building Power": "Підвищення моці будівель",
      "Improve Research Power": "Підвищення моці науки",
      "Improve Troop Power": "Підвищення моці військ",
      "Rally on Monster Dens": "Атака на лігва монстрів",
      "Research": "Дослідження",
      "Speedups (Build/Tech/Training/Healing)": "Прискорення (Будівництво/Наука/Війська/Лікування)",
      "Speedup (Build/Tech/Training/Healing)": "Прискорення (Будівництво/Наука/Війська/Лікування)",
      "Transport Any Resources to Allies": "Транспорт будь-яких ресурсів союзникам",
      "Transport Food among allies": "Транспорт їжі між союзниками",
      "Transport Iron among allies": "Транспорт заліза між союзниками",
      "Transport Stone among allies": "Транспорт каменю між союзниками",
      "Transport Wood among allies": "Транспорт дерева між союзниками",
      "Buy Packs": "Купівля наборів",
      "Gain Diamonds via Packs": "Отримання алмазів з наборів"
    },
    times: {
      "12 hours": "12 годин",
      "1 day": "1 день",
      "2 days": "2 дні",
      "3 days": "3 дні",
      "4 days": "4 дні",
      "33 hours": "33 години"
    },
    notes: {
      "Challenge other players in the Arena. Winning is not required, only completion.": "Виклик іншим гравцям на арені. Перемога не потрібна, тільки завершення.",
      "Best performed during the Arena event for double rewards.": "Найкраще виконується під час события Arena для подвійних нагород.",
      "Purchase items from the Black Market. Focus on resources or speedups you need.": "Купуйте предмети на Чорному ринку. Зосередьтесь на ресурсах або прискореннях, які вам потрібні.",
      "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.": "Використовуйте ОД для атаки на монстрів на карті. Найкраще полювати на монстрів, які надають матеріали, необхідні для прогресу.",
      "Consider using AP potions if you're close to completion but running out of natural recovery.": "Розглядайте можливість використання зіль ОД, якщо ви близько до завершення, але закінчується природне відновлення.",
      "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.": "Лікуйте поранених військо в лікарні. Ви можете битися з монстрами низького рівня, щоб навмисне створювати невеликі втрати, якщо потрібно.",
      "High-value quest. This is a personal quest that requires actual purchases in the game store.": "Квест високої вартості. Це особистий квест, який вимагає фактичних покупок у грі.",
      "Perfect for large upgrades or during diamond spending events.": "Ідеально для великих оновлень або під час подій витрат алмазів.",
      "One of the most efficient high-point quests. Save your troop training speedups for this specific quest.": "Один із найбільш ефективних високобальних квестів. Збережіть ваші прискорення навчання військ для цього конкретного квесту."
    }
  },
  fr: {
    header: { title: "Confrontation d'Alliances", subtitle: "Puzzles & Chaos", dashboard: "Tableau de bord" },
    welcome: { badge: "Moteur d'Optimisation de Quêtes v1.0", title: "Tableau de Bord des Quêtes", subtitle: "Visualisez, triez et filtrez facilement chaque quête de confrontation d'alliances." },
    filters: { search: "Rechercher des quêtes...", all: "Tous les Types", personal: "Personnelles (240)", sort: "Trier par", quest: "Nom de la Quête", type: "Type de Quête", points: "Points", time: "Temps", recommended: "Recommandées", not_recommended: "Non Recommandées" },
    stats: { showing: "Affichage de {count} Quêtes", sorting: "Tri par {sortBy} ({order})", asc: "croiss", desc: "décroiss" },
    card: { requirement: "Exigence", points: "Points", time: "Temps", noTime: "Pas de limite" },
    modal: { reward: "Récompense", timeLimit: "Limite de Temps", tip: "Conseil Utile", close: "Compris", noTip: "Aucun conseil spécifique disponible." },
    empty: { title: "Aucune quête trouvée", subtitle: "Essayez d'ajuster vos filtres ou votre recherche." },
    recommendation: { recommended: "✨ Recommandée", not_recommended: "⚠️ Non Recommandée", neutral: "Standard" },
    tips: {
      gatherQuest: "Avant d'envoyer vos troupes à la récolte:\nUtilisez un accélérateur de récolte de ressources\nPassez à la page économie",
      heroShard: "Avant de choisir la quête, calculez les points des cartes (rouge, violet, bleu) que vous possédez déjà. Vous pouvez également échanger des éclats pour atteindre l'exigence — 10 éclats de Gina du Trial Turret, éclats de Fiona de la Sapphire Shop, éclats de Gerolin de l'Arena Shop et des coffres Arena, et éclats d'Odell/Tutanhet des monstres.",
      rallyMonsterDens: "Effectuez des rallyes sur un Repaire de Monstres Niveau 7. Cela économise l'énergie par rapport aux repaires de niveau supérieur.",
      gearMaterials: "Calculez les points en vérifiant les objets dans votre sac avant de choisir la quête. Vous pouvez échanger des objets totem de la Sapphire Shop, des objets rune du Trial Turret et Apex Arena, et des objets reliques de la boutique Oblivion War.",
      helpAllies: "Dites simplement que vous avez cette quête dans le chat de l'alliance.",
      speedups: "Assurez-vous que vous avez des accélérateurs. Vous pouvez en obtenir plus (99) via l'échange Trial Turret. Essayez de compléter cette quête en soignant les troupes pendant Oblivion War ou Realm Expedition — cela économise beaucoup de ressources.",
      improveTroopPower: "Tentez ceci si et seulement si vous avez une récupération post-conflit saine de la Conquête des Seigneurs.",
      transport: "Sélectionnez cette quête uniquement si vous et la personne à qui vous envoyez des ressources avez une Poste de bon niveau. Sinon, les taxes causeront d'énormes pertes."
    },
    info: {
      button: "Ouvrir les informations",
      slides: {
        slide1: "Voici à quoi ressemble le tableau des quêtes pour tout le monde (les signes moins ne sont pas visibles). Les nouvelles quêtes apparaissent toutes les 30 minutes lors de l'actualisation, mais les mauvaises quêtes sont actualisées presque instantanément, donc s'il vous plaît, soyez patient.",
        slide2: "Ce sont des quêtes personnelles, disponibles uniquement pour vous. Si vous ne les aimez pas, vous avez la possibilité de les actualiser toutes les 10 minutes.",
        slide3: "Évitez les quêtes avec un signe \"?\". Comme les mauvaises quêtes, elles sont actualisées presque instantanément, il n'y a donc pas besoin de les essayer."
      }
    },
    types: { arena: "Arène", market: "Marché Noir", alliance: "Alliance", ap: "Consommer PA", diamond: "Diamant", stamina: "Stamina", gather: "Récolte", gear: "Équipement/Runes/Totems/Reliques", hero: "Fragments de Héros", heal: "Soin", help: "Aide Alliés", building: "Puissance de Bâtiment", research: "Puissance de Recherche", troop: "Puissance de Troupes", rally: "Repaires de Monstres", speedup: "Accélérateurs", transport: "Transport", packs: "Packs", other: "Autre" },
    questNames: {
      "Arena Challenge": "Défi d'Arène",
      "Black Market": "Marché Noir",
      "Consume Alliance Coins": "Consommer des Pièces d'Alliance",
      "Consume AP": "Consommer des PA",
      "Consume Diamond": "Consommer des Diamants",
      "Consume Stamina": "Consommer de la Stamina",
      "Gather Food": "Récolter de la Nourriture",
      "Gather Iron": "Récolter du Fer",
      "Gather Stone": "Récolter de la Pierre",
      "Gather Wood": "Récolter du Bois",
      "Get Gear Materials": "Obtenir des Matériaux d'Équip./Runes/Totems/Reliques",
      "Get Hero Shard": "Obtenir des Fragments de Héros",
      "Heal Units": "Soigner des Unités",
      "Help Allies": "Aider les Alliés",
      "Improve Building Power": "Améliorer la Puissance de Bât.",
      "Improve Research Power": "Améliorer la Puissance de Rech.",
      "Improve Troop Power": "Améliorer la Puissance de Troupes",
      "Rally on Monster Dens": "Rallye sur les Repaires",
      "Research": "Recherche",
      "Speedups (Build/Tech/Training/Healing)": "Accélérateurs (Bât./Tech/Entr./Soin)",
      "Speedup (Build/Tech/Training/Healing)": "Accélérateur (Bât./Tech/Entr./Soin)",
      "Transport Any Resources to Allies": "Transporter Toutes les Ressources aux Alliés",
      "Transport Food among allies": "Transporter de la Nourriture entre Alliés",
      "Transport Iron among allies": "Transporter du Fer entre Alliés",
      "Transport Stone among allies": "Transporter de la Pierre entre Alliés",
      "Transport Wood among allies": "Transporter du Bois entre Alliés",
      "Buy Packs": "Acheter des Packs",
      "Gain Diamonds via Packs": "Gagner des Diamants via Packs"
    },
    times: {
      "12 hours": "12 heures",
      "1 day": "1 jour",
      "2 days": "2 jours",
      "3 days": "3 jours",
      "4 days": "4 jours",
      "33 hours": "33 heures"
    },
    notes: {
      "Challenge other players in the Arena. Winning is not required, only completion.": "Défiez d'autres joueurs dans l'Arène. La victoire n'est pas nécessaire, seulement la complétion.",
      "Best performed during the Arena event for double rewards.": "Mieux exécuté pendant l'événement Arena pour les récompenses doublées.",
      "Purchase items from the Black Market. Focus on resources or speedups you need.": "Achetez des articles au Marché Noir. Concentrez-vous sur les ressources ou les accélérateurs dont vous avez besoin.",
      "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.": "Utilisez l'AP pour attaquer les monstres sur la carte. Il est préférable de chasser des monstres qui fournissent les matériaux dont vous avez besoin pour progresser.",
      "Consider using AP potions if you're close to completion but running out of natural recovery.": "Envisagez d'utiliser des potions d'AP si vous êtes proche de la complétion mais vous manquez de récupération naturelle.",
      "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.": "Soignez les troupes blessées à l'infirmerie. Vous pouvez combattre des monstres de bas niveau pour créer intentionnellement des pertes mineures si nécessaire.",
      "High-value quest. This is a personal quest that requires actual purchases in the game store.": "Quête de haute valeur. C'est une quête personnelle qui nécessite des achats réels dans le magasin du jeu.",
      "Perfect for large upgrades or during diamond spending events.": "Parfait pour les grands mises à niveau ou lors d'événements de dépense de diamants.",
      "One of the most efficient high-point quests. Save your troop training speedups for this specific quest.": "L'une des quêtes à haut pointage les plus efficaces. Économisez vos accélérateurs d'entraînement de troupes pour cette quête spécifique."
    }
  },
  id: {
    header: { title: "Pertunjukan Aliansi", subtitle: "Puzzles & Chaos", dashboard: "Dasbor" },
    welcome: { badge: "Mesin Optimasi Misi v1.0", title: "Dasbor Data Misi", subtitle: "Visualisasikan, urutkan, dan filter setiap misi pertunjukan aliansi dengan mudah. Maksimalkan hadiah dan efisiensi Anda dengan analisis data real-time." },
    filters: { search: "Cari misi...", all: "Semua Jenis", personal: "Personal (240)", sort: "Urutkan Berdasarkan", quest: "Nama Misi", type: "Jenis Misi", points: "Poin", time: "Waktu", recommended: "Direkomendasikan", not_recommended: "Tidak Direkomendasikan" },
    stats: { showing: "Menampilkan {count} Misi", sorting: "Pengurutan berdasarkan {sortBy} ({order})", asc: "naik", desc: "turun" },
    card: { requirement: "Persyaratan", points: "Poin", time: "Waktu", noTime: "Tanpa batas waktu" },
    modal: { reward: "Hadiah", timeLimit: "Batas Waktu", tip: "Tip Bermanfaat", close: "Mengerti", noTip: "Tidak ada tip khusus tersedia untuk misi ini." },
    empty: { title: "Tidak ada misi yang ditemukan", subtitle: "Coba sesuaikan filter atau kueri pencarian Anda." },
    recommendation: { recommended: "✨ Direkomendasikan", not_recommended: "⚠️ Tidak Direkomendasikan", neutral: "Standar" },
    tips: {
      gatherQuest: "Sebelum mengirim pasukan Anda untuk mengumpulkan:\nGunakan item percepatan pengumpulan sumber daya\nBeralih ke halaman ekonomi",
      heroShard: "Sebelum memilih misi, hitung poin dari kartu (merah, ungu, biru) yang sudah Anda miliki. Anda juga dapat menukar pecahan untuk membantu mencapai persyaratan — 10 pecahan Gina dari Trial Turret, pecahan Fiona dari Sapphire Shop, pecahan Gerolin dari Arena Shop dan peti Arena, dan pecahan Odell/Tutanhet dari monster.",
      rallyMonsterDens: "Lakukan serangan pada Sarang Monster Level 7. Ini menghemat stamina dibandingkan dengan sarang level lebih tinggi.",
      gearMaterials: "Hitung poin dengan memeriksa item di tas Anda sebelum memilih misi. Anda dapat menukar item totem dari Sapphire Shop, item rune dari Trial Turret dan Apex Arena, dan item batu suci dari toko Oblivion War.",
      helpAllies: "Baru saja katakan bahwa Anda memiliki misi ini di obrolan aliansi.",
      speedups: "Pastikan Anda memiliki percepatan. Anda bisa mendapatkan lebih banyak (99) dari pertukaran Trial Turret. Cobalah menyelesaikan misi ini dengan menyembuhkan pasukan selama Oblivion War atau Realm Expedition — ini menghemat banyak sumber daya.",
      improveTroopPower: "Coba ini jika dan hanya jika Anda memiliki pemulihan pasca-konflik yang sehat dari Penaklukan Para Tuan.",
      transport: "Pilih misi ini hanya jika Anda dan orang yang menerima sumber daya memiliki Kantor Pos tingkat baik. Jika tidak, pajak akan menyebabkan kerugian besar."
    },
    info: {
      button: "Buka informasi",
      slides: {
        slide1: "Inilah cara papan misi terlihat untuk semua orang (tanda minus tidak terlihat). Misi baru muncul setiap 30 menit saat diperbarui, tetapi misi buruk diperbarui hampir secara instan, jadi mohon bersabar.",
        slide2: "Ini adalah misi pribadi, hanya tersedia untuk Anda. Jika Anda tidak menyukainya, Anda memiliki kesempatan untuk menyegarkannya setiap 10 menit.",
        slide3: "Hindari misi dengan tanda \"?\". Seperti misi buruk, mereka diperbarui hampir secara instan, jadi tidak perlu mencobanya."
      }
    },
    types: { arena: "Arena", market: "Pasar Gelap", alliance: "Aliansi", ap: "Konsumsi AP", diamond: "Berlian", stamina: "Stamina", gather: "Pengumpulan", gear: "Perlengkapan/Rune/Totem/Batu Suci", hero: "Pecahan Pahlawan", heal: "Penyembuhan", help: "Bantuan Aliansi", building: "Kekuatan Bangunan", research: "Kekuatan Penelitian", troop: "Kekuatan Pasukan", rally: "Sarang Monster", speedup: "Percepatan", transport: "Transportasi", packs: "Paket", other: "Lainnya" },
    questNames: {
      "Arena Challenge": "Tantangan Arena",
      "Black Market": "Pasar Gelap",
      "Consume Alliance Coins": "Konsumsi Koin Aliansi",
      "Consume AP": "Konsumsi AP",
      "Consume Diamond": "Konsumsi Berlian",
      "Consume Stamina": "Konsumsi Stamina",
      "Gather Food": "Kumpulkan Makanan",
      "Gather Iron": "Kumpulkan Besi",
      "Gather Stone": "Kumpulkan Batu",
      "Gather Wood": "Kumpulkan Kayu",
      "Get Gear Materials": "Dapatkan Material Perlengkapan/Rune/Totem/Batu Suci",
      "Get Hero Shard": "Dapatkan Pecahan Pahlawan",
      "Heal Units": "Sembuhkan Unit",
      "Help Allies": "Bantu Aliansi",
      "Improve Building Power": "Tingkatkan Kekuatan Bangunan",
      "Improve Research Power": "Tingkatkan Kekuatan Penelitian",
      "Improve Troop Power": "Tingkatkan Kekuatan Pasukan",
      "Rally on Monster Dens": "Serangan pada Sarang Monster",
      "Research": "Penelitian",
      "Speedups (Build/Tech/Training/Healing)": "Percepatan (Bangun/Tek/Latihan/Penyembuhan)",
      "Speedup (Build/Tech/Training/Healing)": "Percepatan (Bangun/Tek/Latihan/Penyembuhan)",
      "Transport Any Resources to Allies": "Transportasikan Sumber Daya Apa Pun ke Aliansi",
      "Transport Food among allies": "Transportasikan Makanan di antara Aliansi",
      "Transport Iron among allies": "Transportasikan Besi di antara Aliansi",
      "Transport Stone among allies": "Transportasikan Batu di antara Aliansi",
      "Transport Wood among allies": "Transportasikan Kayu di antara Aliansi",
      "Buy Packs": "Beli Paket",
      "Gain Diamonds via Packs": "Dapatkan Berlian melalui Paket"
    },
    times: {
      "12 hours": "12 jam",
      "1 day": "1 hari",
      "2 days": "2 hari",
      "3 days": "3 hari",
      "4 days": "4 hari",
      "33 hours": "33 jam"
    },
    notes: {
      "Challenge other players in the Arena. Winning is not required, only completion.": "Tantang pemain lain di Arena. Menang tidak diperlukan, hanya penyelesaian.",
      "Best performed during the Arena event for double rewards.": "Paling baik dilakukan selama acara Arena untuk hadiah ganda.",
      "Purchase items from the Black Market. Focus on resources or speedups you need.": "Beli item dari Pasar Gelap. Fokus pada sumber daya atau percepatan yang Anda butuhkan.",
      "Use AP to attack monsters on the map. It's best to hunt monsters that provide materials you need for progression.": "Gunakan AP untuk menyerang monster di peta. Yang terbaik adalah berburu monster yang menyediakan materi yang Anda butuhkan untuk maju.",
      "Consider using AP potions if you're close to completion but running out of natural recovery.": "Pertimbangkan menggunakan ramuan AP jika Anda mendekati penyelesaian tetapi kehabisan pemulihan alami.",
      "Heal wounded troops in the infirmary. You can battle low-level monsters to intentionally create minor casualties if needed.": "Sembuhkan pasukan yang terluka di rumah sakit. Anda dapat berperang dengan monster level rendah untuk sengaja menciptakan korban ringan jika diperlukan.",
      "High-value quest. This is a personal quest that requires actual purchases in the game store.": "Misi bernilai tinggi. Ini adalah misi pribadi yang memerlukan pembelian aktual di toko permainan.",
      "Perfect for large upgrades or during diamond spending events.": "Sempurna untuk upgrade besar atau selama acara pengeluaran berlian.",
      "One of the most efficient high-point quests. Save your troop training speedups for this specific quest.": "Salah satu misi poin tinggi paling efisien. Simpan percepatan pelatihan pasukan Anda untuk misi spesifik ini."
    }
  }
};
