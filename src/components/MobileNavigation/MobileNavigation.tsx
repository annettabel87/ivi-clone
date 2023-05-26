import React from 'react';
import { TabBar } from '../TabBar/TabBar';
import Modal from '../Modal/Modal';
import { MobileNavigationModal } from './MobileNavigationModal';

export const MobileNavigation = () => {
  return (
    <div>
      <Modal open={true} onClose={() => {}}>
        <MobileNavigationModal />
      </Modal>
      <TabBar />
    </div>
  );
};
