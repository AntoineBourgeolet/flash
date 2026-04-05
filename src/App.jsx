import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import AnecdoteCard from './components/AnecdoteCard';
import { useFlashState } from './hooks/useFlashState';

export default function App() {
  const {
    category,
    setCategory,
    selectedDate,
    setSelectedDate,
    anecdote,
    dates,
    categories,
  } = useFlashState();

  return (
    <div className="flex flex-col md:flex-row min-h-dvh bg-slate-950 text-slate-100">
      {/* Mobile header */}
      <header className="flex md:hidden items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
        <span className="text-indigo-400 text-xl font-bold tracking-tight select-none">
          ⚡ Flash
        </span>
        <span className="ml-auto text-xs text-slate-500">Une anecdote par jour</span>
      </header>

      {/* Left sidebar – category navigation */}
      <Sidebar
        categories={categories}
        activeCategory={category}
        onSelect={setCategory}
      />

      {/* Main content */}
      <main className="flex flex-1 items-stretch min-w-0">
        <AnecdoteCard anecdote={anecdote} category={category} />
      </main>

      {/* Right panel – timeline */}
      <Timeline
        dates={dates}
        selectedDate={selectedDate}
        onSelect={setSelectedDate}
      />
    </div>
  );
}
