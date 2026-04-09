"use client";

import { motion } from "framer-motion";
import { FileText, File, Download } from "lucide-react";
import { Assignment } from "@/lib/data";

export function AssignmentCard({ assignment, delay = 0 }: { assignment: Assignment; delay?: number }) {
  const isPdf = assignment.filetype === "pdf";

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
          <div className={`p-3 rounded-xl ${isPdf ? 'bg-[#FF5E5B]/10 text-[#FF5E5B]' : 'bg-[#00CECB]/10 text-[#00CECB]'}`}>
            {isPdf ? <FileText size={24} /> : <File size={24} />}
          </div>
          <div>
            <h4 className="text-[#333333] font-bold text-lg">{assignment.title}</h4>
            <p className="text-sm text-[#A3A3A3] mt-1 truncate max-w-[200px] sm:max-w-xs cursor-default" title={assignment.filename}>
              {assignment.filename}
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-[#333333]">{assignment.score}</div>
          <div className="text-xs text-[#00CECB] font-bold uppercase tracking-wider">Score</div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#D8D8D8]/50">
        <div className="text-sm font-medium text-[#A3A3A3]">
          Added: {assignment.date}
        </div>
        <a 
          href={assignment.path} 
          download
          className="flex items-center gap-2 px-4 py-2 bg-[#FFED66] hover:bg-[#E5CD3A] text-[#333333] font-bold rounded-lg text-sm transition-colors shadow-sm"
        >
          <Download size={16} />
          Download
        </a>
      </div>
    </motion.div>
  );
}
