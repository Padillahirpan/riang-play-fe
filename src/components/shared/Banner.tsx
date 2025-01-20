import { useEffect } from "react";
import banner_1 from "../../assets/images/banner_1.jpg";
import banner_2 from "../../assets/images/banner_2.jpg";

export const HomeBanner = () => {
  useEffect(() => {
    const items = document.querySelectorAll("[data-carousel-item]");
    let currentIndex = 0;

    const showItem = (index: number) => {
      items.forEach((item, i) => {
        if (i === index) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    };

    const nextItem = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    };

    const prevItem = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    };

    const interval = setInterval(nextItem, 3000);

    document
      .querySelector("[data-carousel-next]")
      ?.addEventListener("click", nextItem);
    document
      .querySelector("[data-carousel-prev]")
      ?.addEventListener("click", prevItem);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-[45rem] overflow-hidden md:h-[45rem]">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={banner_1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Banner 1"
          />
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={banner_2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Banner 2"
          />
        </div>
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
