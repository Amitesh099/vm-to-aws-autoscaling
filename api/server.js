const express = require("express");
const Redis = require("ioredis");

const app = express();
const redis = new Redis({
    host: "redis",
    port: 6379
});

app.use(express.json());

// push task
app.post("/task", async (req, res) => {
    await redis.lpush("tasks", JSON.stringify(req.body));
    res.send("Task queued");
});

// CPU heavy endpoint
app.get("/load", (req, res) => {
    let count = 0;
    for (let i = 0; i < 1e9; i++) {
        count += i;
    }
    res.send("CPU load generated");
});

app.listen(3000, () => console.log("API running on port 3000"));
