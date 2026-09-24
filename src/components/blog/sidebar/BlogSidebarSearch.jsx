import { Search } from "lucide-react";
import SidebarCard from "./SidebarCard";

export default function BlogSidebarSearch() {
  return (
    <SidebarCard title="Search Hear">
      <div className="flex overflow-hidden rounded-lg border border-black/10 bg-white">
        <label htmlFor="blog-search" className="sr-only">
          Search blog posts
        </label>
        <input
          id="blog-search"
          name="search"
          className="w-full px-4 py-3 text-sm text-[#1F2A30] outline-none"
          placeholder="Enter Keyword"
        />
        <button
          type="button"
          className="nes-btn is-primary grid w-12 place-items-center bg-[#1F2A30] text-white"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </SidebarCard>
  );
}
