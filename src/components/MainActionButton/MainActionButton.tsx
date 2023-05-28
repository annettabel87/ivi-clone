import style from './main-action-button.module.scss';

type MainActionButton = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  actionClick?: () => void;
  loadingStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  disabledBtnSubmit?: boolean;
  title: string;
};

const MainActionButton = (props: MainActionButton) => {
  const pendingStatus = props.loadingStatus === 'pending';
  return (
    <button
      type={props.type}
      className={style.blueBtn}
      onClick={props.actionClick}
      disabled={pendingStatus || props.disabledBtnSubmit}
    >
      {pendingStatus ? 'Загрузка...' : props.title}
    </button>
  );
};

export default MainActionButton;
