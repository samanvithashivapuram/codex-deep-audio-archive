import { memo } from "react";
import type { ArchiveEntry as EntryType } from "@/data/archiveEntries";

interface Props {
  entry: EntryType;
  index: number;
  isActive: boolean;
  onClick: (entry: EntryType) => void;
}

const ArchiveEntry = memo(({ entry, index, isActive, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick(entry)}
      className={`group w-full text-left px-6 py-6 md:px-10 md:py-7 border-b border-border transition-all duration-500 ease-out cursor-pointer relative ${
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

      <div className="flex items-center gap-6 md:gap-10">
        {/* Entry number */}
        <span
          className={`text-xs font-mono tracking-widest min-w-[3ch] transition-colors duration-500 ${
            isActive ? "text-primary" : "text-muted-foreground/50"
          }`}
        >
          {String(index + 1).padStart(3, "0")}
        </span>

        {/* Label */}
        <span
          className={`text-sm md:text-base font-light tracking-wide flex-1 transition-colors duration-500 ${
            isActive ? "text-primary-foreground" : "text-foreground group-hover:text-primary-foreground"
          }`}
        >
          Audio {index + 1}
        </span>

        {/* Play button */}
        <div
          className={`flex-shrink-0 transition-all duration-500 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
          }`}
        >
          {isActive ? (
            <div className="flex items-center gap-[3px]">
              <span className="w-[3px] h-4 bg-primary rounded-full animate-pulse" />
              <span className="w-[3px] h-3 bg-primary rounded-full animate-pulse [animation-delay:150ms]" />
              <span className="w-[3px] h-4 bg-primary rounded-full animate-pulse [animation-delay:300ms]" />
            </div>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-muted-foreground"
            >
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
});

ArchiveEntry.displayName = "ArchiveEntry";

export default ArchiveEntry;
