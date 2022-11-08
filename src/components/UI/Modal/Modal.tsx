import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

type ModalProps = {
  message: string
  closeModal: (isOpen: boolean) => void
}

const Modal = (props: ModalProps) => {
  return (
    <div>
      <div className={styles.darkBG} onClick={() => props.closeModal(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Input Inválido</h5>
          </div>
          <div className={styles.modalContent}>{props.message}</div>
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
            <button className={styles.deleteBtn} onClick={() => props.closeModal(false)}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ErrorModal = (props: ModalProps) => {
  return (
    <>
      {createPortal(
        <Modal message={props.message} closeModal={props.closeModal} />,
        document.getElementById('modal-root')!
      )}
    </>
  )
}
