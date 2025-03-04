import { motion } from 'framer-motion';
import React from 'react';

import { ReactNode } from 'react';

const ClickEffect = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
            {children}
        </motion.div>
    );
};

export default ClickEffect;
