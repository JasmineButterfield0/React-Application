import React from 'react';
import React, { useState } from 'react';

// 1.Render Menu Items:
const Sidebar = ({ initialMenuItems }) => {
    return (
      <div className="sidebar">
        <ul>
          {initialMenuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Sidebar;

  //2. Maintain Menu State



  const Sidebar = ({ initialMenuItems }) => {
    const [menuItems, setMenuItems] = useState(initialMenuItems);

    return (
      <div className="sidebar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Sidebar;

  //3.Implement AddMenuItem Callback:


const Sidebar = ({ initialMenuItems }) => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newMenuItem, setNewMenuItem] = useState('');


  const addMenuItem = () => {
    if (newMenuItem.trim() !== '') {
      setMenuItems([...menuItems, newMenuItem]);
      setNewMenuItem('');
    }
  };

  return (
    <div className="sidebar">
      <input
        type="text"
        value={newMenuItem}
        onChange={(e) => setNewMenuItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addMenuItem}>Add Item</button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;


   //4.Filter Menu Items:


const Sidebar = ({ initialMenuItems }) => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newMenuItem, setNewMenuItem] = useState('');
  const [filterText, setFilterText] = useState('');


  const addMenuItem = () => {
    if (newMenuItem.trim() !== '') {
      setMenuItems([...menuItems, newMenuItem]);
      setNewMenuItem('');
    }
  };


  const filteredMenuItems = menuItems.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="sidebar">
      <input
        type="text"
        value={newMenuItem}
        onChange={(e) => setNewMenuItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addMenuItem}>Add Item</button>


      {}
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filter menu items"
      />

      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

