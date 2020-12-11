/** @jsxImportSource @emotion/react */
import React  from 'react';
import styled from '@emotion/styled';

export interface HorizontalSpreadProps {
    left? : React.ReactNode;
    center? : React.ReactNode;
    right? : React.ReactNode;
}

const Container = styled.div`
  min-height     : 100%;
  display        : flex;
  flex-direction : row;
  overflow       : hidden;

`;

const Stretch = styled.div`
  flex : 1 0 0;
`;

/**
 * Will use 100% width and place a left, center and right slot.
 */
export const HorizontalSpread = ( props : HorizontalSpreadProps ) => {
    return <Container>
        { props.left && <div>{ props.left }</div> }
        <Stretch>{ props.center }</Stretch>
        { props.right && <div>{ props.right }</div> }
    </Container>
    
};
