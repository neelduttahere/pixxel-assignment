import { getByText, render} from '@testing-library/react';
import SideBarMain from './sideBarMain';
import Data from "../data.json";

test('render sidebar main', () => {
  render(<SideBarMain data={Data}/>);
});

test('expect draw button to be disabled by default', ()=>{
  const { getByText } = render(<SideBarMain data={Data}/>);
  expect(getByText(/Draw Area/i).closest('button')).toBeDisabled();
});

test('expect search details button to be disabled by default', ()=>{
  const { getByText } = render(<SideBarMain data={Data}/>);
  expect(getByText(/Search details/i).closest('button')).toBeDisabled();
});

test('expect save geometry button to be disabled by default', ()=>{
  const { getByText } = render(<SideBarMain data={Data}/>);
  expect(getByText(/Save Geometry/i).closest('button')).toBeDisabled();
});

