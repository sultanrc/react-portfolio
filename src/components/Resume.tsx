type ResumeProps = {
  onClickResume?: () => void;
};
export default function Resume({ onClickResume = () => {} }: ResumeProps) {
  return (
    <li>
      <a
        href="#contact"
        className="hover:text-gray-300 text-sm transition border text-textPrimary border-accent py-2 px-4 rounded-lg"
        onClick={onClickResume}
      >
        Resume
      </a>
    </li>
  );
}
