import {HeroBox, InfoBox, TextBox} from './Hero.styled';
import MainBtn from '../MainBtn/MainBtn';
const Hero = () => {
    return (
        <HeroBox>
            <InfoBox>
                <TextBox>Get closer to nature and make your vacation comfortable</TextBox>
                <MainBtn href='/camper_front/catalog' text='Our products'/>
            </InfoBox>
           
        </HeroBox>
    )
}

export default Hero;