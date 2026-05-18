import { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { WorksDialog } from '../ui/WorksDialog';

const PAGE_SIZE = 6;

export function Works() {
  const worksEntries = Object.entries(portfolioData.works);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const hasMore = visibleCount < worksEntries.length;

  const handleMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, worksEntries.length));
  };

  return (
    <div className="works">
      <h2 className="tab__hdg">WORKS</h2>
      <p className="tab__lead">代表的な制作実績</p>

      <ul className="works__list">
        {worksEntries.slice(0, visibleCount).map(([title, entry], i) => (
          <WorksDialog key={title} title={title} entry={entry} index={i} />
        ))}
      </ul>

      {hasMore && (
        <div className="works__moreWrap">
          <button type="button" className="portfolio-btn" onClick={handleMore}>
            <span>もっと見る</span>
          </button>
        </div>
      )}
    </div>
  );
}
