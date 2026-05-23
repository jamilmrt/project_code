import React from 'react';

function FileNavigation({ directoryStructure }) {
  const renderItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className={`file-item ${item.type}`}>
        {item.name}
        {item.type === 'folder' && <div className="folder-icon">📁</div>}
        {item.type === 'file' && <div className="file-icon">📄</div>}
        {item.type === 'folder' && item.children && renderItems(item.children)}
      </div>
    ));
  };

  return (
    <div className="file-navigation">
      {renderItems(directoryStructure)}
    </div>
  );
}

export default FileNavigation;
