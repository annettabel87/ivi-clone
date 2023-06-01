import React from 'react';
import { TabBar } from '../TabBar/TabBar';
import Modal from '../Modal/Modal';
import { MobileNavigationModal } from './MobileNavigationModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';

export const MobileNavigation = () => {
  const { isOpen } = useAppSelector((state) => state.mobileNavigationReducer);

  return (
    <div>
      <Modal open={isOpen} onClose={() => {}}>
        <MobileNavigationModal />
      </Modal>
      <TabBar />
    </div>
  );
};
