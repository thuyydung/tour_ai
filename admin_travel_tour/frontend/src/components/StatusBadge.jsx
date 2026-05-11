import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    blocked: 'bg-red-100 text-red-800',
    default: 'bg-gray-100 text-gray-800'
  };

  const label = {
    active: 'Đang hoạt động',
    pending: 'Chờ duyệt',
    blocked: 'Đã khóa'
  };

  return (
    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${styles[status] || styles.default}`}>
      {label[status] || status}
    </span>
  );
};

export default StatusBadge;