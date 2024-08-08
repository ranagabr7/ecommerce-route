import notFound from "./../../assets/images/error.svg";
const NotFound = () => {
  return (
    <>
      <div className="p-8">
        <div className="mx-auto w-[60%]">
          <img src={notFound} alt="not found images" className="w-full"/>
        </div>
      </div>
    </>
  );
};

export default NotFound;
