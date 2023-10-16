import { UfEmi } from 'lib/types/uf'

export const getUfIbge = (ufEmi: UfEmi) => {
  switch (ufEmi) {
    case UfEmi.AC:
      return '12'
    case UfEmi.AL:
      return '27'
    case UfEmi.AP:
      return '16'
    case UfEmi.AM:
      return '13'
    case UfEmi.BA:
      return '29'
    case UfEmi.CE:
      return '23'
    case UfEmi.DF:
      return '53'
    case UfEmi.ES:
      return '32'
    case UfEmi.GO:
      return '52'
    case UfEmi.MA:
      return '21'
    case UfEmi.MT:
      return '51'
    case UfEmi.MS:
      return '50'
    case UfEmi.MG:
      return '31'
    case UfEmi.PA:
      return '15'
    case UfEmi.PB:
      return '25'
    case UfEmi.PR:
      return '41'
    case UfEmi.PE:
      return '26'
    case UfEmi.PI:
      return '22'
    case UfEmi.RJ:
      return '33'
    case UfEmi.RN:
      return '24'
    case UfEmi.RS:
      return '43'
    case UfEmi.RO:
      return '11'
    case UfEmi.RR:
      return '14'
    case UfEmi.SC:
      return '42'
    case UfEmi.SP:
      return '35'
    case UfEmi.SE:
      return '28'
    case UfEmi.TO:
      return '17'
    default:
      return '99'
  }
}
