import { defineConfig, devices } from '@playwright/test';
import type { ReporterDescription } from '@playwright/test';

export const STORAGE_STATE = './state.json';

const reporters = () => {
  const result: ReporterDescription[] = process.env.CI ? [
    ['html'],
    ['blob'],
  ] : [
    ['html']
  ];
  return result;
};

export default defineConfig({
  testDir: 'src',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: reporters(),
  globalSetup: './global-setup',
 // globalSetup: require.resolve('/Users/evyens/ENS/playwright-nodejs-starter-main/tests/global.setup'),
  use: {
    baseURL: 'https://test.engagingnetworks.app/p2p/site/wzS91/unite_for_animals_p2p_iats#/' ,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'setupData',
      testMatch: 'tests/P2P/test-3.spec.ts',
      dependencies: ['setup']
    },
    {
      name: 'setup',
      testMatch: '**/global.setup.ts'
    },
    {
      name: 'tests',
      use: {
        storageState: STORAGE_STATE,  // Use the storage state in tests
      },
    },
  ],
});
