// src/Menu.js
import React from "react";
import { useMenus, Link } from "docz";

import UnionMenu from "@/Menu/Menu";
import MenuItem from "@/Menu/MenuItem";
import MenuSection from "@/Menu/MenuSection";

export const DocsMenu = () => {
  const menus = useMenus();
  return (
    <UnionMenu>
      {menus.map(menu => (
        <MenuSection key={menu.id} title={menu.name}>
          {menu.menu && (
            <UnionMenu>
              {menu.menu.map(sub => (
                <MenuItem key={sub.id}>
                  <Link to={sub.route}>{sub.name}</Link>
                </MenuItem>
              ))}
            </UnionMenu>
          )}
        </MenuSection>
      ))}
    </UnionMenu>
  );
};
