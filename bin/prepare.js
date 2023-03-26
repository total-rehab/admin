const path = require('path');
const fs = require('fs');
const appRoot = require('app-root-path');
const dotenv = require('dotenv');
const { execSync } = require('child_process');

dotenv.config({ path: path.join(appRoot.path, `.env.local`) });
dotenv.config({ path: path.join(appRoot.path, `.env`) });

execSync(`yarn oac ${process.env.API_BASE_URL}/docs.json`, {
  stdio: [0, 1, 2],
});
