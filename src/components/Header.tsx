type HeaderProps = {
  headerNumber: string;
  headerName: string;
};

export default function Header({ headerNumber, headerName }: HeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 text-sm md:text-xl border-2 border-accent text-accent rounded-md">
          {headerNumber}
        </span>
        <h2 className="text-lg md:text-2xl text-accent">{headerName}</h2>
      </div>
      <div className="flex-grow h-[0.5px] opacity-55 bg-secondary"></div>
    </div>
  );
}
