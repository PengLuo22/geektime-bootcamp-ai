import { useState } from 'react';

/**
 * ComparisonCard - 对比卡片组件（适配站点主题）
 */

interface ComparisonCardProps {
  provider: string;
  logo: string;
  color?: string;
  tagline: string;
  features: string[];
  metrics?: Record<string, string>;
  highlight?: boolean;
}

export default function ComparisonCard({
  provider,
  logo,
  color = '#0071e3',
  tagline,
  features = [],
  metrics = {},
  highlight = false,
}: ComparisonCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`comparison-card ${highlight ? 'highlight' : ''}`}
      style={{ '--card-color': color } as React.CSSProperties}
    >
      <div className="comparison-card-header">
        <div className="comparison-card-logo">{logo}</div>
        <h3 className="comparison-card-title">{provider}</h3>
        <p className="comparison-card-tagline">{tagline}</p>
      </div>

      {Object.keys(metrics).length > 0 && (
        <div className="comparison-card-metrics">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="metric-item">
              <span className="metric-label">{key}</span>
              <span className="metric-value">{value}</span>
            </div>
          ))}
        </div>
      )}

      <div className={`comparison-card-features ${isExpanded ? 'expanded' : ''}`}>
        <h4>核心特性</h4>
        <ul>
          {features
            .slice(0, isExpanded ? features.length : 4)
            .map((feature, idx) => (
              <li key={idx}>
                <span className="feature-icon">✓</span>
                <span className="feature-text">{feature}</span>
              </li>
            ))}
        </ul>
      </div>

      {features.length > 4 && (
        <button
          className="comparison-card-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '收起' : `查看全部 ${features.length} 项特性`}
        </button>
      )}
    </div>
  );
}
