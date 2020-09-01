const { exec } = require("child_process");
require("dotenv").config();

exec(`tsc --outdir ${process.env.OUTDIR}`).stdout.pipe(process.stdout);
