const acceptsObj = (obj: {
  foo: string;
  bar: number;
  baz: boolean;
  boo: void;
}) => {};

acceptsObj({
  foo: "hello",
  bar: 42,
  baz: true,
  boo: undefined,
});
