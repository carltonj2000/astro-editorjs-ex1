# Static Site Generator

This code work in dev by editing and saving `Editor.tsx`.
For some reason the default size of the editor is one
skinny line that you can't enter text in.
At some point need to solve this problem.

The goal of this repo it to test out `astor` as:

- a static site generator
- a packager for including editorjs - https://editorjs.io/
- compare the generated file size to Bun and Deno Lume

## Code History

The code in this repository is base on:

- https://astro.build/https://astro.build/

## Creation History

```bash
npm create astro@latest
cd astro-editorjs-ex1
npx astro add tailwind
npm i @editorjs/editorjs
npx astro add react
```

## Results

Astro generated the files size for the `tsx` noted below.

````bash
eza -l --tree dist
drwxrwxr-x    - carltonj2000 11 Mar 13:01 dist
drwxrwxr-x    - carltonj2000 11 Mar 13:01 ├── _astro
.rw-rw-r-- 7.7k carltonj2000 11 Mar 13:01 │  └── index.BEoYUa4a.css
.rw-rw-r--  875 carltonj2000 11 Mar 13:01 └── index.html
```

```tsx
export function App() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8"></div>

      <h1 className="text-5xl font-bold my-4 leading-tight">Something</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        voluptatem eaque eius quisquam maiores dolorem fuga quam architecto
        ratione perspiciatis nulla iusto ducimus cumque consectetur omnis, quis
        neque odit doloribus reprehenderit, praesentium inventore incidunt
        voluptatum ab illum. Soluta sapiente reprehenderit repellat quas ex
        magnam? Laudantium sequi molestiae impedit odio cumque!
      </p>
    </div>
  );
}
````
