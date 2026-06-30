export default function PrelaunchNotice() {
  return (
    <div className="border-b border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100" role="status">
      <div className="mx-auto max-w-[1140px] px-4 py-2.5 text-center text-sm font-medium sm:px-6">
        <span className="locale-de-only">
          Projekt in Vorbereitung: Derzeit werden über diese Website keine Dienstleistungen angeboten oder Aufträge angenommen.
        </span>
        <span className="locale-en-only">
          Project in preparation: No services are currently offered and no orders are accepted through this website.
        </span>
      </div>
    </div>
  );
}
