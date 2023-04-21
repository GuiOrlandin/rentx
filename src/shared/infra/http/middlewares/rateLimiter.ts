import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import * as redis from "redis";

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const redisClient = redis.createClient({
    legacyMode: true,
    socket: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    },
  });

  await redisClient.connect();

  const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "rateLimiter",
    points: 5,
    duration: 5,
  });
  try {
    await limiter.consume(request.ip);
    return next();
  } catch (err) {
    throw new AppError("Too many requests", 429);
  }
}
