import React, { useState } from 'react';

const TabComponent = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // Handler function to change the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div>
        <button onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>
          Tab 1
        </button>
        <button onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>
          Tab 2
        </button>
        <button onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3' ? 'active' : ''}>
          Tab 3
        </button>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'tab2' && <div>Content for Tab 2</div>}
        {activeTab === 'tab3' && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default TabComponent;