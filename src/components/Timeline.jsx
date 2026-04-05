/**
 * Timeline – right panel for date navigation.
 */

/** Format a date string (YYYY-MM-DD) into a human-readable French label. */
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

function isToday(dateStr) {
  const today = new Date();
  const [year, month, day] = dateStr.split('-').map(Number);
  return (
    today.getFullYear() === year &&
    today.getMonth() + 1 === month &&
    today.getDate() === day
  );
}

export default function Timeline({ dates, selectedDate, onSelect }) {
  return (
    <aside
      className="flex flex-col gap-1 p-3 md:p-4 md:w-44 shrink-0
                 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 overflow-y-auto"
      aria-label="Historique par date"
    >
      <p className="hidden md:block text-xs font-semibold uppercase tracking-widest text-slate-500 px-2 mb-2">
        Historique
      </p>

      <div className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible">
        {dates.map((date) => {
          const active = date === selectedDate;
          const today = isToday(date);
          return (
            <button
              key={date}
              onClick={() => onSelect(date)}
              aria-pressed={active}
              aria-label={`Anecdote du ${formatDate(date)}`}
              className={`shrink-0 flex flex-col items-start px-3 py-2 rounded-lg text-xs
                          transition-colors duration-150 text-left whitespace-nowrap
                          ${
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                          }`}
            >
              <span className="font-medium capitalize">{formatDate(date)}</span>
              {today && (
                <span className={`text-[10px] ${active ? 'text-indigo-200' : 'text-indigo-400'}`}>
                  Aujourd'hui
                </span>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
