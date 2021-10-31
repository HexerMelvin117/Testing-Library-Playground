import { apiPlaceholderUrl } from '../../../modules/OrderTracking';
import OrderTrackingView from '../../../modules/OrderTracking';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';

const todoResponse = rest.get(`${apiPlaceholderUrl}/todos`, (req, res, ctx) => {
  return res(ctx.json([{ id: 1, title: 'Test' }]));
});

const handlers = [todoResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Order tracking view', () => {
  it('displays todolist correctly', async () => {
    render(<OrderTrackingView />);
    const todoItem = await screen.findByText('Test');
    expect(todoItem).toBeVisible();
  });
});
