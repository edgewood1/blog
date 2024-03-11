const PlanCard = ({destructure prop }: { destProp: Prop }) =>

interface DividerProps {
  colors: Record<string, string>;
}

export const Divider: React.FC<DividerProps> = ({ colors }) => (

export const Divider = ({ colors }: { colors: ColorProps }) => (

react

434

It turns out it's possible to specify the type after : for the whole destructuring pattern:

const {foo}: {foo: IFoo[]} = bar;
Which in reality is not any better than plain old

const foo: IFoo[] = bar.foo;

