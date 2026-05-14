import type { OrganModel } from '../data/organs';
import { useModel } from '../hooks/useModel';

interface Props {
  organs: OrganModel[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function Sidebar({ organs, activeId, onSelect }: Props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <header className="sidebar-header">
          <span className="dot" />
          器 官 目 录
        </header>
        <ul className="cell-list">
          {organs.map((organ) => (
            <OrganItem
              key={organ.id}
              organ={organ}
              active={organ.id === activeId}
              onSelect={() => onSelect(organ.id)}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

function OrganItem({
  organ,
  active,
  onSelect,
}: {
  organ: OrganModel;
  active: boolean;
  onSelect: () => void;
}) {
  const { status, progress } = useModel(organ.modelUrl, {
    autoStart: false,
    fileSize: organ.fileSize,
  });
  const downloaded = status === 'done';
  const downloading = status === 'downloading' || status === 'parsing';
  const percent = Math.round(progress * 100);

  return (
    <li>
      <button
        type="button"
        className={`cell-item${active ? ' active' : ''}`}
        onClick={onSelect}
        style={{ '--accent': organ.accent } as React.CSSProperties}
      >
        <div className={`cell-thumb organ-thumb organ-thumb-${organ.id}`}>
          <span className="organ-glyph" aria-hidden="true">
            {organ.name.slice(0, 1)}
          </span>
          {active && <span className="badge">当前</span>}
        </div>
        <div className="cell-meta">
          <div className="cell-name">{organ.name}</div>
          <div className="cell-sub">{organ.subtitle}</div>
          <div className="cell-status">
            {downloaded && (
              <span className="status-chip ok">
                <Check /> 已就绪
              </span>
            )}
            {downloading && (
              <span className="status-chip loading">
                <span className="mini-bar">
                  <span className="mini-fill" style={{ width: `${percent}%` }} />
                </span>
                {percent}%
              </span>
            )}
            {!downloaded && !downloading && <span className="status-chip idle">未加载</span>}
          </div>
        </div>
      </button>
    </li>
  );
}

function Check() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}
