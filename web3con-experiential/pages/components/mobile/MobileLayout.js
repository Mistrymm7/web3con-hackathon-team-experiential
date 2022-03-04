import MobileNav from "./MobileNav";

const MobileLayout = ({ children }) => {
    return (
        <div>
            {children}
            <MobileNav currentPage={children.type.name} />
        </div>
    );
}

export default MobileLayout;