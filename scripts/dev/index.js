const { exec } = require("child_process");
require("dotenv").config();

exec(`tsc -w --outdir ${process.env.OUTDIR}`).stdout.pipe(process.stdout);
