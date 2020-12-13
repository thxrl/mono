import css  from '@emotion/css';
import React    from 'react';
import { Meta } from '@storybook/react';

import { HorizontalSpread } from './HorizontalSpread';

export default {
    title     : 'Layout/HorizontalSpread',
    component : HorizontalSpread,
    argTypes  : {},
} as Meta;

const Left = () => <div css={ css`
  background-color : darkviolet;
  color            : white;
  padding          : 1rem;
` }>Left</div>;

const Center = () => <div css={ css`
  background-color : darkcyan;
  color            : white;
  padding          : 1rem;
` }>Center</div>;

const Right = () => <div css={ css`
  background-color : #3d3d3d;
  color            : white;
  padding          : 1rem;
` }>Right</div>;

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
