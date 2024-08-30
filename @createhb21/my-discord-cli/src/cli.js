#!/usr/bin/env node

import { Command } from "commander";
import os from "os";
import fs from "fs";
import fetch from "node-fetch";

const program = new Command();

program
  .name("Discord CLI")
  .description("A little CLI for sending message to Discord");

const filename = `${os.homedir()}/.discord-cli-config.json`;
const CONFIG = JSON.parse(fs.readFileSync(filename).toString());

program
  .command("discord")
  .description("Send a message to my personal discord server")
  .argument("<message>", "message to send")
  .action(async (message, options) => {
    console.log("sending message to discord", { message, options });

    const response = await fetch(CONFIG.discord_webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    });
    console.log(response.status, response.statusText);
  });

program.parse();
