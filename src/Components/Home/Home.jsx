import CategorySlider from "../CategorySlider/CategorySlider";
import HomeSlider from "../HomeSlider/HomeSlider";
import Products from "../Products/Products";

export default function Home() {
  return (
    <>
      <section className="home py-9 mt-8 container mx-auto w-full">
        <HomeSlider />
        <CategorySlider/>
        <Products />
      </section>
    </>
  );
}
