"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, BookOpen, Clock } from "lucide-react";
import { staggerContainer, fadeIn } from "../utils/motionVariants";

const stats = [
  { label: "Courses", value: "12", icon: BookOpen, color: "text-accent-400" },
  { label: "Hours Learned", value: "48", icon: Clock, color: "text-primary-400" },
  { label: "Streak", value: "7d", icon: TrendingUp, color: "text-amber-400" },
];

export default function HeroCard() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="glass rounded-2xl p-6 mb-8"
    >
      <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-500/20">
          <Sparkles className="w-5 h-5 text-accent-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-100">
            Welcome back, Learner
          </h1>
          <p className="text-sm text-gray-400">
            Keep up the great progress this week!
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeIn}
            className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
          >
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
            <div>
              <p className="text-lg font-semibold text-gray-100">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
