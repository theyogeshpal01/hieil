import React from 'react';

const UnifiedStatusBadge = ({ value, onChange, options = [], readonly = false }) => {
  const val = value || 'Pending';
  
  let bg = '#f3f4f6';
  let color = '#374151';
  
  const statusStr = String(val).toLowerCase();
  if (['full paid', 'paid', 'completed', 'active', 'accepted', 'released', 'goods received', 'reached port', 'delivered', 'success', 'production completed'].includes(statusStr)) {
    bg = '#dcfce7'; color = '#166534';
  } else if (['partial paid', 'processing', 'in transit', 'production started'].includes(statusStr)) {
    bg = '#fef3c7'; color = '#92400e';
  } else if (['pending', 'hold'].includes(statusStr)) {
    bg = '#fef08a'; color = '#854d0e';
  } else if (['cancelled', 'failed', 'inactive', 'rejected'].includes(statusStr)) {
    bg = '#fee2e2'; color = '#991b1b';
  } else if (['refunded', 'returned'].includes(statusStr)) {
    bg = '#ffedd5'; color = '#c2410c';
  }

  if (readonly || !onChange || options.length === 0) {
    return (
      <span style={{
        backgroundColor: bg,
        color: color,
        border: `1px solid ${color}`,
        padding: '6px 12px',
        borderRadius: '16px',
        fontSize: '12px',
        fontWeight: '600',
        display: 'inline-block',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
      }}>
        {val}
      </span>
    );
  }

  const arrowSvg = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${color.replace('#', '%23')}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E`;

  return (
    <select 
      value={val}
      onChange={(e) => onChange(e.target.value)}
      style={{
        backgroundColor: bg,
        color: color,
        padding: '6px 28px 6px 12px',
        borderRadius: '16px',
        fontSize: '12px',
        fontWeight: '600',
        border: `1px solid ${color}`,
        outline: 'none',
        cursor: 'pointer',
        appearance: 'none',
        WebkitAppearance: 'none',
        backgroundImage: `url("${arrowSvg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 8px center',
        backgroundSize: '14px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        minWidth: '110px'
      }}
    >
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default UnifiedStatusBadge;
