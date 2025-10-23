import express from "express";
import bodyParser from "body-parser";
import { SerialPort } from "serialport";

const app = express();
const expressPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(expressPort, () => {
  console.log(`Listening on port ${expressPort}`);
});

//MAC
// REMINDER: ls /dev/tty.*
const port = new SerialPort({ path: "/dev/tty.usbmodem14402", baudRate: 9600 });

// WINDOWS
//const port = new SerialPort({ path: "COM3", baudRate: 9600 });

// send desired voltage
app.post("/voltage", (req, res) => {
  const desiredVoltage = req.body.voltage;
  const normalizedVoltage = desiredVoltage / 0.2;

  const converted_to_8bit = new Uint8Array([normalizedVoltage]);

  if (desiredVoltage >= 0 && desiredVoltage <= 30) {
    setTimeout(() => {
      port.write(converted_to_8bit, (err: Error) => {
        if (err) {
          console.log("Error on write: ", err.message);
        }
      });
    }, 500);
  }
  res.sendStatus(200);
});
