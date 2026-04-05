/**
 * Sidebar – left navigation for category selection.
 */
export default function Sidebar({ categories, activeCategory, onSelect }) {
  return (
    <aside
      className="flex flex-row md:flex-col gap-1 p-3 md:p-4 md:w-52 shrink-0
                 bg-slate-900 md:min-h-0 border-b md:border-b-0 md:border-r border-slate-800"
      aria-label="Catégories"
    >
      {/* Logo */}
      <div className="hidden md:flex items-center gap-2 px-2 py-3 mb-4">
        <span className="text-indigo-400 text-2xl font-bold tracking-tight select-none">
          ⚡ Flash
        </span>
      </div>

      <nav className="flex flex-row md:flex-col gap-1 w-full">
        {categories.map((cat) => {
          const isActive = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              aria-pressed={isActive}
              aria-label={`Catégorie ${cat.label}`}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium
                          transition-colors duration-150 w-full text-left
                          ${
                            isActive
                              ? 'bg-indigo-600 text-white'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                          }`}
            >
              <span aria-hidden="true" className="text-base">{cat.emoji}</span>
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
