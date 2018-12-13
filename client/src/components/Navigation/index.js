import React from "react";
import styled from "styled-components";
import { SideNav, Nav } from 'react-sidenav';
import { Text, Title } from '../containers';

const theme = {
  hoverBgColor: "#f5f5f5",
  selectionBgColor: "#f5f5f5",
  selectionIconColor: "#03A9F4"
};

class Navigation extends React.Component {

    state = { selectedPath: '' }

    onItemSelection = (arg) => {
        this.setState({ selectedPath: arg.path })
    }

    render() {

        return (
            <SideNav theme={theme} defaultSelectedPath={"home"}>
                <Title> React SideNav </Title>
                <Nav id="home">
                    <Text>Home</Text>
                </Nav>
                <Nav id="basic">
                    <Text>Basic Example</Text>
                </Nav>
                <Nav id="renderitems">
                    <Text>Render Ex. 1</Text>
                </Nav>
                <Nav id="renderitems2">
                    <Text>Render Ex. 2</Text>
                </Nav>
            </SideNav>
        )
    }

}

export default Navigation;