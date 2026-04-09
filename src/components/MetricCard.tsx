"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: ReactNode;
  delay?: number;
}

export function MetricCard({ title, value, suffix = "", prefix = "", icon, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="glass-panel bg-white p-6 rounded-2xl flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden shadow-lg border-[#D8D8D8]"
    >
      <div className="absolute inset-0 bg-[#FF5E5B] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
      <div>
        <p className="text-[#A3A3A3] text-sm font-bold uppercase tracking-wider mb-1">{title}</p>
        <h3 className="text-4xl font-extrabold text-[#333333] flex items-baseline gap-1">
          {prefix}
          <CountUp
            end={value}
            duration={2.5}
            separator=","
            useEasing={true}
          />
          {suffix && <span className="text-xl text-[#FF5E5B]">{suffix}</span>}
        </h3>
      </div>
      <div className="h-14 w-14 rounded-full bg-[#00CECB]/10 flex items-center justify-center text-[#00CECB]">
        {icon}
      </div>
    </motion.div>
  );
}
