import { formatDistanceToNowStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function distanceToNowConverter(date: string) {
  return formatDistanceToNowStrict(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })
}
