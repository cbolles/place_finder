import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './style.css';

class Sidebar extends React.Component {
    render() {
        return(
                <SideNav
                    onSelect={(selected) => {
                    // Add your code here
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <label>Hello</label>
                            </NavText>
                        </NavItem>
                        <NavItem>
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>Charts</NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
        )
    }
}

export default Sidebar;