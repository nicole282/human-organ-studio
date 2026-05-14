import type { OrganModel } from '../data/organs';

interface Props {
  organ: OrganModel;
}

export function InfoPanel({ organ }: Props) {
  return (
    <aside className="info-panel" style={{ '--accent': organ.accent } as React.CSSProperties}>
      <section className="info-card hero-card">
        <header>
          <span className="card-eyebrow">本节焦点</span>
          <h2>{organ.name}</h2>
          <p className="info-tagline">{organ.subtitle}</p>
        </header>
        <dl className="info-grid">
          <div>
            <dt>系统</dt>
            <dd>{organ.system}</dd>
          </div>
          <div>
            <dt>尺寸</dt>
            <dd>{organ.size}</dd>
          </div>
          <div>
            <dt>位置</dt>
            <dd>{organ.location}</dd>
          </div>
          <div>
            <dt>模型类型</dt>
            <dd>
              <span className="pill on">真实 GLB</span>
            </dd>
          </div>
        </dl>
      </section>

      <section className="info-card">
        <span className="card-eyebrow">功能概览</span>
        <p className="info-description">{organ.description}</p>
      </section>

      <section className="info-card">
        <span className="card-eyebrow">关键结构</span>
        <ul className="feature-list">
          {organ.structures.map((structure) => (
            <li key={structure.name}>
              <span className="feature-dot" />
              <div>
                <div className="feature-name">{structure.name}</div>
                <div className="feature-detail">{structure.detail}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="info-card">
        <span className="card-eyebrow">功能流程</span>
        <ol className="flow-list">
          {organ.functionFlow.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="info-card">
        <span className="card-eyebrow">常见相关问题</span>
        <div className="condition-list">
          {organ.commonConditions.map((condition) => (
            <span key={condition}>{condition}</span>
          ))}
        </div>
      </section>

      <section className="info-card fun-card">
        <span className="card-eyebrow">趣味知识</span>
        <p className="fun-text">{organ.funFact}</p>
      </section>
    </aside>
  );
}
