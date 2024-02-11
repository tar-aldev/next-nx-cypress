export const someFunction = () => {
  return 'Original impl';
};
// React server components are async so you make database or API calls.
export function HelloServer() {
  return <h1>{someFunction()}</h1>;
}
