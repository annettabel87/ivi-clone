import React, { useEffect, useState } from 'react';
import { TabBar } from '../TabBar/TabBar';
import Modal from '../Modal/Modal';
import { MobileNavigationModal } from './MobileNavigationModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { useWindowSize } from '@/hooks/useWindowSize ';
import { useRouter } from 'next/router';
import { SET_MOBILE_MENU_OPEN, SET_SECTION } from '@/store/reducers/mobileNavigationReducer';

export const MobileNavigation = () => {
  const { isOpen } = useAppSelector((state) => state.mobileNavigationReducer);
  const [startingWindowSize, setStartingWindowSize] = useState<number | null>(null);
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    setStartingWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    dispatch(SET_SECTION('Мой Иви'));
    dispatch(SET_MOBILE_MENU_OPEN(false));
  }, [router.pathname]);

  useEffect(() => {
    if (isOpen) document.body.style.position = 'fixed';
    if (!isOpen) document.body.style.position = 'static';
  }, [isOpen]);
  return (
    <div>
      {((windowSize && windowSize < 1160) ||
        (startingWindowSize && !windowSize && startingWindowSize < 1160)) && (
        <>
          <Modal open={isOpen} onClose={() => {}}>
            <MobileNavigationModal />
          </Modal>
          <TabBar />
        </>
      )}
    </div>
  );
};
