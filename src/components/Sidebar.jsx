import { useState, useCallback } from "react"
import React from 'react';
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
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

export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(initialMenuItems)
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
  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("Added menu item")
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
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
  }, [])

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
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


  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          /* TODO: 3 */
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
