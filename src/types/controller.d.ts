export interface controller {
  method: string
  path: string
  middleware?: Function[]
  fn: Function
}
