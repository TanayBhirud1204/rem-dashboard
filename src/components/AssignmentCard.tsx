"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, File, Download, Folder, ChevronDown, ChevronUp } from "lucide-react";
import { Assignment } from "@/lib/data";

export function AssignmentCard({ assignment, delay = 0 }: { assignment: Assignment; delay?: number }) {
  const isPdf = assignment.filetype === "pdf";
  const isFolder = assignment.filetype === "folder";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className="glass-panel bg-white p-5 rounded-xl border border-[#D8D8D8] hover:border-[#FF5E5B] transition-colors shadow-sm group"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl flex-shrink-0 ${isFolder ? 'bg-[#FFED66]/30 text-[#E5CD3A]' : isPdf ? 'bg-[#FF5E5B]/10 text-[#FF5E5B]' : 'bg-[#00CECB]/10 text-[#00CECB]'}`}>
            {isFolder ? <Folder size={24} /> : isPdf ? <FileText size={24} /> : <File size={24} />}
          </div>
          <div className="overflow-hidden">
            <h4 className="text-[#333333] font-bold text-lg truncate" title={assignment.title}>{assignment.title}</h4>
            <p className="text-sm text-[#A3A3A3] mt-1 truncate max-w-[200px] sm:max-w-xs cursor-default" title={assignment.filename}>
              {assignment.filename}
            </p>
          </div>
        </div>
        
        <div className="text-right flex-shrink-0 ml-4">
          <div className="text-2xl font-bold text-[#333333]">{assignment.score}</div>
          <div className="text-xs text-[#00CECB] font-bold uppercase tracking-wider">Score</div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#D8D8D8]/50">
        <div className="text-sm font-medium text-[#A3A3A3] truncate mr-4">
          Added: {assignment.date}
        </div>
        
        {isFolder ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-[#FFED66] hover:bg-[#E5CD3A] text-[#333333] font-bold rounded-lg text-sm transition-colors shadow-sm flex-shrink-0"
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            Files
          </button>
        ) : (
          <a 
            href={assignment.path} 
            download
            className="flex items-center gap-2 px-4 py-2 bg-[#FFED66] hover:bg-[#E5CD3A] text-[#333333] font-bold rounded-lg text-sm transition-colors shadow-sm flex-shrink-0"
          >
            <Download size={16} />
            Download
          </a>
        )}
      </div>

      <AnimatePresence>
        {isFolder && isOpen && assignment.subfiles && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-[#D8D8D8]/30 flex flex-col gap-2">
              {assignment.subfiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50/50 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden mr-4">
                    <File size={16} className="text-[#A3A3A3] flex-shrink-0" />
                    <span className="text-sm text-[#333333] truncate" title={file.filename}>{file.filename}</span>
                  </div>
                  <a
                    href={file.path}
                    download
                    className="flex items-center justify-center p-2 rounded-md bg-white hover:bg-[#FFED66] text-[#A3A3A3] hover:text-[#333333] transition-colors border shadow-sm flex-shrink-0"
                  >
                    <Download size={14} />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
