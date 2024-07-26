'use client'

import { useState } from 'react';
import Image from 'next/image';
import pdficon from '@/images/pdficon.png';

export function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadingFileName, setDownloadingFileName] = useState('');

  const files = [
    { name: "Financial Report - Third Quarterly - 2022", path: "/FinancialReport.pdf" },
    { name: "Company Information Sheet 3rd December 2021", path: "/Company-Information-Sheet.pdf" },
    { name: "Change Of Auditor 3rd December 2021", path: "/Change-Of-Auditor.pdf" },
    // Add more files as needed
  ];

  const handleDownloadClick = (e, file) => {
    e.preventDefault(); // Prevent the default link behavior
    setIsDownloading(true);
    setDownloadingFileName(file.name);

    setTimeout(() => {
      // Create a new link element, set the href and download attributes, and click it programmatically
      const link = document.createElement('a');
      link.href = file.path;
      link.download = file.name;
      document.body.appendChild(link); // Append to the document
      link.click(); // Trigger download
      document.body.removeChild(link); // Clean up

      setIsDownloading(false);
    }, 3000); // Delay download by 3 seconds
  };

  return (
    <>
      {isDownloading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <p className="text-white text-lg">Your download will start in 3 seconds...</p>
        </div>
      )}
      <div className="flex flex-col space-y-2">
        {files.map((file, index) => (
          <a key={index} href={file.path} download={file.name} onClick={(e) => handleDownloadClick(e, file)}>
            <Image src={pdficon} alt={`Download ${file.name}`} width={48} height={48} className="w-12 mt-3 hover:shadow-[0_0_10px_2px_rgba(8,145,178,0.5)] hover:opacity-80" />
            <p className="text-center font-bold">{file.name}</p>
          </a>
        ))}
      </div>
    </>
  );
}