import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <div class="bg-gray-100">Hello, {name}!</div>
    </main>
  );
}
