import { useArbitraryState } from "./index";

test('Numbers Failed on useArbitraryState', () => {
    const defaultNumbersState = [1, 2, 3, 4];
    const defaultValue = 0;
    expect(useArbitraryState(defaultNumbersState, defaultValue))
})

test('Empty Failed on useArbitraryState', () => {
    const defaultEmptyState: [] = [];
    const defaultValue = 0;
    expect(useArbitraryState(defaultEmptyState, defaultValue))
})

test('Objects Failed on useArbitraryState', () => {
    const defaultArrayOfObjectsState = [{ user: 'Carl' }, { user: 'Tinder' }];
    const defaultValue = { user: 'John' };
    expect(useArbitraryState(defaultArrayOfObjectsState, defaultValue))
})

test('Objects Empty Failed on useArbitraryState', () => {
    const defaultArrayOfObjectsState = [{ user: 'Carl' }, { user: 'Tinder' }];
    const defaultValue = null;
    expect(useArbitraryState(defaultArrayOfObjectsState, defaultValue))
})

test('Objects Success on useArbitraryState', () => {
    const defaultArrayOfObjectsState = [{ user: 'Carl' }, { user: 'Tinder' }];
    const defaultValue = { user: 'Carl' };
    expect(useArbitraryState(defaultArrayOfObjectsState, defaultValue))
})

test('Strings Success on useArbitraryState', () => {
    const defaultArrayOfObjectsState = ['Carl', 'Tinder'];
    const defaultValue = 'Carl';
    expect(useArbitraryState(defaultArrayOfObjectsState, defaultValue))
})
