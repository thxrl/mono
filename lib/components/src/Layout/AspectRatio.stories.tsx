import React           from 'react';
import { Story, Meta } from '@storybook/react';

import { AspectRatio, AspectRatioProps } from './AspectRatio';

export default {
    title     : 'Layout/AspectRatio',
    component : AspectRatio,
    argTypes  : {},
} as Meta;

const Template : Story<AspectRatioProps> = ( args ) =>
    <div style={ { padding : '0 40%' } }>
        <div style={ { backgroundColor : 'lightcoral' } }>
            <AspectRatio { ...args }/>
        </div>
    </div>;

export const WithRatio16to9 = Template.bind( {} );
WithRatio16to9.args         = {
    ratio : 16 / 9
};

export const WithRatio14to3 = Template.bind( {} );
WithRatio14to3.args         = {
    ratio : 4 / 3
};

export const WithRatio1to1 = Template.bind( {} );
WithRatio1to1.args         = {
    ratio : 1
};

export const WithRatio1to2 = Template.bind( {} );
WithRatio1to2.args         = {
    ratio : 1 / 2
};

export const WithWrappedBackground = () => <div style={ { padding : '0 40%' } }>
    <div style={ {
        backgroundImage    : 'url(https://www.fillmurray.com/400/600)',
        backgroundSize     : 'cover',
        backgroundPosition : 'center'
    } }>
        <AspectRatio ratio={ 0.5 }/>
    </div>
</div>;
