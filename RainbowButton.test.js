import React from 'react';
import { configure, shallow } from 'enzyme';
import RainbowButton from './RainbowButton';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RainbowButton', () => {
    test('Should start red', () => {
        const wrapper = shallow(<RainbowButton />);
        console.log(wrapper.props().style);
        expect(wrapper.props().style.background).toEqual('red');
    });
});