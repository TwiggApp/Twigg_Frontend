import { BeatLoader } from "react-spinners";

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center max-md:items-center max-md:absolute">
      <BeatLoader color="#2B6C57" loading={loading} />
    </div>
  );
}
