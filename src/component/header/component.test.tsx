import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Header from "./index";

describe('<Header />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  test('It should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('It should mount following components', () => {
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(IconButton)).toHaveLength(1);
    expect(wrapper.find(HomeIcon)).toHaveLength(1);
  })

  test('renders an Typography .title', () => {
    expect(wrapper.find(Typography).hasClass(/makeStyles-title-\d+/)).toBeTruthy();
  });

  test('renders an HomeIcon .icon', () => {
    expect(wrapper.find(HomeIcon).hasClass(/makeStyles-icon-\d+/)).toBeTruthy();
  });

  test('It should click home button', () => {
    wrapper.find(IconButton).simulate("click");
    wrapper.find(IconButton).prop("onClick");
  })
})
