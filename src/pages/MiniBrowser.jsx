import React, { useState } from "react";

const MiniBrowser = () => {
  const [url, setUrl] = useState("https://example.com");
  const [inputUrl, setInputUrl] = useState(url);

  const handleGo = () => {
    // Ensure URL has protocol
    const finalUrl = inputUrl.startsWith("http")
      ? inputUrl
      : `https://${inputUrl}`;
    setUrl(finalUrl);
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="border px-2 py-1 rounded w-full"
          placeholder="Enter URL"
        />
        <button
          onClick={handleGo}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Go
        </button>
      </div>
      <div className="border rounded overflow-hidden h-[80vh]">
        <iframe
          src={url}
          title="Mini Browser"
          width="100%"
          height="100%"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </div>
  );
};

export default MiniBrowser;
