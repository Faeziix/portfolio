'use client'
import React from "react";
import { AnimatePresence } from "framer-motion";

function AnimatePresenceRoot({children}) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

export default AnimatePresenceRoot;
