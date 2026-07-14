import React from 'react';

const Placeholder = ({ title }) => {
  return (
    <div style={{ padding: '24px', background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', minHeight: '60vh' }}>
      <h2 style={{ marginTop: 0, color: '#1a202c' }}>{title} Page</h2>
      <p style={{ color: '#718096' }}>This is a placeholder for the {title} content. It will be implemented later.</p>
    </div>
  );
};

export default Placeholder;
