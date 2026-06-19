"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Target,
  Zap,
  Calendar,
  Flame,
  GraduationCap,
} from "lucide-react";
import { staggerContainer, fadeIn, hover } from "../utils/motionVariants";

const cards = [
  {
    title: "Weekly Progress",
    description: "You're 80% toward your goal",
    icon: BarChart3,
    span: "col-span-2",
    color: "from-primary-500/20 to-primary-600/10",
  },
  {
    title: "Daily Goal",
    description: "3 of 4 lessons completed",
    icon: Target,
    span: "col-span-1",
    color: "from-accent-500/20 to-accent-600/10",
  },
  {
    title: "Quick Actions",
    description: "Resume your last course",
    icon: Zap,
    span: "col-span-1",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    title: "Upcoming",
    description: "2 sessions scheduled",
    icon: Calendar,
    span: "col-span-1",
    color: "from-rose-500/20 to-rose-600/10",
  },
  {
    title: "Current Streak",
    description: "7 days in a row!",
    icon: Flame,
    span: "col-span-1",
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    title: "Certificates",
    description: "3 earned this month",
    icon: GraduationCap,
    span: "col-span-2",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
];

export default function BentoGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 gap-4"
    >
      {cards.map((card) => (
        <motion.div
          key={card.title}
          variants={fadeIn}
          whileHover={hover}
          className={`${card.span} glass rounded-2xl p-5 cursor-pointer`}
        >
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${card.color} mb-3`}
          >
            <card.icon className="w-5 h-5 text-gray-200" />
          </div>
          <h3 className="text-sm font-semibold text-gray-100">{card.title}</h3>
          <p className="text-xs text-gray-400 mt-1">{card.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
