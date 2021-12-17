// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(" ")
}
