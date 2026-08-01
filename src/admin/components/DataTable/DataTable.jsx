import React from 'react';
import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes, FaList, FaUsers } from 'react-icons/fa';
import './DataTable.css';

const DataTable = ({ columns, data, onEdit, onDelete, onAdd, onUpdateRow, onBulkDelete }) => {
  const hasActionColumn = !(columns.hideDefaultActions && !columns.actions);
  const [selectedIds, setSelectedIds] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredData = React.useMemo(() => {
    if (!searchTerm) return data;
    const lowerSearch = searchTerm.toLowerCase();
    return data.filter(row => {
      return columns.headers.some(header => {
        const val = row[header.key];
        if (val && typeof val === 'string' && val.toLowerCase().includes(lowerSearch)) return true;
        if (val && typeof val === 'number' && val.toString().toLowerCase().includes(lowerSearch)) return true;
        return false;
      });
    });
  }, [data, searchTerm, columns.headers]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredData.map(row => row.id || row._id));
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
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13px', minWidth: '200px', outline: 'none' }}
          />
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
                  <input type="checkbox" onChange={handleSelectAll} checked={filteredData.length > 0 && selectedIds.length === filteredData.length} />
                </th>
              )}
              {columns.headers.filter(col => !col.hideInTable).map((col, index) => (
                <th key={index} style={col.minWidth ? { minWidth: col.minWidth, width: col.minWidth, maxWidth: col.minWidth } : {}}>
                  <div style={col.minWidth ? { minWidth: col.minWidth, width: col.minWidth, display: 'inline-block' } : {}}>
                    {col.label}
                  </div>
                </th>
              ))}
              {hasActionColumn && <th style={{ width: '100px', textAlign: 'center' }}>Action</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, rowIndex) => {
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
                        
                        if ((col.key === 'created' || col.key === 'date' || col.key === 'createdAt') && !cellValue && row.createdAt) {
                          cellValue = new Date(row.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
                        }
                        const formatImageUrl = (url) => {
                          if (!url) return 'https://via.placeholder.com/50';
                          if (url.startsWith('http') || url.startsWith('data:')) return url;
                          const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
                          return url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
                        };

                        let displayValue = cellValue;
                        if (col.render) {
                          displayValue = col.render(cellValue, row, { onUpdateRow, onEdit, onDelete });
                        } else if (col.key.toLowerCase().includes('image') || col.key.toLowerCase().includes('logo')) {
                          displayValue = <img src={formatImageUrl(cellValue)} alt="img" style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px'}} />;
                        } else if (col.key === 'status') {
                          const statusClass = `status-${String(cellValue).toLowerCase()}`;
                          displayValue = <span className={`status-badge ${statusClass}`}>{cellValue}</span>;
                        } else if (typeof cellValue === 'string' && (col.type === 'rich-text' || col.type === 'textarea' || col.key === 'description')) {
                          displayValue = cellValue.replace(/<[^>]*>?/gm, '');
                        }

                        return (
                          <td key={colIndex} style={col.minWidth ? { minWidth: col.minWidth, width: col.minWidth, maxWidth: col.minWidth } : {}}>
                            <div style={col.minWidth ? { minWidth: col.minWidth, width: col.minWidth, display: 'inline-block' } : {}}>
                              {displayValue}
                            </div>
                          </td>
                        );
                      })}
                      {hasActionColumn && (
                        <td className="action-cell">
                          {columns.actions ? columns.actions(row, { onEdit, onDelete, onUpdateRow }) : (
                            <>
                              {onEdit && (
                                <button className="modern-action-btn icon-action-btn btn-primary" style={columns.actionStyle === 'orange' ? {backgroundColor: '#f59e0b'} : {}} onClick={() => onEdit(row)}>
                                  <FaEdit />
                                </button>
                              )}
                              {onDelete && (
                                <button className="modern-action-btn icon-action-btn btn-danger" style={columns.actionStyle === 'orange' ? {backgroundColor: '#f59e0b'} : {}} onClick={() => onDelete(row)}>
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
                        <td colSpan={columns.headers.length + (hasActionColumn ? 1 : 0) + (onBulkDelete ? 1 : 0)} style={{padding: '12px 20px', backgroundColor: '#fafafa', borderBottom: '1px solid #edf2f7'}}>
                          {columns.expandedRowRender(row)}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.headers.length + (hasActionColumn ? 1 : 0) + (onBulkDelete ? 1 : 0)} className="no-data" style={{textAlign: 'center', padding: '30px', color: '#64748b'}}>
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
