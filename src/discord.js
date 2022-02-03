const Slack = require('./slack/index');
const GitHub = require('./github/index');

const gitHub = new GitHub({
    webhookSecret: process.env.GITHUB_WEBHOOK_SECRET,
    authToken: process.env.GITHUB_TOKEN,
    org: process.env.GITHUB_ORG,
  });
  