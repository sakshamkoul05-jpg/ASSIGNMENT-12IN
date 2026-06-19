"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Settings,
  BarChart3,
  LogOut,
  Moon,
} from "lucide-react";

const commands = [
  { group: "Navigation", items: [
    { label: "Dashboard", icon: BarChart3, shortcut: "D" },
    { label: "My Courses", icon: BookOpen, shortcut: "C" },
    { label: "Settings", icon: Settings, shortcut: "S" },
  ]},
  { group: "Actions", items: [
    { label: "Toggle Theme", icon: Moon, shortcut: "T" },
    { label: "Sign Out", icon: LogOut, shortcut: "X" },
  ]},
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 glass rounded-full px-4 py-2.5 text-sm text-gray-400 hover:text-gray-200 transition-colors"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="ml-2 rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-mono">
          Ctrl+K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg glass rounded-2xl overflow-hidden"
            >
              <Command loop>
                <div className="flex items-center gap-2 border-b border-white/10 px-4">
                  <Search className="w-4 h-4 text-gray-500" />
                  <Command.Input
                    placeholder="Type a command..."
                    className="flex-1 bg-transparent py-3 text-sm text-gray-200 outline-none placeholder:text-gray-500"
                  />
                </div>
                <Command.List className="max-h-80 overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-sm text-gray-500">
                    No results found.
                  </Command.Empty>
                  {commands.map((group) => (
                    <Command.Group
                      key={group.group}
                      heading={group.group}
                      className="text-xs font-medium text-gray-500 px-2 py-1.5"
                    >
                      {group.items.map((item) => (
                        <Command.Item
                          key={item.label}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-white/10 data-[selected=true]:bg-white/10"
                          onSelect={() => setOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-gray-400" />
                          <span className="flex-1">{item.label}</span>
                          <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-gray-500">
                            {item.shortcut}
                          </kbd>
                        </Command.Item>
                      ))}
                    </Command.Group>
                  ))}
                </Command.List>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
