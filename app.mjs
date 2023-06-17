
// import userRouter from './src/routes/userRoute.js'
// import ticketRouter from './src/routes/tickeRoute.js'
// import bookingHistoryRouter from './src/routes/bookingHistoryRoute.js'
// import cancellationRouter from './src/routes/cancellationRoute.js'
// import eventRouter from './src/routes/eventRoute.js'
import administratorRouter from './src/routes/administratorRoute.js'

import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routing middleware -- mounting-

// app.use("/", userRouter)

// app.use("/", ticketRouter)

// app.use("/", bookingHistoryRouter)

// app.use("/", cancellationRouter)

// app.use("/", eventRouter)

app.use("/", administratorRouter)

export default app;