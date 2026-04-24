export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent-vivid" />
          <span>Christopher Miranda — {new Date().getFullYear()}</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em]">
          Marketing · Growth · Tecnologia
        </p>
      </div>
    </footer>
  );
}
