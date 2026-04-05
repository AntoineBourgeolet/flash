import { useEffect, useRef } from 'react';

/**
 * AnecdoteCard – displays the anecdote content with a fade-in transition
 * every time the anecdote changes.
 */
export default function AnecdoteCard({ anecdote, category }) {
  const cardRef = useRef(null);

  // Re-trigger animation whenever the displayed anecdote changes
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.classList.remove('fade-enter');
    // Force reflow so removing and re-adding the class triggers the animation
    void el.offsetWidth;
    el.classList.add('fade-enter');
  }, [anecdote?.id]);

  if (!anecdote) {
    return (
      <div
        className="flex flex-1 items-center justify-center p-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-slate-500 text-lg text-center">
          Aucune anecdote disponible pour cette date et cette catégorie.
        </p>
      </div>
    );
  }

  return (
    <article
      ref={cardRef}
      key={anecdote.id}
      className="fade-enter flex flex-col justify-center flex-1 gap-6 px-6 py-10 md:px-16 md:py-14 max-w-3xl mx-auto w-full"
      aria-labelledby="anecdote-title"
      aria-describedby="anecdote-body"
    >
      {/* Category badge */}
      <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full
                       text-xs font-semibold uppercase tracking-widest
                       bg-indigo-950 text-indigo-300 border border-indigo-800">
        {category}
      </span>

      {/* Title */}
      <h1
        id="anecdote-title"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 leading-tight tracking-tight"
      >
        {anecdote.title}
      </h1>

      {/* Body */}
      <p
        id="anecdote-body"
        className="text-lg md:text-xl text-slate-300 leading-relaxed"
      >
        {anecdote.body}
      </p>

      {/* Source */}
      {anecdote.source && (
        <footer className="mt-auto pt-4 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            Source :{' '}
            <span className="text-slate-400 font-medium">{anecdote.source}</span>
          </p>
        </footer>
      )}
    </article>
  );
}
