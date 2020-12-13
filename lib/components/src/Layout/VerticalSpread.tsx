import React  from 'react';
import styled from '@emotion/styled';

export interface VerticalSpreadProps {
    top? : React.ReactNode;
    center? : React.ReactNode;
    bottom? : React.ReactNode;
}

const Container = styled.div`
  min-height     : 100%;
  display        : flex;
  flex-direction : column;
  overflow       : hidden;

`;

const Stretch = styled.div`
  flex : 1 0 0;
`;

/**
 * Will use 100% height and place a top, center and bottom slot.
 */
export const VerticalSpread = ( props : VerticalSpreadProps ) => {
    return <Container>
        { props.top && <div>{ props.top }</div> }
        <Stretch>{ props.center }</Stretch>
        { props.bottom && <div>{ props.bottom }</div> }
    </Container>
    
};
