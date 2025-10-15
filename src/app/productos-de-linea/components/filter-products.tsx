import { getCategories } from "@/actions";

export const FilterProducts = async () => {
  const { categories } = await getCategories();

  if (!categories) return null;

  return (
    <div className="flex items-center justify-center gap-10 w-4/12 bg-white px-6 py-4 rounded-xl shadow-sm  border border-rosegold/20">
      {/* Category Filter */}
      <label className=" font-fredoka font-semibold text-navy ">
        Categoría:
      </label>
      <select className="w-full px-3 py-2 border border-rosegold/30 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent">
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
