import React from 'react';
import { render } from '@testing-library/react';
import { BasicCard } from './card.composition';

it('should render some text', () => {
  const { getByText } = render(<BasicCard />);
  const rendered = getByText('lean how to self host these components');
  expect(rendered).toBeTruthy();
});

