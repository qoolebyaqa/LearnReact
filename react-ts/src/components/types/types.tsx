export interface Iformvalues {
  date: string | undefined;
  name: string | undefined;
  doing: string | undefined;
  place: string | undefined;
  advice: string | undefined;
  result?: string | undefined;
  person?: string | undefined;
  modal?: boolean;
  functoClose?: () => void;
}
