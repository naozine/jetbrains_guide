import { Link } from 'gatsby';
import React from 'react';

interface IEntry {
  label: string;
  slug: string;
}

interface ITopNavProps {
  parent: IEntry;
  siblings: IEntry[];
  currentSlug: string;
}

const TopNav2: React.FC<ITopNavProps> = ({ parent, siblings, currentSlug }) => {
  // Get the previous and next, if any, based on currentSlug
  const currentSlugIndex = siblings.findIndex(s => s.slug === currentSlug);

  const previous = currentSlugIndex > 0 ? siblings[currentSlugIndex - 1] : null;
  const next = currentSlugIndex < siblings.length ? siblings[currentSlugIndex + 1] : null;

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '0.5em' }}>
        {parent && (
          <Link to={parent.slug} className="topnav-previous button is-size-7" style={{ border: 'none' }} title={parent.label}>
            <span className="icon">
              <i className="fas fa-arrow-up" />
            </span>
          </Link>
        )}
        <Link to={parent.slug} className="topnav-previous button is-size-7" style={{ border: 'none' }} title={parent.label}>
          <span>Up to {parent.label}</span>
        </Link>
      </div>
      <div className="columns">
        <div className="column has-text-left is-one-quarter-desktop is-hidden-mobile">
          {previous && (
            <Link to={previous.slug} className="topnav-previous button" style={{ border: 'none' }} title={previous.label}>
              <span className="icon">
                <i className="fas fa-arrow-left" />
              </span>
              <span style={{ paddingLeft: '1em' }}>Previous</span>
            </Link>
          )}
        </div>
        <div className="column has-text-centered is-one-half is-full-mobile">
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger" style={{ width: '20rem' }}>
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>
                  Tip {currentSlugIndex + 1} of {siblings.length}
                </span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <strong className="is-size-5">{parent.label}</strong>
                </div>
                <hr className="dropdown-divider" />
                {siblings.map(entry => (
                  <Link to={entry.slug} className="dropdown-item" key={entry.slug}>
                    {entry.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="column has-text-right is-one-quarter-desktop is-hidden-mobile">
          {next && (
            <Link to={next.slug} className="topnav-previous button" style={{ border: 'none' }} title={next.label}>
              <span style={{ paddingLeft: '1em' }}>Next</span>
              <span className="icon">
                <i className="fas fa-arrow-right" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav2;