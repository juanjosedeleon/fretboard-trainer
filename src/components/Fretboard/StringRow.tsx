import { FRET_COUNT } from '../../constants/fretboard'
import FretCell from './FretCell'

interface StringRowProps {
  stringIndex: number
}

export default function StringRow({ stringIndex }: StringRowProps) {
  return (
    <div className="flex items-center">
      <label className="flex items-center px-2 flex-shrink-0">
        <input
          type="checkbox"
          defaultChecked
          aria-label={`String ${stringIndex}`}
        />
      </label>
      {Array.from({ length: FRET_COUNT }).map((_, i) => (
        <FretCell key={i} />
      ))}
    </div>
  )
}
