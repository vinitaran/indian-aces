import React, { useState } from 'react';
// import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
debugger;
  return (
    <>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {props.tabs.map((item, index) => {
          return (
            <li key={index}>
              <Link className="dropdown-link" to={item.navigationUrl} onClick={() => setClick(false)}>
                {item.tabName}
                {item.subtabs && item.subtabs.length > 0 ? <i className='fas fa-caret-down' />: "" }
              </Link>
              {item.subtabs && item.subtabs?.length > 0 ? <Dropdown tabs={item.subtabs} /> : null}
            </li>
          );
        })}
      </ul>
    </>
  );
}

{/* <li className='nav-item'>
                    <Link to={element.navigationUrl} className='nav-links' onClick={closeMobileMenu}>
                      {element.tabName} {element.subtabs.length && element.subtabs.length > 0 ? <i className='fas fa-caret-down' />: "" }
                    </Link>
                    {element.subtabs.length && element.subtabs.length > 0 ? dropdown && <Dropdown tabs={element.subtabs} /> : null}
                  </li> */}

export default Dropdown;
