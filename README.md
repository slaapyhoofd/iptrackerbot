# iptrackerbot

This is a simple Node.js Telegram bot that checks the public IP address of the internet connection it's connected to every 5 minutes. If the IP address changes, it sends a message to a specified Telegram chat.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/slaapyhoofd/iptrackerbot.git
```

2. Navigate to the project directory:

```bash
cd iptrackerbot
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root of the project and add the following environment variables:

```bash
TELEGRAM_BOT_TOKEN=your_bot_token_here
CHAT_ID=your_chat_id_here
```

Replace `your_bot_token_here` with your actual bot token and `your_chat_id_here` with your actual chat ID.

## Running the Bot

You can start the bot with the following command:

```bash
node index.js
```

## Docker

You can also run the bot in a Docker container. Build the Docker image using the following command:

```bash
docker build -t iptrackerbot .
```

And run the Docker container using the following command:

```bash
docker run --env-file .env -d iptrackerbot
```

## Bot commands

- `/ip`: Returns the current public IP address.