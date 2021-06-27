import { ref } from 'vue'

export default function useCounter(
  initialValue = 0,
  minValue = -Infinity,
  maxValue = Infinity
) {
  const counter = ref(initialValue)

  const increment = () => (counter.value < maxValue ? counter.value++ : null)
  const decrement = () => (counter.value > minValue ? counter.value-- : null)

  return [counter, increment, decrement]
}
