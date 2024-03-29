export const Background = ({ children, classname }) => {
  return (
    <div
      className={
        "h-screen bg-gradient-to-t from-teal-400 to-purple-900 -z-50 " +
        classname
      }
    >
      {children}
    </div>
  );
};
