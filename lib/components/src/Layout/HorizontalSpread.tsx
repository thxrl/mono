import React  from 'react';
import styled from '@emotion/styled';

export interface HorizontalSpreadProps {
    left? : React.ReactNode;
    center? : React.ReactNode;
    right? : React.ReactNode;
    fullHeight? : boolean;
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
      height         : ${ props.fullHeight === true ? '100%' : 'auto' };
    `;
    
    const Stretch = styled.div`
      flex   : 1 0 0;
      height : ${ props.fullHeight === true ? '100%' : 'auto' };
    `;
    
    const D = styled.div`
      height : ${ props.fullHeight === true ? '100%' : 'auto' };
    `;
    
    return <Container>
        { props.left && <D>{ props.left }</D> }
        <Stretch>{ props.center }</Stretch>
        { props.right && <D>{ props.right }</D> }
    </Container>
    
};
