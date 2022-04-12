import React from "react";
import { DropdownContainer, Icon, CloseIcon } from "./DropdownStyle";

const Dropdown = () => {
  return (
    <DropdownContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to="/">
                Profile  
              </SidebarLink>
              <SidebarLink to="/">
                Activity  
              </SidebarLink>
              <SidebarLink to="/activity_list">
                History  
              </SidebarLink>
              <SidebarLink to="/">
                Settings  
              </SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </DropdownContainer>
  );
};
