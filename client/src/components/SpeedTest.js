import React, { useState } from 'react';
import { getSpeed } from '../services/api';
import './SpeedTest.css';

const SpeedTest = () => {
  const [speedData, setSpeedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSpeedTest = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getSpeed();
      setSpeedData(data);
    } catch (err) {
      setError('Failed to get speed data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="speed-test-container">
      <h1>Internet Speed Test</h1>
      <button className="speed-test-button" onClick={handleSpeedTest} disabled={loading}>
        {loading ? 'Testing...' : 'Run Speed Test'}
      </button>

      {/* Show the animated meter while loading */}
      {loading && (
        <div className="meter-container">
          <div className="meter">
            <div className="progress"></div>
          </div>
          <p>Measuring speed...</p>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
      {speedData && !loading && (
        <div className="results-container">
          <h2>Results</h2>
          <div className="result-item">
            <strong>Download Speed:</strong> {speedData.downloadSpeed} Kbps
          </div>
          <div className="result-item">
            <strong>Upload Speed:</strong> {speedData.uploaded} Kbps
          </div>
          <div className="result-item">
            <strong>Latency:</strong> {speedData.latency} ms
          </div>
          <div className="result-item">
            <strong>Buffer Bloat:</strong> {speedData.bufferBloat}
          </div>
          <div className="result-item">
            <strong>Location:</strong> {speedData.userLocation}
          </div>
          <div className="result-item">
            <strong>IP Address:</strong> {speedData.userIp}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedTest;
