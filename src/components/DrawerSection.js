import React, { useState } from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText, Collapse
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandLess, ExpandMore, ViewList } from '@mui/icons-material';

const DrawerSection = ({ sectionName, items, searchTerm, level = 0 }) => {
  const [openItems, setOpenItems] = useState({});

  const handleClick = (itemText) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [itemText]: !prevOpenItems[itemText], // Toggle state for the clicked item
    }));
  };

  /*
  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(searchTerm)
  );

  if (filteredItems.length === 0) {
    return null; // Return null if no items match the search term
  }
*/



  // Recursive function to filter items based on search term
  const filterItems = (items) => {
    return items.reduce((acc, item) => {
      // Filter item based on search term
      const matchesSearchTerm = item.text.toLowerCase().includes(searchTerm.toLowerCase());

      // Recursively filter children items
      const filteredChildren = item.children ? filterItems(item.children) : [];

      // Include item if it matches search term or if it has filtered children
      if (matchesSearchTerm || filteredChildren.length > 0) {
        acc.push({
          ...item,
          ...(filteredChildren.length > 0 ? { children: filteredChildren } : {}) // Add children only if there are filtered children
        });
      }
      //console.log("search");
      //console.log(acc);
      return acc;
    }, []);
  };


  // Filter items based on search term
  const filteredItems = filterItems(items);

  if (filteredItems.length === 0) {
    return null; // Return null if no items match the search term
  }



  // Recursive function to render child items
  const renderNestedItems = (nestedItems, level) => {
    return nestedItems.map((item, index) => (
      <React.Fragment key={index}>
        <ListItem
          button
          component={item.link ? Link : 'div'}
          to={item.link || '#'}
          dense
          sx={{ pl: 4 + level * 2 }} // Indent based on nesting level
          //onClick={() => item.children ? handleClick(item.text) : null}
          onClick={() => {
            if (item.link) {
              //window.location.href = item.link;
            } else if (item.children) {
              handleClick(item.text);
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: '28px' }}>
            <ViewList sx={{ fontSize: '18px' }} />
          </ListItemIcon>
          <ListItemText primary={item.text} primaryTypographyProps={{ style: { fontSize: '12px' } }} />
          {item.children ? (openItems[item.text] ? <ExpandLess /> : <ExpandMore />) : null}
        </ListItem>
        {item.children && (
          <Collapse in={openItems[item.text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderNestedItems(item.children, level + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };

  return (
    <>
      <ListItem button onClick={() => handleClick(sectionName)}>
        <ListItemIcon sx={{ minWidth: '28px' }}>
          <ViewList sx={{ fontSize: '22px' }} />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ style: { fontSize: '13px' } }} primary={sectionName} />
        {openItems[sectionName] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openItems[sectionName]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {renderNestedItems(filteredItems, level)}
        </List>
      </Collapse>
    </>
  );
};

export default DrawerSection;
