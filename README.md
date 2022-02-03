[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/Code-Muskateers/github-board-discord-notification-lambda) [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)  [![License](https://img.shields.io/badge/license-Apache-orange)](https://opensource.org/licenses/Apache-2.0) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Code-Muskateers/github-board-discord-notification-lambda/issues) [![Maintainer](https://img.shields.io/badge/maintainer-Lzm17-blue)](https://github.com/orgs/Code-Muskateers/people/B4Ha-LzM17)

# What dis?

![notification-example](./readme/img/work.gif)

This repository contains a lambda function that receives GitHub Board updates (via GitHub Webhook) and forwards them to Discord.
It allows the user to select which Discord channels get notified when a change is received.


# Getting started

The setup looks more difficult than it is, the steps in the overview should be easy to follow.
## Prerequisites
1. Install [Serverless cli](https://www.serverless.com/framework/docs/getting-started/) (with AWS)
2. Get access to a bot application. Go to [create apps](https://discord.com/developers/applications) and create a new application.
3. Have privis' to add Webhooks to your org, url looks like so
``` https://discordapp.com/api/webhooks/{id}/{token} ```
4. Create a new channel in your org and add the webhook url to the channel.
5. Create a new lambda function and add the webhook url to the function.
6. Add the lambda function to your org.
7. Add the lambda function to your channel.

https://github.com/organizations/<YOUR ORG NAME>/settings/hooks

```json
{
  "url": "https://us-central1-<YOUR PROJECT NAME>.cloudfunctions.net/webhook",
  "content_type": "json"
}
```