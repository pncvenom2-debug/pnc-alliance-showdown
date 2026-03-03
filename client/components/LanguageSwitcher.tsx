import * as React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Language } from "@/lib/translations";
import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-muted-foreground" />
      <Select value={language} onValueChange={(val) => setLanguage(val as Language)}>
        <SelectTrigger className="w-[140px] h-9 bg-secondary/50 border-none focus:ring-1 focus:ring-primary text-xs font-bold uppercase tracking-wider">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="end" className="bg-card border-border">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="text-xs">
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
