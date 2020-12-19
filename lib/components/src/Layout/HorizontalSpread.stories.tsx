import styled   from '@emotion/styled';
import React    from 'react';
import { Meta } from '@storybook/react';

import { HorizontalSpread } from './HorizontalSpread';

export default {
    title     : 'Layout/HorizontalSpread',
    component : HorizontalSpread,
    argTypes  : {},
} as Meta;

const L = styled.div`
  background-color : darkviolet;
  color            : white;
  padding          : 1rem;
`;

const Left = () => <L>Left</L>;

const C = styled.div`
  background-color : darkcyan;
  color            : white;
  padding          : 1rem;
`;

const Center = () => <C>Center</C>;

const R = styled.div`
  background-color : #3d3d3d;
  color            : white;
  padding          : 1rem;
`;

const Right = () => <R>Right</R>;

export const AllSlots = () => <div>
    <HorizontalSpread left={ <Left/> } center={ <Center/> } right={ <Right/> }/>
</div>;

export const NoLeft = () => <div>
    <HorizontalSpread center={ <Center/> } right={ <Right/> }/>
</div>;

export const NoRight = () => <div>
    <HorizontalSpread left={ <Left/> } center={ <Center/> }/>
</div>;

export const NoCenter = () => <div>
    <HorizontalSpread left={ <Left/> } right={ <Right/> }/>
</div>;

export const OnlyCenter = () => <div>
    <HorizontalSpread center={ <Center/> }/>
</div>;
