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
        <span className="inline-flex items-center justify-center w-8 h-8 text-xl border border-white rounded-md">
          {headerNumber}
        </span>
        <h2 className="text-2xl font-semibold">{headerName}</h2>
      </div>
      <div className="flex-grow h-px bg-white"></div>
    </div>
  );
}
