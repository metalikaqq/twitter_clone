// AuthLayout.tsx
const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-sky-400 to-blue-800">
      {children}
    </div>
  );
}

export default AuthLayout;
