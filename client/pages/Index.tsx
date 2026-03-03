import * as React from "react";
import { useState, useMemo } from "react";
import { quests as initialQuests } from "@/data/quests";
import { QuestCard } from "@/components/QuestCard";
import { QuestFilters } from "@/components/QuestFilters";
import { QuestModal } from "@/components/QuestModal";
import { InfoModal } from "@/components/InfoModal";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "@/hooks/use-translation";
import { Quest, QuestType } from "@shared/api";
import { Trophy, LayoutGrid, LayoutDashboard, Search, Info } from "lucide-react";

export default function Index() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("points");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Info slides - user can add images and text here
  const infoSlides = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F78a4578f1a9f4db28a3a47d12e310816%2Fdc3205fee48248a0a293c16f7d89f7a0?format=webp&width=800&height=1200",
      text: t.info.slides.slide1
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F78a4578f1a9f4db28a3a47d12e310816%2F5bda135d420f4e90b4349c226202256e?format=webp&width=800&height=1200",
      text: t.info.slides.slide2
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F78a4578f1a9f4db28a3a47d12e310816%2F7970088904ca40ddb6da5229c60558ed?format=webp&width=800&height=1200",
      text: t.info.slides.slide3
    },
  ];

  const filteredAndSortedQuests = useMemo(() => {
    return initialQuests
      .filter((quest) => {
        const matchesSearch = quest.quest.toLowerCase().includes(searchQuery.toLowerCase());

        let matchesType = false;
        if (selectedType === "all") {
          matchesType = true;
        } else if (selectedType === "personal") {
          matchesType = quest.points >= 240;
        } else {
          // Specific type: only show if it matches type AND is not a personal quest (240 pts)
          // This "puts them under" the personal filter instead.
          matchesType = quest.type === selectedType && quest.points < 240;
        }

        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortBy === "quest") {
          comparison = a.quest.localeCompare(b.quest);
        } else if (sortBy === "type") {
          comparison = a.type.localeCompare(b.type);
        } else if (sortBy === "points") {
          comparison = a.points - b.points;
        } else if (sortBy === "time") {
          const timeA = a.time || "";
          const timeB = b.time || "";
          comparison = timeA.localeCompare(timeB);
        }

        return sortOrder === "asc" ? comparison : -comparison;
      });
  }, [searchQuery, selectedType, sortBy, sortOrder]);

  const uniqueTypes = useMemo(() => {
    // Only show types that have at least one non-personal (240 pts) quest
    return Array.from(new Set(initialQuests.filter(q => q.points < 240).map((q) => q.type)));
  }, []);

  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col sm:flex-row h-auto sm:h-16 items-center justify-between gap-3 sm:gap-0 py-3 sm:py-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 flex-shrink-0">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-base sm:text-lg font-bold leading-tight tracking-tight truncate">{t.header.title}</h1>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-widest truncate">{t.header.subtitle}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={() => setIsInfoOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary ring-2 ring-white/10 hover:ring-primary/30 transition-all hover:bg-secondary/80"
              aria-label={t.info.button}
              title={t.info.button}
            >
              <Info className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </button>
            <LanguageSwitcher />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary ring-2 ring-white/10 flex-shrink-0">
              <span className="text-[10px] font-bold text-primary">JD</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container pt-6 sm:pt-8">
        {/* Welcome Section */}
        <div className="mb-8 sm:mb-10 text-center lg:text-left px-2 sm:px-0">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">{t.welcome.title}</h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl">
            {t.welcome.subtitle}
          </p>
        </div>

        {/* Filters */}
        <QuestFilters 
          onSearchChange={setSearchQuery}
          onTypeChange={setSelectedType}
          onSortChange={setSortBy}
          onSortOrderChange={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
          sortOrder={sortOrder}
          types={uniqueTypes}
        />

        {/* Grid Stats */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-xs sm:text-sm px-2 sm:px-0">
          <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <LayoutGrid className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">{t.stats.showing.replace("{count}", filteredAndSortedQuests.length.toString())}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 font-semibold text-primary uppercase tracking-tighter text-[10px] sm:text-xs">
            {t.stats.sorting
              .replace("{sortBy}", t.filters[sortBy as keyof typeof t.filters] || sortBy)
              .replace("{order}", sortOrder === "asc" ? t.stats.asc : t.stats.desc)}
          </div>
        </div>

        {/* Quest Grid */}
        {filteredAndSortedQuests.length > 0 ? (
          <div className="px-2 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredAndSortedQuests.map((quest) => (
                <QuestCard
                  key={quest.id}
                  quest={quest}
                  onClick={setSelectedQuest}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="px-2 sm:px-0">
            <div className="flex min-h-[300px] sm:min-h-[400px] flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-dashed border-border/50 bg-secondary/20">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-secondary flex items-center justify-center mb-3 sm:mb-4">
                <Search className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground/30" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center">{t.empty.title}</h3>
              <p className="text-muted-foreground mt-2 text-center text-sm sm:text-base">{t.empty.subtitle}</p>
            </div>
          </div>
        )}
      </main>

      <QuestModal
        quest={selectedQuest}
        isOpen={!!selectedQuest}
        onClose={() => setSelectedQuest(null)}
      />

      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        slides={infoSlides}
      />

      {/* Footer / Mobile Nav */}
      <footer className="mt-16 sm:mt-20 border-t border-border/40 py-8 sm:py-10 bg-secondary/20">
        <div className="container flex flex-col items-center justify-center gap-4 px-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            &copy; 2024 Alliance Showdown Tracker. Not affiliated with Puzzles & Chaos.
          </p>
        </div>
      </footer>
    </div>
  );
}
