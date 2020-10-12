import { myFunction } from './index';

describe('Index', () => {

  test('should pass', () => {
    expect(myFunction(1)).toEqual(1);
  });
});
