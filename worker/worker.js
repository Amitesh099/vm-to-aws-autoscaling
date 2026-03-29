const Redis = require("ioredis");
const redis = new Redis({
    host: "redis",
    port: 6379
});

async function processTask(task) {
    console.log("Processing:", task);
    await new Promise(r => setTimeout(r, 2000));
}

async function start() {
    while (true) {
        const task = await redis.brpop("tasks", 0);
        await processTask(JSON.parse(task[1]));
    }
}

start();
