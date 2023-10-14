'use client'
import { useEffect, useState, createContext, useContext, useLayoutEffect } from 'react';

interface IDeviceContext {
  isMobile: boolean;
}

export const DeviceContext = createContext<IDeviceContext>({ isMobile: false });

export const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false);

  useLayoutEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
};