# Slack Bot

A simple Slack slash-command bot built with Node.js and Slack Bolt. It responds to a set of fun commands such as ping checks, cat facts, jokes, quotes, advice, and a magic 8-ball.

## Features

The bot currently supports these slash commands:

- `/as-cool-bot-ping` - Check bot latency
- `/as-cool-bot-catfact` - Get a random cat fact
- `/as-cool-bot-joke` - Get a random joke
- `/as-cool-bot-quote` - Get an inspiring quote
- `/as-cool-bot-advice` - Get a piece of advice
- `/as-cool-bot-8ball` - Ask the magic 8 ball
- `/as-cool-bot-help` - Show available commands

## Tech Stack

- Node.js
- Slack Bolt
- Axios
- dotenv

## Prerequisites

- Node.js installed
- A Slack app with Socket Mode enabled
- A bot token and app token for your Slack app

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with your Slack credentials:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=your-app-token
```

## Running the Bot

Start the bot with:

```bash
node index.js
```

If everything is configured correctly, the bot will start and print:

```bash
bot is running!
```

## Project Structure

- `index.js` - Main bot logic and slash command handlers
- `package.json` - Project metadata and dependencies
- `.env` - Environment variables for Slack authentication

## Notes

This project uses Slack Socket Mode, so you do not need a long-running HTTP server for the bot to receive events.
