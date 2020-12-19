import React    from 'react';
import styled   from '@emotion/styled';
import { Meta } from '@storybook/react';

import { VerticalSpread } from './VerticalSpread';

export default {
    title     : 'Layout/VerticalSpread',
    component : VerticalSpread,
    argTypes  : {},
} as Meta;

const T = styled.div`
  background-color : darkviolet;
  color            : white;
  padding          : 1rem;
`;

const Top = () => <T>Top</T>;

const C = styled.div<{ stretch? : boolean }>`
  background-color : darkcyan;
  color            : white;
  padding          : 1rem;
  height           : ${ props => props.stretch === true ? '100%' : 'auto' };
`;

const Center = ( { stretch } : { stretch? : boolean } ) =>
    <C stretch={ stretch }>Center (height:{ stretch ? '100%' : 'auto' })</C>;

const B      = styled.div`
  background-color : #3d3d3d;
  color            : white;
  padding          : 1rem;
`;
const Bottom = () => <B>Bottom</B>;

export const AllSlotsStretched = () => <div style={ { height : '100vh' } }>
    <VerticalSpread top={ <Top/> } center={ <Center stretch={ true }/> } bottom={ <Bottom/> }/>
</div>;

export const AllSlots = () => <div style={ { height : '100vh' } }>
    <VerticalSpread top={ <Top/> } center={ <Center/> } bottom={ <Bottom/> }/>
</div>;

export const NoTop = () => <div style={ { height : '100vh' } }>
    <VerticalSpread center={ <Center stretch={ true }/> } bottom={ <Bottom/> }/>
</div>;

export const NoBottom = () => <div style={ { height : '100vh' } }>
    <VerticalSpread top={ <Top/> } center={ <Center stretch={ true }/> }/>
</div>;

export const NoCenter = () => <div style={ { height : '100vh' } }>
    <VerticalSpread top={ <Top/> } bottom={ <Bottom/> }/>
</div>;

export const OnlyCenter = () => <div style={ { height : '100vh' } }>
    <VerticalSpread center={ <Center stretch={ true }/> }/>
</div>;
