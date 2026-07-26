import React from 'react';
import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes, FaList, FaUsers } from 'react-icons/fa';
import './DataTable.css';

const DataTable = ({ columns, data, onEdit, onDelete, onAdd, onUpdateRow, onBulkDelete }) => {
  const hasActionColumn = !(columns.hideDefaultActions && !columns.actions);
  const [selectedIds, setSelectedIds] = React.useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(data.map(row => row.id || row._id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkDeleteClick = async () => {
    if (onBulkDelete && selectedIds.length > 0) {
      await onBulkDelete(selectedIds);
      setSelectedIds([]);
    }
  };
  
  return (
    <div className="data-table-container">
      <div className="data-table-header">
        <div className="table-title">
          {columns.icon === 'users' ? <FaUsers className="title-icon" /> : <FaList className="title-icon" />} {columns.title || 'Data List'}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {selectedIds.length > 0 && onBulkDelete && (
            <button className="add-btn" style={{ backgroundColor: '#ef4444' }} onClick={handleBulkDeleteClick}>
              <FaTrash /> Delete Selected ({selectedIds.length})
            </button>
          )}
          {columns.addButtonText && onAdd && (
            <button className="add-btn" onClick={onAdd}>
              <FaPlus /> {columns.addButtonText}
            </button>
          )}
        </div>
      </div>

      <div className="table-responsive">
        <table className="data-table">
          <thead>
            <tr style={columns.headerStyle || {}}>
              {onBulkDelete && (
                <th style={{ width: '40px', textAlign: 'center' }}>
                  <input type="checkbox" onChange={handleSelectAll} checked={data.length > 0 && selectedIds.length === data.length} />
                </th>
              )}
              {columns.headers.filter(col => !col.hideInTable).map((col, index) => (
                <th key={index} style={col.minWidth ? { minWidth: col.minWidth } : {}}>{col.label}</th>
              ))}
              {hasActionColumn && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => {
              const rowId = row.id || row._id;
              return (
              <React.Fragment key={rowIndex}>
              <tr key={`row-${rowIndex}`}>
                {onBulkDelete && (
                  <td style={{ textAlign: 'center' }}>
                    <input type="checkbox" checked={selectedIds.includes(rowId)} onChange={() => handleSelectRow(rowId)} />
                  </td>
                )}
                {columns.headers.filter(col => !col.hideInTable).map((col, colIndex) => {
                  let cellValue = row[col.key];
                  
                  // Automatically fallback to Mongoose's createdAt if property is missing
                  if ((col.key === 'created' || col.key === 'date' || col.key === 'createdAt') && !cellValue && row.createdAt) {
                    cellValue = new Date(row.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
                  }
                  // Format image URLs
                  const formatImageUrl = (url) => {
                    if (!url) return 'https://via.placeholder.com/50';
                    if (url.startsWith('http') || url.startsWith('data:')) return url;
                    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
                    return url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
                  };

                  let displayValue = cellValue;
                  if (col.render) {
                    displayValue = col.render(cellValue, row);
                  } else if (col.key.toLowerCase().includes('image') || col.key.toLowerCase().includes('logo')) {
                    displayValue = <img src={formatImageUrl(cellValue)} alt="img" style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px'}} />;
                  } else if (col.key === 'status') {
                    const statusClass = `status-${String(cellValue).toLowerCase()}`;
                    displayValue = <span className={`status-badge ${statusClass}`}>{cellValue}</span>;
                  } else if (col.type === 'rich-text' && typeof cellValue === 'string') {
                    // Strip HTML tags for table display
                    displayValue = cellValue.replace(/<[^>]*>?/gm, '');
                  }

                  return (
                    <td key={colIndex}>
                      {displayValue}
                    </td>
                  );
                })}
                {hasActionColumn && (
                  <td className="action-cell">
                    {columns.actions ? columns.actions(row, { onEdit, onDelete, onUpdateRow }) : (
                      <>
                        {onEdit && (
                          <button className="action-btn edit-btn" style={columns.actionStyle === 'orange' ? {backgroundColor: '#f59e0b'} : {}} onClick={() => onEdit(row)}>
                            <FaEdit />
                          </button>
                        )}
                        {onDelete && (
                          <button className="action-btn delete-btn" style={columns.actionStyle === 'orange' ? {backgroundColor: '#f59e0b'} : {}} onClick={() => onDelete(row)}>
                            <FaTrash />
                          </button>
                        )}
                      </>
                    )}
                  </td>
                )}
              </tr>
              {columns.expandedRowRender && (
                <tr key={`${rowIndex}-expanded`} className="expanded-row">
                  <td colSpan={columns.headers.length + (hasActionColumn ? 1 : 0)} style={{padding: '12px 20px', backgroundColor: '#fafafa', borderBottom: '1px solid #edf2f7'}}>
                    {columns.expandedRowRender(row)}
                  </td>
                </tr>
              )}
              </React.Fragment>
            )})}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.headers.length + (hasActionColumn ? 1 : 0)} className="no-data">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
