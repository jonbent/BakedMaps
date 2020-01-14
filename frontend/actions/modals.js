export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"

export const openModal = (modalName) => ({
    type: OPEN_MODAL,
    modalName
})
export const closeModal = () => ({
    type: CLOSE_MODAL
})