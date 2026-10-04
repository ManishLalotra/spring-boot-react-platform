import React from 'react';
import { Layers, Activity, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <header className="border-b border-slate-800 bg-slate-900/60 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center font-bold text-white">S</span>
            <span className="font-bold text-lg text-white">Spring Boot & React Platform</span>
          </div>
          <div className="text-right text-xs text-slate-400">
            <p className="font-semibold text-slate-200">Manish Lalotra</p>
            <p>Full Stack & DevOps Engineer</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="bg-slate-900/70 border border-slate-800 p-8 rounded-2xl space-y-4">
          <h1 className="text-3xl font-extrabold text-white">Spring Boot 3.3 + React 18 Architecture</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Enterprise backend built with Java 21, Spring Boot 3.3, Actuator metrics, and clean REST controllers connected to a reactive TypeScript UI.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="/actuator/health" target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs px-4 py-2 rounded-lg transition">
              Actuator Health Status
            </a>
            <a href="/api/v1/diagnostics" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs px-4 py-2 rounded-lg transition">
              Diagnostics API
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        Spring Boot Platform &copy; 2026 Manish Lalotra.
      </footer>
    </div>
  );
}
