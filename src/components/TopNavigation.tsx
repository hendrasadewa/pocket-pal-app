interface Props {
  title?: string;
}

export default function TopNavigation({ title }: Props) {
  return (
    <header className="mb-8 h-10 flex items-center justify-center">
      <h1 className="text-center font-bold col-start-2 col-end-3 capitalize">
        {title}
      </h1>
    </header>
  );
}
