import { Wrapper } from './index.css';

function CenteredPage({ children }: { children: React.ReactNode }) {
  return (<Wrapper>{children}</Wrapper>)
}

export default CenteredPage;