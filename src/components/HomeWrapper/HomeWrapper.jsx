import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import { BackgroundWrapper } from './HomeWrapper.styled';

const HomeWrapper = () => {
  return (
    <BackgroundWrapper>
      <Header />
      <Hero />
    </BackgroundWrapper>
  );
};

export default HomeWrapper;
