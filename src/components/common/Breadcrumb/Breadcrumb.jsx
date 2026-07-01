import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
  const location = useLocation();

  // If no items provided, attempt to auto-generate based on path
  const breadcrumbItems = items || (() => {
    const paths = location.pathname.split('/').filter(p => p);
    
    if (paths.length === 0) return [];

    let currentUrl = '';
    const generated = paths.map((path, index) => {
      currentUrl += `/${path}`;
      const isLast = index === paths.length - 1;
      
      // Map of specific path segments to their full names
      const customLabels = {
        'custom': 'Custom Product Development',
        'wholesale': 'Bulk Wholesale Supply',
        'export': 'Export Logistics',
        'quality': 'Quality Assurance',
        'private-labeling': 'Private Labeling',
        'b2b': 'B2B Partnerships',
        'affiliate': 'Affiliate Program',
        'us': 'Us',
        'why-choose-us': 'Why Choose Us',
        'how-we-work': 'How We Work',
        'legal-info': 'Legal Info'
      };

      // Basic formatting for standard paths
      let label = path.replace(/-/g, ' ');
      label = label.charAt(0).toUpperCase() + label.slice(1);
      
      if (customLabels[path.toLowerCase()]) {
        label = customLabels[path.toLowerCase()];
      }
      
      return {
        label,
        href: currentUrl,
        isCurrent: isLast
      };
    });

    return [{ label: 'Home', href: '/' }, ...generated];
  })();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1 || item.isCurrent;
          return (
            <li key={index} className="breadcrumb-item">
              {isLast ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="breadcrumb-link">
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight size={14} className="breadcrumb-separator" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
