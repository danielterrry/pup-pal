import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import MediaQuery from '../MediaQuery';

const Container = styled.div`
  height: 45px;
  width: 55px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 15px;
  color: ${Colors.black};
  display: flex;

  ${MediaQuery.md} {
    display: none;
  }

  & span {
    height: 3px;
    display: block;
    border-radius: 5px;
    position: relative;
    background-color: ${Colors.black};    
  }
`;

const MenuText = styled.div`
  bottom: 0;
  position: absolute;
  text-transform: uppercase;
`;

function Burger() {
  return (
    <Container>
      <div style={{ height: '18px', width: '24px' }}>
        <span style={{ top: '0' }}></span>
        <span style={{ top: '9px' }}></span>
        <span style={{ bottom: '0' }}></span>
      </div>
      <MenuText>Menu</MenuText>
    </Container>
  );
}

export default Burger;
