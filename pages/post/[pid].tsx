import { useRouter } from "next/router";

type Props = {};

export default function Post() {
  const router = useRouter();

  const { pid } = router.query;
  return (
    <div>
      <p>pid : {pid}</p>
    </div>
  );
}
