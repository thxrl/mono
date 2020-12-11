/** @jsxImportSource @emotion/react */
import { css }  from '@emotion/react';
import React    from 'react';
import { Meta } from '@storybook/react';

import { FullHeightLayout } from './FullHeightLayout';

export default {
    title     : 'Layout/FullHeightLayout',
    component : FullHeightLayout,
    argTypes  : {},
} as Meta;

const Top = () => <div css={ css`
  background-color : darkviolet;
  color            : white;
  padding          : 1rem;
` }>Top</div>;

const Center = ( { stretch } : { stretch? : boolean } ) => <div css={ css`
  background-color : darkcyan;
  color            : white;
  padding          : 1rem;
  height           : ${ stretch ? '100%' : 'auto' };
` }>Center (height:{ stretch ? '100%' : 'auto' })</div>;

const Bottom = () => <div css={ css`
  background-color : #3d3d3d;
  color            : white;
  padding          : 1rem;
` }>Bottom</div>;

export const AllSlotsStretched = () => <div style={ { height : '100vh' } }>
    <FullHeightLayout top={ <Top/> } center={ <Center stretch/> } bottom={ <Bottom/> }/>
</div>;

export const AllSlots = () => <div style={ { height : '100vh' } }>
    <FullHeightLayout top={ <Top/> } center={ <Center/> } bottom={ <Bottom/> }/>
</div>;

export const NoTop = () => <div style={ { height : '100vh' } }>
    <FullHeightLayout center={ <Center stretch/> } bottom={ <Bottom/> }/>
</div>;

export const NoBottom = () => <div style={ { height : '100vh' } }>
    <FullHeightLayout top={ <Top/> } center={ <Center stretch/> }/>
</div>;

export const OnlyCenter = () => <div style={ { height : '100vh' } }>
    <FullHeightLayout center={ <Center stretch/> }/>
</div>;
