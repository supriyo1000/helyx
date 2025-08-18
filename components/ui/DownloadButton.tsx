// components/DownloadButton.js

import { Download } from "lucide-react";

export default function DownloadButton() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/postdoc.pdf'; // relative to the public/ directory
        link.download = 'postdoc.pdf';    // optional, specify download name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center mx-auto transition-colors"
        >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
        </button>
    );
}
  