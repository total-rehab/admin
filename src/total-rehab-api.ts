import { createOpenApiClient } from '@jambff/oac';

const baseURL = process.env.API_BASE_URL;

if (!baseURL) {
  throw new Error('Total Rehab API base URL not set');
}

export const totalRehabApi = createOpenApiClient({
  baseURL,
  onError: console.error,
});
