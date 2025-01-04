const Fact = async () => {
  const data = await fetch("https://catfact.ninja/fact");
  const res = await data.json();
  return <h1 className="text-3xl  text-center">{res.fact}</h1>;
};
export default Fact;
