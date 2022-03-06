import MobileNav from './MobileNav';

const MobileLayout = ({ children }) => {
  return (
    <div>
      {children}
      <MobileNav />
    </div>
  );
};

export default MobileLayout;
