import React, { useEffect, useState } from 'react';
import { TabBar } from '../TabBar/TabBar';
import Modal from '../Modal/Modal';
import { MobileNavigationModal } from './MobileNavigationModal';
import { useAppSelector } from '@/store/hooks/hooks';
import { checkIsMobile } from '@/helpers/checkIsMobile';

export const MobileNavigation = () => {
  const { isOpen } = useAppSelector((state) => state.mobileNavigationReducer);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(checkIsMobile());
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    if (isOpen) document.body.style.position = 'fixed';
    if (!isOpen) document.body.style.position = 'static';
  }, [isOpen]);
  return (
    <div>
      <Modal open={isOpen} onClose={() => {}}>
        <MobileNavigationModal />
      </Modal>
      {isMobile && <TabBar />}
    </div>
  );
};
