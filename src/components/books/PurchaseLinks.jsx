export default function PurchaseLinks({ links = {} }) {
  const hasLinks = links.amazon || links.barnesAndNoble || links.bookshop;

  return (
    <section className="purchase-section">
      <h2>Get the Book</h2>

      {hasLinks ? (
        <div className="button-row">
          {links.amazon && (
            <a className="button-link" href={links.amazon}>
              Amazon
            </a>
          )}

          {links.barnesAndNoble && (
            <a className="button-link" href={links.barnesAndNoble}>
              Barnes & Noble
            </a>
          )}

          {links.bookshop && (
            <a className="button-link" href={links.bookshop}>
              Bookshop
            </a>
          )}
        </div>
      ) : (
        <p>Purchase links coming soon.</p>
      )}
    </section>
  );
}
