// RecentQuotes.tsx (provided - Day 3, REPLACES src/components/RecentQuotes.tsx)
// The list now reads from context: no props, no fetch of its own. The
// loading / error / success states still show; they just come from the
// provider, which owns the data. Saved quotes appear at the top instantly.
// You drop it in; you don't modify it.

import { formatCurrency } from "../premium";
import { useQuotes } from "../context/QuotesContext";

interface RecentQuotesProps {
  heading?: string;
}

// Helper function to calculate the most common policy type
function getMostCommonType(quotes: any[]): string {
  if (quotes.length === 0) return "N/A";
  const typeCounts: { [key: string]: number } = {};
  quotes.forEach((quote) => {
    typeCounts[quote.type] = (typeCounts[quote.type] || 0) + 1;
  });
  return Object.keys(typeCounts).reduce((a, b) =>
    typeCounts[a] > typeCounts[b] ? a : b
  );
}

// Helper function to find the highest coverage amount
function getHighestCoverage(quotes: any[]): number {
  if (quotes.length === 0) return 0;
  return Math.max(...quotes.map((q) => q.coverageAmount));
}

// Helper function to calculate average monthly premium
function getAveragePremium(quotes: any[]): number {
  if (quotes.length === 0) return 0;
  const sum = quotes.reduce((acc, q) => acc + q.monthlyPremium, 0);
  return sum / quotes.length;
}

function RecentQuotes({ heading = "Recent quotes" }: RecentQuotesProps) {
  const { quotes, loading, error } = useQuotes();

  // Calculate dashboard metrics
  const totalQuotes = quotes.length;
  const averagePremium = getAveragePremium(quotes);
  const highestCoverage = getHighestCoverage(quotes);
  const mostCommonType = getMostCommonType(quotes);

  return (
    <aside className="recent-quotes">
      {/* Executive Summary Dashboard */}
      {!loading && !error && quotes.length > 0 && (
        <div className="dashboard-summary">
          <h3>Executive Portfolio Dashboard</h3>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <div className="card-label">Total Quotes</div>
              <div className="card-value">{totalQuotes}</div>
            </div>
            <div className="dashboard-card">
              <div className="card-label">Avg Monthly Premium</div>
              <div className="card-value">{formatCurrency(averagePremium)}</div>
            </div>
            <div className="dashboard-card">
              <div className="card-label">Highest Coverage</div>
              <div className="card-value">{formatCurrency(highestCoverage)}</div>
            </div>
            <div className="dashboard-card">
              <div className="card-label">Most Common Type</div>
              <div className="card-value card-value-text">
                {mostCommonType.charAt(0).toUpperCase() + mostCommonType.slice(1)}
              </div>
            </div>
          </div>
        </div>
      )}

      <h2>{heading}</h2>
      {loading && <p className="loading">Loading recent quotes…</p>}
      {error && <p className="message">{error}</p>}
      {!loading && !error && (
        <ul className="recent-list">
          {quotes.map((quote) => (
            <li key={quote.id}>
              <span className="quote-type">{quote.type}</span> -{" "}
              <span className="quote-premium">
                {formatCurrency(quote.monthlyPremium)}/mo
              </span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default RecentQuotes;
