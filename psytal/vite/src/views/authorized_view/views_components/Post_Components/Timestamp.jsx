import React from 'react'

function formatTimestamp(timestamp) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
  const formattedDate = new Date(timestamp).toLocaleDateString('en-US', options);
  const formattedTime = new Date(timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return `${formattedDate} at ${formattedTime}`;
}

export default function Timestamp({ timestamp }) {
  return <p className="text-xl text-gray-600">{formatTimestamp(timestamp)}</p>;
}