import { Spinner, LoadingWrapper } from "./index.css";

export default function Loading({ children, visible = false }: { children?: React.ReactNode, visible: boolean }) {
  return (
    <LoadingWrapper $visible={visible}>
      {children}
      <Spinner />
    </LoadingWrapper>
  );
}