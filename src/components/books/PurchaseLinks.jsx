export default function PurchaseLinks({ links = {} }) {
  const hasLinks = links.amazon || links.barnesAndNoble || links.bookshop;

  return (
    <section className="purchase-section purchase-dossier">
      <div className="purchase-dossier__header">
        <p className="eyebrow">Case Access</p>
        <h2>Obtain the Case File</h2>
        <p>
          Choose where you would like to purchase your copy of{" "}
          <em>A Killer Time</em>.
        </p>
      </div>

      {hasLinks ? (
        <div className="purchase-options">
          {links.amazon && (
            <a
              className="purchase-card"
              href={links.amazon}
              target="_blank"
              rel="noreferrer"
            >
              <span className="purchase-card__label">Retailer</span>
              <strong>Amazon</strong>
              <span>Open listing →</span>
            </a>
          )}

          {links.barnesAndNoble && (
            <a
              className="purchase-card"
              href={links.barnesAndNoble}
              target="_blank"
              rel="noreferrer"
            >
              <span className="purchase-card__label">Retailer</span>
              <strong>Barnes &amp; Noble</strong>
              <span>Open listing →</span>
            </a>
          )}

          {links.bookshop && (
            <a
              className="purchase-card"
              href={links.bookshop}
              target="_blank"
              rel="noreferrer"
            >
              <span className="purchase-card__label">Retailer</span>
              <strong>Bookshop</strong>
              <span>Open listing →</span>
            </a>
          )}
        </div>
      ) : (
        <p className="purchase-empty">Purchase links coming soon.</p>
      )}
    </section>
  );
}