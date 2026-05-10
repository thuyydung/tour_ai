import React from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

// Sử dụng Named Export để khớp với lệnh import { UploadBox } trong Detection.jsx
export const UploadBox = ({ onFileSelect, loading }) => {
  const [dragActive, setDragActive] = React.useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <label 
        className={`relative flex flex-col items-center justify-center w-full h-80 border-2 border-dashed rounded-[40px] transition-all cursor-pointer
          ${dragActive 
            ? "border-blue-500 bg-blue-50" 
            : "border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300"
          } ${loading ? "opacity-50 pointer-events-none" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="p-4 bg-white rounded-2xl shadow-sm mb-4 text-blue-600">
            <Upload size={32} />
          </div>
          <p className="mb-2 text-xl font-bold text-gray-900">
            {dragActive ? "Drop to upload" : "Drop your travel photo here"}
          </p>
          <p className="text-gray-500 font-medium">or click to browse files</p>
          <div className="mt-4 flex gap-2">
            <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs text-gray-400 font-bold uppercase tracking-wider">JPG</span>
            <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs text-gray-400 font-bold uppercase tracking-wider">PNG</span>
            <span className="px-3 py-1 bg-white border border-gray-100 rounded-full text-xs text-gray-400 font-bold uppercase tracking-wider">WEBP</span>
          </div>
        </div>
        <input 
          type="file" 
          className="hidden" 
          accept="image/*" 
          onChange={handleChange} 
        />
      </label>
    </div>
  );
};