import { memo } from "react";
import type { ArchiveEntry as EntryType } from "@/data/archiveEntries";

interface Props {
  entry: EntryType;
  isActive: boolean;
  onClick: (entry: EntryType) => void;
}

const ArchiveEntry = memo(({ entry, isActive, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick(entry)}
      className={`group w-full text-left px-6 py-8 md:px-10 md:py-10 border-b border-border transition-all duration-500 ease-out cursor-pointer relative ${
        isActive
          ? "bg-secondary/60"
          : "hover:bg-secondary/30"
      }`}
    >
      {/* Active glow line */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${
          isActive
            ? "bg-primary shadow-[0_0_12px_hsl(var(--glow))]"
            : "bg-transparent group-hover:bg-primary/30"
        }`}
      />

      <div className="flex items-start gap-6 md:gap-10">
        {/* Entry number */}
        <span
          className={`text-xs font-mono tracking-widest pt-1 min-w-[3ch] transition-colors duration-500 ${
            isActive ? "text-primary" : "text-muted-foreground/50"
          }`}
        >
          {String(entry.id).padStart(3, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <h2
            className={`text-base md:text-lg font-normal tracking-wide mb-2 transition-colors duration-500 ${
              isActive ? "text-primary-foreground" : "text-foreground group-hover:text-primary-foreground"
            }`}
          >
            {entry.title}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
            {entry.description}
          </p>
        </div>

        {/* Play indicator */}
        <div
          className={`mt-1 flex-shrink-0 transition-all duration-500 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              isActive
                ? "bg-primary shadow-[0_0_8px_hsl(var(--glow))]"
                : "bg-muted-foreground"
            }`}
          />
        </div>
      </div>
    </button>
  );
});

ArchiveEntry.displayName = "ArchiveEntry";

export default ArchiveEntry;
