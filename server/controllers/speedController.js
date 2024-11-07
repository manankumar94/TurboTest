import { exec } from 'child_process';

class SpeedTestController {
  static getSpeed(req, res) {
    exec('fast --json', (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: 'Failed to run speed test' });
      }

      try {
        const result = JSON.parse(stdout);
        res.json(result);
      } catch (e) {
        res.status(500).json({ error: 'Error parsing speed test data' });
      }
    });
  }
}

export default SpeedTestController;
