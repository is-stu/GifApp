import { shallow } from 'enzyme';
import React from 'react';
import { GifCollectionItem } from '../../Components/GifCollectionItem';

describe('Testing GifCollectionItem', () => {
  test('Match with Snapshot ', () => {
    const wrapper = shallow(<GifCollectionItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
