const { exec } = require('child_process');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { command } = req.body;

    // Run the command on the server
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(200).json({ output: `Error: ${stderr || error.message}` });
      }

      res.status(200).json({ output: stdout || stderr });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
