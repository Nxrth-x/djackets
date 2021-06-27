import { ref } from 'vue'

export default function useModal(show = false) {
  const showModal = ref(show)

  const toggleModal = () => (showModal.value = !showModal.value)

  return [showModal, toggleModal]
}
