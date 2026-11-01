import Demo, { PageHeader } from "@/components/Demo";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/mock-data";

// A component that takes typed props.
// Props work like function arguments: same component, different data.
type MenuItemProps = {
  name: string;
  price: number;
  vegetarian?: boolean; // the ? means this prop is optional
};

function MenuItem({ name, price, vegetarian = false }: MenuItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
      <span>
        {name} {vegetarian && "🌱"}
      </span>
      <span className="font-mono">${price.toFixed(2)}</span>
    </div>
  );
}

const menu: MenuItemProps[] = [
  { name: "Tomato soup", price: 3.5, vegetarian: true },
  { name: "Chicken wrap", price: 6 },
  { name: "Veggie burger", price: 5.25, vegetarian: true },
];

export default function PropsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="3. Components & props"
        description="A component is a function that returns JSX. Props are its arguments: they let you reuse one component with different data. TypeScript types describe which props are allowed."
      />

      <Demo
        title="Define a component with typed props"
        code={`
type MenuItemProps = {
  name: string;
  price: number;
  vegetarian?: boolean; // ? = optional
};

function MenuItem({ name, price, vegetarian = false }: MenuItemProps) {
  return (
    <div>
      {name} {vegetarian && "🌱"} \${price.toFixed(2)}
    </div>
  );
}

// Use it like an HTML tag, passing props like attributes:
<MenuItem name="Tomato soup" price={3.5} vegetarian />
<MenuItem name="Chicken wrap" price={6} />
`}
      >
        <div className="flex flex-col gap-2">
          <MenuItem name="Tomato soup" price={3.5} vegetarian />
          <MenuItem name="Chicken wrap" price={6} />
        </div>
      </Demo>

      <Demo
        title="Props + .map(): render a component per item"
        code={`
const menu: MenuItemProps[] = [
  { name: "Tomato soup", price: 3.5, vegetarian: true },
  { name: "Chicken wrap", price: 6 },
  { name: "Veggie burger", price: 5.25, vegetarian: true },
];

{menu.map((item) => (
  <MenuItem key={item.name} {...item} />  // {...item} passes every field as a prop
))}
`}
      >
        <div className="flex flex-col gap-2">
          {menu.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </Demo>

      <Demo
        title="TypeScript catches mistakes"
        code={`
<MenuItem name="Soup" />
// ❌ Property 'price' is missing

<MenuItem name="Soup" price="cheap" />
// ❌ Type 'string' is not assignable to type 'number'

<MenuItem name="Soup" price={3} spicy />
// ❌ Property 'spicy' does not exist
`}
      >
        <p className="text-slate-700">
          Try these in <code className="font-mono text-sm">app/props/page.tsx</code>. VS Code
          underlines each one in red before you even run the code.
        </p>
      </Demo>

      <Demo
        title="A bigger example: components/ProjectCard.tsx"
        code={`
type ProjectCardProps = {
  project: Project; // a whole object as one prop
};

<ProjectCard project={projects[0]} />
`}
      >
        <ProjectCard project={projects[0]} />
      </Demo>
    </div>
  );
}
