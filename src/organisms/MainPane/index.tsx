/**
 * @fileoverview Defines Main Pane organism.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { Box, BoxProps } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

export type Props = BoxProps & {
  title: string;
  children: ReactNode;
};

export const Component: FC<Props> = ({ title, children, ...props }: Props) => (
  <Box {...props}>
    <AnimatePresence
      mode={'wait'}
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <motion.div
        initial={'hidden'}
        animate={'enter'}
        exit={'exit'}
        variants={{
          hidden: { opacity: 0, x: 0, y: 30 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: 30 },
        }}
        transition={{ duration: 0.6, type: 'easeInOut' }}
        style={{ position: 'relative' }}
      >
        {title && (
          <Head>
            <title>{`${title} - DeltaHub`}</title>
            <meta name={'twitter:title'} content={`${title} - DeltaHub`} />
            <meta property={'og:title'} content={`${title} - DeltaHub`} />
          </Head>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  </Box>
);

Component.displayName = 'MainPane';
