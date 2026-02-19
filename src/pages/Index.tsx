import { useRef, useState, useCallback } from "react";
import { archiveEntries, type ArchiveEntry as EntryType } from "@/data/archiveEntries";
import ArchiveEntry from "@/components/ArchiveEntry";

import sound0 from "@/assets/audio/sound.wav";
import sound1 from "@/assets/audio/sound_1.wav";
import sound2 from "@/assets/audio/sound_3.wav";
import sound3 from "@/assets/audio/sound_4.wav";
import sound4 from "@/assets/audio/sound_5.wav";
import sound5 from "@/assets/audio/sound_6.wav";
import sound80 from "@/assets/audio/steghide1/Steghide.wav";
import sound85 from "@/assets/audio/steghide1/Steghide.wav";
import sound90 from "@/assets/audio/steghide1/Steghide.wav";

const audioFiles = [sound0, sound1, sound2, sound3, sound4, sound5];

// Override map for specific entries
const audioOverrides: Record<number, string> = {
  80: sound80,
  85: sound85,
  90: sound90,
};

const getAudioSrc = (entry: EntryType): string => {
  return audioOverrides[entry.id] ?? audioFiles[entry.audioIndex];
};

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const handlePlay = useCallback((entry: EntryType) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    const src = getAudioSrc(entry);

    if (activeId === entry.id) {
      audio.pause();
      setActiveId(null);
      return;
    }

    audio.src = src;
    audio.play();
    setActiveId(entry.id);
  }, [activeId]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-8">
          <h1 className="text-lg md:text-xl font-light tracking-[0.2em] uppercase text-foreground mb-2">
            CODEX AUDIO ARCHIVE
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            DUCK
          </p>
        </div>
      </header>

      {/* Entries */}
      <main className="max-w-4xl mx-auto">
        {archiveEntries.map((entry, index) => (
          <ArchiveEntry
  key={entry.id}
  entry={entry}
  index={index}
  audioSrc={getAudioSrc(entry)}
  isActive={activeId === entry.id}
  onClick={handlePlay}
/>

        ))}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 md:px-10 py-12">
        <p className="text-xs font-mono text-muted-foreground/30 tracking-widest">
          END OF ARCHIVE
        </p>
      </footer>
    </div>
  );
};

export default Index;
