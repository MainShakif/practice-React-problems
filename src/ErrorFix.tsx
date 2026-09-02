export default function ErrorFix() {
  return (
    <div>
      <p>
        5. Identify and fix the JSX error in this snippet:
        <div>
          <h1>Hello</h1>
          <p>Welcome</p>
        </div>
        <p>Extra</p>
        *error::: JSX element has only one parent inside div or section or
        inside fragment. BUT There is more than one parent and this is the main
        error here. *Solution ::: Put the extra p element inside the div tag or
        use a fragment then put the jsx code inside the fragment
      </p>

      <h1>Hello</h1>
      <p>Welcome</p>
      <p>Extra</p>
    </div>
  );
}
