import { useMemo, useState } from 'react';
import { DEFAULT_ORGAN_ID, ORGANS } from './data/organs';
import { Sidebar } from './components/Sidebar';
import { ModelViewer } from './components/ModelViewer';
import { InfoPanel } from './components/InfoPanel';
import './app.css';

function App() {
  const [activeId, setActiveId] = useState<string>(DEFAULT_ORGAN_ID);
  const activeOrgan = useMemo(
    () => ORGANS.find((organ) => organ.id === activeId) ?? ORGANS[0],
    [activeId]
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="36" height="36">
              <defs>
                <linearGradient id="organMark" x1="10%" y1="0%" x2="90%" y2="100%">
                  <stop offset="0%" stopColor="#ef8b92" />
                  <stop offset="52%" stopColor="#6daec3" />
                  <stop offset="100%" stopColor="#7b6fc7" />
                </linearGradient>
              </defs>
              <path
                d="M24 42c8-5.4 14-12.4 14-21.2C38 13 33.6 8 27.6 8c-2.4 0-4.4 1-5.6 2.8C20.8 9 18.8 8 16.4 8 10.4 8 6 13 6 20.8 6 29.6 16 36.6 24 42Z"
                fill="url(#organMark)"
              />
              <path
                d="M17 21h5l2-5 3.6 13 2.3-8H35"
                fill="none"
                stroke="#fffaf2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
            </svg>
          </div>
          <div>
            <h1 className="brand-title">人体器官工坊</h1>
            <p className="brand-tagline">
              <span className="brand-pen">把身体里的工作现场转成 3D 课堂</span>
              <span className="brand-sep">·</span>
              <span>Human Organ Studio</span>
            </p>
          </div>
        </div>
        <div className="topbar-meta">
          <span className="meta-pill">MVP v0.2</span>
          <span className="meta-text">真实 GLB 模型 · 四器官版本</span>
        </div>
      </header>

      <main className="layout">
        <Sidebar organs={ORGANS} activeId={activeId} onSelect={setActiveId} />

        <section
          className="stage"
          style={{ '--accent': activeOrgan.accent } as React.CSSProperties}
        >
          <ModelViewer key={activeOrgan.id} organ={activeOrgan} />
        </section>

        <InfoPanel organ={activeOrgan} />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} 人体器官工坊 · 面向课堂教学与健康科普的概念模型</span>
      </footer>
    </div>
  );
}

export default App;
