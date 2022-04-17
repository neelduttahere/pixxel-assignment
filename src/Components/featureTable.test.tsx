import { render} from '@testing-library/react';
import FeatureTable from './featureTable';
import Data from "./../data.json";


test('render Feature table', () => {
  render(<FeatureTable data={Data}/>);
})