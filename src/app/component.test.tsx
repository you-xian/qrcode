import { ThemeProvider } from "@material-ui/styles";
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Header from "../component/header";
import App from "./index";

describe('<App />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('It should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('It should mount following components', () => {
    expect(wrapper.find(ThemeProvider)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
  })
})
