
export const FooterNewsLetter = () => {
  return (
    <div className="col-span-2 pt-8 md:pt-2">
      <p className="font-bold uppercase">Subscribe to our newsletter</p>
      <p>The latest updates, articles, and resources, sent to your inbox weekly.</p>

      <form className="flex flex-col mt-4 sm:flex-row">
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full p-2 mr-4 rounded-md mb-4"
        />
        <button className="p-2 mb-4">Subscribe</button>
      </form>
    </div>
  );
};
