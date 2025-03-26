import { Donation } from "./components/Donation";

const Page = () => {
  const amounts = [1, 2, 5, 10];
  return (
    <div className="w-screen h-screen">
      <Donation amounts={amounts} />
    </div>
  );
};
export default Page;
