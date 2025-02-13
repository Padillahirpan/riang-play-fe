import { Input } from "../ui/input";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div>
        <Input id="search" placeholder="Search product" className="pl-8" />
      </div>
    </form>
  );
}
