import * as React from "react";
import { QuestType } from "@shared/api";
import { Search, Filter, SortDesc, SortAsc } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface QuestFiltersProps {
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onSortOrderChange: () => void;
  sortOrder: "asc" | "desc";
  types: QuestType[];
}

export function QuestFilters({
  onSearchChange,
  onTypeChange,
  onSortChange,
  onSortOrderChange,
  sortOrder,
  types
}: QuestFiltersProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-secondary/50 border border-border/50 backdrop-blur-sm">
      <div className="relative flex-1 group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          placeholder={t.filters.search}
          className="pl-10 h-9 sm:h-10 text-sm bg-secondary/50 border-none focus-visible:ring-primary focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 transition-all focus-visible:bg-secondary"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-lg bg-card/50 ring-1 ring-white/5">
          <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
          <Select onValueChange={(val) => onTypeChange(val)}>
            <SelectTrigger className="w-auto sm:w-[140px] border-none bg-transparent focus:ring-0 focus:ring-offset-0 h-8 text-xs font-semibold uppercase tracking-wider px-1">
              <SelectValue placeholder={t.filters.all} />
            </SelectTrigger>
            <SelectContent align="end" className="bg-card border-border max-h-[300px]">
              <SelectItem value="all" className="text-xs">{t.filters.all}</SelectItem>
              <SelectItem value="personal" className="font-bold text-primary text-xs">{t.filters.personal}</SelectItem>
              {[...types].sort().map((type) => (
                <SelectItem key={type} value={type} className="capitalize text-xs">
                  {t.types[type] || type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-lg bg-card/50 ring-1 ring-white/5">
          <SortDesc className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
          <Select onValueChange={onSortChange}>
            <SelectTrigger className="w-auto sm:w-[140px] border-none bg-transparent focus:ring-0 focus:ring-offset-0 h-8 text-xs font-semibold uppercase tracking-wider px-1">
              <SelectValue placeholder={t.filters.sort} />
            </SelectTrigger>
            <SelectContent align="end" className="bg-card border-border max-h-[300px]">
              <SelectItem value="quest" className="text-xs">{t.filters.quest}</SelectItem>
              <SelectItem value="type" className="text-xs">{t.filters.type}</SelectItem>
              <SelectItem value="points" className="text-xs">{t.filters.points}</SelectItem>
              <SelectItem value="time" className="text-xs">{t.filters.time}</SelectItem>
              <SelectItem value="recommendation" className="text-xs">{t.filters.recommendation}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 bg-card/50 hover:bg-secondary/50 border-none ring-1 ring-white/5"
          onClick={onSortOrderChange}
        >
          {sortOrder === "asc" ? <SortAsc className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <SortDesc className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
        </Button>
      </div>
    </div>
  );
}
