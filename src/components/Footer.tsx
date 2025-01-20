const FooterBase = () => {
  return (
    <div className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} RiangPlay. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterBase;
