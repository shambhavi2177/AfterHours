import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
    windowMs:15*60*1000, //15 mins 
    max:10, // 10 attempte
    message: "Too Many attempts. Try again later"
})