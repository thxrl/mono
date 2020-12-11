import React  from 'react';
import styled from '@emotion/styled';

export interface AspectRatioProps {
    /**
     * Aspect ratio as number (component will do the rounding)
     */
    ratio : number;
    children? : React.ReactNode;
}

/**
 * A block element keeping its aspect ratio based on its available width. (responsive)
 */
export const AspectRatio = ( pros : AspectRatioProps ) => {
    
    const ratio    = ( 100 / pros.ratio ).toFixed( 2 );
    const children = pros.children;
    
    const Container = styled.div`
      justify-content : flex-start;
      display         : flex;

      &:before {
        padding-bottom : ${ ratio }%;
        content        : '';
        float          : left;
      }

      &:after {
        display : table;
        content : '';
        clear   : both;
      }
    `;
    
    const Content = styled.div`
      min-width : 100%;
    `;
    
    return <Container>
        { children && <Content>{ children }</Content> }
    </Container>;
};
