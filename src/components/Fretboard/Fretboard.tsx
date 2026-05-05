import { STRING_COUNT } from '../../constants/fretboard'
import StringRow from './StringRow'

export default function Fretboard() {
  return (
    <div className="bg-amber-800 rounded overflow-x-auto">
      {Array.from({ length: STRING_COUNT }).map((_, i) => (
        <StringRow key={i} stringIndex={i} />
      ))}
    </div>
  )
}
