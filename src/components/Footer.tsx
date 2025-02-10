const FooterBase = () => {
  return (
    <div className="bg-stone-100 text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} RiangPlay. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterBase;
