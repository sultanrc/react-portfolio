type MainHeaderProps = {
  headerNumber: string;
  headerName: string;
};

export default function MainHeader({
  headerNumber,
  headerName,
}: MainHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 text-sm md:text-xl border border-accent text-accent rounded-md">
          {headerNumber}
        </span>
        <h2 className="text-lg md:text-2xl font-semibold text-textPrimary">
          {headerName}
        </h2>
      </div>
      <div className="flex-grow h-[0.5px] bg-secondary"></div>
    </div>
  );
}
