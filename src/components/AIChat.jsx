import { useEffect, useMemo, useRef, useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

export default function AIChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your FitGuide AI. Ask me anything about workouts, programs, or nutrition.' },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: nextMessages.slice(-6).map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'I had trouble reaching the AI service. Please try again in a moment. If this persists, ensure the backend URL and API key are set. ',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleSend();
    }
  };

  const placeholder = useMemo(
    () => 'Ask: build a 3-day full-body plan, best form cues for squats, or protein target for 70kg…',
    []
  );

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">FitGuide AI</h2>
            <p className="text-sm text-slate-600">Quick answers for training, exercise form, and nutrition.</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          <div className="rounded-xl border border-slate-200 md:col-span-3">
            <div ref={scrollRef} className="h-96 overflow-y-auto p-4">
              {messages.map((m, idx) => (
                <div key={idx} className={`mb-4 flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                  {m.role !== 'user' && (
                    <div className="mt-1 rounded-full bg-emerald-600 p-1 text-white">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                      m.role === 'user'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-900'
                    }`}
                  >
                    {m.content}
                  </div>
                  {m.role === 'user' && (
                    <div className="mt-1 rounded-full bg-slate-200 p-1 text-slate-700">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Thinking…
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 p-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder={placeholder}
                  className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" /> Send
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500">Press Ctrl/Cmd + Enter to send. Responses may be approximate; always prioritize safety.</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-4 md:col-span-2">
            <p className="text-sm font-semibold text-slate-900">Try these:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Design a 4-week beginner dumbbell program (3 days/week)</li>
              <li>Form tips for Romanian deadlifts and common mistakes</li>
              <li>Build a 2,300 kcal high-protein meal plan for a vegetarian</li>
            </ul>
            <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800">
              <p>
                Pro tip: You can paste your current routine and goals for more tailored suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
