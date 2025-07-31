'use client';
import React, { useState } from 'react';
import styles from './Table.module.css';
import { RenderCell } from '../RenderCell/RenderCell';

const Table = ({ columns, users }) => {
  const rowsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  const totalPages = Math.ceil(users.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + rowsPerPage);

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    const idsOnPage = currentUsers.map((u) => u.id);
    if (e.target.checked) {
      setSelectedRows((prev) => [...new Set([...prev, ...idsOnPage])]);
    } else {
      setSelectedRows((prev) => prev.filter((id) => !idsOnPage.includes(id)));
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.hoverRow}>
            <th className={`${styles.th} ${styles.center}`}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={handleSelectAll}
                checked={currentUsers.every((u) => selectedRows.includes(u.id))}
              />
            </th>
            {columns.map((col) => (
              <th key={col.id} className={styles.th}>
                {col.id !== 'action' && col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className={styles.hoverRow}>
              <td className={`${styles.td} ${styles.center}`}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={selectedRows.includes(user.id)}
                  onChange={() => handleSelectRow(user.id)}
                />
              </td>
              {columns.map((col) => (
                <td key={col.id} className={styles.td}>
                  <RenderCell user={user} columnKey={col.id} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`${styles.paginationButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Table;
