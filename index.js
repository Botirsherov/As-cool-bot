const axios = require("axios");
require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.command("/as-cool-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/as-cool-bot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/as-cool-bot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke",
    );
    await respond({
      text: `${response.data.setup}

${response.data.punchline}`,
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/as-cool-bot-quote", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    const quote = response.data[0];
    await respond({
      text: `✨ Inspiring Quote
"${quote.q}"
— ${quote.a}`,
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a quote." });
  }
});

app.command("/as-cool-bot-advice", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    await respond({
      text: `💡 Advice
${response.data.slip.advice}`,
    });
  } catch (err) {
    await respond({ text: "Failed to fetch advice." });
  }
});

app.command("/as-cool-bot-8ball", async ({ ack, respond }) => {
  await ack();

  const answers = [
    "Yes, absolutely.",
    "Not quite yet.",
    "Signs point to yes.",
    "Ask again later.",
    "Definitely.",
    "Better not tell you now.",
  ];

  const answer = answers[Math.floor(Math.random() * answers.length)];
  await respond({
    text: `🎱 Magic 8 Ball
${answer}`,
  });
});

app.command("/as-cool-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text: `Available Commands:
/as-cool-bot-ping - Check bot latency
/as-cool-bot-catfact - Get a cat fact
/as-cool-bot-joke - Get a joke
/as-cool-bot-quote - Get an inspiring quote
/as-cool-bot-advice - Get some advice
/as-cool-bot-8ball - Ask the magic 8 ball
/as-cool-bot-help - Show this help message`,
  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
