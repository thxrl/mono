import React  from 'react';
import styled from '@emotion/styled';

export interface HorizontalSpreadProps {
    left? : React.ReactNode;
    center? : React.ReactNode;
    right? : React.ReactNode;
    align? : 'top' | 'center' | 'bottom';
}

/**
 * Will use 100% width and place a left, center and right slot.
 */
export const HorizontalSpread = ( props : HorizontalSpreadProps ) => {
    
    let alignment = 'flex-start';
    if ( props.align ) {
        if ( props.align === 'center' ) {
            alignment = 'center';
        }
        if ( props.align === 'bottom' ) {
            alignment = 'flex-end';
        }
    }
    
    const Container = styled.div`
      display        : flex;
      flex-direction : row;
      align-items    : ${ alignment };
    `;
    
    const Stretch = styled.div`
      flex : 1 0 0;
    `;
    
    return <Container>
        { props.left && <div>{ props.left }</div> }
        <Stretch>{ props.center }</Stretch>
        { props.right && <div>{ props.right }</div> }
    </Container>
    
};
