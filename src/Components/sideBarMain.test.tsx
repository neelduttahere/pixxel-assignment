import { render} from '@testing-library/react';
import SideBarMain from './sideBarMain';
import Data from "../data.json";

test('render sidebar main', () => {
  render(<SideBarMain data={Data}/>);
})