import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export interface IModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: FC<IModalProps> = ({ children, open }: IModalProps) => {
  const [_document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    setDocument(document);
  }, []);

  if (_document && open) {
    return ReactDOM.createPortal(children, _document.getElementById('portal')!);
  } else {
    return null;
  }
};

export default Modal;
