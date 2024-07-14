import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ children }) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div className="h-full">
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
