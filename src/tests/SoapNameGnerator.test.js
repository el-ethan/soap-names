import React from 'react';
import {shallow} from 'enzyme';
import SoapNameGenerator from '../SoapNameGenerator'

it('renders without crashing', () => {
    const element = shallow(<SoapNameGenerator></SoapNameGenerator>);
    expect(element.find('button').length).toEqual(1);
});

it('sets soap name by combining avaliable options', () => {
    const firstWords = ['vanilla'];
    const secondWords = ['cloud'];
    const element = shallow(<SoapNameGenerator firstWords={firstWords} secondWords={secondWords}></SoapNameGenerator>);
    element.find('button').simulate('click');
    expect(element.find('h1').text()).toEqual('vanilla cloud');
});