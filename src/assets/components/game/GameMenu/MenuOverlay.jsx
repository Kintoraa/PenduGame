export const MenuOverlay = (props) => {
  const { isOpen } = props;
  return (
    <>
      {isOpen && (
        <div
          className={"h-screen w-screen absolute bg-gray-800 bg-opacity-60"}
        ></div>
      )}
    </>
  );
};
