import { FC } from 'react'
import { Chip } from '@mui/material'

type Props = {
  priority: number
}

const PriorityChip: FC<Props> = ({ priority }) => {
  const convertLabel = (): string => {
    switch (priority) {
      case 0:
        return "low"
      case 1:
        return "normal"
      case 2:
        return "high"
      default:
        return ""
    }
  }
  
  const convertColor = (): any => { // TODO
    switch (priority) {
      case 0:
        return "success"
      case 1:
        return "warning"
      case 2:
        return "error"
      default:
        return "default"
    }
  }
  
  return (
    <Chip
      label={convertLabel()}
      color={convertColor()}
      size="small"
    />
  )
}

export default PriorityChip
