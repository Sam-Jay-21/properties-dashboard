import '@testing-library/jest-dom';

import { server } from './__mocks__/server.js';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
