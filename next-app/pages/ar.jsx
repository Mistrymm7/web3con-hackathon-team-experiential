import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import dynamic from 'next/dynamic';

const ARCanvas = dynamic(() => import('../src/components/ArView'), {
  loading: () => <LinearProgress />,
  ssr: false
})

export default function ArPage() {
  return <ARCanvas />;
}
